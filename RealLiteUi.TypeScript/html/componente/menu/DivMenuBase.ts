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

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

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

        protected montarLayout(): void
        {
            super.montarLayout();

            this.montarLayoutArrDivMenuItem();
        }

        private montarLayoutArrDivMenuItem(): void
        {
            this.arrDivMenuItem.forEach((divMenuItem: DivMenuItem) => { this.divConteudo.jq.append(divMenuItem.strLayoutFixo); });
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}