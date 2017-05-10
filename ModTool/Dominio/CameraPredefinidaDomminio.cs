using GTA.Math;
using System.Globalization;
using System.Text;
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
        private string _strCode;
        private Vector3 _vctPosicao;
        private Vector3 _vctRotacao;

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

        public Vector3 vctPosicao
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

        public Vector3 vctRotacao
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

        private string strCode
        {
            get
            {
                _strCode = this.getStrCode();

                return _strCode;
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

        private string getStrCode()
        {
            if (this.vctPosicao == null)
            {
                return null;
            }

            if (this.vctRotacao == null)
            {
                return null;
            }

            var cti = CultureInfo.GetCultureInfo("en-US");

            var stbResultado = new StringBuilder();

            stbResultado.Append(string.Format("pos: {0}, {1}, {2}; rot: {3}, {4}, {5}", this.vctPosicao.X.ToString(cti), this.vctPosicao.Y.ToString(cti), this.vctPosicao.Z.ToString(cti), this.vctRotacao.X.ToString(cti), this.vctRotacao.Y.ToString(cti), this.vctRotacao.Z.ToString(cti)));

            return stbResultado.ToString();
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}