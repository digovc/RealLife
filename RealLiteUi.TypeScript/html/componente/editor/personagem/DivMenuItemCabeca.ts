/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemCabeca extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCabelo: DivMenuItemCabelo;
        private _divMenuItemCabeloCor: DivMenuItemCabeloCor;
        private _divMenuItemOlhoCor: DivMenuItemOlhoCor;
        private _divMenuItemRosto: DivMenuItemRosto;

        private get divMenuItemCabelo(): DivMenuItemCabelo
        {
            if (this._divMenuItemCabelo != null)
            {
                return this._divMenuItemCabelo;
            }

            this._divMenuItemCabelo = new DivMenuItemCabelo();

            return this._divMenuItemCabelo;
        }

        private get divMenuItemCabeloCor(): DivMenuItemCabeloCor
        {
            if (this._divMenuItemCabeloCor != null)
            {
                return this._divMenuItemCabeloCor;
            }

            this._divMenuItemCabeloCor = new DivMenuItemCabeloCor();

            return this._divMenuItemCabeloCor;
        }

        private get divMenuItemOlhoCor(): DivMenuItemOlhoCor
        {
            if (this._divMenuItemOlhoCor != null)
            {
                return this._divMenuItemOlhoCor;
            }

            this._divMenuItemOlhoCor = new DivMenuItemOlhoCor();

            return this._divMenuItemOlhoCor;
        }

        private get divMenuItemRosto(): DivMenuItemRosto
        {
            if (this._divMenuItemRosto != null)
            {
                return this._divMenuItemRosto;
            }

            this._divMenuItemRosto = new DivMenuItemRosto();

            return this._divMenuItemRosto;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Cabeça");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemRosto);
            arrDivMenuItem.push(this.divMenuItemCabelo);
            arrDivMenuItem.push(this.divMenuItemCabeloCor);
            arrDivMenuItem.push(this.divMenuItemOlhoCor);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}