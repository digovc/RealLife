using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblAmizade : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblAmizade _i;

        private Coluna _clnIntJogador1Id;
        private Coluna _clnIntJogador2Id;

        public static TblAmizade i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblAmizade();

                return _i;
            }
        }

        private Coluna clnIntJogador1Id
        {
            get
            {
                if (_clnIntJogador1Id != null)
                {
                    return _clnIntJogador1Id;
                }

                _clnIntJogador1Id = new Coluna("int_jogador_1_id", this, Coluna.EnmTipo.BIGINT, TblConta.i.clnIntId);

                return _clnIntJogador1Id;
            }
        }

        private Coluna clnIntJogador2Id
        {
            get
            {
                if (_clnIntJogador2Id != null)
                {
                    return _clnIntJogador2Id;
                }

                _clnIntJogador2Id = new Coluna("int_jogador_2_id", this, Coluna.EnmTipo.BIGINT, TblConta.i.clnIntId);

                return _clnIntJogador2Id;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblAmizade() : base("tbl_amizade")
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