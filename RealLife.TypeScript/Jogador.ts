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

        public carregarAparencia(fncRetorno: Function = null): void
        {
            Server.i.enviar(new SolicitacaoDominio(RealLifeShared.EnmMetodo.APARENCIA_RECUPERAR, ((objResposta) => { this.carregarAparenciaRetorno(objResposta, fncRetorno); })));
        }

        private carregarAparenciaRetorno(objResposta: RespostaDominio, fncRetorno: Function): void
        {
            // TODO: Parei aqui.

            if (fncRetorno != null)
            {
                fncRetorno();
            }
        }

        public detonarBombaAdesiva(): void
        {
            API.detonatePlayerStickies();
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

            Server.i.enviar(new SolicitacaoDominio(EnmMetodo.APARENCIA_SALVAR, ((objResposta) => { this.salvarAparenciaRetorno(objResposta, objEtapa); }), objPersonagem, this.arrObjHeadOverlay, this.arrObjPedComponente));
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