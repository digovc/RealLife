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
        private Coluna _clnIntContaId;
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

        private Coluna clnDttSaida
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

        private Coluna clnIntContaId
        {
            get
            {
                if (_clnIntContaId != null)
                {
                    return _clnIntContaId;
                }

                _clnIntContaId = new Coluna("int_conta_id", this, Coluna.EnmTipo.BIGINT, TblConta.i.clnIntId);

                return _clnIntContaId;
            }
        }

        private Coluna clnStrIp
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

        private Coluna clnStrSessaoId
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
            this.clnIntContaId.intOrdem += intOrdem;
            this.clnStrIp.intOrdem += intOrdem;
            this.clnStrSessaoId.intOrdem += intOrdem;

            return intOrdem;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}