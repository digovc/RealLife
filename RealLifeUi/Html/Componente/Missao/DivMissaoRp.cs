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

        protected override string getStrDivCirculoCor()
        {
            return "#2196f3";
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.divCirculo.strConteudo = "RP";
            this.divValor.strConteudo = "+ 10 500";
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}