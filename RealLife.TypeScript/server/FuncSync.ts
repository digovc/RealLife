/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class FuncSync extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booRespondido: boolean;
        private _fncSync: Function;
        private _strMetodo: string;

        public get booRespondido(): boolean
        {
            return this._booRespondido;
        }

        public set booRespondido(booRespondido: boolean)
        {
            this._booRespondido = booRespondido;
        }

        public get fncSync(): Function
        {
            return this._fncSync;
        }

        public set fncSync(fncSync: Function)
        {
            this._fncSync = fncSync;
        }

        public get strMetodo(): string
        {
            return this._strMetodo;
        }

        public set strMetodo(strMetodo: string)
        {
            this._strMetodo = strMetodo;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(fncSync: Function, strMetodo: string)
        {
            super();

            this.fncSync = fncSync;
            this.strMetodo = strMetodo;
        }

        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}