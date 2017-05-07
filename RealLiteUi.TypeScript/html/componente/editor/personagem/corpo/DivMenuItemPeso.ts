/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemPeso extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemGordo: DivMenuItem;
        private _divMenuItemMagerrimo: DivMenuItem;
        private _divMenuItemMagro: DivMenuItem;
        private _divMenuItemMusculoso: DivMenuItem;
        private _divMenuItemObeso: DivMenuItem;

        private get divMenuItemGordo(): DivMenuItem
        {
            if (this._divMenuItemGordo != null)
            {
                return this._divMenuItemGordo;
            }

            this._divMenuItemGordo = new DivMenuItem("Gordo");

            return this._divMenuItemGordo;
        }

        private get divMenuItemMagerrimo(): DivMenuItem
        {
            if (this._divMenuItemMagerrimo != null)
            {
                return this._divMenuItemMagerrimo;
            }

            this._divMenuItemMagerrimo = new DivMenuItem("Magérrimo");

            return this._divMenuItemMagerrimo;
        }

        private get divMenuItemMagro(): DivMenuItem
        {
            if (this._divMenuItemMagro != null)
            {
                return this._divMenuItemMagro;
            }

            this._divMenuItemMagro = new DivMenuItem("Magro");

            return this._divMenuItemMagro;
        }

        private get divMenuItemMusculoso(): DivMenuItem
        {
            if (this._divMenuItemMusculoso != null)
            {
                return this._divMenuItemMusculoso;
            }

            this._divMenuItemMusculoso = new DivMenuItem("Musculoso");

            return this._divMenuItemMusculoso;
        }

        private get divMenuItemObeso(): DivMenuItem
        {
            if (this._divMenuItemObeso != null)
            {
                return this._divMenuItemObeso;
            }

            this._divMenuItemObeso = new DivMenuItem("Obeso");

            return this._divMenuItemObeso;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Peso");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemMagerrimo);
            arrDivMenuItem.push(this.divMenuItemMagro);
            arrDivMenuItem.push(this.divMenuItemMusculoso);
            arrDivMenuItem.push(this.divMenuItemGordo);
            arrDivMenuItem.push(this.divMenuItemObeso);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}