/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AparenciaDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _fltAvoPercentual: number;
        private _fltMaePercentual: number;
        private _fltPaiPercentual: number;
        private _intAvo: number;
        private _intMae: number;
        private _intPai: number;

        public get fltAvoPercentual(): number
        {
            return this._fltAvoPercentual;
        }

        public set fltAvoPercentual(fltAvoPercentual: number)
        {
            this._fltAvoPercentual = fltAvoPercentual;
        }

        public get fltMaePercentual(): number
        {
            return this._fltMaePercentual;
        }

        public set fltMaePercentual(fltMaePercentual: number)
        {
            this._fltMaePercentual = fltMaePercentual;
        }

        public get fltPaiPercentual(): number
        {
            return this._fltPaiPercentual;
        }

        public set fltPaiPercentual(fltPaiPercentual: number)
        {
            this._fltPaiPercentual = fltPaiPercentual;
        }

        public get intAvo(): number
        {
            return this._intAvo;
        }

        public set intAvo(intAvo: number)
        {
            this._intAvo = intAvo;
        }

        public get intMae(): number
        {
            return this._intMae;
        }

        public set intMae(intMae: number)
        {
            this._intMae = intMae;
        }

        public get intPai(): number
        {
            return this._intPai;
        }

        public set intPai(intPai: number)
        {
            this._intPai = intPai;
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