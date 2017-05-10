/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCabeloCor extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Cor do cabelo");
        }

        // #endregion Construtores

        // #region M�todos

        private alterarAparencia(intCabeloCor: number): void
        {
            Jogador.i.ped.intCabeloModelo = intCabeloCor;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Preto", null, (() => { this.alterarAparencia(0); })));
            arrObjMenuItem.push(new MenuItem(this, "Castanho", null, (() => { this.alterarAparencia(4); })));
            arrObjMenuItem.push(new MenuItem(this, "Loiro", null, (() => { this.alterarAparencia(11); })));
            arrObjMenuItem.push(new MenuItem(this, "Ruivo", null, (() => { this.alterarAparencia(18); })));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}