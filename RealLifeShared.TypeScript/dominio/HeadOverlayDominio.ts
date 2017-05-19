/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados

    export enum HeadOverlayDominio_EnmTipo
    {
        BLEMISHES = 0,
        FACIAL_HAIR = 1,
        EYEBROWS = 2,
        AGEING = 3,
        MAKEUP = 4,
        BLUSH = 5,
        COMPLEXION = 6,
        SUN_DAMAGE = 7,
        LIPSTICK = 8,
        MOLES_FRECKLES = 9,
        CHEST_HAIR = 10,
        BODY_BLEMISHES = 11,
        ADD_BODY_BLEMISHES = 12,
    }

    // #endregion Enumerados

    export class HeadOverlayDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _enmTipo: HeadOverlayDominio_EnmTipo;
        private _intAlpha: number;
        private _intIndex: number;

        public get enmTipo(): HeadOverlayDominio_EnmTipo
        {
            return this._enmTipo;
        }

        public set enmTipo(enmTipo: HeadOverlayDominio_EnmTipo)
        {
            this._enmTipo = enmTipo;
        }

        public get intAlpha(): number
        {
            return this._intAlpha;
        }

        public set intAlpha(intAlpha: number)
        {
            this._intAlpha = intAlpha;
        }

        public get intIndex(): number
        {
            return this._intIndex;
        }

        public set intIndex(intIndex: number)
        {
            this._intIndex = intIndex;
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