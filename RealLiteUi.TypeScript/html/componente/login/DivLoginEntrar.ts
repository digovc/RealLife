/// <reference path="../../../../RealLifeDominio.TypeScript/JogadorDominio.ts"/>
/// <reference path="../../../../web.typescript/typedefinition/md5.d.ts" />
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import JogadorDominio = RealLifeDominio.JogadorDominio;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivLoginEntrar extends DivLoginBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _cmpStrLogin: CampoRealLifeUi;
        private _cmpStrSenha: CampoRealLifeUi;

        private get cmpStrLogin(): CampoRealLifeUi
        {
            if (this._cmpStrLogin != null)
            {
                return this._cmpStrLogin;
            }

            this._cmpStrLogin = new CampoRealLifeUi(this.strId + "_cmpStrLogin");

            return this._cmpStrLogin;
        }

        private get cmpStrSenha(): CampoRealLifeUi
        {
            if (this._cmpStrSenha != null)
            {
                return this._cmpStrSenha;
            }

            this._cmpStrSenha = new CampoRealLifeUi(this.strId + "_cmpStrSenha");

            return this._cmpStrSenha;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivLoginEntrar.name);
        }

        // #endregion Construtores

        // #region Métodos

        public carregarDados(objJogador: JogadorDominio): void
        {
            if (objJogador == null)
            {
                return;
            }

            if (this.cmpStrLogin.txt.strValor.indexOf("@") > -1)
            {
                objJogador.strEmail = this.cmpStrLogin.txt.strValor;
            }
            else
            {
                objJogador.strGametag = this.cmpStrLogin.txt.strValor;
            }

            objJogador.strSenha = this.getStrSenhaEncriptada();
        }

        private getStrSenhaEncriptada(): string
        {
            if (Utils.getBooStrVazia(this.cmpStrLogin.txt.strValor))
            {
                return null;
            }

            var strSenhaResultado = "GTA_Real_Life__senha";

            strSenhaResultado = strSenhaResultado.replace("_senha", this.cmpStrLogin.txt.strValor);

            strSenhaResultado = md5(strSenhaResultado);

            return strSenhaResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.cmpStrLogin.iniciar();
            this.cmpStrSenha.iniciar();

            window.setTimeout((() => { this.cmpStrLogin.txt.receberFoco(); }), 350);
        }

        public validarEntrar(): boolean
        {
            if (Utils.getBooStrVazia(this.cmpStrLogin.txt.strValor))
            {
                this.cmpStrLogin.txt.receberFoco();
                return false;
            }

            if ((this.cmpStrLogin.txt.strValor != "digovc") && (this.cmpStrLogin.txt.strValor != "lia"))
            {
                this.cmpStrLogin.txt.receberFoco();
                return false;
            }

            if (Utils.getBooStrVazia(this.cmpStrSenha.txt.strValor))
            {
                this.cmpStrSenha.txt.receberFoco();
                return false;
            }

            if (this.cmpStrSenha.txt.strValor != "183729")
            {
                this.cmpStrSenha.txt.receberFoco();
                return false;
            }

            return true;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}