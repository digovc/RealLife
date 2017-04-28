/// <reference path="../RealLifeDominio.TypeScript/DominioRealLifeBase.ts"/>
/// <reference path="../RealLifeDominio.TypeScript/JogadorDominio.ts"/>
/// <reference path="../Web.TypeScript/AppWebBase.ts"/>
/// <reference path="../Web.TypeScript/html/componente/Mensagem.ts"/>
/// <reference path="../Web.TypeScript/Utils.ts"/>

var resourceCall: any;

module RealLifeUi
{
    // #region Importações

    import AppWebBase = Web.AppWebBase;
    import DominioRealLifeBase = RealLifeDominio.DominioRealLifeBase;
    import JogadorDominio = RealLifeDominio.JogadorDominio;
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

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}