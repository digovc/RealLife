using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblAmigo : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblAmigo _i;
        private Coluna _clnIntJogador1Id;

        private Coluna _clnIntJogador2Id;

        public static TblAmigo i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblAmigo();

                return _i;
            }
        }

        public Coluna clnIntJogador1Id
        {
            get
            {
                if (_clnIntJogador1Id != null)
                {
                    return _clnIntJogador1Id;
                }

                _clnIntJogador1Id = new Coluna("int_jogador_1_id", this, Coluna.EnmTipo.BIGINT, TblJogador.i.clnIntId);

                return _clnIntJogador1Id;
            }
        }

        public Coluna clnIntJogador2Id
        {
            get
            {
                if (_clnIntJogador2Id != null)
                {
                    return _clnIntJogador2Id;
                }

                _clnIntJogador2Id = new Coluna("int_jogador_2_id", this, Coluna.EnmTipo.BIGINT, TblJogador.i.clnIntId);

                return _clnIntJogador2Id;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblAmigo() : base("tbl_amigo")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnIntJogador1Id.intOrdem += intOrdem;
            this.clnIntJogador2Id.intOrdem += intOrdem;

            return intOrdem;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}