/// <reference path="../../../Web.TypeScript/html/Div.ts"/>

module RealLifeUi
{
    // #region Importações

    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagMissaoAbertura extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagMissaoAbertura;

        public static get i(): PagMissaoAbertura
        {
            if (PagMissaoAbertura._i != null)
            {
                return PagMissaoAbertura._i;
            }

            PagMissaoAbertura._i = new PagMissaoAbertura();

            return PagMissaoAbertura._i;
        }

        private _divConteudo: Div;
        private _divNome: Div;
        private _divTextoMissao: Div;

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div("divConteudo");

            return this._divConteudo;
        }

        private get divNome(): Div
        {
            if (this._divNome != null)
            {
                return this._divNome;
            }

            this._divNome = new Div("divNome");

            return this._divNome;
        }

        private get divTextoMissao(): Div
        {
            if (this._divTextoMissao != null)
            {
                return this._divTextoMissao;
            }

            this._divTextoMissao = new Div("divTextoMissao");

            return this._divTextoMissao;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public animar(): void
        {
            this.divConteudo.jq.animate({ "margin-bottom": "0vw" }, 350, "swing");
            this.divNome.jq.animate({ "margin-left": "10vw" }, 6000, "swing");
            this.divTextoMissao.jq.animate({ "margin-left": "3vw" }, 6000, "swing");

            window.setTimeout((() => { this.animar2(); }), 5000);
        }

        private animar2(): void
        {
            this.divConteudo.jq.animate({ "margin-bottom": "-12vw" }, 150, "swing");
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.animar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}