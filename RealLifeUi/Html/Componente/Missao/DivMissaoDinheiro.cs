namespace RealLifeUi.Html.Componente.Missao
{
    internal class DivMissaoDinheiro : DivMissaoValorBase
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

            this.divCirculo.strConteudo = "$";
            this.divValor.strConteudo = "+ 10 500";
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}