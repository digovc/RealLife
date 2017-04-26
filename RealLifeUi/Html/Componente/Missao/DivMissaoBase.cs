using NetZ.Web.Html.Componente;

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

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}