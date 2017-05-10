/// <reference path="../../../../ui/menu/MenuBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            arrObjMenuItem.push(new MenuItemSexo());
            arrObjMenuItem.push(new MenuItemCabeca());
            //arrObjMenuItem.push(new MenuItemCorpo());
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}