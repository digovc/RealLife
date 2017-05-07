/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemCabelo extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCurto: DivMenuItem;
        private _divMenuItemLongo: DivMenuItem;
        private _divMenuItemMedio: DivMenuItem;

        private get divMenuItemCurto(): DivMenuItem
        {
            if (this._divMenuItemCurto != null)
            {
                return this._divMenuItemCurto;
            }

            this._divMenuItemCurto = new DivMenuItem("Curto");

            return this._divMenuItemCurto;
        }

        private get divMenuItemLongo(): DivMenuItem
        {
            if (this._divMenuItemLongo != null)
            {
                return this._divMenuItemLongo;
            }

            this._divMenuItemLongo = new DivMenuItem("Longo");

            return this._divMenuItemLongo;
        }

        private get divMenuItemMedio(): DivMenuItem
        {
            if (this._divMenuItemMedio != null)
            {
                return this._divMenuItemMedio;
            }

            this._divMenuItemMedio = new DivMenuItem("Médio");

            return this._divMenuItemMedio;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Cabelo");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemCurto);
            arrDivMenuItem.push(this.divMenuItemMedio);
            arrDivMenuItem.push(this.divMenuItemLongo);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}