/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItem extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrDivMenuItem: Array<DivMenuItem>;
        private _divMenu: DivMenuBase;
        private _divMenuItemPai: DivMenuItem;
        private _divNome: Div;
        private _divValor: Div;
        private _fncSelecionar: Function;

        public get arrDivMenuItem(): Array<DivMenuItem>
        {
            if (this._arrDivMenuItem != null)
            {
                return this._arrDivMenuItem;
            }

            this._arrDivMenuItem = this.getArrDivMenuItem();

            return this._arrDivMenuItem;
        }

        public get divMenu(): DivMenuBase
        {
            return this._divMenu;
        }

        public set divMenu(divMenu: DivMenuBase)
        {
            this._divMenu = divMenu;
        }

        public get divMenuItemPai(): DivMenuItem
        {
            return this._divMenuItemPai;
        }

        public set divMenuItemPai(divMenuItemPai: DivMenuItem)
        {
            this._divMenuItemPai = divMenuItemPai;
        }

        private get divNome(): Div
        {
            if (this._divNome != null)
            {
                return this._divNome;
            }

            this._divNome = new Div(this.strId + "_divNome");

            return this._divNome;
        }

        public get divValor(): Div
        {
            if (this._divValor != null)
            {
                return this._divValor;
            }

            this._divValor = new Div(this.strId + "_divValor");

            return this._divValor;
        }

        private get fncSelecionar(): Function
        {
            return this._fncSelecionar;
        }

        private set fncSelecionar(fncSelecionar: Function)
        {
            this._fncSelecionar = fncSelecionar;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(strNome: string, fncSelecionar: Function = null, strValor: string = null)
        {
            super(null);

            this.fncSelecionar = fncSelecionar;
            this.strId = (DivMenuItem.name + "_" + this.intObjetoId);
            this.strNome = strNome;

            this.divValor.strConteudo = strValor;
        }

        // #endregion Construtores

        // #region Métodos

        private getArrDivMenuItem(): Array<DivMenuItem>
        {
            var arrDivMenuItemResultado = new Array<DivMenuItem>();

            this.inicializarArrDivMenuItem(arrDivMenuItemResultado);

            arrDivMenuItemResultado.forEach((divMenuItem: DivMenuItem) =>
            {
                divMenuItem.divMenuItemPai = this;
                divMenuItem.divMenu = this.divMenu;
            });

            return arrDivMenuItemResultado;
        }

        protected getStrConstanteLayoutFixoNome(): string
        {
            //return super.getStrConstanteLayoutFixoNome();

            return (DivMenuItem.name + "_layoutFixo");
        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            strLayoutFixo = strLayoutFixo.replace("_div_menu_item_id", this.strId);
            strLayoutFixo = strLayoutFixo.replace("_div_nome_conteudo", this.strNome);

            strLayoutFixo = strLayoutFixo.replace("_div_nome_id", this.divNome.strId);

            strLayoutFixo = strLayoutFixo.replace("_div_valor_conteudo", (!Utils.getBooStrVazia(this.divValor.strConteudo) ? this.divValor.strConteudo : Utils.STR_VAZIA));
            strLayoutFixo = strLayoutFixo.replace("_div_valor_id", this.divValor.strId);

            return strLayoutFixo;
        }

        public perderFoco(): void
        {
            super.perderFoco();

            this.jq.css("background-color", Utils.STR_VAZIA);
            this.jq.css("color", Utils.STR_VAZIA);
        }

        public receberFoco(): void
        {
            super.receberFoco();

            this.jq.css("background-color", "rgba(255,255,255,.85)");
            this.jq.css("color", "black");

            this.divMenu.divMenuItemFocado = this;
        }

        public selecionar(): void
        {
            this.divMenu.montarMenu(this.arrDivMenuItem);

            if (this.fncSelecionar != null)
            {
                this.fncSelecionar(this);
            }
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}