/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/evento/OnGameKeyListener.ts"/>
/// <reference path="../../evento/OnUpdateListener.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;
    import OnGameKeyListener = RealLifeShared.OnGameKeyListener;

    // #endregion Importações

    // #region Enumerados

    // #endregion Enumerados

    export abstract class MenuBase extends Objeto implements OnGameKeyListener, OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjMenuItem: Array<MenuItemBase>;
        private _arrObjMenuItemAtual: Array<MenuItemBase>;
        private _booVisivel: boolean;
        private _cor: Cor = new Cor();
        private _enmAncora: Enums.MenuAnchor = Enums.MenuAnchor.TopLeft;
        private _intXOffset: number = 50;
        private _intYOffset: number = 50;
        private _objMenuItemSelecionado: MenuItem;
        private _objUiMenu: NativeUI.UIMenu;
        private _strTitulo: string;
        private _strTituloAtual: string;

        public get arrObjMenuItem(): Array<MenuItemBase>
        {
            if (this._arrObjMenuItem != null)
            {
                return this._arrObjMenuItem;
            }

            this._arrObjMenuItem = this.getArrObjMenuItem();

            return this._arrObjMenuItem;
        }

        private get arrObjMenuItemAtual(): Array<MenuItemBase>
        {
            return this._arrObjMenuItemAtual;
        }

        private set arrObjMenuItemAtual(arrObjMenuItemAtual: Array<MenuItemBase>)
        {
            this._arrObjMenuItemAtual = arrObjMenuItemAtual;
        }

        public get booVisivel(): boolean
        {
            return this._booVisivel;
        }

        public set booVisivel(booVisivel: boolean)
        {
            if (this._booVisivel == booVisivel)
            {
                return;
            }

            this._booVisivel = booVisivel;

            this.setBooVisivel(this._booVisivel);
        }

        protected get cor(): Cor
        {
            return this._cor;
        }

        protected set cor(cor: Cor)
        {
            this._cor = cor;

            this.setCor(this._cor);
        }

        protected get enmAncora(): Enums.MenuAnchor
        {
            return this._enmAncora;
        }

        protected set enmAncora(enmAncora: Enums.MenuAnchor)
        {
            this._enmAncora = enmAncora;
        }

        protected get intXOffset(): number
        {
            return this._intXOffset;
        }

        protected set intXOffset(intXOffset: number)
        {
            this._intXOffset = intXOffset;
        }

        protected get intYOffset(): number
        {
            return this._intYOffset;
        }

        protected set intYOffset(intYOffset: number)
        {
            this._intYOffset = intYOffset;
        }

        public get objMenuItemSelecionado(): MenuItem
        {
            return this._objMenuItemSelecionado;
        }

        public set objMenuItemSelecionado(objMenuItemSelecionado: MenuItem)
        {
            if (this._objMenuItemSelecionado == objMenuItemSelecionado)
            {
                return;
            }

            this._objMenuItemSelecionado = objMenuItemSelecionado;

            this.setObjMenuItemSelecionado(this._objMenuItemSelecionado);
        }

        public get objUiMenu(): NativeUI.UIMenu
        {
            if (this._objUiMenu != null)
            {
                return this._objUiMenu;
            }

            this._objUiMenu = API.createMenu(this.strTitulo, null, this.intXOffset, this.intYOffset, this.enmAncora);

            return this._objUiMenu;
        }

        private get strTitulo(): string
        {
            return this._strTitulo;
        }

        private set strTitulo(strTitulo: string)
        {
            this._strTitulo = strTitulo;
        }

        private get strTituloAtual(): string
        {
            return this._strTituloAtual;
        }

        private set strTituloAtual(strTituloAtual: string)
        {
            if (this._strTituloAtual == strTituloAtual)
            {
                return;
            }

            this._strTituloAtual = strTituloAtual;

            this.setStrTituloAtual(this._strTituloAtual);
        }

        // #endregion Atributos

        // #region Construtores

        constructor(strTitulo: string)
        {
            super();

            this.strTitulo = strTitulo;
        }

        // #endregion Construtores

        // #region Métodos

        public destruir(): void
        {
            super.destruir();

            this.booVisivel = false;

            Keyboard.i.removerEvtOnGameKeyListener(this);
            Screen.i.removerEvtOnUpdateListener(this);

            this.arrObjMenuItem.forEach((objMenuItem: MenuItem) => { objMenuItem.destruir(); });
        }

        private getArrObjMenuItem(): Array<MenuItemBase>
        {
            var arrObjMenuItemResultado = new Array<MenuItemBase>();

            this.inicializarArrObjMenuItem(arrObjMenuItemResultado);

            return arrObjMenuItemResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.objUiMenu.ResetKey(menuControl.Back);
        }

        protected abstract inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void;

        public montarMenu(arrObjMenuItem: Array<MenuItemBase>): void
        {
            this.arrObjMenuItemAtual = arrObjMenuItem;

            this.objUiMenu.Clear();

            if (this.arrObjMenuItemAtual == null)
            {
                return;
            }

            if (this.arrObjMenuItemAtual == this.arrObjMenuItem)
            {
                this.strTituloAtual = this.strTitulo;
            }

            this.arrObjMenuItemAtual.forEach((objMenuItem: MenuItemBase) => { objMenuItem.montarMenu(); });

            this.objUiMenu.RefreshIndex();

            for (var i = 0; i < this.arrObjMenuItemAtual.length; i++)
            {
                if (this.arrObjMenuItemAtual[i].booSelecionado)
                {
                    this.objUiMenu.CurrentSelection = i;
                    return;
                }
            }
        }

        private processarOnItemSelecionado(objUiMenuItemSelecionado: NativeUI.UIMenuItem): void
        {
            if (this.arrObjMenuItemAtual == null)
            {
                return;
            }

            for (var i = 0; i < this.arrObjMenuItemAtual.length; i++)
            {
                if (this.arrObjMenuItemAtual[i].processarOnItemSelecionado(objUiMenuItemSelecionado))
                {
                    return;
                }
            }
        }

        private processarOnGameKey(enmKey: EnmKey): void
        {
            switch (enmKey)
            {
                case EnmKey.MENU:
                    this.booVisivel = !this.booVisivel;
                    return;

                case EnmKey.MENU_VOLTAR:
                    this.voltar();
                    return;
            }
        }

        private processarOnUpdate(): void
        {
            if (this.booVisivel)
            {
                API.drawMenu(this.objUiMenu);
            }
            else
            {
                Screen.i.removerEvtOnUpdateListener(this);
            }
        }

        private setBooVisivel(booVisivel: boolean): void
        {
            Chat.i.booVisivel = !booVisivel;

            this.objUiMenu.Visible = booVisivel;

            if (booVisivel)
            {
                this.montarMenu(this.arrObjMenuItem);

                Screen.i.addEvtOnUpdateListener(this);
            }
            else
            {
                Screen.i.removerEvtOnUpdateListener(this);
            }
        }

        private setCor(cor: Cor): void
        {
            if (cor == null)
            {
                return;
            }

            API.setMenuBannerRectangle(this.objUiMenu, cor.a, cor.r, cor.g, cor.b);
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.objUiMenu.OnCheckboxChange.connect((objUiMenuSender: NativeUI.UIMenu, objUiMenuItem: NativeUI.UIMenuCheckboxItem, booMarcado: boolean) => { this.processarOnItemSelecionado(objUiMenuItem); });
            this.objUiMenu.OnItemSelect.connect((objUiMenuSender: NativeUI.UIMenu, objUiMenuItem: NativeUI.UIMenuItem, intIndex: number) => { this.processarOnItemSelecionado(objUiMenuItem); });

            Keyboard.i.addEvtOnGameKeyListener(this);
        }

        private setStrTituloAtual(strTituloAtual: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strTituloAtual))
            {
                return;
            }

            API.setMenuTitle(this.objUiMenu, strTituloAtual);
        }

        private setObjMenuItemSelecionado(objMenuItemSelecionado: MenuItem): void
        {
            if (objMenuItemSelecionado == null)
            {
                return;
            }

            this.strTituloAtual = objMenuItemSelecionado.strTitulo;
        }

        protected voltar(): void
        {
            if (this.arrObjMenuItem == this.arrObjMenuItemAtual)
            {
                this.booVisivel = false;
                return;
            }

            if ((this.arrObjMenuItemAtual == null) || (this.arrObjMenuItemAtual.length < 1))
            {
                this.montarMenu(this.arrObjMenuItem);
                return;
            }

            if (this.arrObjMenuItemAtual[0].objMenuItemPai == null)
            {
                this.montarMenu(this.arrObjMenuItem);
                return;
            }

            if (this.arrObjMenuItemAtual[0].objMenuItemPai.objMenuItemPai == null)
            {
                this.montarMenu(this.arrObjMenuItem);
                return;
            }

            if (this.arrObjMenuItemAtual[0].objMenuItemPai.objMenuItemPai.arrObjMenuItem.length < 1)
            {
                this.montarMenu(this.arrObjMenuItem);
                return;
            }

            this.montarMenu(this.arrObjMenuItemAtual[0].objMenuItemPai.objMenuItemPai.arrObjMenuItem);

            this.strTituloAtual = this.arrObjMenuItemAtual[0].objMenuItemPai.objMenuItemPai.strTitulo;
        }

        // #endregion Métodos

        // #region Eventos

        public onGameKey(enmKey: EnmKey): void
        {
            this.processarOnGameKey(enmKey);
        }

        public onUpdate(): void
        {
            this.processarOnUpdate();
        }

        // #endregion Eventos
    }
}