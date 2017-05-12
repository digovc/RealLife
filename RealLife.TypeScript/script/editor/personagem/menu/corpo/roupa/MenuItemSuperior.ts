/// <reference path="../../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemSuperior extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemRoupa)
        {
            super(objMenuItemPai, "Superior");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Opção 1"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 2"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 3"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 4"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 5"));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}