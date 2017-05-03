/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemRoupa extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCalcado: DivMenuItemCalcado;
        private _divMenuItemConjunto: DivMenuItemConjunto;
        private _divMenuItemInferior: DivMenuItemInferior;
        private _divMenuItemSuperior: DivMenuItemSuperior;

        private get divMenuItemCalcado(): DivMenuItemCalcado
        {
            if (this._divMenuItemCalcado != null)
            {
                return this._divMenuItemCalcado;
            }

            this._divMenuItemCalcado = new DivMenuItemCalcado();

            return this._divMenuItemCalcado;
        }

        private get divMenuItemConjunto(): DivMenuItemConjunto
        {
            if (this._divMenuItemConjunto != null)
            {
                return this._divMenuItemConjunto;
            }

            this._divMenuItemConjunto = new DivMenuItemConjunto();

            return this._divMenuItemConjunto;
        }

        private get divMenuItemInferior(): DivMenuItemInferior
        {
            if (this._divMenuItemInferior != null)
            {
                return this._divMenuItemInferior;
            }

            this._divMenuItemInferior = new DivMenuItemInferior();

            return this._divMenuItemInferior;
        }

        private get divMenuItemSuperior(): DivMenuItemSuperior
        {
            if (this._divMenuItemSuperior != null)
            {
                return this._divMenuItemSuperior;
            }

            this._divMenuItemSuperior = new DivMenuItemSuperior();

            return this._divMenuItemSuperior;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Roupa");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemSuperior);
            arrDivMenuItem.push(this.divMenuItemInferior);
            arrDivMenuItem.push(this.divMenuItemCalcado);
            arrDivMenuItem.push(this.divMenuItemConjunto);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}