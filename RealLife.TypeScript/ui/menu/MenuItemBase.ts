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

        private _fnc: Function;
        private _objMenuItemPai: MenuItem;
        private _objUiMenuItem: NativeUI.UIMenuItem;
        private _strDescricao: string;
        private _strTitulo: string;

        protected get fnc(): Function
        {
            return this._fnc;
        }

        protected set fnc(fnc: Function)
        {
            this._fnc = fnc;
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

        protected get strDescricao(): string
        {
            return this._strDescricao;
        }

        protected set strDescricao(strDescricao: string)
        {
            this._strDescricao = strDescricao;
        }

        protected get strTitulo(): string
        {
            return this._strTitulo;
        }

        protected set strTitulo(strTitulo: string)
        {
            this._strTitulo = strTitulo;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItem, strTitulo: string, strDescricao: string = null, fnc: Function = null)
        {
            super();

            this.fnc = fnc;
            this.objMenuItemPai = objMenuItemPai;
            this.strDescricao = strDescricao;
            this.strTitulo = strTitulo;
        }

        // #endregion Construtores

        // #region Métodos

        protected abstract chamarFnc(): void;

        protected abstract getObjUiMenuItem(): NativeUI.UIMenuItem

        public montarMenu(objUiMenu: NativeUI.UIMenu): void
        {
            if (objUiMenu == null)
            {
                return;
            }

            this.objUiMenuItem.Selected = false;

            objUiMenu.AddItem(this.objUiMenuItem);
        }

        public processarOnItemSelecionado(objMenu: MenuBase, objUiMenuItemSelecionado: NativeUI.UIMenuItem): boolean
        {
            if (this.objUiMenuItem != objUiMenuItemSelecionado)
            {
                return false;
            }

            this.selecionar(objMenu);

            return true;
        }

        protected selecionar(objMenu: MenuBase): void
        {
            if (this.fnc != null)
            {
                this.chamarFnc();
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}