module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class KeyBoard extends Objeto implements OnKeyUpListener, OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: KeyBoard;

        public static get i(): KeyBoard
        {
            if (KeyBoard._i != null)
            {
                return KeyBoard._i;
            }

            KeyBoard._i = new KeyBoard();

            return KeyBoard._i;
        }

        private _booLigado: boolean = true;

        public get booLigado(): boolean
        {
            return this._booLigado;
        }

        public set booLigado(booLigado: boolean)
        {
            if (this._booLigado == booLigado)
            {
                return;
            }

            this._booLigado = booLigado;

            this.setBooLigado(this._booLigado);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public getBooControleAcionado(enmKey: Enums.Controls): boolean
        {
            return API.returnNative("IS_CONTROL_PRESSED", Enums.NativeReturnTypes.Bool, 0, enmKey);
        }

        private processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void
        {
            Log.i.debug("Tecla {0} acionada.", arg.KeyValue.toString());

            this.dispararEvtOnKeyUpListener(this, arg);

            switch (arg.KeyCode)
            {
                case Keys.A:
                    this.dispararEvtOnKeyMoverEsquerdaListener();
                    return;

                case Keys.D:
                    this.dispararEvtOnKeyMoverDireitaListener();
                    return;

                case Keys.Enter:
                case Keys.Right:
                    this.dispararEvtOnKeySelecionarListener();
                    return;

                case Keys.M:
                    this.dispararEvtOnKeyMenuListener();
                    return;

                case Keys.S:
                    this.dispararEvtOnKeyMoverTrasListener();
                    return;

                case Keys.W:
                    this.dispararEvtOnKeyMoverFrenteListener();
                    return;
            }
        }

        private processarOnUpdate(): void
        {
            if (this.booLigado)
            {
                return;
            }

            API.disableAllControlsThisFrame();
        }

        private setBooLigado(booLigado: boolean): void
        {
            if (booLigado)
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

        protected setEventos(): void
        {
            super.setEventos();

            ScriptManager.i.addEvtOnKeyUpListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onKeyUp(objSender: Object, arg: System.Windows.Forms.KeyEventArgs): void
        {
            this.processarOnKeyUp(arg);
        }

        public onUpdate(fltDelta: number): void
        {
            this.processarOnUpdate();
        }

        // #region OnKeyMenuListener

        private _arrEvtOnKeyMenuListener: Array<OnKeyMenuListener>;

        private get arrEvtOnKeyMenuListener(): Array<OnKeyMenuListener>
        {
            if (this._arrEvtOnKeyMenuListener != null)
            {
                return this._arrEvtOnKeyMenuListener;
            }

            this._arrEvtOnKeyMenuListener = new Array<OnKeyMenuListener>();

            return this._arrEvtOnKeyMenuListener;
        }

        public addEvtOnKeyMenuListener(evtOnKeyMenuListener: OnKeyMenuListener): void
        {
            if (evtOnKeyMenuListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMenuListener.indexOf(evtOnKeyMenuListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeyMenuListener.push(evtOnKeyMenuListener);
        }

        private dispararEvtOnKeyMenuListener(): void
        {
            Log.i.debug("Tecla acionada (Menu).");

            if (this.arrEvtOnKeyMenuListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeyMenuListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeyMenu();
            });
        }

        public removerEvtOnKeyMenuListener(evt: OnKeyMenuListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMenuListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeyMenuListener.splice(this.arrEvtOnKeyMenuListener.indexOf(evt), 1);
        }

        // #endregion OnKeyMenuListener

        // #region OnKeyMoverDireitaListener

        private _arrEvtOnKeyMoverDireitaListener: Array<OnKeyMoverDireitaListener>;

        private get arrEvtOnKeyMoverDireitaListener(): Array<OnKeyMoverDireitaListener>
        {
            if (this._arrEvtOnKeyMoverDireitaListener != null)
            {
                return this._arrEvtOnKeyMoverDireitaListener;
            }

            this._arrEvtOnKeyMoverDireitaListener = new Array<OnKeyMoverDireitaListener>();

            return this._arrEvtOnKeyMoverDireitaListener;
        }

        public addEvtOnKeyMoverDireitaListener(evtOnKeyMoverDireitaListener: OnKeyMoverDireitaListener): void
        {
            if (evtOnKeyMoverDireitaListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverDireitaListener.indexOf(evtOnKeyMoverDireitaListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverDireitaListener.push(evtOnKeyMoverDireitaListener);
        }

        private dispararEvtOnKeyMoverDireitaListener(): void
        {
            if (this.arrEvtOnKeyMoverDireitaListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeyMoverDireitaListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeyMoverDireita();
            });
        }

        public removerEvtOnKeyMoverDireitaListener(evt: OnKeyMoverDireitaListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverDireitaListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverDireitaListener.splice(this.arrEvtOnKeyMoverDireitaListener.indexOf(evt), 1);
        }

        // #endregion OnKeyMoverDireitaListener

        // #region OnKeyMoverEsquerdaListener

        private _arrEvtOnKeyMoverEsquerdaListener: Array<OnKeyMoverEsquerdaListener>;

        private get arrEvtOnKeyMoverEsquerdaListener(): Array<OnKeyMoverEsquerdaListener>
        {
            if (this._arrEvtOnKeyMoverEsquerdaListener != null)
            {
                return this._arrEvtOnKeyMoverEsquerdaListener;
            }

            this._arrEvtOnKeyMoverEsquerdaListener = new Array<OnKeyMoverEsquerdaListener>();

            return this._arrEvtOnKeyMoverEsquerdaListener;
        }

        public addEvtOnKeyMoverEsquerdaListener(evtOnKeyMoverEsquerdaListener: OnKeyMoverEsquerdaListener): void
        {
            if (evtOnKeyMoverEsquerdaListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverEsquerdaListener.indexOf(evtOnKeyMoverEsquerdaListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverEsquerdaListener.push(evtOnKeyMoverEsquerdaListener);
        }

        private dispararEvtOnKeyMoverEsquerdaListener(): void
        {
            if (this.arrEvtOnKeyMoverEsquerdaListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeyMoverEsquerdaListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeyMoverEsquerda();
            });
        }

        public removerEvtOnKeyMoverEsquerdaListener(evt: OnKeyMoverEsquerdaListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverEsquerdaListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverEsquerdaListener.splice(this.arrEvtOnKeyMoverEsquerdaListener.indexOf(evt), 1);
        }

        // #endregion OnKeyMoverEsquerdaListener

        // #region OnKeyMoverFrenteListener

        private _arrEvtOnKeyMoverFrenteListener: Array<OnKeyMoverFrenteListener>;

        private get arrEvtOnKeyMoverFrenteListener(): Array<OnKeyMoverFrenteListener>
        {
            if (this._arrEvtOnKeyMoverFrenteListener != null)
            {
                return this._arrEvtOnKeyMoverFrenteListener;
            }

            this._arrEvtOnKeyMoverFrenteListener = new Array<OnKeyMoverFrenteListener>();

            return this._arrEvtOnKeyMoverFrenteListener;
        }

        public addEvtOnKeyMoverFrenteListener(evtOnKeyMoverFrenteListener: OnKeyMoverFrenteListener): void
        {
            if (evtOnKeyMoverFrenteListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverFrenteListener.indexOf(evtOnKeyMoverFrenteListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverFrenteListener.push(evtOnKeyMoverFrenteListener);
        }

        private dispararEvtOnKeyMoverFrenteListener(): void
        {
            if (this.arrEvtOnKeyMoverFrenteListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeyMoverFrenteListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeyMoverFrente();
            });
        }

        public removerEvtOnKeyMoverFrenteListener(evt: OnKeyMoverFrenteListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverFrenteListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverFrenteListener.splice(this.arrEvtOnKeyMoverFrenteListener.indexOf(evt), 1);
        }

        // #endregion OnKeyMoverFrenteListener

        // #region OnKeyMoverTrasListener

        private _arrEvtOnKeyMoverTrasListener: Array<OnKeyMoverTrasListener>;

        private get arrEvtOnKeyMoverTrasListener(): Array<OnKeyMoverTrasListener>
        {
            if (this._arrEvtOnKeyMoverTrasListener != null)
            {
                return this._arrEvtOnKeyMoverTrasListener;
            }

            this._arrEvtOnKeyMoverTrasListener = new Array<OnKeyMoverTrasListener>();

            return this._arrEvtOnKeyMoverTrasListener;
        }

        public addEvtOnKeyMoverTrasListener(evtOnKeyMoverTrasListener: OnKeyMoverTrasListener): void
        {
            if (evtOnKeyMoverTrasListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverTrasListener.indexOf(evtOnKeyMoverTrasListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverTrasListener.push(evtOnKeyMoverTrasListener);
        }

        private dispararEvtOnKeyMoverTrasListener(): void
        {
            if (this.arrEvtOnKeyMoverTrasListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeyMoverTrasListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeyMoverTras();
            });
        }

        public removerEvtOnKeyMoverTrasListener(evt: OnKeyMoverTrasListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeyMoverTrasListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeyMoverTrasListener.splice(this.arrEvtOnKeyMoverTrasListener.indexOf(evt), 1);
        }

        // #endregion OnKeyMoverTrasListener

        // #region OnKeySelecionarListener

        private _arrEvtOnKeySelecionarListener: Array<OnKeySelecionarListener>;

        private get arrEvtOnKeySelecionarListener(): Array<OnKeySelecionarListener>
        {
            if (this._arrEvtOnKeySelecionarListener != null)
            {
                return this._arrEvtOnKeySelecionarListener;
            }

            this._arrEvtOnKeySelecionarListener = new Array<OnKeySelecionarListener>();

            return this._arrEvtOnKeySelecionarListener;
        }

        public addEvtOnKeySelecionarListener(evtOnKeySelecionarListener: OnKeySelecionarListener): void
        {
            if (evtOnKeySelecionarListener == null)
            {
                return;
            }

            if (this.arrEvtOnKeySelecionarListener.indexOf(evtOnKeySelecionarListener) > -1)
            {
                return;
            }

            this.arrEvtOnKeySelecionarListener.push(evtOnKeySelecionarListener);
        }

        private dispararEvtOnKeySelecionarListener(): void
        {
            if (this.arrEvtOnKeySelecionarListener.length == 0)
            {
                return;
            }

            this.arrEvtOnKeySelecionarListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onKeySelecionar();
            });
        }

        public removerEvtOnKeySelecionarListener(evt: OnKeySelecionarListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnKeySelecionarListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnKeySelecionarListener.splice(this.arrEvtOnKeySelecionarListener.indexOf(evt), 1);
        }

        // #endregion OnKeySelecionarListener

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