/// <reference path="../RealLifeShared.TypeScript/dominio/ErroDominio.ts"/>

module RealLife
{
    // #region Importa��es

    import ErroDominio = RealLifeShared.ErroDominio;

    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class Screen extends Objeto
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
        private _fltDelta: number;
        private _objMenuPool: NativeUI.MenuPool;
        private _objResolucao: System.Drawing.Size;

        public get booMostrarMouse(): boolean
        {
            return this._booMostrarMouse;
        }

        public set booMostrarMouse(booMostrarMouse: boolean)
        {
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

        public get fltDelta(): number
        {
            if (this._fltDelta != null)
            {
                return this._fltDelta;
            }

            this._fltDelta = this.getFltDelta();

            return this._fltDelta;
        }

        private get objMenuPool(): NativeUI.MenuPool
        {
            if (this._objMenuPool != null)
            {
                return this._objMenuPool;
            }

            this._objMenuPool = API.getMenuPool();

            return this._objMenuPool;
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

        // #region M�todos

        public fadeIn(intDuracao: number): void
        {
            API.callNative("DO_SCREEN_FADE_IN", intDuracao);
        }

        public fadeOut(intDuracao: number): void
        {
            API.callNative("DO_SCREEN_FADE_OUT", intDuracao);
        }

        private getFltDelta(): number
        {
            return API.returnNative("GET_FRAME_TIME", Enums.NativeReturnTypes.Float);
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
            this._fltDelta = null;

            this.processarOnUpdateObjMenuPool();
        }

        private processarOnUpdateObjMenuPool(): void
        {
            this.objMenuPool.ProcessMenus();
        }

        private setBooMostrarMouse(booMostrarMouse: boolean): void
        {
            API.showCursor(booMostrarMouse);
        }

        // #endregion M�todos

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

        public dispararEvtOnUpdateListener(): void
        {
            this.processarOnUpdate();

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