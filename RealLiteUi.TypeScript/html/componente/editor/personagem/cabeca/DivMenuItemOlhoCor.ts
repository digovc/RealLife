/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemOlhoCor extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemAzul: DivMenuItem;
        private _divMenuItemCastanho: DivMenuItem;
        private _divMenuItemPreto: DivMenuItem;
        private _divMenuItemVerde: DivMenuItem;

        private get divMenuItemAzul(): DivMenuItem
        {
            if (this._divMenuItemAzul != null)
            {
                return this._divMenuItemAzul;
            }

            this._divMenuItemAzul = new DivMenuItem("Azul");

            return this._divMenuItemAzul;
        }

        private get divMenuItemCastanho(): DivMenuItem
        {
            if (this._divMenuItemCastanho != null)
            {
                return this._divMenuItemCastanho;
            }

            this._divMenuItemCastanho = new DivMenuItem("Castanho");

            return this._divMenuItemCastanho;
        }

        private get divMenuItemPreto(): DivMenuItem
        {
            if (this._divMenuItemPreto != null)
            {
                return this._divMenuItemPreto;
            }

            this._divMenuItemPreto = new DivMenuItem("Preto");

            return this._divMenuItemPreto;
        }

        private get divMenuItemVerde(): DivMenuItem
        {
            if (this._divMenuItemVerde != null)
            {
                return this._divMenuItemVerde;
            }

            this._divMenuItemVerde = new DivMenuItem("Verde");

            return this._divMenuItemVerde;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Cor dos olhos");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemCastanho);
            arrDivMenuItem.push(this.divMenuItemPreto);
            arrDivMenuItem.push(this.divMenuItemVerde);
            arrDivMenuItem.push(this.divMenuItemAzul);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}