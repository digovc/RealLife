/// <reference path="../../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Opção 1"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 2"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 3"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 4"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 5"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 6"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 7"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 8"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 9"));
            arrObjMenuItem.push(new MenuItem(this, "Opção 10"));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}