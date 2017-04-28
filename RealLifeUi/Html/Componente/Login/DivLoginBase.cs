using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Login
{
    internal abstract class DivLoginBase : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;

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
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setHeight(45, "vh"));
            this.addCss(css.setPaddingLeft(10, "vw"));
            this.addCss(css.setPaddingRight(10, "vw"));

            this.addCss(css.setAlignItems("center"));
            this.addCss(css.setDisplay("flex"));
            this.addCss(css.setJustifyContent("center"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}