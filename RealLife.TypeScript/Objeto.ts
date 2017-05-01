module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

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

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}