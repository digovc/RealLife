/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../RealLifeShared.TypeScript/evento/OnGameKeyListener.ts"/>
/// <reference path="evento/OnUpdateListener.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;
    import OnGameKeyListener = RealLifeShared.OnGameKeyListener;

    // #endregion Importações

    // #region Enumerados

    // #endregion Enumerados

    export class Keyboard extends Objeto implements OnKeyUpListener, OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Keyboard;

        public static get i(): Keyboard
        {
            if (Keyboard._i != null)
            {
                return Keyboard._i;
            }

            Keyboard._i = new Keyboard();

            return Keyboard._i;
        }

        private _booAtivo: boolean = true;

        public get booAtivo(): boolean
        {
            return this._booAtivo;
        }

        public set booAtivo(booAtivo: boolean)
        {
            this._booAtivo = booAtivo;

            this.setBooAtivo(this._booAtivo);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public enviarCefKeyGame(pag: PagRealLifeBase, enmKey: EnmKey): void
        {
            if (pag == null)
            {
                return;
            }

            pag.objBrowserRealLife.executarJs(this.constructor.name, "dispararEvtOnGameKeyListener", enmKey);
        }

        public getBooControleAcionado(enmKey: Enums.Controls): boolean
        {
            return API.returnNative("IS_CONTROL_PRESSED", Enums.NativeReturnTypes.Bool, 0, enmKey);
        }

        public processarEvtOnKeyUpListener(objSender: Object, arg: System.Windows.Forms.KeyEventArgs): void
        {
            this.processarOnKeyUp(arg);

            this.dispararEvtOnKeyUpListener(objSender, arg);
        }

        private processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void
        {
            Log.i.debug("Tecla {0} acionada.", arg.KeyValue.toString());

            switch (arg.KeyCode)
            {
                case Keys.A:
                    this.dispararEvtOnGameKeyListener(EnmKey.GAMEPLAY_MOVER_ESQUERDA);
                    return;

                case Keys.Back:
                case Keys.Left:
                    this.dispararEvtOnGameKeyListener(EnmKey.MENU_VOLTAR);
                    this.dispararEvtOnGameKeyListener(EnmKey.SETA_TRAS);
                    return;

                case Keys.D:
                    this.dispararEvtOnGameKeyListener(EnmKey.GAMEPLAY_MOVER_DIREITA);
                    return;

                case Keys.Down:
                    this.dispararEvtOnGameKeyListener(EnmKey.MENU_BAIXO);
                    this.dispararEvtOnGameKeyListener(EnmKey.SETA_BAIXO);
                    return;

                case Keys.Enter:
                case Keys.Right:
                    this.dispararEvtOnGameKeyListener(EnmKey.MENU_SELECIONAR);
                    this.dispararEvtOnGameKeyListener(EnmKey.SETA_FRENTE);
                    return;

                case Keys.M:
                    this.dispararEvtOnGameKeyListener(EnmKey.MENU);
                    return;

                case Keys.S:
                    this.dispararEvtOnGameKeyListener(EnmKey.GAMEPLAY_MOVER_TRAS);
                    return;

                case Keys.Up:
                    this.dispararEvtOnGameKeyListener(EnmKey.MENU_ALTO);
                    this.dispararEvtOnGameKeyListener(EnmKey.SETA_ALTO);
                    return;

                case Keys.W:
                    this.dispararEvtOnGameKeyListener(EnmKey.GAMEPLAY_MOVER_FRENTE);
                    return;
            }
        }

        private processarOnUpdate(): void
        {
            this.processarOnUpdateBooAtivo();
        }

        private processarOnUpdateBooAtivo(): void
        {
            if (this.booAtivo)
            {
                return;
            }

            API.disableAllControlsThisFrame();
        }

        private setBooAtivo(booAtivo: boolean): void
        {
            if (booAtivo)
            {
                Log.i.debug("Ligando o controle.");

                Screen.i.removerEvtOnUpdateListener(this);
            }
            else
            {
                Log.i.debug("Desligando o controle.");

                Screen.i.addEvtOnUpdateListener(this);
            }
        }

        // #endregion Métodos

        // #region Eventos

        public onKeyUp(objSender: Object, arg: System.Windows.Forms.KeyEventArgs): void
        {
            this.processarOnKeyUp(arg);
        }

        public onUpdate(): void
        {
            this.processarOnUpdate();
        }

        // #region OnGameKeyListener

        private _arrEvtOnGameKeyListener: Array<OnGameKeyListener>;

        private get arrEvtOnGameKeyListener(): Array<OnGameKeyListener>
        {
            if (this._arrEvtOnGameKeyListener != null)
            {
                return this._arrEvtOnGameKeyListener;
            }

            this._arrEvtOnGameKeyListener = new Array<OnGameKeyListener>();

            return this._arrEvtOnGameKeyListener;
        }

        public addEvtOnGameKeyListener(evtOnGameKeyListener: OnGameKeyListener): void
        {
            if (evtOnGameKeyListener == null)
            {
                return;
            }

            if (this.arrEvtOnGameKeyListener.indexOf(evtOnGameKeyListener) > -1)
            {
                return;
            }

            this.arrEvtOnGameKeyListener.push(evtOnGameKeyListener);
        }

        private dispararEvtOnGameKeyListener(enmKey: EnmKey): void
        {
            if (this.arrEvtOnGameKeyListener.length == 0)
            {
                return;
            }

            this.arrEvtOnGameKeyListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onGameKey(enmKey);
            });
        }

        public removerEvtOnGameKeyListener(evt: OnGameKeyListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnGameKeyListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnGameKeyListener.splice(this.arrEvtOnGameKeyListener.indexOf(evt), 1);
        }

        // #endregion OnGameKeyListener

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

        // #endregion Eventos
    }
}