using NetZ.Persistencia;
using RealLife.DataBase.Dominio;

namespace RealLife.DataBase.Tabela
{
    internal class TblPedComponente : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblPedComponente _i;
        private Coluna _clnIntModelo;
        private Coluna _clnIntPaleta;
        private Coluna _clnIntPersonagemId;
        private Coluna _clnIntSessaoId;
        private Coluna _clnIntTextura;
        private Coluna _clnIntTipo;

        public static TblPedComponente i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblPedComponente();

                return _i;
            }
        }

        public Coluna clnIntModelo
        {
            get
            {
                if (_clnIntModelo != null)
                {
                    return _clnIntModelo;
                }

                _clnIntModelo = new Coluna("int_modelo", this, Coluna.EnmTipo.INTEGER);

                return _clnIntModelo;
            }
        }

        public Coluna clnIntPaleta
        {
            get
            {
                if (_clnIntPaleta != null)
                {
                    return _clnIntPaleta;
                }

                _clnIntPaleta = new Coluna("int_paleta", this, Coluna.EnmTipo.INTEGER);

                return _clnIntPaleta;
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

        public Coluna clnIntTextura
        {
            get
            {
                if (_clnIntTextura != null)
                {
                    return _clnIntTextura;
                }

                _clnIntTextura = new Coluna("int_textura", this, Coluna.EnmTipo.INTEGER);

                return _clnIntTextura;
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

        private TblPedComponente() : base("tbl_ped_componente")
        {
        }

        #endregion Construtores

        #region Métodos

        internal void salvarAparencia(PersonagemDominio objPersonagem, SessaoDominio objSessao, PedComponenteDominio[] arrObjPedComponente)
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

            if (arrObjPedComponente == null)
            {
                return;
            }

            this.apagar(new Filtro(this.clnIntPersonagemId, objPersonagem.intId));

            foreach (var objPedComponente in arrObjPedComponente)
            {
                this.salvarAparencia(objPersonagem, objSessao, objPedComponente);
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

            this.clnIntModelo.intOrdem += intOrdem;
            this.clnIntPaleta.intOrdem += intOrdem;
            this.clnIntPersonagemId.intOrdem += intOrdem;
            this.clnIntSessaoId.intOrdem += intOrdem;
            this.clnIntTextura.intOrdem += intOrdem;
            this.clnIntTipo.intOrdem += intOrdem;

            return intOrdem;
        }

        private void salvarAparencia(PersonagemDominio objPersonagem, SessaoDominio objSessao, PedComponenteDominio objPedComponente)
        {
            if (objPedComponente == null)
            {
                return;
            }

            objPedComponente.intPersonagemId = objPersonagem.intId;
            objPedComponente.intSessaoId = objSessao.intId;

            this.salvar(objPedComponente);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}