/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

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

        // #region M�todos
        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}