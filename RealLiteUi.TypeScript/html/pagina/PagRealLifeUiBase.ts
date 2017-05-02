/// <reference path="../../../Web.TypeScript/html/pagina/PagMobile.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import PagMobile = Web.PagMobile;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class PagRealLifeUiBase extends PagMobile
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

            AppRealLifeUi.i.pag = this;

            AppRealLifeUi.i.iniciar();
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}