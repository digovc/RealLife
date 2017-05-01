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
        private _divMenuItemPai: DivMenuItem;
        private _divMenuPai: DivMenuBase;
        private _divNome: Div;
        private _divValor: Div;

        private get arrDivMenuItem(): Array<DivMenuItem>
        {
            if (this._arrDivMenuItem != null)
            {
                return this._arrDivMenuItem;
            }

            this._arrDivMenuItem = this.getArrDivMenuItem();

            return this._arrDivMenuItem;
        }

        public get divMenuItemPai(): DivMenuItem
        {
            return this._divMenuItemPai;
        }

        public set divMenuItemPai(divMenuItemPai: DivMenuItem)
        {
            this._divMenuItemPai = divMenuItemPai;
        }

        public get divMenuPai(): DivMenuBase
        {
            return this._divMenuPai;
        }

        public set divMenuPai(divMenuPai: DivMenuBase)
        {
            this._divMenuPai = divMenuPai;
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

        // #endregion Atributos

        // #region Construtores

        constructor(intIndex: number, strNome: string)
        {
            super(DivMenuItem.name + "_" + intIndex.toString());

            this.strNome = strNome;
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
                divMenuItem.divMenuPai = this.divMenuPai;
            });

            return arrDivMenuItemResultado;
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
            strLayoutFixo = strLayoutFixo.replace("_div_valor_id", this.divValor.strId);

            return strLayoutFixo;
        }

        public perderFoco(): void
        {
            super.perderFoco();

            this.jq.css("background-color", Utils.STR_VAZIA);
            this.jq.css("color", Utils.STR_VAZIA);

            this.divMenuPai.divMenuItemSelecionado = null;
        }

        public receberFoco(): void
        {
            super.receberFoco();

            this.jq.css("background-color", "white");
            this.jq.css("color", "black");

            this.divMenuPai.divMenuItemSelecionado = this;
        }

        public selecionar(): void
        {
            if (this.arrDivMenuItem.length > 0)
            {
                // TODO: Montar menu filho;
                return;
            }

            this.dispararEvtOnItemSelecionadoListener();
        }

        // #endregion Métodos

        // #region Eventos

        // #region OnItemSelecionadoListener

        private _arrEvtOnItemSelecionadoListener: Array<OnItemSelecionadoListener>;

        private get arrEvtOnItemSelecionadoListener(): Array<OnItemSelecionadoListener>
        {
            if (this._arrEvtOnItemSelecionadoListener != null)
            {
                return this._arrEvtOnItemSelecionadoListener;
            }

            this._arrEvtOnItemSelecionadoListener = new Array<OnItemSelecionadoListener>();

            return this._arrEvtOnItemSelecionadoListener;
        }

        public addEvtOnItemSelecionadoListener(evtOnItemSelecionadoListener: OnItemSelecionadoListener): void
        {
            if (evtOnItemSelecionadoListener == null)
            {
                return;
            }

            if (this.arrEvtOnItemSelecionadoListener.indexOf(evtOnItemSelecionadoListener) > -1)
            {
                return;
            }

            this.arrEvtOnItemSelecionadoListener.push(evtOnItemSelecionadoListener);
        }

        private dispararEvtOnItemSelecionadoListener(): void
        {
            if (this.arrEvtOnItemSelecionadoListener.length == 0)
            {
                return;
            }

            this.arrEvtOnItemSelecionadoListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onItemSelecionado(this);
            });
        }

        public removerEvtOnItemSelecionadoListener(evt: OnItemSelecionadoListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnItemSelecionadoListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnItemSelecionadoListener.splice(this.arrEvtOnItemSelecionadoListener.indexOf(evt), 1);
        }

        // #endregion OnItemSelecionadoListener

        // #endregion Eventos
    }
}