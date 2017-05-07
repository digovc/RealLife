/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemCabeloCor extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCastanho: DivMenuItem;
        private _divMenuItemLoiro: DivMenuItem;
        private _divMenuItemPreto: DivMenuItem;
        private _divMenuItemRuivo: DivMenuItem;

        private get divMenuItemCastanho(): DivMenuItem
        {
            if (this._divMenuItemCastanho != null)
            {
                return this._divMenuItemCastanho;
            }

            this._divMenuItemCastanho = new DivMenuItem("Castanho");

            return this._divMenuItemCastanho;
        }

        private get divMenuItemLoiro(): DivMenuItem
        {
            if (this._divMenuItemLoiro != null)
            {
                return this._divMenuItemLoiro;
            }

            this._divMenuItemLoiro = new DivMenuItem("Loiro");

            return this._divMenuItemLoiro;
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

        private get divMenuItemRuivo(): DivMenuItem
        {
            if (this._divMenuItemRuivo != null)
            {
                return this._divMenuItemRuivo;
            }

            this._divMenuItemRuivo = new DivMenuItem("Ruivo");

            return this._divMenuItemRuivo;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Cor do cabelo");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemCastanho);
            arrDivMenuItem.push(this.divMenuItemLoiro);
            arrDivMenuItem.push(this.divMenuItemPreto);
            arrDivMenuItem.push(this.divMenuItemRuivo);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}