/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class ObjetoGtaBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intHandle: number;

        public get intHandle(): number
        {
            return this._intHandle;
        }

        public set intHandle(intHandle: number)
        {
            this._intHandle = intHandle;
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