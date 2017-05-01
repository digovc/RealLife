/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class DivMenuBase extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrDivMenuItem: Array<DivMenuItem>;
        private _divContagem: Div;
        private _divConteudo: Div;
        private _divMenuItemSelecionado: DivMenuItem;

        private get arrDivMenuItem(): Array<DivMenuItem>
        {
            if (this._arrDivMenuItem != null)
            {
                return this._arrDivMenuItem;
            }

            this._arrDivMenuItem = this.getArrDivMenuItem();

            return this._arrDivMenuItem;
        }

        private get divContagem(): Div
        {
            if (this._divContagem != null)
            {
                return this._divContagem;
            }

            this._divContagem = new Div(this.strId + "_divContagem");

            return this._divContagem;
        }

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div(this.strId + "_divConteudo");

            return this._divConteudo;
        }

        public get divMenuItemSelecionado(): DivMenuItem
        {
            return this._divMenuItemSelecionado;
        }

        public set divMenuItemSelecionado(divMenuItemSelecionado: DivMenuItem)
        {
            this._divMenuItemSelecionado = divMenuItemSelecionado;
        }

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

        public esconder(enmAnimacaoTipo: Web.Tag_EnmAnimacaoTipo = Web.Tag_EnmAnimacaoTipo.IMEDIATAMENTE): void
        {
            super.esconder(enmAnimacaoTipo);

            this.divMenuItemSelecionado = null;
        }

        protected finalizar(): void
        {
            super.finalizar();

            this.finalizarArrDivMenuItem();
        }

        private finalizarArrDivMenuItem(): void
        {
            this.arrDivMenuItem.forEach((divMenuItem: DivMenuItem) => { divMenuItem.iniciar(); });
        }

        private getArrDivMenuItem(): Array<DivMenuItem>
        {
            var arrDivMenuItemResultado = new Array<DivMenuItem>();

            this.inicializarArrDivMenuItem(arrDivMenuItemResultado);

            arrDivMenuItemResultado.forEach((divMenuItem: DivMenuItem) => { divMenuItem.divMenuPai = this; });

            return arrDivMenuItemResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarDivContagem();
        }

        protected abstract inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void;

        private inicializarDivContagem(): void
        {
            var strConteudo = ("1/" + this.arrDivMenuItem.length.toString());

            this.divContagem.strConteudo = strConteudo;
        }

        public mostrar(enmAnimacaoTipo: Web.Tag_EnmAnimacaoTipo = Web.Tag_EnmAnimacaoTipo.IMEDIATAMENTE)
        {
            super.mostrar(Web.Tag_EnmAnimacaoTipo.IMEDIATAMENTE);

            if (this.arrDivMenuItem.length < 1)
            {
                return;
            }

            this.arrDivMenuItem[0].receberFoco();
        }

        protected montarLayout(): void
        {
            super.montarLayout();

            this.montarLayoutArrDivMenuItem();
        }

        private montarLayoutArrDivMenuItem(): void
        {
            this.arrDivMenuItem.forEach((divMenuItem: DivMenuItem) => { this.divConteudo.jq.append(divMenuItem.strLayoutFixo); });
        }

        public selecionar(): void
        {
            if (!this.booVisivel)
            {
                return;
            }

            if (this.divMenuItemSelecionado == null)
            {
                return;
            }

            this.divMenuItemSelecionado.selecionar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}