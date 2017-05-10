/// <reference path="../../../../ui/menu/MenuBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuPersonagemEditor extends MenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            arrObjMenuItem.push(new MenuItemSexo());
            arrObjMenuItem.push(new MenuItemCabeca());
            //arrObjMenuItem.push(new MenuItemCorpo());
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}