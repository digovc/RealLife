/// <reference path="../../../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts" />
/// <reference path="../../UtilsRealLife.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import ContaDominio = RealLifeShared.ContaDominio;
    import EnmKey = RealLifeShared.EnmKey;

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

        private _objEtapaLogin: EtapaLogin003Logar;

        private get objEtapaLogin(): EtapaLogin003Logar
        {
            return this._objEtapaLogin;
        }

        private set objEtapaLogin(objEtapaLogin: EtapaLogin003Logar)
        {
            this._objEtapaLogin = objEtapaLogin;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objEtapaLogin: EtapaLogin003Logar)
        {
            super();

            PagLogin._i = this;

            this.objEtapaLogin = objEtapaLogin;
        }

        // #endregion Construtores

        // #region Métodos

        public iniciar(): void
        {
            super.iniciar();

            Screen.i.booMouseVisivel = true;
        }

        public criarConta(jsnConta: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnConta))
            {
                return;
            }

            var objConta = new ContaDominio();

            objConta.copiarJson(jsnConta);

            Jogador.i.criarConta(objConta);
        }

        public criarContaSucesso(): void
        {
            this.objEtapaLogin.criarContaSucesso();
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
            Log.i.debug(jsnConta);

            if (UtilsRealLife.getBooStrVazia(jsnConta))
            {
                return;
            }

            var objConta = new ContaDominio();

            objConta.copiarJson(jsnConta);

            Jogador.i.entrar(objConta);
        }

        public entrarSucesso(): void
        {
            this.objEtapaLogin.entrarSucesso();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}