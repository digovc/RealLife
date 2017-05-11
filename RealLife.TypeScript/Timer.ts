/// <reference path="evento/OnUpdateListener.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Timer extends Objeto implements OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booLoop: boolean;
        private _fltAguardando: number = 0;
        private _fltDuracao: number = 1;
        private _fnc: Function;
        private _intIndex: number = 0;

        private get booLoop(): boolean
        {
            return this._booLoop;
        }

        private set booLoop(booLoop: boolean)
        {
            this._booLoop = booLoop;
        }

        private get fltAguardando(): number
        {
            return this._fltAguardando;
        }

        private set fltAguardando(fltAguardando: number)
        {
            this._fltAguardando = fltAguardando;
        }

        private get fltDuracao(): number
        {
            return this._fltDuracao;
        }

        private set fltDuracao(fltDuracao: number)
        {
            this._fltDuracao = fltDuracao;
        }

        private get fnc(): Function
        {
            return this._fnc;
        }

        private set fnc(fnc: Function)
        {
            this._fnc = fnc;
        }

        private get intIndex(): number
        {
            return this._intIndex;
        }

        private set intIndex(intIndex: number)
        {
            this._intIndex = intIndex;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(fnc: Function, fltDuracao: number = 1, booLoop: boolean = false)
        {
            super();

            this.booLoop = booLoop;
            this.fnc = fnc;
            this.fltDuracao = fltDuracao;
        }

        // #endregion Construtores

        // #region Métodos

        public destruir(): void
        {
            super.destruir();

            Screen.i.removerEvtOnUpdateListener(this);
        }

        private processarOnUpdate(): void
        {
            this.fltAguardando = (this.fltAguardando + Screen.i.fltDelta);

            if (this.fltAguardando < this.fltDuracao)
            {
                return;
            }

            Log.i.debug("Timer tick.");

            this.fnc(this.intIndex);

            this.intIndex = (this.intIndex + 1);

            if (this.booLoop)
            {
                this.fltAguardando = 0;
                return;
            }

            this.destruir();
        }

        protected setEventos(): void
        {
            super.setEventos();

            Screen.i.addEvtOnUpdateListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onUpdate(): void
        {
            this.processarOnUpdate();
        }

        // #endregion Eventos
    }
}