/// <reference path="../../RealLifeShared.TypeScript/dominio/DominioRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import DominioRealLifeBase = RealLifeShared.DominioRealLifeBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ServerRealLife extends Objeto
    {
        // #region Constantes

        private static get STR_SYNC_TAG(): string { return "STR_SYNC_TAG" };

        // #endregion Constantes

        // #region Atributos

        private static _i: ServerRealLife;

        public static get i(): ServerRealLife
        {
            if (ServerRealLife._i != null)
            {
                return ServerRealLife._i;
            }

            ServerRealLife._i = new ServerRealLife();

            return ServerRealLife._i;
        }

        private _arrFncSync: Array<FuncSync>;

        private get arrFncSync(): Array<FuncSync>
        {
            if (this._arrFncSync != null)
            {
                return this._arrFncSync;
            }

            this._arrFncSync = new Array<FuncSync>();

            return this._arrFncSync;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executar(strMetodo: string, ...arrObjArg: Object[]): void
        {
            if (UtilsRealLife.getBooStrVazia(strMetodo))
            {
                return;
            }

            var arrStrArg = new Array<string>();

            arrObjArg.forEach((objArg: Object) => { arrStrArg.push(this.getStrArgumento(objArg)); });

            API.triggerServerEvent(strMetodo, arrStrArg);
        }

        public executarSync(fnc: Function, strMetodo: string, ...arrObjArg: Object[]): void
        {
            if (UtilsRealLife.getBooStrVazia(strMetodo))
            {
                return;
            }

            var arrStrArg = new Array<string>();

            arrStrArg.push(ServerRealLife.STR_SYNC_TAG);

            arrObjArg.forEach((objArg: Object) => { arrStrArg.push(JSON.stringify(objArg)); });

            this.arrFncSync.push(new FuncSync(fnc, strMetodo));

            API.triggerServerEvent(strMetodo, arrStrArg);
        }

        public getStrArgumento(objArg: Object): string
        {
            if (objArg == null)
            {
                return null;
            }

            if (objArg instanceof Boolean)
            {
                return objArg.toString();
            }

            if (objArg instanceof Number)
            {
                return objArg.toString();
            }

            if (objArg instanceof String)
            {
                return (objArg as string);
            }

            return JSON.stringify(objArg);
        }

        public processarEvtOnServerEventTriggerListener(strMetodo: string, arrObjArg: Object[]): void
        {
            // TODO: Havaliar como capturar todos os argumentos passados pelo servidor.

            if (this.processarOnServerEventTriggerSync(strMetodo, arrObjArg))
            {
                return;
            }

            this.dispararEvtOnServerEventTriggerListener(strMetodo, arrObjArg);
        }

        private processarOnServerEventTriggerSync(strMetodo: string, arrObjArg: Object[]): boolean
        {
            if (arrObjArg == null)
            {
                return false;
            }

            if (arrObjArg.length < 1)
            {
                return;
            }

            if (arrObjArg[0] != ServerRealLife.STR_SYNC_TAG)
            {
                return false;
            }

            arrObjArg.splice(0, 1);

            for (var i = 0; i < this.arrFncSync.length; i++)
            {
                if (this.arrFncSync[i].booRespondido)
                {
                    continue;
                }

                if (strMetodo != this.arrFncSync[i].strMetodo)
                {
                    continue;
                }

                this.arrFncSync[i].fncSync(arrObjArg);

                this.arrFncSync[i].booRespondido = true;
            }

            for (var i = 0; i < this.arrFncSync.length; i++)
            {
                if (!this.arrFncSync[i].booRespondido)
                {
                    continue;
                }

                this.arrFncSync.splice(this.arrFncSync.indexOf(this.arrFncSync[i]), 1);

                i--;
            }
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

        private dispararEvtOnServerEventTriggerListener(strMetodoNome: string, arrObjArg: Object[]): void
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