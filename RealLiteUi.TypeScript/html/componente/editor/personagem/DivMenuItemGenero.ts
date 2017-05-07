/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemGenero extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemFeminino: DivMenuItem;
        private _divMenuItemMasculino: DivMenuItem;

        private get divMenuItemFeminino(): DivMenuItem
        {
            if (this._divMenuItemFeminino != null)
            {
                return this._divMenuItemFeminino;
            }

            this._divMenuItemFeminino = new DivMenuItem("Feminino");

            return this._divMenuItemFeminino;
        }

        private get divMenuItemMasculino(): DivMenuItem
        {
            if (this._divMenuItemMasculino != null)
            {
                return this._divMenuItemMasculino;
            }

            this._divMenuItemMasculino = new DivMenuItem("Masculino");

            return this._divMenuItemMasculino;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Gênero");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemFeminino);
            arrDivMenuItem.push(this.divMenuItemMasculino);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}