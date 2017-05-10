/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCabelo extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null, "Cabelo");
        }

        // #endregion Construtores

        // #region M�todos

        private alterarAparencia(intCabeloModelo: number): void
        {
            Jogador.i.ped.intCabeloModelo = intCabeloModelo;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Curto", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "M�dio", null, (() => { this.alterarAparencia(13); })));
            arrObjMenuItem.push(new MenuItem(this, "Longo", null, (() => { this.alterarAparencia(22); })));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}