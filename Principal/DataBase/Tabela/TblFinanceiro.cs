using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblFinanceiro : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblFinanceiro _i;

        private Coluna _clnDblValor;
        private Coluna _clnIntPersonagemId;
        private Coluna _clnIntSessaoId;
        private Coluna _clnStrDescricao;

        public static TblFinanceiro i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblFinanceiro();

                return _i;
            }
        }

        public Coluna clnDblValor
        {
            get
            {
                if (_clnDblValor != null)
                {
                    return _clnDblValor;
                }

                _clnDblValor = new Coluna("dbl_valor", this, Coluna.EnmTipo.DOUBLE);

                return _clnDblValor;
            }
        }

        public Coluna clnIntPersonagemId
        {
            get
            {
                if (_clnIntPersonagemId != null)
                {
                    return _clnIntPersonagemId;
                }

                _clnIntPersonagemId = new Coluna("int_personagem_id", this, Coluna.EnmTipo.BIGINT, TblPersonagem.i.clnIntId);

                return _clnIntPersonagemId;
            }
        }

        public Coluna clnIntSessaoId
        {
            get
            {
                if (_clnIntSessaoId != null)
                {
                    return _clnIntSessaoId;
                }

                _clnIntSessaoId = new Coluna("int_sessao_id", this, Coluna.EnmTipo.BIGINT, TblSessao.i.clnIntId);

                return _clnIntSessaoId;
            }
        }

        public Coluna clnStrDescricao
        {
            get
            {
                if (_clnStrDescricao != null)
                {
                    return _clnStrDescricao;
                }

                _clnStrDescricao = new Coluna("str_descricao", this, Coluna.EnmTipo.TEXT);

                return _clnStrDescricao;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblFinanceiro() : base("tbl_financeiro")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}