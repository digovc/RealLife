/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados

    export enum Blip_EnmCor
    {
        VERMELHO = 1,
        VERDE = 2,
        AZUL = 3,
        BRANCO = 4,
        AMARELO = 5,
        LARANJA = 17,
        CINZA = 55,
        PRETO = 85,
    }

    export enum Blip_EnmTipo
    {
        PLAYER = 0,
        CIRCULO = 1,
        CRUZ = 8,
        MERCADO = 11,
        AVIAO_MILITAR = 16,
        TELEFERICO = 36,
        BANDEIRA_CHEGADA = 38,
        CASA = 40,
        HELICOPTERO = 43,
        GARAGEM = 50,
        REMEDIO = 51,
        MERCADO_2 = 52,
        TAXI = 56,
        POLICIA = 60,
        ASTERISCO = 61,
        INTERROGACAO = 66,
        CARRO_FORTE = 67,
        ANZOL = 68,
        CABELEREIRO = 71,
        SPRAY = 72,
        ROUPA = 73,
        CORACAO = 75,
        LETRA_A = 76,
        LETRA_L = 77,
        LETRA_M = 78,
        LETRA_T = 79,
        LETRA_H = 80,
        CAVEIRA = 84,
        CARRO_CARGA = 85,
        LETRA_F = 88,
        LETRA_C = 89,
        AVIAO_COMERCIAL = 90,
        BAR = 93,
        PARAQUEDAS = 94,
        LAVA_JATO = 100,
        MASCARA = 102,
        ALVO = 103,
        LETRA_B = 106,
        CIFRAO = 108,
        GOLFE = 109,
        ARMA_PISTOLA = 110,
        MIRA = 119,
        LETRA_S = 120,
        BOATE = 121,
        TENIS = 122,
        CORRIDA_PE = 126,
        CORRIDA_MOTO = 127,
        CHAT = 133,
        CINEMA = 135,
        MUSICA = 136,
        CANABIS = 140,
        CERVO = 141,
        CARRO_FORMULA_1 = 147,
        LETRA_N_INTERROGACAO = 149,
        ARMA_FUZIL = 150,
        ARMA_2 = 151,
        ARMA_GRANADA = 152,
        SANGUE = 153,
        ARMA_FACA = 154,
        ARMA_MOLOTOVE = 155,
        ARMA_PISTOLA_2 = 156,
        ARMA_CACETETE = 157,
        ARMA_PESADA = 158,
        ARMA_SUBMETRALHADORA = 159,
        ARMA_PRECISAO = 160,
        DESTINO = 162,
        BLOQUEIO = 163,
        BANDEIRA = 164,
        ARMA_MINIGUN = 173,
        ARMA_PESADA_2 = 174,
        COLETE = 175,
        CASTELO = 181,
        FOTOGRAFIA = 184,
        ALGEMAS = 188,
        MEDITACAO = 197,
        TAXI_2 = 198,
        PENSAMENTO = 205,
        SIMBOLO_F = 206,
        CIFRAO_2 = 207,
        CARRO = 225,
        MOTO = 226,
        CARRO_ARMA = 229,
        CERCA = 238,
        AVIAO_MONOMOTOR = 251,
        CHAVE = 255,
        PARQUE = 266,
        LETRA_P = 267,
        SIMBOLO_A = 269,
        CACHORRO = 273,
        CIFRAO_3 = 277,
        BEIJO = 279,
        CARONA = 280,
        CERCA_2 = 285,
        ESTRELA = 304,
        CEMITERIO = 305,
        CAIXA_INTERROGACAO = 306,
        AVIAO_COMERCIAL_2 = 307,
        SUBMARINO = 308,
        VENENO = 310,
        MUSCULACAO = 311,
        MIRA_2 = 313,
        CORRIDA_AVIAO = 314,
        CORRIG_CARRO = 315,
        CORRIDA_BARCO = 316,
        LIXEIRO = 318,
        CASA_2 = 350,
        MALA = 351,
        SIMBOLO_M_Z = 352,
        RAIO = 354,
        LETRA_D = 355,
        GARAGEM_BARCO = 356,
        GARAGEM_2 = 357,
        GOLFE_BURACO = 358,
        GARAGEM_AVIAO = 359,
        GARAGEM_HELICOPTERO = 360,
        GALAO = 361,
        TEATRO = 362,
        SIMBOLO_H_S = 363,
        REFRESH = 364,
        ROUPA_CONJUNTO = 365,
        CHECADO = 367,
        FOGUETE = 368,
        GARAGEM_3 = 369,
        GARAGEM_HELICOPTERO_2 = 370,
        GARAGEM_BARCO_2 = 371,
        GARAGEM_AVIAO_2 = 372,
        CASA_VENDA = 374,
        CASA_VENDA_2 = 375,
        CORRIDA_MOTO_2 = 376,
        COLETE_BARCO = 377,
        VENENO_2 = 378,
        CORRIDA_PE_2 = 379,
        CARRO_BATIDA = 380,
        LETRA_B_INTERROGACAO = 381,
        LETRA_D_INTERROGACAO = 382,
        LETRA_M_INTERROGACAO = 383,
        LETRA_C_INTERROGACAO = 384,
        LETRA_J_INTERROGACAO = 385,
        LETRA_O_INTERROGACAO = 387,
        LETRA_T_INTERROGACAO = 388,
        LETRA_P_INTERROGACAO = 389,
        LETRA_A_INTERROGACAO = 400,
        DIRIGIVEL = 401,
        MECANICO = 402,
        REMEDIO_2 = 403,
        BARCO = 404,
        LETRA_F_INTERROGACAO = 405,
        MALA_2 = 408,
        PODIUM = 409,
        VELEIRO = 410,
        CASA_3 = 411,
        GALAO_2 = 415,
        FLAG_USA = 419,
        DESCONHECIDO = 420,
        TANQUE = 421,
        BARCO_2 = 427,
        CRONOMETRO = 430,
        MOEDA = 431,
        ALVO_2 = 432,
        ALVO_3 = 433,
        CAIXA_CIFRAO = 434,
        CORRIDA_ACROBATICA = 435,
        FOGO = 436,
        CAVEIRA_2 = 437,
        COROA = 439,
        MALA_X = 440,
        DIRECIONAL = 441,
        RAPOSA = 442,
        LETRA_L_D = 445,
        MECANICO_2 = 446,
        IATE = 455,
        INTERROGACAO_2 = 456,
        ALVO_4 = 458,
        WIFI = 459,
        CARRO_2 = 460,
        DEFENDER = 461,
        RAPOSA_2 = 463,
        AMPULHETA = 464,
        INTERROGACAO_3 = 465,
        CRONOMETRO_2 = 466,
        REFRESH_2 = 467,
        SIMBOLO_OLHO = 468,
        CANABIS_2 = 469,
        ARMA_PESADA_3 = 470,
        JETSKI = 471,
        OLHO = 472,
        GARAGEM_4 = 473,
        GARAGEM_5 = 474,
        APARTAMENTO = 475,
        APARTAMENTO_2 = 476,
        CAMINHAO = 477,
        CAIXA = 478,
        CARGA = 479,
        PEDESTRE = 480,
        HELICOPTERO_CARGA = 481,
        VELOCIMETRO = 483,
        FANTASMA = 484,
        RADAR = 485,
        BOMBA = 486,
        ESCUDO = 487,
        PNEU_CHAMAS = 488,
        CORACAO_2 = 489,
        PNEU_CHAMAS_CIFRAO = 490,
        VERSUS = 491,
        CASA_GARAGEM = 492,
        DIRECIONAL_MOTO = 493,
        CIRCULO_MOTO = 494,
        CORRIDA_MOTO_3 = 495,
        CANABIS_3 = 496,
        NAVALHA = 497,
        DOCUMENTO = 498,
        PESQUISA = 499,
        DINHEIRO = 500,
        PACOTE = 501,
        QUADRICICULO = 512,
        ONIBUS = 513,
        PACOTE_2 = 514,
        SETA = 515,
        COMPUTADOR = 521,
    }

    // #endregion Enumerados

    export class Blip extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booAlcancePequeno: boolean;
        private _booRota: boolean = false;
        private _enmCor: Blip_EnmCor;
        private _enmTipo: Blip_EnmTipo;
        private _fltAlpha: number;
        private _fltEscala: number;
        private _objHandle: LocalHandle;
        private _strNome: string;
        private _vctPosicao: Vector3;

        public get booAlcancePequeno(): boolean
        {
            this._booAlcancePequeno = this.getBooAlcancePequeno();

            return this._booAlcancePequeno;
        }

        public set booAlcancePequeno(booAlcancePequeno: boolean)
        {
            this._booAlcancePequeno = booAlcancePequeno;

            this.setBooAlcancePequeno(this._booAlcancePequeno);
        }

        public get booRota(): boolean
        {
            return this._booRota;
        }

        public set booRota(booRota: boolean)
        {
            this._booRota = booRota;

            this.setBooRota(this._booRota);
        }

        public get enmCor(): Blip_EnmCor
        {
            this._enmCor = this.getEnmCor();

            return this._enmCor;
        }

        public set enmCor(enmCor: Blip_EnmCor)
        {
            this._enmCor = enmCor;

            this.setEnmCor(this._enmCor);
        }

        public get enmTipo(): Blip_EnmTipo
        {
            this._enmTipo = this.getEnmTipo();

            return this._enmTipo;
        }

        public set enmTipo(enmTipo: Blip_EnmTipo)
        {
            this._enmTipo = enmTipo;

            this.setEnmTipo(this._enmTipo);
        }

        public get fltAlpha(): number
        {
            this._fltAlpha = this.getFltAlpha();

            return this._fltAlpha;
        }

        public set fltAlpha(fltAlpha: number)
        {
            this._fltAlpha = fltAlpha;

            this.setFltAlpha(this._fltAlpha);
        }

        public get fltEscala(): number
        {
            this._fltEscala = this.getFltEscala();

            return this._fltEscala;
        }

        public set fltEscala(fltEscala: number)
        {
            this._fltEscala = fltEscala;

            this.setFltEscala(this._fltEscala);
        }

        private get objHandle(): LocalHandle
        {
            return this._objHandle;
        }

        private set objHandle(objHandle: LocalHandle)
        {
            this._objHandle = objHandle;
        }

        public get strNome(): string
        {
            this._strNome = this.getStrNome();

            return this._strNome;
        }

        public set strNome(strNome: string)
        {
            this._strNome = strNome;

            this.setStrNome(this._strNome);
        }

        public get vctPosicao(): Vector3
        {
            this._vctPosicao = this.getVctPosicao();

            return this._vctPosicao;
        }

        public set vctPosicao(vctPosicao: Vector3)
        {
            if (UtilsRealLife.getBooVctIgual(this._vctPosicao, vctPosicao))
            {
                return;
            }

            this._vctPosicao = vctPosicao;

            this.setVctPosicao(this._vctPosicao);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public criar(): void
        {
            if (this.objHandle != null)
            {
                return;
            }

            this.objHandle = API.createBlip(new Vector3());
        }

        public destruir(): void
        {
            super.destruir();

            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("REMOVE_BLIP", this.objHandle);
        }

        private getBooAlcancePequeno(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipShortRange(this.objHandle);
        }

        private getEnmCor(): Blip_EnmCor
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipColor(this.objHandle);
        }

        private getEnmTipo(): Blip_EnmTipo
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipSprite(this.objHandle);
        }

        private getFltAlpha(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipTransparency(this.objHandle);
        }

        private getFltEscala(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipScale(this.objHandle);
        }

        private getStrNome(): string
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipName(this.objHandle);
        }

        private getVctPosicao(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getBlipPosition(this.objHandle);
        }

        private setBooAlcancePequeno(booAlcancePequeno: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setBlipShortRange(this.objHandle, booAlcancePequeno);
        }

        private setBooRota(booRota: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_BLIP_ROUTE", this.objHandle, booRota);

            if (booRota)
            {
                API.callNative("SET_BLIP_ROUTE_COLOUR", this.objHandle, this.enmCor);
            }
        }

        private setEnmCor(enmCor: Blip_EnmCor): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setBlipColor(this.objHandle, enmCor);
        }

        private setEnmTipo(enmTipo: Blip_EnmTipo): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setBlipSprite(this.objHandle, enmTipo);
        }

        private setFltAlpha(fltAlpha: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setBlipTransparency(this.objHandle, fltAlpha);
        }

        private setFltEscala(fltEscala: number): void
        {
            if (this.objHandle == null)
            {
                return null;
            }

            API.setBlipScale(this.objHandle, fltEscala);
        }

        private setStrNome(strNome: string): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setBlipName(this.objHandle, strNome);
        }

        private setVctPosicao(vctPosicao: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setBlipPosition(this.objHandle, vctPosicao);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}