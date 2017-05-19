/// <reference path="../../../../../../RealLifeShared.TypeScript/dominio/PedComponenteDominio.ts"/>
/// <reference path="../../../../../Jogador.ts"/>
/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações

    import PedComponenteDominio = RealLifeShared.PedComponenteDominio;

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

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Curto", null, (() => { Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.HAIR, 1)); })));
            arrObjMenuItem.push(new MenuItem(this, "Médio", null, (() => { Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.HAIR, 4)); })));
            arrObjMenuItem.push(new MenuItem(this, "Longo", null, (() => { Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.HAIR, 17)); })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}