/// <reference path="BlendDataDominio.ts"/>
/// <reference path="DominioRealLifeBase.ts"/>
/// <reference path="HeadOverlayDominio.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PersonagemDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjHeadOverlay: Array<HeadOverlayDominio>;
        private _arrObjPedComponente: Array<PedComponenteDominio>;
        private _booMasculino: boolean;
        private _intCabeloCor: number;
        private _intDinheiro: number;
        private _intDoenca: number;
        private _intExperiencia: number;
        private _intFome: number;
        private _intForca: number;
        private _intInteligencia: number;
        private _intJogadorId: number;
        private _intNivel: number;
        private _intOlhoCor: number;
        private _intPericiaArma: number;
        private _intPericiaAviao: number;
        private _intPericiaBarco: number;
        private _intPericiaCarro: number;
        private _intResistencia: number;
        private _intSangue: number;
        private _intSanidade: number;
        private _intSessaoId: number;
        private _intSono: number;
        private _intVelocidade: number;
        private _objBlendData: BlendDataDominio;

        public get arrObjPedComponente(): Array<PedComponenteDominio>
        {
            return this._arrObjPedComponente;
        }

        public set arrObjPedComponente(arrObjPedComponente: Array<PedComponenteDominio>)
        {
            this._arrObjPedComponente = arrObjPedComponente;
        }

        public get arrObjHeadOverlay(): Array<HeadOverlayDominio>
        {
            return this._arrObjHeadOverlay;
        }

        public set arrObjHeadOverlay(arrObjHeadOverlay: Array<HeadOverlayDominio>)
        {
            this._arrObjHeadOverlay = arrObjHeadOverlay;
        }

        public get booMasculino(): boolean
        {
            return this._booMasculino;
        }

        public set booMasculino(booMasculino: boolean)
        {
            this._booMasculino = booMasculino;
        }

        public get intCabeloCor(): number
        {
            return this._intCabeloCor;
        }

        public set intCabeloCor(intCabeloCor: number)
        {
            this._intCabeloCor = intCabeloCor;
        }

        public get intDinheiro(): number
        {
            return this._intDinheiro;
        }

        public set intDinheiro(intDinheiro: number)
        {
            this._intDinheiro = intDinheiro;
        }

        public get intDoenca(): number
        {
            return this._intDoenca;
        }

        public set intDoenca(intDoenca: number)
        {
            this._intDoenca = intDoenca;
        }

        public get intExperiencia(): number
        {
            return this._intExperiencia;
        }

        public set intExperiencia(intExperiencia: number)
        {
            this._intExperiencia = intExperiencia;
        }

        public get intFome(): number
        {
            return this._intFome;
        }

        public set intFome(intFome: number)
        {
            this._intFome = intFome;
        }

        public get intForca(): number
        {
            return this._intForca;
        }

        public set intForca(intForca: number)
        {
            this._intForca = intForca;
        }

        public get intInteligencia(): number
        {
            return this._intInteligencia;
        }

        public set intInteligencia(intInteligencia: number)
        {
            this._intInteligencia = intInteligencia;
        }

        public get intJogadorId(): number
        {
            return this._intJogadorId;
        }

        public set intJogadorId(intJogadorId: number)
        {
            this._intJogadorId = intJogadorId;
        }

        public get intNivel(): number
        {
            return this._intNivel;
        }

        public set intNivel(intNivel: number)
        {
            this._intNivel = intNivel;
        }

        public get intOlhoCor(): number
        {
            return this._intOlhoCor;
        }

        public set intOlhoCor(intOlhoCor: number)
        {
            this._intOlhoCor = intOlhoCor;
        }

        public get intPericiaArma(): number
        {
            return this._intPericiaArma;
        }

        public set intPericiaArma(intPericiaArma: number)
        {
            this._intPericiaArma = intPericiaArma;
        }

        public get intPericiaAviao(): number
        {
            return this._intPericiaAviao;
        }

        public set intPericiaAviao(intPericiaAviao: number)
        {
            this._intPericiaAviao = intPericiaAviao;
        }

        public get intPericiaBarco(): number
        {
            return this._intPericiaBarco;
        }

        public set intPericiaBarco(intPericiaBarco: number)
        {
            this._intPericiaBarco = intPericiaBarco;
        }

        public get intPericiaCarro(): number
        {
            return this._intPericiaCarro;
        }

        public set intPericiaCarro(intPericiaCarro: number)
        {
            this._intPericiaCarro = intPericiaCarro;
        }

        public get intResistencia(): number
        {
            return this._intResistencia;
        }

        public set intResistencia(intResistencia: number)
        {
            this._intResistencia = intResistencia;
        }

        public get intSangue(): number
        {
            return this._intSangue;
        }

        public set intSangue(intSangue: number)
        {
            this._intSangue = intSangue;
        }

        public get intSanidade(): number
        {
            return this._intSanidade;
        }

        public set intSanidade(intSanidade: number)
        {
            this._intSanidade = intSanidade;
        }

        public get intSessaoId(): number
        {
            return this._intSessaoId;
        }

        public set intSessaoId(intSessaoId: number)
        {
            this._intSessaoId = intSessaoId;
        }

        public get intSono(): number
        {
            return this._intSono;
        }

        public set intSono(intSono: number)
        {
            this._intSono = intSono;
        }

        public get intVelocidade(): number
        {
            return this._intVelocidade;
        }

        public set intVelocidade(intVelocidade: number)
        {
            this._intVelocidade = intVelocidade;
        }

        public get objBlendData(): BlendDataDominio
        {
            return this._objBlendData;
        }

        public set objBlendData(objBlendData: BlendDataDominio)
        {
            this._objBlendData = objBlendData;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}