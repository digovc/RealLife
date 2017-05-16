namespace RealLife.DataBase.Tabela
{
    internal class TblVeiculo : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblVeiculo _i;

        public static TblVeiculo i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblVeiculo();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblVeiculo() : base("tbl_veiculo")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}