/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EntityDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intHash: number = 656641197;

        public get intHash(): number
        {
            return this._intHash;
        }

        public set intHash(intHash: number)
        {
            this._intHash = intHash;
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