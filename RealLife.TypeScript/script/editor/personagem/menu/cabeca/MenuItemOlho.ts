/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemOlho extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Olhos");
        }

        // #endregion Construtores

        // #region M�todos

        private alterarAparencia(intOlhoCor: number): void
        {
            Jogador.i.ped.intOlhoCor = intOlhoCor;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Preto", null, (() => { this.alterarAparencia(0); })));
            arrObjMenuItem.push(new MenuItem(this, "Castanho", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "Azul", null, (() => { this.alterarAparencia(2); })));
            arrObjMenuItem.push(new MenuItem(this, "Verde", null, (() => { this.alterarAparencia(3); })));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}