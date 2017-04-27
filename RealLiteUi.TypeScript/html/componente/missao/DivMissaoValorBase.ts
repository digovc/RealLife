/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>

module RealLifeUi
{
    // #region Importações

    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class DivMissaoValorBase extends DivMissaoBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divValor: Div;

        protected get divValor(): Div
        {
            if (this._divValor != null)
            {
                return this._divValor;
            }

            this._divValor = new Div(this.strId + "_divValor");

            return this._divValor;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}