/// <reference path="../menu/DivMenuBase.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuDev extends DivMenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCameraLivre: DivMenuItem;

        private get divMenuItemCameraLivre(): DivMenuItem
        {
            if (this._divMenuItemCameraLivre != null)
            {
                return this._divMenuItemCameraLivre;
            }

            this._divMenuItemCameraLivre = new DivMenuItem(0, "Câmera livre");

            return this._divMenuItemCameraLivre;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivMenuDev.name);
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            arrDivMenuItem.push(this.divMenuItemCameraLivre);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}