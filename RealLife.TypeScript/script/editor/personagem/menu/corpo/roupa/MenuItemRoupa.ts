/// <reference path="../../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemRoupa extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemCorpo)
        {
            super(objMenuItemPai, "Roupa");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItemSuperior(this));
            arrObjMenuItem.push(new MenuItemInferior(this));
            arrObjMenuItem.push(new MenuItemCalcado(this));
            arrObjMenuItem.push(new MenuItemConjunto(this));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}