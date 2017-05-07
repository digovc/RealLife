/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class DivMissaoBase extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.jq.css("margin-left", $(document).width());
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}