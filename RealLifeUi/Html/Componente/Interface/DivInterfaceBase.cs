using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Interface
{
    internal abstract class DivInterfaceBase : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;
        private Div _divIcone;

        protected Div divConteudo
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

        private Div divIcone
        {
            get
            {
                if (_divIcone != null)
                {
                    return _divIcone;
                }

                _divIcone = new Div();

                return _divIcone;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divConteudo.setPai(this);

            new LimiteFloat().setPai(this);

            this.divIcone.setPai(this.divConteudo);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setMarginTop(5));
            this.addCss(css.setPosition("relative"));
            this.addCss(css.setTextAlign("right"));

            this.divConteudo.addCss(css.setBackgroundColor("rgba(0,0,0,0.5)"));
            this.divConteudo.addCss(css.setBorderRadius(50));
            this.divConteudo.addCss(css.setFloat("right"));
            this.divConteudo.addCss(css.setHeight(25));
            this.divConteudo.addCss(css.setLineHeight(25));
            this.divConteudo.addCss(css.setPaddingLeft(30));
            this.divConteudo.addCss(css.setPaddingRight(10));
            this.divConteudo.addCss(css.setPosition("relative"));

            this.divIcone.addCss(css.setBackgroundColor("rgba(0,0,0,0.25)"));
            this.divIcone.addCss(css.setBorderRadius(50, "%"));
            this.divIcone.addCss(css.setHeight(100, "%"));
            this.divIcone.addCss(css.setLeft(0));
            this.divIcone.addCss(css.setPosition("absolute"));
            this.divIcone.addCss(css.setWidth(25));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divIcone.strId = (strId + "_divIcone");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}