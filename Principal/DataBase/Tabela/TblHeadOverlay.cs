using NetZ.Persistencia;
using RealLife.DataBase.Dominio;

namespace RealLife.DataBase.Tabela
{
    internal class TblHeadOverlay : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblHeadOverlay _i;

        private Coluna _clnIntAlpha;
        private Coluna _clnIntIndex;
        private Coluna _clnIntPersonagemId;
        private Coluna _clnIntSessaoId;
        private Coluna _clnIntTipo;

        public static TblHeadOverlay i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblHeadOverlay();

                return _i;
            }
        }

        public Coluna clnIntAlpha
        {
            get
            {
                if (_clnIntAlpha != null)
                {
                    return _clnIntAlpha;
                }

                _clnIntAlpha = new Coluna("int_alpha", this, Coluna.EnmTipo.INTEGER);

                return _clnIntAlpha;
            }
        }

        public Coluna clnIntIndex
        {
            get
            {
                if (_clnIntIndex != null)
                {
                    return _clnIntIndex;
                }

                _clnIntIndex = new Coluna("int_index", this, Coluna.EnmTipo.INTEGER);

                return _clnIntIndex;
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

        private TblHeadOverlay() : base("tbl_head_overlay")
        {
        }

        #endregion Construtores

        #region Métodos

        internal void salvarAparencia(PersonagemDominio objPersonagem, SessaoDominio objSessao, HeadOverlayDominio[] arrObjHeadOverlay)
        {
            if (objPersonagem == null)
            {
                return;
            }

            if (objPersonagem.intId < 1)
            {
                return;
            }

            if (objSessao == null)
            {
                return;
            }

            if (objSessao.intId < 1)
            {
                return;
            }

            if (arrObjHeadOverlay == null)
            {
                return;
            }

            this.apagar(new Filtro(this.clnIntPersonagemId, objPersonagem.intId));

            foreach (var objHeadOverlay in arrObjHeadOverlay)
            {
                this.salvarAparencia(objPersonagem, objSessao, objHeadOverlay);
            }
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.clnIntTipo.strDominioNome = "enm_tipo";
        }

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnIntAlpha.intOrdem += intOrdem;
            this.clnIntIndex.intOrdem += intOrdem;
            this.clnIntPersonagemId.intOrdem += intOrdem;
            this.clnIntSessaoId.intOrdem += intOrdem;
            this.clnIntTipo.intOrdem += intOrdem;

            return intOrdem;
        }

        private void salvarAparencia(PersonagemDominio objPersonagem, SessaoDominio objSessao, HeadOverlayDominio objHeadOverlay)
        {
            if (objHeadOverlay == null)
            {
                return;
            }

            objHeadOverlay.intPersonagemId = objPersonagem.intId;
            objHeadOverlay.intSessaoId = objSessao.intId;

            this.salvar(objHeadOverlay);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}