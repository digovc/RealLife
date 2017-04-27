module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMissaoResultado extends DivMissaoBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivMissaoResultado.name);
        }

        // #endregion Construtores

        // #region Métodos

        public animar(): void
        {
            this.booVisivel = true;

            this.jq.animate({ "margin-left": "0px" }, 250, "swing", (() => { this.animar2(); }));
        }

        private animar2(): void
        {
            window.setTimeout((() => { PagMissaoConclusao.i.animar2(); }), 1000);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}