module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados

    export enum NativeMethod_EnmTipo
    {
        BOOL = 8,
        FLOAT = 7,
        HANDLE = 9,
        INT = 0,
        LONG = 2,
        STRING = 4,
        UINT = 1,
        ULONG = 3,
        VECTOR2 = 6,
        VECTOR3 = 5,
        VOID = -1,
    }

    // #endregion Enumerados

    export class NativeMethod extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _enmRetornoTipo: NativeMethod_EnmTipo = NativeMethod_EnmTipo.VOID;
        private _strHash: string;

        private get enmRetornoTipo(): NativeMethod_EnmTipo
        {
            return this._enmRetornoTipo;
        }

        private set enmRetornoTipo(enmRetornoTipo: NativeMethod_EnmTipo)
        {
            this._enmRetornoTipo = enmRetornoTipo;
        }

        private get strHash(): string
        {
            return this._strHash;
        }

        private set strHash(strHash: string)
        {
            this._strHash = strHash;
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