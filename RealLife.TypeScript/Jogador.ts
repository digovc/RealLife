/// <reference path="../RealLifeShared.TypeScript/dominio/ErroDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/JogadorDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="evento/OnChatCommandListener.ts"/>
/// <reference path="evento/OnServerEventTriggerListener.ts"/>
/// <reference path="Objeto.ts"/>
/// <reference path="Ped.ts"/>

module RealLife
{
    // #region Importações

    import EnmPedSkin = RealLifeShared.EnmPedSkin;
    import ErroDominio = RealLifeShared.ErroDominio;
    import JogadorDominio = RealLifeShared.JogadorDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Jogador extends Ped implements OnChatCommandListener, OnServerEventTriggerListener
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

        private _enmPedSkin: EnmPedSkin;
        private _intId: number;
        private _objJogador: JogadorDominio;
        private _strGametag: string;

        public get enmPedSkin(): EnmPedSkin
        {
            return this._enmPedSkin;
        }

        public set enmPedSkin(enmPedSkin: EnmPedSkin)
        {
            this._enmPedSkin = enmPedSkin;

            this.setEnmPedSkin(this._enmPedSkin);
        }

        public get intId(): number
        {
            if (this._intId != null)
            {
                return this._intId;
            }

            this._intId = API.getGamePlayer();

            return this._intId;
        }

        private get objJogador(): JogadorDominio
        {
            return this._objJogador;
        }

        private set objJogador(objJogador: JogadorDominio)
        {
            this._objJogador = objJogador;
        }

        private get strGametag(): string
        {
            return this._strGametag;
        }

        private set strGametag(strGametag: string)
        {
            this._strGametag = strGametag;

            API.setPlayerNametag(this.objHandle, this._strGametag);
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

            Server.i.executarJson(Jogador.STR_METODO_CRIAR_CONTA, this.objJogador);
        }

        private criarContaSucesso(): void
        {
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

        public detonarBombasAdesivas(): void
        {
            API.detonatePlayerStickies();
        }

        public entrar(objJogador: JogadorDominio): void
        {
            if (objJogador == null)
            {
                return;
            }

            this.objJogador = objJogador;

            Server.i.executarJson(Jogador.STR_METODO_ENTRAR, this.objJogador);
        }

        private entrarSucesso(arrObjArg: System.Array<any>): void
        {
            var jsnJogador = this.getJsn(arrObjArg);

            if (UtilsRealLife.getBooStrVazia(jsnJogador))
            {
                return;
            }

            this.objJogador = new JogadorDominio();

            this.objJogador.copiarJson(jsnJogador);

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

        protected getObjHandle(): LocalHandle
        {
            //return super.getObjHandle();

            return API.getLocalPlayer();
        }

        private getPed(): Ped
        {
            var pedResultado = new Ped();

            pedResultado.objHandle = API.getLocalPlayer();

            return pedResultado;
        }

        private setEnmPedSkin(enmPedSkin: EnmPedSkin): void
        {
            API.setPlayerSkin(enmPedSkin);
        }

        protected setEventos(): void
        {
            super.setEventos();

            Chat.i.addEvtOnChatCommandListener(this);
            Server.i.addEvtOnServerEventTriggerListener(this);
        }

        private processarErro(arrObjArg: System.Array<any>): void
        {
            var jsnErro = this.getJsn(arrObjArg);

            if (UtilsRealLife.getBooStrVazia(jsnErro))
            {
                return;
            }

            var objErro = new ErroDominio();

            objErro.copiarJson(jsnErro);

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
                //case Jogador.STR_COMANDO_DEV:
                //    PagDev.i.iniciar();
                //    return;
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