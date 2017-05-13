/// <reference path="../MenuBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuPrincipal extends MenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Menu");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            arrObjMenuItem.push(new MenuItemVeiculo(null, "Opção"));
            arrObjMenuItem.push(new MenuItemVeiculo(null, "Opção"));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}