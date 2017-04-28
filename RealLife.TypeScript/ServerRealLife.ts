/// <reference path="../RealLifeDominio.TypeScript/DominioRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import DominioRealLifeBase = RealLifeDominio.DominioRealLifeBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ServerRealLife
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: ServerRealLife;

        public static get i(): ServerRealLife
        {
            if (ServerRealLife._i != null)
            {
                return ServerRealLife._i;
            }

            ServerRealLife._i = new ServerRealLife();

            return ServerRealLife._i;
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