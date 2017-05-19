/// <reference path="../enumerado/EnmMetodo.ts"/>
/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class SolicitacaoDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjArgumento: Object[];
        private _enmMetodo: EnmMetodo = EnmMetodo.DESCONHECIDO;
        private _fncRetorno: Function;

        public get arrObjArgumento(): Object[]
        {
            return this._arrObjArgumento;
        }

        public set arrObjArgumento(arrObjArgumento: Object[])
        {
            this._arrObjArgumento = arrObjArgumento;
        }

        public get enmMetodo(): EnmMetodo
        {
            return this._enmMetodo;
        }

        public set enmMetodo(enmMetodo: EnmMetodo)
        {
            this._enmMetodo = enmMetodo;
        }

        public get fncRetorno(): Function
        {
            return this._fncRetorno;
        }

        public set fncRetorno(fncRetorno: Function)
        {
            this._fncRetorno = fncRetorno;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(enmMetodo: EnmMetodo, fncRetorno: Function = null, ...arrObjArgumento: Object[])
        {
            super();

            this.enmMetodo = enmMetodo;
            this.fncRetorno = fncRetorno;

            this.addObjArgumento(arrObjArgumento);
        }

        // #endregion Construtores

        // #region Métodos

        public addObjArgumento(...arrObjArgumento: Object[]): void
        {
            if (arrObjArgumento == null)
            {
                return;
            }

            if (arrObjArgumento.length < 1)
            {
                return;
            }

            arrObjArgumento.forEach((objArgumento) => { this.arrObjArgumento.push(JSON.stringify(objArgumento)); });
        }

        public processarResposta(objResposta: RespostaDominio): boolean
        {
            if (objResposta.intSolicitacaoId != this.intId)
            {
                return false;
            }

            if (this.fncRetorno == null)
            {
                return true;
            }

            this.fncRetorno(objResposta);

            return true;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}