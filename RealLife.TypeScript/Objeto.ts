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
            this.dispararEvtOnDestruirListener();
        }

        protected finalizar(): void
        {
            Log.i.debug("Finalizando inicialização: {0}.", this.constructor.name);
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

        // #region OnDestruirListener

        private _arrEvtOnDestruirListener: Array<OnDestruirListener>;

        private get arrEvtOnDestruirListener(): Array<OnDestruirListener>
        {
            if (this._arrEvtOnDestruirListener != null)
            {
                return this._arrEvtOnDestruirListener;
            }

            this._arrEvtOnDestruirListener = new Array<OnDestruirListener>();

            return this._arrEvtOnDestruirListener;
        }

        public addEvtOnDestruirListener(evtOnDestruirListener: OnDestruirListener): void
        {
            if (evtOnDestruirListener == null)
            {
                return;
            }

            if (this.arrEvtOnDestruirListener.indexOf(evtOnDestruirListener) > -1)
            {
                return;
            }

            this.arrEvtOnDestruirListener.push(evtOnDestruirListener);
        }

        private dispararEvtOnDestruirListener(): void
        {
            if (this.arrEvtOnDestruirListener.length == 0)
            {
                return;
            }

            this.arrEvtOnDestruirListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onDestruir(this);
            });
        }

        public removerEvtOnDestruirListener(evt: OnDestruirListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnDestruirListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnDestruirListener.splice(this.arrEvtOnDestruirListener.indexOf(evt), 1);
        }

        // #endregion OnDestruirListener

        // #endregion Eventos
    }
}