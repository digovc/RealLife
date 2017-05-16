using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblDocumento : TblRealLifeBase
    {
        #region Constantes

        public enum EnmTipo
        {
            BREVE_COMERCIAL = 0,
            BREVE_PRIVADO = 1,
            CARTEIRA_MOTOCICLETA = 2,
            CARTEIRA_MOTORISTA = 3,
            IDENTIDADE = 4,
            PERMISSAO_DE_CACA = 5,
            PERMISSAO_DE_PESCA = 6,
        }

        #endregion Constantes

        #region Atributos

        private Coluna _clnBooAtiva;
        private Coluna _clnDttValidade;
        private Coluna _clnIntPersonagemId;
        private Coluna _clnIntSessaoId;
        private Coluna _clnIntTipo;

        public Coluna clnBooAtiva
        {
            get
            {
                if (_clnBooAtiva != null)
                {
                    return _clnBooAtiva;
                }

                _clnBooAtiva = new Coluna("boo_ativa", this, Coluna.EnmTipo.BOOLEAN);

                return _clnBooAtiva;
            }
        }

        public Coluna clnDttValidade
        {
            get
            {
                if (_clnDttValidade != null)
                {
                    return _clnDttValidade;
                }

                _clnDttValidade = new Coluna("dtt_validade", this, Coluna.EnmTipo.TIMESTAMP_WITHOUT_TIME_ZONE);

                return _clnDttValidade;
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

        public Coluna clnIntTipo
        {
            get
            {
                if (_clnIntTipo != null)
                {
                    return _clnIntTipo;
                }

                _clnIntTipo = new Coluna("int_tipo", this, Coluna.EnmTipo.INTEGER);

                return _clnIntTipo;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblDocumento() : base("tbl_documento")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnBooAtiva.intOrdem += intOrdem;
            this.clnDttValidade.intOrdem += intOrdem;
            this.clnIntPersonagemId.intOrdem += intOrdem;
            this.clnIntSessaoId.intOrdem += intOrdem;
            this.clnIntTipo.intOrdem += intOrdem;

            return intOrdem;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}