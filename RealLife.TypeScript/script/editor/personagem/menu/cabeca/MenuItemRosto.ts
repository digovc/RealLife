/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

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

        // #region M�todos

        private alterarAparencia(intRosto: number): void
        {
            Jogador.i.ped.intRosto = intRosto;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Op��o 1", null, (() => { this.alterarAparencia(0); })));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 2", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 3", null, (() => { this.alterarAparencia(2); })));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 4", null, (() => { this.alterarAparencia(3); })));
            arrObjMenuItem.push(new MenuItem(this, "Op��o 5", null, (() => { this.alterarAparencia(4); })));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}