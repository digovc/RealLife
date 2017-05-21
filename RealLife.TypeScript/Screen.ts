/// <reference path="../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>

module RealLife
{
    // #region Importações

    import RespostaDominio = RealLifeShared.RespostaDominio;

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

        private _booHudVisivel: boolean;
        private _booMouseVisivel: boolean;
        private _dttUltimoFrame: Date = new Date();
        private _fltDelta: number;
        private _objCameraAtual: Camera;
        private _objResolucao: System.Drawing.Size;
        private _strLegenda: string;

        public get booHudVisivel(): boolean
        {
            this._booHudVisivel = API.getHudVisible();

            return this._booHudVisivel;
        }

        public set booHudVisivel(booHudVisivel: boolean)
        {
            this._booHudVisivel = booHudVisivel;

            API.setHudVisible(this._booHudVisivel);
        }

        public get booMouseVisivel(): boolean
        {
            return this._booMouseVisivel;
        }

        public set booMouseVisivel(booMouseVisivel: boolean)
        {
            this._booMouseVisivel = booMouseVisivel;

            API.showCursor(booMouseVisivel);
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

            this._fltDelta = API.returnNative("GET_FRAME_TIME", Enums.NativeReturnTypes.Float);

            return this._fltDelta;
        }

        public get objCameraAtual(): Camera
        {
            return this._objCameraAtual;
        }

        public set objCameraAtual(objCameraAtual: Camera)
        {
            this._objCameraAtual = objCameraAtual;
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

        public ativarCameraGamePlay(): void
        {
            this.objCameraAtual == null;

            API.setGameplayCameraActive();
        }

        public fadeIn(fltDuracao: number = 1, fncAfter: Function = null): void
        {
            API.callNative("DO_SCREEN_FADE_IN", (fltDuracao * 1000));

            if (fncAfter == null)
            {
                return;
            }

            new Timer(fncAfter, fltDuracao).iniciar();
        }

        public fadeOut(fltDuracao: number = 1, fncAfter: Function = null): void
        {
            API.callNative("DO_SCREEN_FADE_OUT", (fltDuracao * 1000));

            if (fncAfter == null)
            {
                return;
            }

            new Timer(fncAfter, fltDuracao).iniciar();
        }

        public notificar(strNotificacao: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strNotificacao))
            {
                return;
            }

            API.sendNotification(strNotificacao);
        }

        public notificarErro(objResposta: RespostaDominio): boolean
        {
            if (objResposta == null)
            {
                return false;
            }

            if (UtilsRealLife.getBooStrVazia(objResposta.strErro))
            {
                return false;
            }

            API.sendNotification("~r~Erro no servidor: ~s~" + objResposta.strErro);

            return true;
        }

        public processarEvtOnUpdateListener(): void
        {
            this.processarOnUpdate();

            this.dispararEvtOnUpdateListener();
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

        public setCorUi(cor: Cor): void
        {
            if (cor == null)
            {
                return;
            }

            API.setUiColor(cor.r, cor.g, cor.b);
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