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

            arrObjMenuItem.push(new MenuItemCabelo(this));
            arrObjMenuItem.push(new MenuItemCabeloCor(this));
            arrObjMenuItem.push(new MenuItemRosto(this));
            arrObjMenuItem.push(new MenuItemOlho(this));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}