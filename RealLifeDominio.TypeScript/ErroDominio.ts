module RealLifeDominio
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ErroDominio extends DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _strMensagem: string;

        public get strMensagem(): string
        {
            return this._strMensagem;
        }

        public set strMensagem(strMensagem: string)
        {
            this._strMensagem = strMensagem;
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