using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Login
{
    internal class DivLoginCabecalho : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("white"));
            this.addCss(css.setBorder(1, "solid", "grey"));
            this.addCss(css.setHeight(10, "vh"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}