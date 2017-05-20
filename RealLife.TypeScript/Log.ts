/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Log extends Objeto
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

        // #region Métodos

        public debug(strLog: string, ...arrStrParam: Array<any>): void
        {
            if (!AppRealLife.i.booDebug)
            {
                return;
            }

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

            Chat.i.debug(strLog);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}