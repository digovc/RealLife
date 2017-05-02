/// <reference path="../Web.TypeScript/AppWebBase.ts"/>
/// <reference path="../Web.TypeScript/html/componente/Mensagem.ts"/>
/// <reference path="../Web.TypeScript/Utils.ts"/>

var resourceCall: any;

module RealLifeUi
{
    // #region Importações

    import AppWebBase = Web.AppWebBase;
    import Mensagem = Web.Mensagem;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppRealLifeUi extends AppWebBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        protected static _i: AppRealLifeUi;

        public static get i(): AppRealLifeUi
        {
            if (AppRealLifeUi._i != null)
            {
                return AppRealLifeUi._i;
            }

            AppRealLifeUi._i = new AppRealLifeUi();

            return AppRealLifeUi._i;
        }

        private _booGame: boolean;

        public get booGame(): boolean
        {
            if (this._booGame != null)
            {
                return this._booGame;
            }

            this._booGame = (resourceCall != null);

            return this._booGame;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}