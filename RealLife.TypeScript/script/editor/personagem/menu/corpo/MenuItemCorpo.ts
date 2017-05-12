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
            arrObjMenuItem.push(new MenuItemPele(this));
            arrObjMenuItem.push(new MenuItemPeso(this));
            arrObjMenuItem.push(new MenuItemRoupa(this));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}