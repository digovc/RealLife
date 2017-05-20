module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Chat extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Chat;

        public static get i(): Chat
        {
            if (Chat._i != null)
            {
                return Chat._i;
            }

            Chat._i = new Chat();

            return Chat._i;
        }

        private _booAtivo: boolean;
        private _booVisivel: boolean;

        public get booAtivo(): boolean
        {
            this._booAtivo = API.getCanOpenChat();

            return this._booAtivo;
        }

        public set booAtivo(booAtivo: boolean)
        {
            this._booAtivo = booAtivo;

            API.setCanOpenChat(this._booAtivo);
        }

        public get booVisivel(): boolean
        {
            this._booVisivel = API.getChatVisible();

            return this._booVisivel;
        }

        public set booVisivel(booVisivel: boolean)
        {
            this._booVisivel = booVisivel;

            this.setBooVisivel(this._booVisivel);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public debug(strLog: string): void
        {
            strLog = ("~y~Debug: ~s~" + strLog);

            API.sendChatMessage(strLog);
        }

        public enviar(strMensagem: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strMensagem))
            {
                return;
            }

            API.sendChatMessage(strMensagem);
        }

        public processarEvtOnChatCommandListener(strComando: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strComando))
            {
                return;
            }

            this.dispararEvtOnChatCommandListener(strComando);
        }

        private setBooVisivel(booVisivel: boolean): void
        {
            if (AppRealLife.i.booDebug && !booVisivel)
            {
                return;
            }

            API.setChatVisible(booVisivel);
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

        // #endregion Eventos
    }
}