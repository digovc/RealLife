namespace RealLife.DataBase.Tabela
{
    internal class TblGang : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblGang _i;

        public static TblGang i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblGang();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblGang() : base("tbl_gang")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}