/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemRosto extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Rosto");
        }

        // #endregion Construtores

        // #region Métodos

        private alterarAparencia(intRosto: number): void
        {
            Jogador.i.intRosto = intRosto;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Opção 1", null, (() => { this.alterarAparencia(0); })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 2", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 3", null, (() => { this.alterarAparencia(2); })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 4", null, (() => { this.alterarAparencia(3); })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 5", null, (() => { this.alterarAparencia(4); })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}