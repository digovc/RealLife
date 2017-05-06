/// <reference path="../../evento/OnUpdateListener.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados

    // #endregion Enumerados

    export abstract class MenuBase extends Objeto implements OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booVisivel: boolean;
        private _cor: Cor = new Cor();
        private _enmAncora: Enums.MenuAnchor = Enums.MenuAnchor.TopLeft;
        private _intXOffset: number = 50;
        private _intYOffset: number = 50;
        private _objUiMenu: NativeUI.UIMenu;
        private _strSubTitulo: string;
        private _strTitulo: string = "Desconhecido";

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

        private get objUiMenu(): NativeUI.UIMenu
        {
            if (this._objUiMenu != null)
            {
                return this._objUiMenu;
            }

            //this._objUiMenu = API.createMenu(this.strTitulo, this.strSubTitulo, this.intXOffset, this.intYOffset, this.enmAncora);
            this._objUiMenu = API.createMenu("Teste", "SubTítulo", this.intXOffset, this.intYOffset, this.enmAncora);

            return this._objUiMenu;
        }

        protected get strSubTitulo(): string
        {
            return this._strSubTitulo;
        }

        protected set strSubTitulo(strSubTitulo: string)
        {
            if (this._strSubTitulo == strSubTitulo)
            {
                return;
            }

            this._strSubTitulo = strSubTitulo;

            this.setStrSubTitulo(this._strSubTitulo);
        }

        protected get strTitulo(): string
        {
            return this._strTitulo;
        }

        protected set strTitulo(strTitulo: string)
        {
            if (this._strTitulo == strTitulo)
            {
                return;
            }

            this._strTitulo = strTitulo;

            this.setStrTitulo(this._strTitulo);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.objUiMenu.AddItem(API.createMenuItem("Opção 1", "Teste..."));
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

        private setStrSubTitulo(strSubTitulo: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strSubTitulo))
            {
                return;
            }

            API.setMenuSubtitle(this.objUiMenu, strSubTitulo);
        }

        private setStrTitulo(strTitulo: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strTitulo))
            {
                return;
            }

            API.setMenuTitle(this.objUiMenu, strTitulo);
        }

        // #endregion Métodos

        // #region Eventos

        public onUpdate(): void
        {
            this.processarOnUpdate();
        }

        // #endregion Eventos
    }
}