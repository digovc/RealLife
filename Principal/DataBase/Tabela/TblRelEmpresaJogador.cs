using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblRelEmpresaJogador : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Coluna _clnIntEmpresaId;
        private Coluna _clnIntJogadorId;

        public Coluna clnIntEmpresaId
        {
            get
            {
                if (_clnIntEmpresaId != null)
                {
                    return _clnIntEmpresaId;
                }

                _clnIntEmpresaId = new Coluna("int_empresa_id", this, Coluna.EnmTipo.BIGINT);

                return _clnIntEmpresaId;
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

                _clnIntJogadorId = new Coluna("int_jogador_id", this, Coluna.EnmTipo.BIGINT);

                return _clnIntJogadorId;
            }
        }

        #endregion Atributos

        #region Construtores

        public TblRelEmpresaJogador() : base("tbl_rel_empresa_jogador")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}