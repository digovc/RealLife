using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Missao
{
    internal abstract class DivMissaoBase : ComponenteHtml
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

            //this.addCss(css.setDisplay("none"));
            this.addCss(css.setMarginBottom(50));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}