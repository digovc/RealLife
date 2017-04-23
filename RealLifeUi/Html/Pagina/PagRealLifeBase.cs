using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;

namespace RealLifeUi.Html.Pagina
{
    internal abstract class PagRealLifeBase : PagMobile
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        protected PagRealLifeBase(string strNome) : base(strNome)
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

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}