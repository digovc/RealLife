module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivLoginContaCadastro extends DivLoginBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivLoginContaCadastro.name);
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.booVisivel = false;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}