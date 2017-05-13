namespace RealLife.DataBase.Tabela
{
    internal class TblImovel : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblImovel _i;

        public static TblImovel i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblImovel();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblImovel() : base("tbl_imovel")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}