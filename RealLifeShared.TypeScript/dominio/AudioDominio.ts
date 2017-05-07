/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AudioDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _strNome: string;
        private _strSetNome: string;

        public get strNome(): string
        {
            return this._strNome;
        }

        public set strNome(strNome: string)
        {
            this._strNome = strNome;
        }

        public get strSetNome(): string
        {
            return this._strSetNome;
        }

        public set strSetNome(strSetNome: string)
        {
            this._strSetNome = strSetNome;
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