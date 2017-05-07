/// <reference path="../../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemSuperior extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCamisaMangaCurta: DivMenuItem;
        private _divMenuItemCamisaMangaLonga: DivMenuItem;
        private _divMenuItemCamisaRegata: DivMenuItem;

        private get divMenuItemCamisaMangaCurta(): DivMenuItem
        {
            if (this._divMenuItemCamisaMangaCurta != null)
            {
                return this._divMenuItemCamisaMangaCurta;
            }

            this._divMenuItemCamisaMangaCurta = new DivMenuItem("Camisa (manga curta)");

            return this._divMenuItemCamisaMangaCurta;
        }

        private get divMenuItemCamisaMangaLonga(): DivMenuItem
        {
            if (this._divMenuItemCamisaMangaLonga != null)
            {
                return this._divMenuItemCamisaMangaLonga;
            }

            this._divMenuItemCamisaMangaLonga = new DivMenuItem("Camisa (manga longa)");

            return this._divMenuItemCamisaMangaLonga;
        }

        private get divMenuItemCamisaRegata(): DivMenuItem
        {
            if (this._divMenuItemCamisaRegata != null)
            {
                return this._divMenuItemCamisaRegata;
            }

            this._divMenuItemCamisaRegata = new DivMenuItem("Camisa (regata)");

            return this._divMenuItemCamisaRegata;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Superior");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(this.divMenuItemCamisaRegata);
            arrDivMenuItem.push(this.divMenuItemCamisaMangaCurta);
            arrDivMenuItem.push(this.divMenuItemCamisaMangaLonga);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}