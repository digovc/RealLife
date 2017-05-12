using DigoFramework.Json;
using GTA;
using ModTool.Dominio;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;

namespace ModTool
{
    public class CameraScript : ScriptBase
    {
        #region Constantes

        private const string DIR_CAMERA_INFO = "temp/camera.json";

        #endregion Constantes

        #region Atributos

        private List<CameraPredefinidaDomminio> _lstObjCameraPredefinida;

        private List<CameraPredefinidaDomminio> lstObjCameraPredefinida
        {
            get
            {
                if (_lstObjCameraPredefinida != null)
                {
                    return _lstObjCameraPredefinida;
                }

                _lstObjCameraPredefinida = this.getLstObjCameraPredefinida();

                return _lstObjCameraPredefinida;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void setEventos()
        {
            base.setEventos();

            this.KeyUp += this.onKeyUp;
        }

        private void carregarPredefinida(Keys enmKey)
        {
            foreach (var objCameraPredefinida in this.lstObjCameraPredefinida)
            {
                if (enmKey.Equals(objCameraPredefinida.enmKey))
                {
                    this.carregarPredefinida(objCameraPredefinida);
                    return;
                }
            }
        }

        private void carregarPredefinida(CameraPredefinidaDomminio objCameraPredefinida)
        {
            var objCamera = GTA.Native.Function.Call<Camera>(GTA.Native.Hash.GET_RENDERING_CAM);

            objCamera.Position = objCameraPredefinida.vctPosicao.getVct();
            objCamera.Rotation = objCameraPredefinida.vctRotacao.getVct();

            this.notificar("Carregando câmera.");
        }

        private List<CameraPredefinidaDomminio> getLstObjCameraPredefinida()
        {
            if (!File.Exists(DIR_CAMERA_INFO))
            {
                return new List<CameraPredefinidaDomminio>();
            }

            var strJson = File.ReadAllText(DIR_CAMERA_INFO);

            if (string.IsNullOrEmpty(strJson))
            {
                return new List<CameraPredefinidaDomminio>();
            }

            this.notificar("Carregando arquivo de câmeras ({0}).", DIR_CAMERA_INFO);

            return Json.i.fromJson<List<CameraPredefinidaDomminio>>(strJson);
        }

        private CameraPredefinidaDomminio getObjCameraPredefinida(Keys enmKey)
        {
            foreach (var objCameraPredefinida in this.lstObjCameraPredefinida)
            {
                if (enmKey.Equals(objCameraPredefinida.enmKey))
                {
                    return objCameraPredefinida;
                }
            }

            var objCameraPredefinidaResultado = new CameraPredefinidaDomminio();

            this.lstObjCameraPredefinida.Add(objCameraPredefinidaResultado);

            return objCameraPredefinidaResultado;
        }

        private void processarOnKeyUp(KeyEventArgs arg)
        {
            if (Keys.NumPad0.Equals(arg.KeyCode) && arg.Control)
            {
                this.salvarFile();
                return;
            }

            switch (arg.KeyCode)
            {
                case Keys.NumPad1:
                case Keys.NumPad2:
                case Keys.NumPad3:
                case Keys.NumPad4:
                case Keys.NumPad5:
                case Keys.NumPad6:
                case Keys.NumPad7:
                case Keys.NumPad8:
                case Keys.NumPad9:

                    if (arg.Control)
                    {
                        this.salvarPredefinida(arg.KeyCode);
                    }
                    else
                    {
                        this.carregarPredefinida(arg.KeyCode);
                    }

                    return;
            }
        }

        private void salvarFile()
        {
            var strConteudo = Json.i.toJson(this.lstObjCameraPredefinida);

            Directory.CreateDirectory(Path.GetDirectoryName(DIR_CAMERA_INFO));

            File.WriteAllText(DIR_CAMERA_INFO, strConteudo);

            this.notificar("Arquivo de câmeras salvo ({0}).", DIR_CAMERA_INFO);
        }

        private void salvarPredefinida(Keys enmKey)
        {
            var objCamera = GTA.Native.Function.Call<Camera>(GTA.Native.Hash.GET_RENDERING_CAM);

            var objCameraPredefinida = this.getObjCameraPredefinida(enmKey);

            objCameraPredefinida.enmKey = enmKey;
            objCameraPredefinida.vctPosicao.setVct(objCamera.Position);
            objCameraPredefinida.vctRotacao.setVct(objCamera.Rotation);

            this.notificar("Câmera salva.");
        }

        #endregion Métodos

        #region Eventos

        private void onKeyUp(object sender, KeyEventArgs arg)
        {
            this.processarOnKeyUp(arg);
        }

        #endregion Eventos
    }
}