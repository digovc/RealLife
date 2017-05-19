/// <reference path="DominioRealLifeBase.ts"/>

module RealLifeShared
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AparenciaDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objPersonagem: PersonagemDominio;

        public get objPersonagem(): PersonagemDominio
        {
            return this._objPersonagem;
        }

        public set objPersonagem(objPersonagem: PersonagemDominio)
        {
            this._objPersonagem = objPersonagem;
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