/// <reference path="../RealLifeShared.TypeScript/dominio/ErroDominio.ts"/>

module RealLife
{
    // #region Importações

    import ErroDominio = RealLifeShared.ErroDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Screen extends Objeto implements OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Screen;

        public static get i(): Screen
        {
            if (Screen._i != null)
            {
                return Screen._i;
            }

            Screen._i = new Screen();

            return Screen._i;
        }

        private _booMostrarMouse: boolean;
        private _dttUltimoFrame: Date = new Date();
        private _objResolucao: System.Drawing.Size;

        public get booMostrarMouse(): boolean
        {
            return this._booMostrarMouse;
        }

        public set booMostrarMouse(booMostrarMouse: boolean)
        {
            if (this._booMostrarMouse == booMostrarMouse)
            {
                return;
            }

            this._booMostrarMouse = booMostrarMouse;

            this.setBooMostrarMouse(this._booMostrarMouse);
        }

        private get dttUltimoFrame(): Date
        {
            return this._dttUltimoFrame;
        }

        private set dttUltimoFrame(dttUltimoFrame: Date)
        {
            this._dttUltimoFrame = dttUltimoFrame;
        }

        public get objResolucao(): System.Drawing.Size
        {
            if (this._objResolucao != null)
            {
                return this._objResolucao;
            }

            this._objResolucao = API.getScreenResolution();

            return this._objResolucao;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public fadeIn(intDuracao: number): void
        {
            API.callNative("DO_SCREEN_FADE_IN", intDuracao);
        }

        public fadeOut(intDuracao: number): void
        {
            API.callNative("DO_SCREEN_FADE_OUT", intDuracao);
        }

        public notificar(strNotificacao: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strNotificacao))
            {
                return;
            }

            API.sendNotification(strNotificacao);
        }

        public notificarErro(objErro: ErroDominio): void
        {
            if (objErro == null)
            {
                return;
            }

            API.sendNotification("~r~Erro: ~s~" + objErro.strMensagem);
        }

        private processarOnUpdate(): void
        {
            var dttNow = new Date();

            var fltDelta = ((dttNow.getTime() - this.dttUltimoFrame.getTime()) / 1000);

            this.dispararEvtOnUpdateListener(fltDelta);

            this.dttUltimoFrame = dttNow;
        }

        private setBooMostrarMouse(booMostrarMouse: boolean): void
        {
            API.showCursor(booMostrarMouse);
        }

        protected setEventos(): void
        {
            super.setEventos();

            ScriptManager.i.addEvtOnUpdateListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onUpdate(fltDelta: number): void
        {
            this.processarOnUpdate();
        }

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

        private dispararEvtOnUpdateListener(fltDelta: number): void
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

                evt.onUpdate(fltDelta);
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