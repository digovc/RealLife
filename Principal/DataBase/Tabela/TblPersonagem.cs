namespace RealLife.DataBase.Tabela
{
    internal class TblPersonagem : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblPersonagem _i;

        public static TblPersonagem i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblPersonagem();

                return _i;
            }
        }

        int_jogador_id
        int_skin
        

        #endregion Atributos

        #region Construtores

        private TblPersonagem() : base("tbl_personagem")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}