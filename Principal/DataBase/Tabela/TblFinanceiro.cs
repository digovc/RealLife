namespace RealLife.DataBase.Tabela
{
    internal class TblFinanceiro : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblFinanceiro _i;
        public static TblFinanceiro i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblFinanceiro();

                return _i;
            }
        }

        
        #endregion Atributos

        #region Construtores

        private TblFinanceiro() : base("tbl_financeiro")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}