/// <reference path="../RealLifeDominio.TypeScript/ErroDominio.ts"/>
/// <reference path="../RealLifeDominio.TypeScript/JogadorDominio.ts"/>

module RealLife
{
    // #region Importações

    import ErroDominio = RealLifeDominio.ErroDominio;
    import JogadorDominio = RealLifeDominio.JogadorDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Jogador
    {
        // #region Constantes

        private static get STR_METODO_CRIAR_CONTA(): string { return "STR_METODO_CRIAR_CONTA" };
        private static get STR_METODO_ENTRAR(): string { return "STR_METODO_ENTRAR" };

        // #endregion Constantes

        // #region Atributos

        private static _i: Jogador;

        public static get i(): Jogador
        {
            if (Jogador._i != null)
            {
                return Jogador._i;
            }

            Jogador._i = new Jogador();

            return Jogador._i;
        }

        private _objJogador: JogadorDominio;

        private get objJogador(): JogadorDominio
        {
            return this._objJogador;
        }

        private set objJogador(objJogador: JogadorDominio)
        {
            this._objJogador = objJogador;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public criarConta(objJogador: JogadorDominio): void
        {
            if (objJogador == null)
            {
                return;
            }

            this.objJogador = objJogador;

            ServerRealLife.i.executarJson(Jogador.name, Jogador.STR_METODO_CRIAR_CONTA, objJogador);
        }

        public criarContaSucesso(): void
        {
            PagLogin.i.criarContaSucesso();

            this.criarContaSucessoNotificar();
        }

        private criarContaSucessoNotificar(): void
        {
            if (this.objJogador == null)
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(this.objJogador.strGametag))
            {
                return;
            }

            var strNotificacao = "Sua conta foi criada com sucesso _player_gametag!".replace("_player_gametag", this.objJogador.strGametag);

            Screen.i.notificar(strNotificacao);
        }

        public entrar(objJogador: JogadorDominio): void
        {
            if (objJogador == null)
            {
                return;
            }

            this.objJogador = objJogador;

            ServerRealLife.i.executarJson(Jogador.name, Jogador.STR_METODO_ENTRAR, objJogador);
        }

        public entrarSucesso(jsnJogador: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnJogador))
            {
                return;
            }

            this.objJogador = new JogadorDominio();

            this.objJogador.copiarDados(jsnJogador);

            PagLogin.i.entrarSucesso();

            this.entrarSucessoNotificar();
        }

        private entrarSucessoNotificar(): void
        {
            if (this.objJogador == null)
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(this.objJogador.strGametag))
            {
                return;
            }

            var strNotificacao = "Seja bem vindo _player_gametag!".replace("_player_gametag", this.objJogador.strGametag);

            Screen.i.notificar(strNotificacao);
        }

        public processarErro(jsnErro: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnErro))
            {
                return;
            }

            var objErro = new ErroDominio();

            objErro.copiarDados(jsnErro);

            Screen.i.notificarErro(objErro);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}