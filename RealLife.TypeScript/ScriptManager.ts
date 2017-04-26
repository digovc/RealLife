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

        protected inicializar(): void
        {
            super.inicializar();

            AppRealLife.i.iniciar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            API.onChatCommand.connect((strComando: string) => { this.dispararEvtOnChatCommandListener(strComando); });
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
            if (Utils.getBooStrVazia(strComando))
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

                evt.onUpdate();
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