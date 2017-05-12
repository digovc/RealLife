using System.Windows.Forms;

namespace ModTool.Dominio
{
    internal class CameraPredefinidaDomminio : DominioBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Keys _enmKey;
        private int _intCamNumero;
        private Vector3Dominio _vctPosicao = new Vector3Dominio();
        private Vector3Dominio _vctRotacao = new Vector3Dominio();

        public Keys enmKey
        {
            get
            {
                return _enmKey;
            }

            set
            {
                _enmKey = value;
            }
        }

        public Vector3Dominio vctPosicao
        {
            get
            {
                return _vctPosicao;
            }

            set
            {
                _vctPosicao = value;
            }
        }

        public Vector3Dominio vctRotacao
        {
            get
            {
                return _vctRotacao;
            }

            set
            {
                _vctRotacao = value;
            }
        }

        private int intCamNumero
        {
            get
            {
                if (_intCamNumero > 0)
                {
                    return _intCamNumero;
                }

                _intCamNumero = this.getIntCamNumero();

                return _intCamNumero;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        private int getIntCamNumero()
        {
            switch (this.enmKey)
            {
                case Keys.NumPad2:
                    return 2;

                case Keys.NumPad3:
                    return 3;

                case Keys.NumPad4:
                    return 4;

                case Keys.NumPad5:
                    return 5;

                case Keys.NumPad6:
                    return 6;

                case Keys.NumPad7:
                    return 7;

                case Keys.NumPad8:
                    return 8;

                case Keys.NumPad9:
                    return 9;

                default:
                    return 1;
            }
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}