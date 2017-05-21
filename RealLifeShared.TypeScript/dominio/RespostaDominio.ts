/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class RespostaDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjArgumento: Object[];
        private _intSolicitacaoId: number;
        private _strErro: string;

        public get arrObjArgumento(): Object[]
        {
            return this._arrObjArgumento;
        }

        public set arrObjArgumento(arrObjArgumento: Object[])
        {
            this._arrObjArgumento = arrObjArgumento;
        }

        public get intSolicitacaoId(): number
        {
            return this._intSolicitacaoId;
        }

        public set intSolicitacaoId(intSolicitacaoId: number)
        {
            this._intSolicitacaoId = intSolicitacaoId;
        }

        public get strErro(): string
        {
            return this._strErro;
        }

        public set strErro(strErro: string)
        {
            this._strErro = strErro;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public getObjArgumento(intIndex: number = 0): Object
        {
            if (intIndex < 0)
            {
                return null;
            }

            if (this.arrObjArgumento == null)
            {
                return null;
            }

            if (this.arrObjArgumento.length < (intIndex + 1))
            {
                return null;
            }

            var jsn = this.arrObjArgumento[intIndex].toString();

            if (jsn == null || jsn == "")
            {
                return null;
            }

            return JSON.parse(jsn);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}