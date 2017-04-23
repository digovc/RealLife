namespace RealLife.DataBase.Tabela
{
    internal class TblJogador : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblJogador _i;

        public static TblJogador i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblJogador();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblJogador() : base("tbl_jogador")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}