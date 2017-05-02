/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MissaoConclusaoDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intDinheiro: number;
        private _intNivelAtual: number;
        private _intReputacao: number;

        public get intDinheiro(): number
        {
            return this._intDinheiro;
        }

        public set intDinheiro(intDinheiro: number)
        {
            this._intDinheiro = intDinheiro;
        }

        public get intNivelAtual(): number
        {
            return this._intNivelAtual;
        }

        public set intNivelAtual(intNivelAtual: number)
        {
            this._intNivelAtual = intNivelAtual;
        }

        public get intReputacao(): number
        {
            return this._intReputacao;
        }

        public set intReputacao(intReputacao: number)
        {
            this._intReputacao = intReputacao;
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