/// <reference path="DivMissaoValorBase.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMissaoRp extends DivMissaoValorBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivMissaoRp.name);
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
            var objJQueryAnimationOptions: JQueryAnimationOptions =
                {
                    complete: (() => { this.animar3(); }),
                    duration: 1000,
                    easing: "swing",
                    step: ((now: number) => { this.atualizarDivValor(now); }),
                };

            this.divValor.jq.prop("value", 0).animate({ "value": PagMissaoConclusao.i.objMissaoConclusao.intReputacao }, objJQueryAnimationOptions);
        }

        private animar3(): void
        {
            PagMissaoConclusao.i.animar4();
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