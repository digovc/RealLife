/// <reference path="../../../../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/Mensagem.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import ContaDominio = RealLifeShared.ContaDominio;
    import Mensagem = Web.Mensagem;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivLoginContaCadastro extends DivLoginBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _cmpStrEmail: CampoRealLifeUi;
        private _cmpStrGameTag: CampoRealLifeUi;
        private _cmpStrSenha: CampoRealLifeUi;
        private _cmpStrSenhaRepetir: CampoRealLifeUi;

        private get cmpStrEmail(): CampoRealLifeUi
        {
            if (this._cmpStrEmail != null)
            {
                return this._cmpStrEmail;
            }

            this._cmpStrEmail = new CampoRealLifeUi(this.strId + "_cmpStrEmail");

            return this._cmpStrEmail;
        }

        private get cmpStrGameTag(): CampoRealLifeUi
        {
            if (this._cmpStrGameTag != null)
            {
                return this._cmpStrGameTag;
            }

            this._cmpStrGameTag = new CampoRealLifeUi(this.strId + "_cmpStrGameTag");

            return this._cmpStrGameTag;
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

        private get cmpStrSenhaRepetir(): CampoRealLifeUi
        {
            if (this._cmpStrSenhaRepetir != null)
            {
                return this._cmpStrSenhaRepetir;
            }

            this._cmpStrSenhaRepetir = new CampoRealLifeUi(this.strId + "_cmpStrSenhaRepetir");

            return this._cmpStrSenhaRepetir;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivLoginContaCadastro.name);
        }

        // #endregion Construtores

        // #region Métodos

        public carregarDados(objConta: ContaDominio): void
        {
            if (objConta == null)
            {
                return;
            }

            objConta.strEmail = this.cmpStrEmail.txt.strValor;
            objConta.strGametag = this.cmpStrGameTag.txt.strValor;
            objConta.strSenha = this.encriptar(this.cmpStrSenha.txt.strValor);
        }

        public contaSalvarValidar(): boolean
        {
            if (Utils.getBooStrVazia(this.cmpStrEmail.txt.strValor))
            {
                Mensagem.mostrar("Erro", "O email deve ser informado.", Web.Mensagem_EnmTipo.NEGATIVA);
                this.cmpStrEmail.txt.receberFoco();
                return false;
            }

            if (!Utils.validarEmail(this.cmpStrEmail.txt.strValor))
            {
                Mensagem.mostrar("Erro", "Email inválido.", Web.Mensagem_EnmTipo.NEGATIVA);
                this.cmpStrEmail.txt.receberFoco();
                return false;
            }

            if (Utils.getBooStrVazia(this.cmpStrGameTag.txt.strValor))
            {
                Mensagem.mostrar("Erro", "A gametag deve ser informada.", Web.Mensagem_EnmTipo.NEGATIVA);
                this.cmpStrGameTag.txt.receberFoco();
                return false;
            }

            if (!this.contaSalvarValidarCmpStrGameTag())
            {
                this.cmpStrGameTag.txt.receberFoco();
                return false;
            }

            if (Utils.getBooStrVazia(this.cmpStrSenha.txt.strValor))
            {
                Mensagem.mostrar("Erro", "A senha deve ser informada.", Web.Mensagem_EnmTipo.NEGATIVA);
                this.cmpStrSenha.txt.receberFoco();
                return false;
            }

            if (Utils.getBooStrVazia(this.cmpStrSenhaRepetir.txt.strValor))
            {
                Mensagem.mostrar("Erro", "A senha deve ser informada.", Web.Mensagem_EnmTipo.NEGATIVA);
                this.cmpStrSenhaRepetir.txt.receberFoco();
                return false;
            }

            if (this.cmpStrSenha.txt.strValor != this.cmpStrSenhaRepetir.txt.strValor)
            {
                Mensagem.mostrar("Erro", "As senhas não são iguais.", Web.Mensagem_EnmTipo.NEGATIVA);
                this.cmpStrSenha.txt.receberFoco();
                return false;
            }

            return true;
        }

        private contaSalvarValidarCmpStrGameTag(): boolean
        {
            // TODO: Implementar critérios para criação da gametag.

            return true;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.booVisivel = false;

            this.cmpStrEmail.iniciar();
            this.cmpStrGameTag.iniciar();
            this.cmpStrSenha.iniciar();
            this.cmpStrSenhaRepetir.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}