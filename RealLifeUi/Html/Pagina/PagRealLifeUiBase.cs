using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Pagina
{
    internal abstract class PagRealLifeUiBase : PagMobile
    {
        #region Constantes

        protected const int INT_ESPACAMENTO = 10;

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        protected PagRealLifeUiBase(string strNome) : base(strNome)
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void addCss(LstTag<CssTag> lstCss)
        {
            //base.addCss(lstCss);

            lstCss.Clear();
        }

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            //base.addJs(lstJs);

            lstJs.Clear();

            lstJs.Add(new JavaScriptTag("res/js/RealLifeUi.js"));
        }

        protected override void addJsCodigo(JavaScriptTag tagJs)
        {
            base.addJsCodigo(tagJs);

            tagJs.addJs(string.Format("RealLifeUi.{0}.i.iniciar();", this.GetType().Name));
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setFontSize(1, "vw"));
            this.addCss(css.setOverflow("hidden"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}