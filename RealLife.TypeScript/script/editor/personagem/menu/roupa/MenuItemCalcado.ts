/// <reference path="../../../../../../RealLifeShared.TypeScript/dominio/PedComponenteDominio.ts"/>
/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações

    import PedComponenteDominio = RealLifeShared.PedComponenteDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCalcado extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemRoupa)
        {
            super(objMenuItemPai, "Calçado");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Chinelo", null, (() => { Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.FEET, 5)); })));
            arrObjMenuItem.push(new MenuItem(this, "Tênis", null, (() => { Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.FEET, 22)); })));
            arrObjMenuItem.push(new MenuItem(this, "Sapato", null, (() => { Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.FEET, 10)); })));
        }

        protected selecionar(): void
        {
            super.selecionar();

            Screen.i.objCameraAtual.interpolar(((this.objMenu as MenuPersonagemEditor).objEtapa.objScript as ScriptPersonagemEditor).objCameraPerna, .15);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}