/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

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

        public get booDebug(): boolean
        {
            if (this._booDebug != null)
            {
                return this._booDebug;
            }

            this._booDebug = true;

            return this._booDebug;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected finalizar(): void
        {
            super.finalizar();

            Audio.i.iniciar();

            Keyboard.i.iniciar();

            Screen.i.iniciar();

            Jogador.i.iniciar();

            PagDev.i.iniciar();
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}