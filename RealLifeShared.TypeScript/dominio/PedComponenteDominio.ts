/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados

    export enum PedComponenteDominio_EnmTipo
    {
        FACE = 0,
        MASK = 1,
        HAIR = 2,
        HAIR_COLORS = 2.1,
        TORSO = 3,
        LEGS = 4,
        BAGS = 5,
        FEET = 6,
        ACCESSORIES = 7,
        UNDERSHIRT = 8,
        BODY_ARMOR = 9,
        DECALS = 10,
        TOPS = 11,
    }

    // #endregion Enumerados

    export class PedComponenteDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _enmTipo: PedComponenteDominio_EnmTipo = PedComponenteDominio_EnmTipo.FACE;
        private _intModelo: number = 0;
        private _intPaleta: number = 0;
        private _intTextura: number = 0;

        public get enmTipo(): PedComponenteDominio_EnmTipo
        {
            return this._enmTipo;
        }

        public set enmTipo(enmTipo: PedComponenteDominio_EnmTipo)
        {
            this._enmTipo = enmTipo;
        }

        public get intModelo(): number
        {
            return this._intModelo;
        }

        public set intModelo(intModelo: number)
        {
            this._intModelo = intModelo;
        }

        public get intPaleta(): number
        {
            return this._intPaleta;
        }

        public set intPaleta(intPaleta: number)
        {
            this._intPaleta = intPaleta;
        }

        public get intTextura(): number
        {
            return this._intTextura;
        }

        public set intTextura(intTextura: number)
        {
            this._intTextura = intTextura;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(enmTipo: PedComponenteDominio_EnmTipo = PedComponenteDominio_EnmTipo.HAIR, intModelo: number = 0, intPaleta: number = 0, intTextura: number = 0)
        {
            super();

            this.enmTipo = enmTipo;
            this.intModelo = intModelo;
            this.intPaleta = intPaleta;
            this.intTextura = intTextura;
        }

        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}