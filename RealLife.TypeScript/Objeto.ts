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

        public destruir(): void
        {
        }

        protected finalizar(): void
        {
            Log.i.debug("Finalizando inicializacao: {0}.", this.constructor.name);
        }

        protected inicializar(): void
        {
            Log.i.debug("Inicializando: {0}.", this.constructor.name);
        }

        public iniciar(): void
        {
            this.inicializar();
            this.setEventos();
            this.finalizar();
        }

        protected setEventos(): void
        {
            Log.i.debug("Configurando os eventos {0}.", this.constructor.name);
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}