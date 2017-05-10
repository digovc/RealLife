/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            //arrObjMenuItem.push(new MenuItemAltura());
            arrObjMenuItem.push(new MenuItemPele());
            arrObjMenuItem.push(new MenuItemPeso());
            arrObjMenuItem.push(new MenuItemRoupa());
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}