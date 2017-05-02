using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Menu
{
    internal abstract class DivMenuBase : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divCabecalho;
        private Div _divContagem;
        private Div _divConteudo;
        private Div _divMostradorAbaixo;
        private Div _divMostradorAcima;
        private Div _divNome;

        protected Div divCabecalho
        {
            get
            {
                if (_divCabecalho != null)
                {
                    return _divCabecalho;
                }

                _divCabecalho = new Div();

                return _divCabecalho;
            }
        }

        protected Div divNome
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

        private Div divContagem
        {
            get
            {
                if (_divContagem != null)
                {
                    return _divContagem;
                }

                _divContagem = new Div();

                return _divContagem;
            }
        }

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

        private Div divMostradorAbaixo
        {
            get
            {
                if (_divMostradorAbaixo != null)
                {
                    return _divMostradorAbaixo;
                }

                _divMostradorAbaixo = new Div();

                return _divMostradorAbaixo;
            }
        }

        private Div divMostradorAcima
        {
            get
            {
                if (_divMostradorAcima != null)
                {
                    return _divMostradorAcima;
                }

                _divMostradorAcima = new Div();

                return _divMostradorAcima;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addLayoutFixo(JavaScriptTag tagJs)
        {
            base.addLayoutFixo(tagJs);

            tagJs.addLayoutFixo(typeof(DivMenuItem));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "DivMenuInterativo";

            this.divContagem.strConteudo = "0/0";
            this.divNome.strConteudo = "Menu de interação";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divCabecalho.setPai(this);
            this.divNome.setPai(this);
            this.divContagem.setPai(this.divNome);
            this.divMostradorAcima.setPai(this);
            this.divConteudo.setPai(this);
            this.divMostradorAbaixo.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            var strBackgroundColor = css.setBackgroundColor("rgba(0,0,0,.9)");

            this.addCss(css.setColor("white"));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setLeft(1, "vw"));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setTop(8, "vh"));
            this.addCss(css.setWidth(20, "vw"));

            this.divCabecalho.addCss(css.setBackgroundColor("rgba(3,169,244,.9)"));
            this.divCabecalho.addCss(css.setOverflow("hidden"));
            this.divCabecalho.addCss(css.setPadding(1, "vw"));
            this.divCabecalho.addCss(css.setPaddingBottom(2, "vh"));
            this.divCabecalho.addCss(css.setPaddingTop(2, "vh"));

            this.divContagem.addCss(css.setFloat("right"));

            this.divConteudo.addCss(css.setHeight(40, "vh"));
            this.divConteudo.addCss(css.setOverflow("hidden"));
            this.divConteudo.addCss(strBackgroundColor);

            this.divMostradorAbaixo.addCss(css.setHeight(1, "vh"));
            this.divMostradorAbaixo.addCss(strBackgroundColor);

            this.divMostradorAcima.addCss(this.divMostradorAcima);

            this.divNome.addCss(css.setMarginTop(1, "vh"));
            this.divNome.addCss(css.setOverflow("hidden"));
            this.divNome.addCss(css.setPaddingBottom(1, "vh"));
            this.divNome.addCss(css.setPaddingLeft(1, "vw"));
            this.divNome.addCss(css.setPaddingRight(1, "vw"));
            this.divNome.addCss(css.setPaddingTop(1, "vh"));
            this.divNome.addCss(strBackgroundColor);
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divContagem.strId = (strId + "_divContagem");
            this.divConteudo.strId = (strId + "_divConteudo");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}