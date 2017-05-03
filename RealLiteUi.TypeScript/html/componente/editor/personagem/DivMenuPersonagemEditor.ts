/// <reference path="../../menu/DivMenuBase.ts"/>

module RealLifeUi
{
    // #region Importações

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuPersonagemEditor extends DivMenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCorpo: DivMenuItemCorpo;
        private _divMenuItemGenero: DivMenuItemGenero;
        private _divMenuItemRoupa: DivMenuItemRoupa;

        private get divMenuItemCorpo(): DivMenuItemCorpo
        {
            if (this._divMenuItemCorpo != null)
            {
                return this._divMenuItemCorpo;
            }

            this._divMenuItemCorpo = new DivMenuItemCorpo();

            return this._divMenuItemCorpo;
        }


        private get divMenuItemGenero(): DivMenuItemGenero
        {
            if (this._divMenuItemGenero != null)
            {
                return this._divMenuItemGenero;
            }

            this._divMenuItemGenero = new DivMenuItemGenero();

            return this._divMenuItemGenero;
        }

        private get divMenuItemRoupa(): DivMenuItemRoupa
        {
            if (this._divMenuItemRoupa != null)
            {
                return this._divMenuItemRoupa;
            }

            this._divMenuItemRoupa = new DivMenuItemRoupa();

            return this._divMenuItemRoupa;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            arrDivMenuItem.push(this.divMenuItemGenero);
            arrDivMenuItem.push(this.divMenuItemCorpo);
            arrDivMenuItem.push(this.divMenuItemRoupa);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}