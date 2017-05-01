/// <reference path="AppRealLife.ts"/>
/// <reference path="Objeto.ts"/>
/// <reference path="typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts" />

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptManager extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: ScriptManager;

        public static get i(): ScriptManager
        {
            if (ScriptManager._i != null)
            {
                return ScriptManager._i;
            }

            ScriptManager._i = new ScriptManager();

            return ScriptManager._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected finalizar(): void
        {
            super.finalizar();

            AppRealLife.i.iniciar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            API.onChatCommand.connect((strComando: string) => { this.dispararEvtOnChatCommandListener(strComando); });
            API.onKeyUp.connect((objSender: any, arg: any) => { this.dispararEvtOnKeyUpListener(objSender, arg); });
            API.onServerEventTrigger.connect((strMetodoNome: string, arrObjArg: System.Array<any>) => { this.dispararEvtOnServerEventTriggerListener(strMetodoNome, arrObjArg); });
            API.onUpdate.connect(() => { this.dispararEvtOnUpdateListener(); });
        }

        // #endregion Métodos

        // #region Eventos

        // #region OnChatCommandListener

        private _arrEvtOnChatCommandListener: Array<OnChatCommandListener>;

        private get arrEvtOnChatCommandListener(): Array<OnChatCommandListener>
        {
            if (this._arrEvtOnChatCommandListener != null)
            {
                return this._arrEvtOnChatCommandListener;
            }

            this._arrEvtOnChatCommandListener = new Array<OnChatCommandListener>();

            return this._arrEvtOnChatCommandListener;
        }

        public addEvtOnChatCommandListener(evtOnChatCommandListener: OnChatCommandListener): void
        {
            if (evtOnChatCommandListener == null)
            {
                return;
            }

            if (this.arrEvtOnChatCommandListener.indexOf(evtOnChatCommandListener) > -1)
            {
                return;
            }

            this.arrEvtOnChatCommandListener.push(evtOnChatCommandListener);
        }

        private dispararEvtOnChatCommandListener(strComando: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strComando))
            {
                return;
            }

            if (this.arrEvtOnChatCommandListener.length == 0)
            {
                return;
            }

            this.arrEvtOnChatCommandListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onChatCommand(strComando);
            });
        }

        public removerEvtOnChatCommandListener(evt: OnChatCommandListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnChatCommandListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnChatCommandListener.splice(this.arrEvtOnChatCommandListener.indexOf(evt), 1);
        }

        // #endregion OnChatCommandListener

        // #region OnKeyUpListener

        private _arrEvtOnKeyUpListener: Array<OnKeyUpListener>;

        private get arrEvtOnKeyUpListener(): Array<OnKeyUpListener>
        {
            if (this._arrEvtOnKeyUpListener != null)
            {
                return this._arrEvtOnKeyUpListener;
            }

            this._arrEvtOnKeyUpListener = new Array<OnKeyUpListener>();

            return this._arrEvtOnKeyUpListener;
        }

        public addEvtOnKeyUpListener(evtOnKeyUpListener: OnKeyUpListener): void
        {
            if (evtOnKeyUpListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeyUpListener.indexOf(evtOnKeyUpListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeyUpListener.push(evtOnKeyUpListener);
        }

        private dispararEvtOnKeyUpListener(objSender: Object, arg: System.Windows.Forms.KeyEventArgs): void
        {
            if (objSender == null)
            {
                return;
            }

            if (arg == null)
            {
                return;
            }

            if (this.arrEvtOnKeyUpListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeyUpListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeyUp(objSender, arg);
            });
        }

        public removerEvtOnKeyUpListener(evt: OnKeyUpListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeyUpListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeyUpListener.splice(this.arrEvtOnKeyUpListener.indexOf(evt), 1);
        }

        // #endregion OnKeyUpListener

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

        private dispararEvtOnServerEventTriggerListener(strMetodoNome: string, arrObjArg: System.Array<any>): void
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

        // #region OnUpdateListener

        private _arrEvtOnUpdateListener: Array<OnUpdateListener>;

        private get arrEvtOnUpdateListener(): Array<OnUpdateListener>
        {
            if (this._arrEvtOnUpdateListener != null)
            {
                return this._arrEvtOnUpdateListener;
            }

            this._arrEvtOnUpdateListener = new Array<OnUpdateListener>();

            return this._arrEvtOnUpdateListener;
        }

        public addEvtOnUpdateListener(evtOnUpdateListener: OnUpdateListener): void
        {
            if (evtOnUpdateListener == null)
            {
                return;
            }

            if (this.arrEvtOnUpdateListener.indexOf(evtOnUpdateListener) > -1)
            {
                return;
            }

            this.arrEvtOnUpdateListener.push(evtOnUpdateListener);
        }

        private dispararEvtOnUpdateListener(): void
        {
            if (this.arrEvtOnUpdateListener.length == 0)
            {
                return;
            }

            this.arrEvtOnUpdateListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onUpdate(0);
            });
        }

        public removerEvtOnUpdateListener(evt: OnUpdateListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnUpdateListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnUpdateListener.splice(this.arrEvtOnUpdateListener.indexOf(evt), 1);
        }

        // #endregion OnUpdateListener

        // #endregion Eventos
    }
}

API.onResourceStart.connect(() => { RealLife.ScriptManager.i.iniciar(); });