using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Pagina
{
    internal class PagMissaoAbertura : PagRealLifeUiBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;
        private Div _divNome;
        private Div _divTextoMissao;

        private Div divConteudo
        {
            get
            {
                if (_divConteudo != null)
                {
                    return _divConteudo;
                }

                _divConteudo = new Div();

                return _divConteudo;
            }
        }

        private Div divNome
        {
            get
            {
                if (_divNome != null)
                {
                    return _divNome;
                }

                _divNome = new Div();

                return _divNome;
            }
        }

        private Div divTextoMissao
        {
            get
            {
                if (_divTextoMissao != null)
                {
                    return _divTextoMissao;
                }

                _divTextoMissao = new Div();

                return _divTextoMissao;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagMissaoAbertura() : base("Missão (abertura)")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.divConteudo.strId = "divConteudo";

            this.divNome.strConteudo = "Entregar a carga";
            this.divNome.strId = "divNome";

            this.divTextoMissao.strConteudo = "Missão";
            this.divTextoMissao.strId = "divTextoMissao";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divConteudo.setPai(this);
            this.divTextoMissao.setPai(this.divConteudo);
            this.divNome.setPai(this.divConteudo);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBottom(0));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setWidth(100, "%"));

            this.divConteudo.addCss(css.setBackgroundColor("rgba(0,0,0,0.75)"));
            this.divConteudo.addCss(css.setHeight(12, "vw"));
            this.divConteudo.addCss(css.setMarginBottom(-12, "vw"));

            this.divNome.addCss(css.setColor("white"));
            this.divNome.addCss(css.setFontSize(5, "vw"));
            this.divNome.addCss(css.setMarginLeft(7, "vw"));
            this.divNome.addCss(css.setMarginTop(-4, "vw"));

            this.divTextoMissao.addCss(css.setColor("grey"));
            this.divTextoMissao.addCss(css.setFontSize(7, "vw"));
            this.divTextoMissao.addCss(css.setMarginLeft(5, "vw"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}