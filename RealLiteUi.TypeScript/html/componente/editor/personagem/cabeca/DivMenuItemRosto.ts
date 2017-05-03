/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemRosto extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemOpcao1: DivMenuItem;
        private _divMenuItemOpcao2: DivMenuItem;
        private _divMenuItemOpcao3: DivMenuItem;
        private _divMenuItemOpcao4: DivMenuItem;
        private _divMenuItemOpcao5: DivMenuItem;

        private get divMenuItemOpcao1(): DivMenuItem
        {
            if (this._divMenuItemOpcao1 != null)
            {
                return this._divMenuItemOpcao1;
            }

            this._divMenuItemOpcao1 = new DivMenuItem("Opção 1");

            return this._divMenuItemOpcao1;
        }

        private get divMenuItemOpcao2(): DivMenuItem
        {
            if (this._divMenuItemOpcao2 != null)
            {
                return this._divMenuItemOpcao2;
            }

            this._divMenuItemOpcao2 = new DivMenuItem("Opção 2");

            return this._divMenuItemOpcao2;
        }

        private get divMenuItemOpcao3(): DivMenuItem
        {
            if (this._divMenuItemOpcao3 != null)
            {
                return this._divMenuItemOpcao3;
            }

            this._divMenuItemOpcao3 = new DivMenuItem("Opção 3");

            return this._divMenuItemOpcao3;
        }

        private get divMenuItemOpcao4(): DivMenuItem
        {
            if (this._divMenuItemOpcao4 != null)
            {
                return this._divMenuItemOpcao4;
            }

            this._divMenuItemOpcao4 = new DivMenuItem("Opção 4");

            return this._divMenuItemOpcao4;
        }

        private get divMenuItemOpcao5(): DivMenuItem
        {
            if (this._divMenuItemOpcao5 != null)
            {
                return this._divMenuItemOpcao5;
            }

            this._divMenuItemOpcao5 = new DivMenuItem("Opção 5");

            return this._divMenuItemOpcao5;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Rosto");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemOpcao1);
            arrDivMenuItem.push(this.divMenuItemOpcao2);
            arrDivMenuItem.push(this.divMenuItemOpcao3);
            arrDivMenuItem.push(this.divMenuItemOpcao4);
            arrDivMenuItem.push(this.divMenuItemOpcao5);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}