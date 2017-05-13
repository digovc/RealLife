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

        private _booDebug: boolean;
        private _objCameraAtual: CameraBase;

        public get booDebug(): boolean
        {
            if (this._booDebug != null)
            {
                return this._booDebug;
            }

            this._booDebug = true;

            return this._booDebug;
        }

        public get objCameraAtual(): CameraBase
        {
            return this._objCameraAtual;
        }

        public set objCameraAtual(objCameraAtual: CameraBase)
        {
            this._objCameraAtual = objCameraAtual;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarComponente();

            new ScriptPersonagemEditor().iniciar();

            //new ScriptTestPedSkin().iniciar();
        }

        private inicializarComponente(): void
        {
            Audio.i.iniciar();
            CameraGamePlay.i.iniciar();
            Chat.i.iniciar();
            Jogador.i.iniciar();
            Keyboard.i.iniciar();
            Log.i.iniciar();
            Screen.i.iniciar();
            Server.i.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}