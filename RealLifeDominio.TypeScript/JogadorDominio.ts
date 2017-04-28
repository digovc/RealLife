/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeDominio
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class JogadorDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _strEmail: string;
        private _strGametag: string;
        private _strSenha: string;

        public get strEmail(): string
        {
            return this._strEmail;
        }

        public set strEmail(strEmail: string)
        {
            this._strEmail = strEmail;
        }

        public get strGametag(): string
        {
            return this._strGametag;
        }

        public set strGametag(strGametag: string)
        {
            this._strGametag = strGametag;
        }

        public get strSenha(): string
        {
            return this._strSenha;
        }

        public set strSenha(strSenha: string)
        {
            this._strSenha = strSenha;
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