/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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
            super(null, "Cabeça");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItemCabelo());
            arrObjMenuItem.push(new MenuItemCabeloCor());
            arrObjMenuItem.push(new MenuItemRosto());
            arrObjMenuItem.push(new MenuItemOlho());
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}