/// <reference path="DivMissaoValorBase.ts"/>

module RealLifeUi
{
    // #region Importações

    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMissaoDinheiro extends DivMissaoValorBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivMissaoDinheiro.name);
        }

        // #endregion Construtores

        // #region Métodos

        public animar(): void
        {
            this.divValor.strConteudo = null;

            this.booVisivel = true;

            this.jq.animate({ "margin-left": "0px" }, 250, "swing", (() => { this.animar2(); }));
        }

        private animar2(): void
        {
            window.setTimeout((() => { this.animar3(); }), 250);
        }

        private animar3(): void
        {
            var objJQueryAnimationOptions: JQueryAnimationOptions =
                {
                    complete: (() => { this.animar4(); }),
                    duration: 1000,
                    easing: "swing",
                    step: ((now: number) => { this.atualizarDivValor(now); }),
                };

            this.divValor.jq.prop("value", 0).animate({ "value": PagMissaoConclusao.i.objMissaoConclusao.intDinheiro }, objJQueryAnimationOptions);
        }

        private animar4(): void
        {
            PagMissaoConclusao.i.animar3();
        }

        private atualizarDivValor(intValor: number): void
        {
            this.divValor.strConteudo = Math.ceil(intValor).toString();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}