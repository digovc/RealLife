/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagLogin extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagLogin;

        public static get i(): PagLogin
        {
            if (PagLogin._i != null)
            {
                return PagLogin._i;
            }

            PagLogin._i = new PagLogin();

            return PagLogin._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getUrl(): string
        {
            return "ui/pag_login.html";
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}