/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class NativeArgumento extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _enmTipo: NativeMethod_EnmTipo = NativeMethod_EnmTipo.HANDLE;
        private _objValor: any;
        private _strNome: string;

        private get enmTipo(): NativeMethod_EnmTipo
        {
            return this._enmTipo;
        }

        private set enmTipo(enmTipo: NativeMethod_EnmTipo)
        {
            this._enmTipo = enmTipo;
        }

        private get strNome(): string
        {
            return this._strNome;
        }

        private set strNome(strNome: string)
        {
            this._strNome = strNome;
        }

        private get objValor(): any
        {
            return this._objValor;
        }

        private set objValor(objValor: any)
        {
            this._objValor = objValor;
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