module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export abstract class Utils
    {
        // #region Constantes

        public static get STR_VAZIA(): string { return "" };

        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        public static getBooStrVazia(str: string): boolean
        {
            return ((str == null) || (str == Utils.STR_VAZIA));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}