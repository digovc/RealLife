/// <reference path="../../../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/dominio/SolicitacaoDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts"/>
/// <reference path="../../UtilsRealLife.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import ContaDominio = RealLifeShared.ContaDominio;
    import EnmKey = RealLifeShared.EnmKey;
    import RespostaDominio = RealLifeShared.RespostaDominio;
    import SolicitacaoDominio = RealLifeShared.SolicitacaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagLogin extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagLogin;

        public static get i(): PagLogin
        {
            return PagLogin._i;
        }

        private _objEtapaLogin: EtapaLogin002Logar;

        private get objEtapaLogin(): EtapaLogin002Logar
        {
            return this._objEtapaLogin;
        }

        private set objEtapaLogin(objEtapaLogin: EtapaLogin002Logar)
        {
            this._objEtapaLogin = objEtapaLogin;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objEtapaLogin: EtapaLogin002Logar)
        {
            super();

            PagLogin._i = this;

            this.objEtapaLogin = objEtapaLogin;
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            Screen.i.booMouseVisivel = true;
        }

        public contaSalvar(jsnConta: string): void
        {
            this.objEtapaLogin.contaSalvar(jsnConta);
        }

        protected getBooEnviarTecla(enmKey: EnmKey): boolean
        {
            return false;
        }

        protected getUrl(): string
        {
            return "ui/pag_login.html";
        }

        public entrar(jsnConta: string): void
        {
            this.objEtapaLogin.entrar(jsnConta);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}