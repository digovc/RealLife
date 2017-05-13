namespace RealLife.DataBase.Tabela
{
    internal class TblPersonagemSkin : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblPersonagemSkin _i;

        public static TblPersonagemSkin i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblPersonagemSkin();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblPersonagemSkin() : base("tbl_ped_skin")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}