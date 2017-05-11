/// <reference path="../../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemConjunto extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Conjunto");
        }

        // #endregion Construtores

        // #region M�todos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Op��o 1"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 2"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 3"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 4"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 5"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 6"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 7"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 8"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 9"));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 10"));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}