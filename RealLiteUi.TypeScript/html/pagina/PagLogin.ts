/// <reference path="../../../RealLifeDominio.TypeScript/JogadorDominio.ts"/>
/// <reference path="../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/Mensagem.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/Keys.ts"/>
/// <reference path="../../../Web.TypeScript/OnKeyPressListener.ts"/>

module RealLifeUi
{
    // #region Importações

    import Div = Web.Div;
    import Erro = Web.Erro;
    import JogadorDominio = RealLifeDominio.JogadorDominio;
    import Keys = Web.Keys;
    import Mensagem = Web.Mensagem;
    import OnKeyPressListener = Web.OnKeyPressListener;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagLogin extends PagRealLifeUiBase implements OnKeyPressListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagLogin;

        public static get i(): PagLogin
        {
            if (PagLogin._i != null)
            {
                return PagLogin._i;
            }

            PagLogin._i = new PagLogin();

            return PagLogin._i;
        }

        private _divConteudo: Div;
        private _divLoginCabecalho: DivLoginCabecalho;
        private _divLoginContaCadastro: DivLoginContaCadastro;
        private _divLoginEntrar: DivLoginEntrar;
        private _divLoginTab: DivLoginTab;

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div("divConteudo");

            return this._divConteudo;
        }

        private get divLoginCabecalho(): DivLoginCabecalho
        {
            if (this._divLoginCabecalho != null)
            {
                return this._divLoginCabecalho;
            }

            this._divLoginCabecalho = new DivLoginCabecalho();

            return this._divLoginCabecalho;
        }

        private get divLoginContaCadastro(): DivLoginContaCadastro
        {
            if (this._divLoginContaCadastro != null)
            {
                return this._divLoginContaCadastro;
            }

            this._divLoginContaCadastro = new DivLoginContaCadastro();

            return this._divLoginContaCadastro;
        }

        private get divLoginEntrar(): DivLoginEntrar
        {
            if (this._divLoginEntrar != null)
            {
                return this._divLoginEntrar;
            }

            this._divLoginEntrar = new DivLoginEntrar();

            return this._divLoginEntrar;
        }

        private get divLoginTab(): DivLoginTab
        {
            if (this._divLoginTab != null)
            {
                return this._divLoginTab;
            }

            this._divLoginTab = new DivLoginTab();

            return this._divLoginTab;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private criarConta(): void
        {
            if (!this.criarContaValidar())
            {
                return;
            }

            var objJogador = new JogadorDominio();

            this.divLoginContaCadastro.carregarDados(objJogador);

            Client.i.executarJson(PagLogin.name, "criarConta", objJogador);
        }

        private criarContaValidar(): boolean
        {
            if (!this.divLoginContaCadastro.criarContaValidar())
            {
                return false;
            }

            return true;
        }

        private entrar(): void
        {
            if (!this.entrarValidar())
            {
                return;
            }

            var objJogador = new JogadorDominio();

            this.divLoginEntrar.carregarDados(objJogador);

            Client.i.executarJson(PagLogin.name, "entrar", objJogador);
        }

        private entrarValidar(): boolean
        {
            if (!this.divLoginEntrar.entrarValidar())
            {
                Mensagem.mostrar("Erro", "Dados inválidos.", Web.Mensagem_EnmTipo.NEGATIVA);
                return;
            }

            return true;
        }

        protected inicializar(): void
        {
            super.inicializar();

            AppRealLifeUi.i.pag = this;

            AppRealLifeUi.i.iniciar();

            this.divLoginCabecalho.iniciar();
            this.divLoginContaCadastro.iniciar();
            this.divLoginEntrar.iniciar();
            this.divLoginTab.iniciar();

            this.divConteudo.mostrar();
        }

        public mostrarDivLoginContaCadastro(): void
        {
            this.divLoginEntrar.booVisivel = false;

            this.divLoginContaCadastro.mostrar();
        }

        public mostrarDivLoginEntrar(): void
        {
            this.divLoginContaCadastro.booVisivel = false;

            this.divLoginEntrar.mostrar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.addEvtOnKeyPressListener(this);
        }

        private processarOnKeyPressEnter(): void
        {
            if (this.divLoginEntrar.booVisivel)
            {
                this.entrar();
                return;
            }

            this.criarConta();
        }

        // #endregion Métodos

        // #region Eventos

        public onKeyPress(objSender: Object, arg: JQueryKeyEventObject): void
        {
            try
            {
                switch (arg.keyCode)
                {
                    case Keys.ENTER:
                        this.processarOnKeyPressEnter();
                        return;
                }
            }
            catch (ex)
            {
                new Erro("Erro desconhecido.", ex);
            }
        }

        // #endregion Eventos
    }
}