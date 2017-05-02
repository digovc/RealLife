/// <reference path="../RealLifeShared.TypeScript/dominio/ErroDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/JogadorDominio.ts"/>
/// <reference path="evento/OnChatCommandListener.ts"/>
/// <reference path="evento/OnServerEventTriggerListener.ts"/>
/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações

    import ErroDominio = RealLifeShared.ErroDominio;
    import JogadorDominio = RealLifeShared.JogadorDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Jogador extends Objeto implements OnChatCommandListener, OnServerEventTriggerListener
    {
        // #region Constantes

        private static get STR_COMANDO_DEV(): string { return "/devmode" };

        private static get STR_METODO_CRIAR_CONTA(): string { return "STR_METODO_CRIAR_CONTA" };
        private static get STR_METODO_CRIAR_CONTA_SUCESSO(): string { return "STR_METODO_CRIAR_CONTA_SUCESSO" };
        private static get STR_METODO_ENTRAR(): string { return "STR_METODO_ENTRAR" };
        private static get STR_METODO_ENTRAR_SUCESSO(): string { return "STR_METODO_ENTRAR_SUCESSO" };
        private static get STR_METODO_ERRO(): string { return "STR_METODO_ERRO" };

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
        private _ped: Ped;

        private get objJogador(): JogadorDominio
        {
            return this._objJogador;
        }

        private set objJogador(objJogador: JogadorDominio)
        {
            this._objJogador = objJogador;
        }

        public get ped(): Ped
        {
            if (this._ped != null)
            {
                return this._ped;
            }

            this._ped = this.getPed();

            return this._ped;
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

            ServerRealLife.i.executarJson(Jogador.STR_METODO_CRIAR_CONTA, this.objJogador);
        }

        private criarContaSucesso(): void
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

            ServerRealLife.i.executarJson(Jogador.STR_METODO_ENTRAR, this.objJogador);
        }

        private entrarSucesso(arrObjArg: System.Array<any>): void
        {
            var jsnJogador = this.getJsn(arrObjArg);

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

        private getJsn(arrObjArg: System.Array<any>): string
        {
            if (arrObjArg == null)
            {
                return null;
            }

            if (arrObjArg.Length < 1)
            {
                return null;
            }

            return arrObjArg[0];
        }

        private getPed(): Ped
        {
            var pedResultado = new Ped();

            pedResultado.intHandle = API.returnNative("GET_PLAYER_PED", Enums.NativeReturnTypes.Handle);

            return pedResultado;
        }

        protected setEventos(): void
        {
            super.setEventos();

            ScriptManager.i.addEvtOnChatCommandListener(this);
            ScriptManager.i.addEvtOnServerEventTriggerListener(this);
        }

        private processarErro(arrObjArg: System.Array<any>): void
        {
            var jsnErro = this.getJsn(arrObjArg);

            if (UtilsRealLife.getBooStrVazia(jsnErro))
            {
                return;
            }

            var objErro = new ErroDominio();

            objErro.copiarDados(jsnErro);

            Screen.i.notificarErro(objErro);
        }

        private processarOnChatCommand(strComando: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strComando))
            {
                return;
            }

            switch (strComando)
            {
                case Jogador.STR_COMANDO_DEV:
                    PagDev.i.iniciar();
                    return;
            }
        }

        private processarOnServerEventTrigger(strMetodoNome: string, arrObjArg: System.Array<any>): void
        {
            if (UtilsRealLife.getBooStrVazia(strMetodoNome))
            {
                return;
            }

            switch (strMetodoNome)
            {
                case Jogador.STR_METODO_CRIAR_CONTA_SUCESSO:
                    this.criarContaSucesso();
                    return;

                case Jogador.STR_METODO_ENTRAR_SUCESSO:
                    this.entrarSucesso(arrObjArg);
                    return;

                case Jogador.STR_METODO_ERRO:
                    this.processarErro(arrObjArg);
                    return;
            }
        }

        // #endregion Métodos

        // #region Eventos

        public onChatCommand(strComando: string): void
        {
            this.processarOnChatCommand(strComando);
        }

        public onServerEventTrigger(strMetodoNome: string, arrObjArg: System.Array<any>): void
        {
            this.processarOnServerEventTrigger(strMetodoNome, arrObjArg);
        }

        // #endregion Eventos
    }
}