module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        public static getBooStrVazia(str: string): boolean
        {
            return ((str == null) || (str == Utils.STR_VAZIA));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}