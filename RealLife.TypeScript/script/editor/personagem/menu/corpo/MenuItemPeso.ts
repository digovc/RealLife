/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemPeso extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Peso");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Musculoso"));
            arrObjMenuItem.push(new MenuItem(this, "Magro"));
            arrObjMenuItem.push(new MenuItem(this, "Normal"));
            arrObjMenuItem.push(new MenuItem(this, "Gordo"));
            arrObjMenuItem.push(new MenuItem(this, "Obeso"));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}