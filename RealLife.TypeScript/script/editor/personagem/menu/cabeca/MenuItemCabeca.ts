/// <reference path="../../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCabeca extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor(objMenuPai: MenuPersonagemEditor)
        {
            super(objMenuPai, "Cabeça");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItemCabelo(this));
            arrObjMenuItem.push(new MenuItemCabeloCor(this));
            arrObjMenuItem.push(new MenuItemOlho(this));
        }

        protected selecionar(): void
        {
            super.selecionar();

            AppRealLife.i.objCameraAtual.interpolar(((this.objMenu as MenuPersonagemEditor).objEtapa.objScript as ScriptPersonagemEditor).objCameraCabeca, .15);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}