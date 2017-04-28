using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Interface
{
    internal class DivAtalho : DivInterfaceBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            new DivAtalhoItem().setPai(this.divConteudo);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setColor("white"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}