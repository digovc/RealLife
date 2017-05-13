namespace RealLife.DataBase.Tabela
{
    internal class TblItem : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblItem _i;

        public static TblItem i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblItem();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblItem() : base("tbl_item")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}