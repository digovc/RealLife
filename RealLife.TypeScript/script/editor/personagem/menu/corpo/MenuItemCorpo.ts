/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCorpo extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Corpo");
        }

        // #endregion Construtores

        // #region M�todos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            //arrObjMenuItem.push(new MenuItemAltura());
            arrObjMenuItem.push(new MenuItemPele());
            arrObjMenuItem.push(new MenuItemPeso());
            arrObjMenuItem.push(new MenuItemRoupa());
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}