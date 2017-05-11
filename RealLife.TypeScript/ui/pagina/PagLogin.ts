/// <reference path="../../../RealLifeShared.TypeScript/dominio/JogadorDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts" />
/// <reference path="../../UtilsRealLife.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;
    import JogadorDominio = RealLifeShared.JogadorDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagLogin extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objEtapaLogin: Etapa003Login;

        private get objEtapaLogin(): Etapa003Login
        {
            return this._objEtapaLogin;
        }

        private set objEtapaLogin(objEtapaLogin: Etapa003Login)
        {
            this._objEtapaLogin = objEtapaLogin;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objEtapaLogin: Etapa003Login)
        {
            super();

            this.objEtapaLogin = objEtapaLogin;
        }

        // #endregion Construtores

        // #region Métodos

        public iniciar(): void
        {
            super.iniciar();

            Screen.i.booMostrarMouse = true;
        }

        public criarConta(jsnJogador: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnJogador))
            {
                return;
            }

            var objJogador = new JogadorDominio();

            objJogador.copiarDados(jsnJogador);

            Jogador.i.criarConta(objJogador);
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

        public entrar(jsnJogador: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnJogador))
            {
                return;
            }

            var objJogador = new JogadorDominio();

            objJogador.copiarDados(jsnJogador);

            Jogador.i.entrar(objJogador);
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