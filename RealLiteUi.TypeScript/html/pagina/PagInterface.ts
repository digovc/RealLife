/// <reference path="PagRealLifeBase.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagInterface extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagInterface;

        public static get i(): PagInterface
        {
            if (PagInterface._i != null)
            {
                return PagInterface._i;
            }

            PagInterface._i = new PagInterface();

            return PagInterface._i;
        }

        private _divAtalho: DivAtalho;
        private _divBanco: DivBanco;
        private _divCarteira: DivCarteira;
        private _divCombustivel: DivCombustivel;
        private _divMenuInterativo: DivMenuInterativo;
        private _divTimer: DivTimer;

        private get divAtalho(): DivAtalho
        {
            if (this._divAtalho != null)
            {
                return this._divAtalho;
            }

            this._divAtalho = new DivAtalho();

            return this._divAtalho;
        }

        private get divBanco(): DivBanco
        {
            if (this._divBanco != null)
            {
                return this._divBanco;
            }

            this._divBanco = new DivBanco();

            return this._divBanco;
        }

        private get divCarteira(): DivCarteira
        {
            if (this._divCarteira != null)
            {
                return this._divCarteira;
            }

            this._divCarteira = new DivCarteira();

            return this._divCarteira;
        }

        private get divCombustivel(): DivCombustivel
        {
            if (this._divCombustivel != null)
            {
                return this._divCombustivel;
            }

            this._divCombustivel = new DivCombustivel();

            return this._divCombustivel;
        }

        private get divMenuInterativo(): DivMenuInterativo
        {
            if (this._divMenuInterativo != null)
            {
                return this._divMenuInterativo;
            }

            this._divMenuInterativo = new DivMenuInterativo();

            return this._divMenuInterativo;
        }

        private get divTimer(): DivTimer
        {
            if (this._divTimer != null)
            {
                return this._divTimer;
            }

            this._divTimer = new DivTimer();

            return this._divTimer;
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