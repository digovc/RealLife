/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagDev extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagDev;

        public static get i(): PagDev
        {
            if (PagDev._i != null)
            {
                return PagDev._i;
            }

            PagDev._i = new PagDev();

            return PagDev._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getUrl(): string
        {
            return "ui/pag_desenvolvimento.html";
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}