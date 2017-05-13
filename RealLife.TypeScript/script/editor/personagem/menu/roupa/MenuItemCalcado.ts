/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCalcado extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemRoupa)
        {
            super(objMenuItemPai, "Calçado");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Chinelo", null, (() => { Jogador.i.intCalcado = 5; })));
            arrObjMenuItem.push(new MenuItem(this, "Tênis", null, (() => { Jogador.i.intCalcado = 22; })));
            arrObjMenuItem.push(new MenuItem(this, "Sapato", null, (() => { Jogador.i.intCalcado = 10; })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}