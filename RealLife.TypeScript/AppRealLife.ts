/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppRealLife extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: AppRealLife;

        public static get i(): AppRealLife
        {
            if (AppRealLife._i != null)
            {
                return AppRealLife._i;
            }

            AppRealLife._i = new AppRealLife();

            return AppRealLife._i;
        }

        private _arrObjScript: Array<ScriptBase>;
        private _booDebug: boolean;

        private get arrObjScript(): Array<ScriptBase>
        {
            if (this._arrObjScript != null)
            {
                return this._arrObjScript;
            }

            this._arrObjScript = new Array<ScriptBase>();

            return this._arrObjScript;
        }

        public get booDebug(): boolean
        {
            return this._booDebug;
        }

        public set booDebug(booDebug: boolean)
        {
            this._booDebug = booDebug;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public addScript(objScript: ScriptBase): void
        {
            if (objScript == null)
            {
                return;
            }

            if (this.arrObjScript.indexOf(objScript) > -1)
            {
                return;
            }

            this.arrObjScript.push(objScript);
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarComponente();

            this.inicializarTeste();

            this.inicializarGame();
        }

        private inicializarComponente(): void
        {
            Audio.i.iniciar();
            Chat.i.iniciar();
            Jogador.i.iniciar();
            Keyboard.i.iniciar();
            Log.i.iniciar();
            Screen.i.iniciar();
        }

        private inicializarGame(): void
        {
            if (this.booDebug)
            {
                return;
            }

            new ScriptLogin().iniciar();
        }

        private inicializarTeste(): void
        {
            //this.booDebug = true;

            //new ScriptTestAguardar().iniciar();
        }

        public removerScript(objScript: ScriptBase): void
        {
            if (objScript == null)
            {
                return;
            }

            if (this.arrObjScript.indexOf(objScript) == -1)
            {
                return;
            }

            this.arrObjScript.splice(this.arrObjScript.indexOf(objScript), 1);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}