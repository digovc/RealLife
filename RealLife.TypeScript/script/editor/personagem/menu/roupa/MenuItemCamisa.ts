/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCamisa extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemRoupa)
        {
            super(objMenuItemPai, "Camisa");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Opção 1", null, (() => { Jogador.i.intCamisa = 0; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 2", null, (() => { Jogador.i.intCamisa = 1; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 3", null, (() => { Jogador.i.intCamisa = 2; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 4", null, (() => { Jogador.i.intCamisa = 3; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 5", null, (() => { Jogador.i.intCamisa = 4; })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}