/// <reference path="MenuItemBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItem extends MenuItemBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjMenuItem: Array<MenuItemBase>;

        public get arrObjMenuItem(): Array<MenuItemBase>
        {
            if (this._arrObjMenuItem != null)
            {
                return this._arrObjMenuItem;
            }

            this._arrObjMenuItem = new Array<MenuItemBase>();

            this.inicializarArrObjMenuItem(this._arrObjMenuItem);

            return this._arrObjMenuItem;
        }

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

        protected chamarFnc(): void
        {
            this.fnc();
        }

        protected getObjUiMenuItem(): NativeUI.UIMenuItem
        {
            return API.createMenuItem(this.strTitulo, this.strSubTitulo);
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
        }

        protected selecionar(objMenu: MenuBase): void
        {
            super.selecionar(objMenu);

            if (this.arrObjMenuItem.length > 0)
            {
                objMenu.objMenuItemSelecionado = this;

                objMenu.montarMenu(this.arrObjMenuItem);
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}