module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected finalizar(): void
        {
        }

        protected inicializar(): void
        {
        }

        public iniciar(): void
        {
            this.inicializar();
            this.setEventos();
            this.finalizar();
        }

        protected setEventos(): void
        {
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}