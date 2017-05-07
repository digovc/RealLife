/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>

module RealLifeUi
{
    // #region Importações

    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMissaoRpProgresso extends DivMissaoBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divNivelAtual: Div;
        private _divNivelProximo: Div;
        private _divProgresso: Div;

        private get divNivelAtual(): Div
        {
            if (this._divNivelAtual != null)
            {
                return this._divNivelAtual;
            }

            this._divNivelAtual = new Div(this.strId + "_divNivelAtual");

            return this._divNivelAtual;
        }

        private get divNivelProximo(): Div
        {
            if (this._divNivelProximo != null)
            {
                return this._divNivelProximo;
            }

            this._divNivelProximo = new Div(this.strId + "_divNivelProximo");

            return this._divNivelProximo;
        }

        private get divProgresso(): Div
        {
            if (this._divProgresso != null)
            {
                return this._divProgresso;
            }

            this._divProgresso = new Div(this.strId + "_divProgresso");

            return this._divProgresso;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivMissaoRpProgresso.name);
        }

        // #endregion Construtores

        // #region Métodos

        public animar(): void
        {
            this.divNivelAtual.strConteudo = PagMissaoConclusao.i.objMissaoConclusao.intNivelAtual.toString();
            this.divNivelProximo.strConteudo = (PagMissaoConclusao.i.objMissaoConclusao.intNivelAtual + 1).toString();

            this.booVisivel = true;

            this.jq.animate({ "margin-left": "0px" }, 250, "swing", (() => { this.animar2(); }));
        }

        private animar2(): void
        {
            window.setTimeout((() => { this.animar3(); }), 250);
        }

        private animar3(): void
        {
            this.divProgresso.jq.animate({ "width": "55%" }, 1000, "swing", (() => { this.animarFinalizar(); }));
        }

        private animarFinalizar(): void
        {
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}