/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemInferior extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemBermuda: DivMenuItem;
        private _divMenuItemCalcaJeans: DivMenuItem;
        private _divMenuItemCalcaSocial: DivMenuItem;

        private get divMenuItemBermuda(): DivMenuItem
        {
            if (this._divMenuItemBermuda != null)
            {
                return this._divMenuItemBermuda;
            }

            this._divMenuItemBermuda = new DivMenuItem("Bermuda");

            return this._divMenuItemBermuda;
        }

        private get divMenuItemCalcaJeans(): DivMenuItem
        {
            if (this._divMenuItemCalcaJeans != null)
            {
                return this._divMenuItemCalcaJeans;
            }

            this._divMenuItemCalcaJeans = new DivMenuItem("Calça jeans");

            return this._divMenuItemCalcaJeans;
        }

        private get divMenuItemCalcaSocial(): DivMenuItem
        {
            if (this._divMenuItemCalcaSocial != null)
            {
                return this._divMenuItemCalcaSocial;
            }

            this._divMenuItemCalcaSocial = new DivMenuItem("Calça social");

            return this._divMenuItemCalcaSocial;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Inferior");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemBermuda);
            arrDivMenuItem.push(this.divMenuItemCalcaJeans);
            arrDivMenuItem.push(this.divMenuItemCalcaSocial);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}