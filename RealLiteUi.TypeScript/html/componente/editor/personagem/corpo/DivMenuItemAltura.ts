/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemAltura extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemAlto: DivMenuItem;
        private _divMenuItemBaixo: DivMenuItem;
        private _divMenuItemMedio: DivMenuItem;

        private get divMenuItemAlto(): DivMenuItem
        {
            if (this._divMenuItemAlto != null)
            {
                return this._divMenuItemAlto;
            }

            this._divMenuItemAlto = new DivMenuItem("Alto");

            return this._divMenuItemAlto;
        }

        private get divMenuItemBaixo(): DivMenuItem
        {
            if (this._divMenuItemBaixo != null)
            {
                return this._divMenuItemBaixo;
            }

            this._divMenuItemBaixo = new DivMenuItem("Baixo");

            return this._divMenuItemBaixo;
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
            super("Altura");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemBaixo);
            arrDivMenuItem.push(this.divMenuItemMedio);
            arrDivMenuItem.push(this.divMenuItemAlto);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}