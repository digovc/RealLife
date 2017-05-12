/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemOlho extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemCabeca)
        {
            super(objMenuItemPai, "Olhos");
        }

        // #endregion Construtores

        // #region Métodos

        private alterarAparencia(intOlhoCor: number): void
        {
            Jogador.i.intOlhoCor = intOlhoCor;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Preto", null, (() => { this.alterarAparencia(0); })));
            arrObjMenuItem.push(new MenuItem(this, "Castanho", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "Azul", null, (() => { this.alterarAparencia(2); })));
            arrObjMenuItem.push(new MenuItem(this, "Verde", null, (() => { this.alterarAparencia(3); })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}