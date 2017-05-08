using GTA;
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

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void setEventos()
        {
            base.setEventos();

            this.KeyUp += this.onKeyUp;
        }

        private void copiarInfo(KeyEventArgs arg)
        {
            var stbInfo = new StringBuilder();

            if (File.Exists(DIR_CAMERA_INFO))
            {
                stbInfo.AppendLine(File.ReadAllText(DIR_CAMERA_INFO));
            }

            stbInfo.AppendLine("Câmera info:");
            stbInfo.AppendLine(string.Format("Posição: x: {0}, y: {1}, z: {2}", GameplayCamera.Position.X, GameplayCamera.Position.Y, GameplayCamera.Position.Z));
            stbInfo.AppendLine(string.Format("Rotação: x: {0}, y: {1}, z: {2}", GameplayCamera.Rotation.X, GameplayCamera.Rotation.Y, GameplayCamera.Rotation.Z));

            File.WriteAllText(DIR_CAMERA_INFO, stbInfo.ToString());
        }

        private void processarOnKeyUp(KeyEventArgs arg)
        {
            switch (arg.KeyCode)
            {
                case Keys.C:
                    this.copiarInfo(arg);
                    return;
            }
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