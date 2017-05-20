/// <reference path="../../../../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import ContaDominio = RealLifeShared.ContaDominio;
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

        public carregarDados(objConta: ContaDominio): void
        {
            if (objConta == null)
            {
                return;
            }

            if (this.cmpStrLogin.txt.strValor.indexOf("@") > -1)
            {
                objConta.strEmail = this.cmpStrLogin.txt.strValor;
            }
            else
            {
                objConta.strGametag = this.cmpStrLogin.txt.strValor;
            }

            objConta.strSenha = this.encriptar(this.cmpStrSenha.txt.strValor);
        }

        public entrarValidar(): boolean
        {
            if (Utils.getBooStrVazia(this.cmpStrLogin.txt.strValor))
            {
                this.cmpStrLogin.txt.receberFoco();
                return false;
            }

            if (Utils.getBooStrVazia(this.cmpStrSenha.txt.strValor))
            {
                this.cmpStrSenha.txt.receberFoco();
                return false;
            }

            return true;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.cmpStrLogin.iniciar();
            this.cmpStrSenha.iniciar();

            window.setTimeout((() => { this.cmpStrLogin.txt.receberFoco(); }), 350);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}