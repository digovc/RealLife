/// <reference path="../reallifeshared.typescript/dominio/blenddatadominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/ErroDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/HeadOverlayDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/PersonagemDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="evento/OnChatCommandListener.ts"/>
/// <reference path="evento/OnServerEventTriggerListener.ts"/>
/// <reference path="Objeto.ts"/>
/// <reference path="Ped.ts"/>

module RealLife
{
    // #region Importações

    import BlendDataDominio = RealLifeShared.BlendDataDominio;
    import ContaDominio = RealLifeShared.ContaDominio;
    import EnmPedSkin = RealLifeShared.EnmPedSkin;
    import ErroDominio = RealLifeShared.ErroDominio;
    import HeadOverlayDominio = RealLifeShared.HeadOverlayDominio;
    import PersonagemDominio = RealLifeShared.PersonagemDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Jogador extends Ped implements OnServerEventTriggerListener
    {
        // #region Constantes

        private static get STR_COMANDO_DEV(): string { return "/devmode" };

        private static get STR_METODO_CRIAR_CONTA(): string { return "STR_METODO_CRIAR_CONTA" };
        private static get STR_METODO_CRIAR_CONTA_SUCESSO(): string { return "STR_METODO_CRIAR_CONTA_SUCESSO" };
        private static get STR_METODO_ENTRAR(): string { return "STR_METODO_ENTRAR" };
        private static get STR_METODO_ENTRAR_SUCESSO(): string { return "STR_METODO_ENTRAR_SUCESSO" };
        private static get STR_METODO_ERRO(): string { return "STR_METODO_ERRO" };
        private static get STR_METODO_SALVAR_APARENCIA(): string { return "STR_METODO_SALVAR_APARENCIA" };

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

        private _arrObjHeadOverlay: Array<HeadOverlayDominio>;
        private _booMasculino: boolean;
        private _intId: number;
        private _objBlendData: BlendDataDominio;
        private _objConta: ContaDominio;

        private get arrObjHeadOverlay(): Array<HeadOverlayDominio>
        {
            if (this._arrObjHeadOverlay != null)
            {
                return this._arrObjHeadOverlay;
            }

            this._arrObjHeadOverlay = new Array<HeadOverlayDominio>();

            return this._arrObjHeadOverlay;
        }

        public get booMasculino(): boolean
        {
            return this._booMasculino;
        }

        public set booMasculino(booMasculino: boolean)
        {
            this._booMasculino = booMasculino;

            this.setBooMasculino(this._booMasculino);
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

        public get objBlendData(): BlendDataDominio
        {
            return this._objBlendData;
        }

        public set objBlendData(objBlendData: BlendDataDominio)
        {
            this._objBlendData = objBlendData;

            this.setObjBlendData(this._objBlendData);
        }

        private get objConta(): ContaDominio
        {
            return this._objConta;
        }

        private set objConta(objConta: ContaDominio)
        {
            this._objConta = objConta;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public addObjHeadOverlay(objHeadOverlay: HeadOverlayDominio): void
        {
            if (objHeadOverlay == null)
            {
                return;
            }

            if (this.arrObjHeadOverlay.indexOf(objHeadOverlay) > -1)
            {
                return;
            }

            this.arrObjHeadOverlay.push(objHeadOverlay);

            API.callNative("SET_PED_HEAD_OVERLAY", this.objHandle, objHeadOverlay.enmTipo, objHeadOverlay.intIndex, objHeadOverlay.intAlpha);
        }

        public criarConta(objConta: ContaDominio): void
        {
            if (objConta == null)
            {
                return;
            }

            this.objConta = objConta;

            ServerRealLife.i.executarJson(Jogador.STR_METODO_CRIAR_CONTA, this.objConta);
        }

        private criarContaSucesso(): void
        {
            this.criarContaSucessoNotificar();
        }

        private criarContaSucessoNotificar(): void
        {
            if (this.objConta == null)
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(this.objConta.strGametag))
            {
                return;
            }

            var strNotificacao = "Sua conta foi criada com sucesso _player_gametag!".replace("_player_gametag", this.objConta.strGametag);

            Screen.i.notificar(strNotificacao);
        }

        public detonarBombasAdesivas(): void
        {
            API.detonatePlayerStickies();
        }

        public entrar(objConta: ContaDominio): void
        {
            if (objConta == null)
            {
                return;
            }

            this.objConta = objConta;

            ServerRealLife.i.executarJson(Jogador.STR_METODO_ENTRAR, this.objConta);
        }

        private entrarSucesso(arrObjArg: System.Array<any>): void
        {
            var jsnConta = this.getJsn(arrObjArg);

            if (UtilsRealLife.getBooStrVazia(jsnConta))
            {
                return;
            }

            this.objConta = new ContaDominio();

            this.objConta.copiarJson(jsnConta);

            this.entrarSucessoNotificar();
        }

        private entrarSucessoNotificar(): void
        {
            if (this.objConta == null)
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(this.objConta.strGametag))
            {
                return;
            }

            var strNotificacao = "Seja bem vindo _player_gametag!".replace("_player_gametag", this.objConta.strGametag);

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

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarAparencia();
        }

        private inicializarAparencia(): void
        {
            this.booMasculino = true;
            this.objBlendData = UtilsRealLife.getObjBlendDataRandomico();
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

        public salvarAparencia(): void
        {
            var objPersonagem = new PersonagemDominio();

            objPersonagem.arrObjHeadOverlay = this.arrObjHeadOverlay;
            objPersonagem.arrObjPedComponente = this.arrObjPedComponente;
            objPersonagem.booMasculino = this.booMasculino;
            objPersonagem.objBlendData = this.objBlendData;
            objPersonagem.intCabeloCor = this.intCabeloCor;
            objPersonagem.intOlhoCor = this.intOlhoCor;

            ServerRealLife.i.executarJson(Jogador.STR_METODO_SALVAR_APARENCIA, objPersonagem);
        }

        protected setEventos(): void
        {
            super.setEventos();

            ServerRealLife.i.addEvtOnServerEventTriggerListener(this);
        }

        private setBooMasculino(booMasculino: boolean): void
        {
            if (booMasculino)
            {
                API.setPlayerSkin(EnmPedSkin.FREEMODEMALE01);
            }
            else
            {
                API.setPlayerSkin(EnmPedSkin.FREEMODEFEMALE01);
            }
        }

        private setObjBlendData(objBlendData: BlendDataDominio): void
        {
            if (objBlendData == null)
            {
                return;
            }

            API.callNative("SET_PED_HEAD_BLEND_DATA", this.objHandle, objBlendData.intPai, objBlendData.intMae, objBlendData.intAvo, objBlendData.intPai, objBlendData.intMae, objBlendData.intAvo, objBlendData.fltPaiPercentual, objBlendData.fltMaePercentual, objBlendData.fltAvoPercentual, false);
        }

        // #endregion Métodos

        // #region Eventos

        public onServerEventTrigger(strMetodoNome: string, arrObjArg: System.Array<any>): void
        {
            this.processarOnServerEventTrigger(strMetodoNome, arrObjArg);
        }

        // #endregion Eventos
    }
}