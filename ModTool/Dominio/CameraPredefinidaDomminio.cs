using GTA.Math;
using System.Windows.Forms;

namespace ModTool.Dominio
{
    internal class CameraPredefinidaDomminio : DominioBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Keys _enmKey;
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

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}