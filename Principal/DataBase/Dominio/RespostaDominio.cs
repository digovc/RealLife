namespace RealLife.DataBase.Dominio
{
    internal class RespostaDominio : DominioRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private int _intSolicitacaoId;
        private string _strErro;

        public int intSolicitacaoId
        {
            get
            {
                return _intSolicitacaoId;
            }

            set
            {
                _intSolicitacaoId = value;
            }
        }

        public string strErro
        {
            get
            {
                return _strErro;
            }

            set
            {
                _strErro = value;
            }
        }

        #endregion Atributos

        #region Construtores

        public RespostaDominio(SolicitacaoDominio objSolicitacao)
        {
            this.intSolicitacaoId = objSolicitacao.intId;
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}