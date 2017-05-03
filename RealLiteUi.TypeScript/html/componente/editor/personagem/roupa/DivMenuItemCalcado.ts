/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemCalcado extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemChinelo: DivMenuItem;
        private _divMenuItemSapato: DivMenuItem;
        private _divMenuItemTenis: DivMenuItem;

        private get divMenuItemChinelo(): DivMenuItem
        {
            if (this._divMenuItemChinelo != null)
            {
                return this._divMenuItemChinelo;
            }

            this._divMenuItemChinelo = new DivMenuItem("Chinelo");

            return this._divMenuItemChinelo;
        }

        private get divMenuItemSapato(): DivMenuItem
        {
            if (this._divMenuItemSapato != null)
            {
                return this._divMenuItemSapato;
            }

            this._divMenuItemSapato = new DivMenuItem("Sapato");

            return this._divMenuItemSapato;
        }

        private get divMenuItemTenis(): DivMenuItem
        {
            if (this._divMenuItemTenis != null)
            {
                return this._divMenuItemTenis;
            }

            this._divMenuItemTenis = new DivMenuItem("Tênis");

            return this._divMenuItemTenis;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Calçado");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemChinelo);
            arrDivMenuItem.push(this.divMenuItemTenis);
            arrDivMenuItem.push(this.divMenuItemSapato);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}