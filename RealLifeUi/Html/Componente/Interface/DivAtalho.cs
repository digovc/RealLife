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

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}