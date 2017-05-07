/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemConjunto extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemComum: DivMenuItem;
        private _divMenuItemEsporte: DivMenuItem;
        private _divMenuItemFino: DivMenuItem;

        private get divMenuItemComum(): DivMenuItem
        {
            if (this._divMenuItemComum != null)
            {
                return this._divMenuItemComum;
            }

            this._divMenuItemComum = new DivMenuItem("Comum");

            return this._divMenuItemComum;
        }

        private get divMenuItemEsporte(): DivMenuItem
        {
            if (this._divMenuItemEsporte != null)
            {
                return this._divMenuItemEsporte;
            }

            this._divMenuItemEsporte = new DivMenuItem("Esporte");

            return this._divMenuItemEsporte;
        }

        private get divMenuItemFino(): DivMenuItem
        {
            if (this._divMenuItemFino != null)
            {
                return this._divMenuItemFino;
            }

            this._divMenuItemFino = new DivMenuItem("Fino");

            return this._divMenuItemFino;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Conjunto");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemComum);
            arrDivMenuItem.push(this.divMenuItemEsporte);
            arrDivMenuItem.push(this.divMenuItemFino);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}