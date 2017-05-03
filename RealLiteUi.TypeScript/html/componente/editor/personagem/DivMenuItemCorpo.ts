/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemCorpo extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemAltura: DivMenuItemAltura;
        private _divMenuItemCabeca: DivMenuItemCabeca;
        private _divMenuItemPeleCor: DivMenuItemPeleCor;
        private _divMenuItemPeso: DivMenuItemPeso;

        private get divMenuItemAltura(): DivMenuItemAltura
        {
            if (this._divMenuItemAltura != null)
            {
                return this._divMenuItemAltura;
            }

            this._divMenuItemAltura = new DivMenuItemAltura();

            return this._divMenuItemAltura;
        }

        private get divMenuItemCabeca(): DivMenuItemCabeca
        {
            if (this._divMenuItemCabeca != null)
            {
                return this._divMenuItemCabeca;
            }

            this._divMenuItemCabeca = new DivMenuItemCabeca();

            return this._divMenuItemCabeca;
        }

        private get divMenuItemPeleCor(): DivMenuItemPeleCor
        {
            if (this._divMenuItemPeleCor != null)
            {
                return this._divMenuItemPeleCor;
            }

            this._divMenuItemPeleCor = new DivMenuItemPeleCor();

            return this._divMenuItemPeleCor;
        }

        private get divMenuItemPeso(): DivMenuItemPeso
        {
            if (this._divMenuItemPeso != null)
            {
                return this._divMenuItemPeso;
            }

            this._divMenuItemPeso = new DivMenuItemPeso();

            return this._divMenuItemPeso;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Corpo");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemCabeca);
            arrDivMenuItem.push(this.divMenuItemPeleCor);
            arrDivMenuItem.push(this.divMenuItemPeso);
            arrDivMenuItem.push(this.divMenuItemAltura);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}