module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class Log
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Log;

        public static get i(): Log
        {
            if (Log._i != null)
            {
                return Log._i;
            }

            Log._i = new Log();

            return Log._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        public debug(strLog: string, ...arrStrParam: Array<any>): void
        {
            // TODO: Implementar um booleano para indicar o modo debug.

            if (UtilsRealLife.getBooStrVazia(strLog))
            {
                return;
            }

            if (arrStrParam != null)
            {
                for (var i = 0; i < arrStrParam.length; i++)
                {
                    strLog = strLog.replace(("{" + i.toString() + "}"), arrStrParam[i]);
                }
            }

            API.sendChatMessage(strLog);
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}