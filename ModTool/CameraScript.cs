using GTA;
using ModTool.Dominio;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;
using System.Windows.Forms;

namespace ModTool
{
    public class CameraScript : ScriptBase
    {
        #region Constantes

        private const string DIR_CAMERA_INFO = "camera_info.txt";

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

                _lstObjCameraPredefinida = new List<CameraPredefinidaDomminio>();

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

            objCamera.Position = objCameraPredefinida.vctPosicao;
            objCamera.Rotation = objCameraPredefinida.vctRotacao;
        }

        private void copiarInfo()
        {
            var stbInfo = new StringBuilder();

            if (File.Exists(DIR_CAMERA_INFO))
            {
                stbInfo.AppendLine(File.ReadAllText(DIR_CAMERA_INFO));
            }

            var ctr = CultureInfo.GetCultureInfo("en-US");

            var objCamera = GTA.Native.Function.Call<Camera>(GTA.Native.Hash.GET_RENDERING_CAM);

            stbInfo.AppendLine("Câmera info:");
            stbInfo.AppendLine(string.Format(" pos: {0}, {1}, {2}", objCamera.Position.X.ToString(ctr), objCamera.Position.Y.ToString(ctr), objCamera.Position.Z.ToString(ctr)));
            stbInfo.AppendLine(string.Format(" rot: {0}, {1}, {2}", objCamera.Rotation.X.ToString(ctr), objCamera.Rotation.Y.ToString(ctr), objCamera.Rotation.Z.ToString(ctr)));

            File.WriteAllText(DIR_CAMERA_INFO, stbInfo.ToString());
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
            switch (arg.KeyCode)
            {
                case Keys.NumPad0:
                case Keys.NumPad1:
                case Keys.NumPad2:
                case Keys.NumPad3:
                case Keys.NumPad4:
                case Keys.NumPad5:
                case Keys.NumPad6:
                case Keys.NumPad7:
                case Keys.NumPad8:
                case Keys.NumPad9:
                    this.salvarCarregarPredefinida(arg);
                    return;
            }
        }

        private void salvarCarregarPredefinida(KeyEventArgs arg)
        {
            if (arg.Control)
            {
                this.salvarPredefinida(arg.KeyCode);
                return;
            }

            this.carregarPredefinida(arg.KeyCode);
        }

        private void salvarPredefinida(Keys enmKey)
        {
            var objCamera = GTA.Native.Function.Call<Camera>(GTA.Native.Hash.GET_RENDERING_CAM);

            var objCameraPredefinida = this.getObjCameraPredefinida(enmKey);

            objCameraPredefinida.enmKey = enmKey;
            objCameraPredefinida.vctPosicao = objCamera.Position;
            objCameraPredefinida.vctRotacao = objCamera.Rotation;

            this.copiarInfo();
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