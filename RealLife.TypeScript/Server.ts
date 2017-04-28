/// <reference path="../RealLifeDominio.TypeScript/DominioRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import DominioRealLifeBase = RealLifeDominio.DominioRealLifeBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Server
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Server;

        public static get i(): Server
        {
            if (Server._i != null)
            {
                return Server._i;
            }

            Server._i = new Server();

            return Server._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executarJson(strClassName: string, strMetodoNome: string, objDominio: DominioRealLifeBase): void
        {
            if (UtilsRealLife.getBooStrVazia(strClassName))
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(strMetodoNome))
            {
                return;
            }

            var strCodigo = "_class_name._method_name";

            strCodigo = strCodigo.replace("_class_name", strClassName);
            strCodigo = strCodigo.replace("_method_name", strMetodoNome);

            API.triggerServerEvent(strCodigo, JSON.stringify(objDominio));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}