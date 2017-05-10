/// <reference path="../../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemRoupa extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Roupa");
        }

        // #endregion Construtores

        // #region M�todos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItemSuperior());
            arrObjMenuItem.push(new MenuItemInferior());
            arrObjMenuItem.push(new MenuItemCalcado());
            arrObjMenuItem.push(new MenuItemConjunto());
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}