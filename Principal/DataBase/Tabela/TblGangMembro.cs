namespace RealLife.DataBase.Tabela
{
    internal class TblGangMembro : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblGangMembro _i;

        public static TblGangMembro i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblGangMembro();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblGangMembro() : base("tbl_gang_membro")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}