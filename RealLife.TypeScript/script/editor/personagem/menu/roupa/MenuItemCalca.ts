/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCalca extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItemRoupa)
        {
            super(objMenuItemPai, "Calça");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Opção 1", null, (() => { Jogador.i.intCalca = 0; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 2", null, (() => { Jogador.i.intCalca = 3; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 3", null, (() => { Jogador.i.intCalca = 6; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 4", null, (() => { Jogador.i.intCalca = 9; })));
            arrObjMenuItem.push(new MenuItem(this, "Opção 5", null, (() => { Jogador.i.intCalca = 12; })));
        }

        protected selecionar(): void
        {
            super.selecionar();

            AppRealLife.i.objCameraAtual.interpolar(((this.objMenu as MenuPersonagemEditor).objEtapa.objScript as ScriptPersonagemEditor).objCameraPerna, .15);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}