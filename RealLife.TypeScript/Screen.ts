/// <reference path="../RealLifeShared.TypeScript/dominio/ErroDominio.ts"/>

module RealLife
{
    // #region Importações

    import ErroDominio = RealLifeShared.ErroDominio;

    // #endregion Importações

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
        private _objResolucao: System.Drawing.Size;
        private _strLegenda: string;

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

        public get objResolucao(): System.Drawing.Size
        {
            if (this._objResolucao != null)
            {
                return this._objResolucao;
            }

            this._objResolucao = API.getScreenResolution();

            return this._objResolucao;
        }

        public get strLegenda(): string
        {
            return this._strLegenda;
        }

        public set strLegenda(strLegenda: string)
        {
            this._strLegenda = strLegenda;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public fadeIn(intDuracaoMilisegundo: number = 1000): void
        {
            API.callNative("DO_SCREEN_FADE_IN", intDuracaoMilisegundo);
        }

        public fadeOut(intDuracaoMilisegundo: number = 1000): void
        {
            API.callNative("DO_SCREEN_FADE_OUT", intDuracaoMilisegundo);
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

            this.processarOnUpdateStrLegenda();
        }

        private processarOnUpdateStrLegenda(): void
        {
            if (UtilsRealLife.getBooStrVazia(this.strLegenda))
            {
                return;
            }

            API.displaySubtitle(this.strLegenda);
        }

        private setBooMostrarMouse(booMostrarMouse: boolean): void
        {
            API.showCursor(booMostrarMouse);
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