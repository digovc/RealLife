namespace RealLife.DataBase.Tabela
{
    internal class TblEmpresa : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblEmpresa _i;

        public static TblEmpresa i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblEmpresa();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblEmpresa() : base("tbl_empresa")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}