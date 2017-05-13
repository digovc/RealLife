/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCabelo extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemCabeca)
        {
            super(objMenuItemPai, "Cabelo");
        }

        // #endregion Construtores

        // #region Métodos

        private alterarAparencia(intCabelo: number): void
        {
            Jogador.i.intCabelo = intCabelo;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Curto", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "Médio", null, (() => { this.alterarAparencia(4); })));
            arrObjMenuItem.push(new MenuItem(this, "Longo", null, (() => { this.alterarAparencia(17); })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}