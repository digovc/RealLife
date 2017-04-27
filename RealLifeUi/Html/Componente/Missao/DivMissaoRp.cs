namespace RealLifeUi.Html.Componente.Missao
{
    internal class DivMissaoRp : DivMissaoValorBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override int getIntDivCirculoFontSize()
        {
            return 110;
        }

        protected override string getStrDivCor()
        {
            return "#2196f3";
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.divCirculo.strConteudo = "RP";
            this.divValor.strConteudo = "+ 250";
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}