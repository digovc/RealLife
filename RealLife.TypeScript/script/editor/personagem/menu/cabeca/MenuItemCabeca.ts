/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCabeca extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Cabe�a");
        }

        // #endregion Construtores

        // #region M�todos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItemCabelo());
            arrObjMenuItem.push(new MenuItemCabeloCor());
            arrObjMenuItem.push(new MenuItemRosto());
            arrObjMenuItem.push(new MenuItemOlho());
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}