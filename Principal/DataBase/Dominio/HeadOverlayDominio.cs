namespace RealLife.DataBase.Dominio
{
    internal class HeadOverlayDominio : DominioRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private int _enmTipo;
        private int _intAlpha;
        private int _intIndex;
        private int _intPersonagemId;
        private int _intSessaoId;

        public int enmTipo
        {
            get
            {
                return _enmTipo;
            }

            set
            {
                _enmTipo = value;
            }
        }

        public int intAlpha
        {
            get
            {
                return _intAlpha;
            }

            set
            {
                _intAlpha = value;
            }
        }

        public int intIndex
        {
            get
            {
                return _intIndex;
            }

            set
            {
                _intIndex = value;
            }
        }

        public int intPersonagemId
        {
            get
            {
                return _intPersonagemId;
            }

            set
            {
                _intPersonagemId = value;
            }
        }

        public int intSessaoId
        {
            get
            {
                return _intSessaoId;
            }

            set
            {
                _intSessaoId = value;
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