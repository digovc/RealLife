/// <reference path="../RealLifeShared.TypeScript/dominio/DominioRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import DominioRealLifeBase = RealLifeShared.DominioRealLifeBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Server extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Server;

        public static get i(): Server
        {
            if (Server._i != null)
            {
                return Server._i;
            }

            Server._i = new Server();

            return Server._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executarJson(strMetodoNome: string, objDominio: DominioRealLifeBase): void
        {
            if (UtilsRealLife.getBooStrVazia(strMetodoNome))
            {
                return;
            }

            API.triggerServerEvent(strMetodoNome, JSON.stringify(objDominio));
        }

        // #endregion Métodos

        // #region Eventos

        // #region OnServerEventTriggerListener

        private _arrEvtOnServerEventTriggerListener: Array<OnServerEventTriggerListener>;

        private get arrEvtOnServerEventTriggerListener(): Array<OnServerEventTriggerListener>
        {
            if (this._arrEvtOnServerEventTriggerListener != null)
            {
                return this._arrEvtOnServerEventTriggerListener;
            }

            this._arrEvtOnServerEventTriggerListener = new Array<OnServerEventTriggerListener>();

            return this._arrEvtOnServerEventTriggerListener;
        }

        public addEvtOnServerEventTriggerListener(evtOnServerEventTriggerListener: OnServerEventTriggerListener): void
        {
            if (evtOnServerEventTriggerListener == null)
            {
                return;
            }

            if (this.arrEvtOnServerEventTriggerListener.indexOf(evtOnServerEventTriggerListener) > -1)
            {
                return;
            }

            this.arrEvtOnServerEventTriggerListener.push(evtOnServerEventTriggerListener);
        }

        public dispararEvtOnServerEventTriggerListener(strMetodoNome: string, arrObjArg: System.Array<any>): void
        {
            if (this.arrEvtOnServerEventTriggerListener.length == 0)
            {
                return;
            }

            this.arrEvtOnServerEventTriggerListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onServerEventTrigger(strMetodoNome, arrObjArg);
            });
        }

        public removerEvtOnServerEventTriggerListener(evt: OnServerEventTriggerListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnServerEventTriggerListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnServerEventTriggerListener.splice(this.arrEvtOnServerEventTriggerListener.indexOf(evt), 1);
        }

        // #endregion OnServerEventTriggerListener

        // #endregion Eventos
    }
}