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

        constructor()
        {
            super(null, "Cabelo");
        }

        // #endregion Construtores

        // #region Métodos

        private alterarAparencia(intCabeloModelo: number): void
        {
            Jogador.i.intCabeloModelo = intCabeloModelo;
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Curto", null, (() => { this.alterarAparencia(1); })));
            arrObjMenuItem.push(new MenuItem(this, "Médio", null, (() => { this.alterarAparencia(13); })));
            arrObjMenuItem.push(new MenuItem(this, "Longo", null, (() => { this.alterarAparencia(22); })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}