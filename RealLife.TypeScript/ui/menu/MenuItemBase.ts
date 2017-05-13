module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class MenuItemBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booSelecionado: boolean = false;
        private _fnc: Function;
        private _objMenu: MenuBase;
        private _objMenuItemPai: MenuItem;
        private _objUiMenuItem: NativeUI.UIMenuItem;
        private _strSubTitulo: string;
        private _strTitulo: string;

        public get booSelecionado(): boolean
        {
            return this._booSelecionado;
        }

        public set booSelecionado(booSelecionado: boolean)
        {
            if (this._booSelecionado == booSelecionado)
            {
                return;
            }

            this._booSelecionado = booSelecionado;

            this.setBooSelecionado(this._booSelecionado);
        }

        protected get fnc(): Function
        {
            return this._fnc;
        }

        protected set fnc(fnc: Function)
        {
            this._fnc = fnc;
        }

        public get objMenu(): MenuBase
        {
            return this._objMenu;
        }

        public set objMenu(objMenu: MenuBase)
        {
            this._objMenu = objMenu;
        }

        public get objMenuItemPai(): MenuItem
        {
            return this._objMenuItemPai;
        }

        public set objMenuItemPai(objMenuItemPai: MenuItem)
        {
            this._objMenuItemPai = objMenuItemPai;
        }

        public get objUiMenuItem(): NativeUI.UIMenuItem
        {
            if (this._objUiMenuItem != null)
            {
                return this._objUiMenuItem;
            }

            this._objUiMenuItem = this.getObjUiMenuItem();

            return this._objUiMenuItem;
        }

        public get strSubTitulo(): string
        {
            return this._strSubTitulo;
        }

        public set strSubTitulo(strSubTitulo: string)
        {
            this._strSubTitulo = strSubTitulo;
        }

        public get strTitulo(): string
        {
            return this._strTitulo;
        }

        public set strTitulo(strTitulo: string)
        {
            this._strTitulo = strTitulo;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objMenuPai: (MenuBase | MenuItem), strTitulo: string, strSubTitulo: string = null, fnc: Function = null)
        {
            super();

            this.fnc = fnc;
            this.objMenu = (objMenuPai instanceof MenuBase) ? objMenuPai : objMenuPai.objMenu;
            this.objMenuItemPai = (objMenuPai instanceof MenuItem) ? objMenuPai : null;
            this.strSubTitulo = strSubTitulo;
            this.strTitulo = strTitulo;
        }

        // #endregion Construtores

        // #region Métodos

        protected abstract chamarFnc(): void;

        protected abstract getObjUiMenuItem(): NativeUI.UIMenuItem;

        public montarMenu(): void
        {
            this.objUiMenuItem.Selected = false;

            this.objMenu.objUiMenu.AddItem(this.objUiMenuItem);
        }

        public processarOnItemSelecionado(objUiMenuItemSelecionado: NativeUI.UIMenuItem): boolean
        {
            if (this.objUiMenuItem != objUiMenuItemSelecionado)
            {
                return false;
            }

            this.selecionar();

            return true;
        }

        protected selecionar(): void
        {
            this.booSelecionado = true;

            if (this.fnc != null)
            {
                this.chamarFnc();
            }
        }

        private setBooSelecionado(booSelecionado: boolean): void
        {
            if (!booSelecionado)
            {
                return;
            }

            if (this.objMenuItemPai != null)
            {
                this.objMenuItemPai.arrObjMenuItem.forEach((objMenuItem) => { this.setBooSelecionadoItem(objMenuItem); });
            }
            else
            {
                this.objMenu.arrObjMenuItem.forEach((objMenuItem) => { this.setBooSelecionadoItem(objMenuItem); });
            }
        }

        private setBooSelecionadoItem(objMenuItemBase: MenuItemBase): void
        {
            if (this == objMenuItemBase)
            {
                return;
            }

            objMenuItemBase._booSelecionado = false;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}