/// <reference path="../reallifeshared.typescript/dominio/blenddatadominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/HeadOverlayDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/PersonagemDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/SolicitacaoDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmMetodo.ts"/>
/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="evento/OnChatCommandListener.ts"/>
/// <reference path="Objeto.ts"/>
/// <reference path="Ped.ts"/>

module RealLife
{
    // #region Importações

    import BlendDataDominio = RealLifeShared.BlendDataDominio;
    import ContaDominio = RealLifeShared.ContaDominio;
    import EnmMetodo = RealLifeShared.EnmMetodo;
    import EnmPedSkin = RealLifeShared.EnmPedSkin;
    import HeadOverlayDominio = RealLifeShared.HeadOverlayDominio;
    import PersonagemDominio = RealLifeShared.PersonagemDominio;
    import RespostaDominio = RealLifeShared.RespostaDominio;
    import SolicitacaoDominio = RealLifeShared.SolicitacaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Jogador extends Ped
    {
        // #region Constantes

        private static get STR_COMANDO_DEV(): string { return "/devmode" };

        private static get STR_METODO_CRIAR_CONTA(): string { return "STR_METODO_CRIAR_CONTA" };
        private static get STR_METODO_CRIAR_CONTA_SUCESSO(): string { return "STR_METODO_CRIAR_CONTA_SUCESSO" };
        private static get STR_METODO_ENTRAR(): string { return "STR_METODO_ENTRAR" };
        private static get STR_METODO_ENTRAR_SUCESSO(): string { return "STR_METODO_ENTRAR_SUCESSO" };
        private static get STR_METODO_ERRO(): string { return "STR_METODO_ERRO" };
        private static get STR_METODO_APARENCIA_SALVAR(): string { return "STR_METODO_SALVAR_APARENCIA" };
        private static get STR_METODO_APARENCIA_SALVAR_SUCESSO(): string { return "STR_METODO_SALVAR_APARENCIA_SUCESSO" };

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
        private _arrObjSolicitacao: Array<SolicitacaoDominio>;
        private _booMasculino: boolean;
        private _intId: number;
        private _intSolicitacaoUltimaId: number = 0;
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

        private get arrObjSolicitacao(): Array<SolicitacaoDominio>
        {
            if (this._arrObjSolicitacao != null)
            {
                return this._arrObjSolicitacao;
            }

            this._arrObjSolicitacao = new Array<SolicitacaoDominio>();

            return this._arrObjSolicitacao;
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

        private get intSolicitacaoUltimaId(): number
        {
            return this._intSolicitacaoUltimaId;
        }

        private set intSolicitacaoUltimaId(intSolicitacaoUltimaId: number)
        {
            this._intSolicitacaoUltimaId = intSolicitacaoUltimaId;
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

        public carregarAparencia(fnc: Function): void
        {
            this.enviar(new SolicitacaoDominio(RealLifeShared.EnmMetodo.APARENCIA_RECUPERAR, fnc));
        }

        public criarConta(objConta: ContaDominio): void
        {
            if (objConta == null)
            {
                return;
            }

            this.objConta = objConta;

            this.enviar(new SolicitacaoDominio(RealLifeShared.EnmMetodo.CONTA_SALVAR, ((objResposta) => this.criarContaRetorno(objResposta)), this.objConta));
        }

        private criarContaRetorno(objResposta: RespostaDominio): void
        {
            if (!UtilsRealLife.getBooStrVazia(objResposta.strErro))
            {
                Screen.i.notificarErro(objResposta.strErro);
                return;
            }

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

            this.enviar(new SolicitacaoDominio(RealLifeShared.EnmMetodo.LOGIN_ENTRAR, ((objResposta) => { this.entrarRetorno(objResposta); }), this.objConta));
        }

        private entrarRetorno(objResposta: RespostaDominio): void
        {
            if (UtilsRealLife.getBooStrVazia(objResposta.strErro))
            {
                Screen.i.notificarErro(objResposta.strErro);
                return;
            }

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

        public enviar(objSolicitacao: SolicitacaoDominio): void
        {
            if (objSolicitacao == null)
            {
                return;
            }

            objSolicitacao.intId = this.intSolicitacaoUltimaId++;

            if (this.intSolicitacaoUltimaId >= 2147483647)
            {
                this.intSolicitacaoUltimaId = 0;
            }

            API.triggerServerEvent("0", JSON.stringify(objSolicitacao));

            if (objSolicitacao.fncRetorno == null)
            {
                return;
            }

            this.arrObjSolicitacao.push(objSolicitacao);
        }

        private getStrArgumento(arrObjArg: Object[], intIndex: number = 0): string
        {
            if (arrObjArg == null)
            {
                return null;
            }

            if (arrObjArg.length < (intIndex - 1))
            {
                return null;
            }

            return arrObjArg[intIndex].toString();
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

        public processarEvtOnServerEventTriggerListener(strMetodo: string, strJson: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strJson))
            {
                return;
            }

            if ("0" == strMetodo)
            {
                var objSolicitacao = new SolicitacaoDominio(RealLifeShared.EnmMetodo.DESCONHECIDO);

                objSolicitacao.copiarJson(strJson);

                this.processarSolicitacao(objSolicitacao);
                return;
            }

            var objResposta = new RespostaDominio();

            objResposta.copiarJson(strJson);

            this.processarResposta(objResposta);
        }

        private processarResposta(objResposta: RespostaDominio): void
        {
            for (var i = 0; i < this.arrObjSolicitacao.length; i++)
            {
                if (this.arrObjSolicitacao[i].processarResposta(objResposta))
                {
                    this.arrObjSolicitacao.splice(i, 1);
                    return;
                }
            }
        }

        private processarSolicitacao(objSolicitacao: SolicitacaoDominio): void
        {
        }

        public salvarAparencia(objEtapa: EtapaPersonagemEditor003Concluir): void
        {
            if (objEtapa == null)
            {
                return;
            }

            var objPersonagem = new PersonagemDominio();

            objPersonagem.booMasculino = this.booMasculino;
            objPersonagem.intCabeloCor = this.intCabeloCor;
            objPersonagem.intOlhoCor = this.intOlhoCor;
            objPersonagem.objBlendData = this.objBlendData;

            this.enviar(new SolicitacaoDominio(EnmMetodo.APARENCIA_SALVAR, ((objResposta) => { this.salvarAparenciaRetorno(objResposta, objEtapa); }), objPersonagem, this.arrObjHeadOverlay, this.arrObjPedComponente));
        }

        private salvarAparenciaRetorno(objResposta: RespostaDominio, objEtapa: EtapaPersonagemEditor003Concluir): void
        {
            objEtapa.salvarAparenciaSucesso();
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

        // #endregion Eventos
    }
}