namespace RealLife.DataBase.Tabela
{
    internal class TblSessao : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblSessao _i;

        public static TblSessao i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblSessao();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblSessao() : base("tbl_sessao")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}