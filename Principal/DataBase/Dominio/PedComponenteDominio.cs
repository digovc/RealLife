namespace RealLife.DataBase.Dominio
{
    internal class PedComponenteDominio : DominioRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private int _enmTipo;
        private int _intModelo;
        private int _intPaleta;
        private int _intPersonagemId;
        private int _intSessaoId;
        private int _intTextura;

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

        public int intModelo
        {
            get
            {
                return _intModelo;
            }

            set
            {
                _intModelo = value;
            }
        }

        public int intPaleta
        {
            get
            {
                return _intPaleta;
            }

            set
            {
                _intPaleta = value;
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

        public int intTextura
        {
            get
            {
                return _intTextura;
            }

            set
            {
                _intTextura = value;
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