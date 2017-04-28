using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;
using RealLifeUi.Html.Componente.Interface;

namespace RealLifeUi.Html.Componente.Login
{
    internal class DivLoginAtalho : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DivAtalho _divAtalho;

        private DivAtalho divAtalho
        {
            get
            {
                if (_divAtalho != null)
                {
                    return _divAtalho;
                }

                _divAtalho = new DivAtalho();

                return _divAtalho;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divAtalho.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBottom(1, "vw"));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setRight(1, "vw"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}