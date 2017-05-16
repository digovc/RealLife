using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblSessao : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblSessao _i;

        private Coluna _clnDttSaida;
        private Coluna _clnIntJogadorId;
        private Coluna _clnStrChavePrivada;
        private Coluna _clnStrChavePublica;
        private Coluna _clnStrIp;
        private Coluna _clnStrSessaoId;

        public static TblSessao i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblSessao();

                return _i;
            }
        }

        public Coluna clnDttSaida
        {
            get
            {
                if (_clnDttSaida != null)
                {
                    return _clnDttSaida;
                }

                _clnDttSaida = new Coluna("dtt_saida", this, Coluna.EnmTipo.TIMESTAMP);

                return _clnDttSaida;
            }
        }

        public Coluna clnIntJogadorId
        {
            get
            {
                if (_clnIntJogadorId != null)
                {
                    return _clnIntJogadorId;
                }

                _clnIntJogadorId = new Coluna("int_jogador_id", this, Coluna.EnmTipo.BIGINT, TblJogador.i.clnIntId);

                return _clnIntJogadorId;
            }
        }

        public Coluna clnStrChavePrivada
        {
            get
            {
                if (_clnStrChavePrivada != null)
                {
                    return _clnStrChavePrivada;
                }

                _clnStrChavePrivada = new Coluna("str_chave_privada", this, Coluna.EnmTipo.TEXT);

                return _clnStrChavePrivada;
            }
        }

        public Coluna clnStrChavePublica
        {
            get
            {
                if (_clnStrChavePublica != null)
                {
                    return _clnStrChavePublica;
                }

                _clnStrChavePublica = new Coluna("str_chave_publica", this, Coluna.EnmTipo.TEXT);

                return _clnStrChavePublica;
            }
        }

        public Coluna clnStrIp
        {
            get
            {
                if (_clnStrIp != null)
                {
                    return _clnStrIp;
                }

                _clnStrIp = new Coluna("str_ip", this, Coluna.EnmTipo.TEXT);

                return _clnStrIp;
            }
        }

        public Coluna clnStrSessaoId
        {
            get
            {
                if (_clnStrSessaoId != null)
                {
                    return _clnStrSessaoId;
                }

                _clnStrSessaoId = new Coluna("str_sessao_id", this, Coluna.EnmTipo.TEXT);

                return _clnStrSessaoId;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblSessao() : base("tbl_sessao")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnDttSaida.intOrdem += intOrdem;
            this.clnIntJogadorId.intOrdem += intOrdem;
            this.clnStrChavePrivada.intOrdem += intOrdem;
            this.clnStrChavePublica.intOrdem += intOrdem;
            this.clnStrIp.intOrdem += intOrdem;
            this.clnStrSessaoId.intOrdem += intOrdem;

            return intOrdem;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}