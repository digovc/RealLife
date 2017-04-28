/// <reference path="../RealLifeDominio.TypeScript/DominioRealLifeBase.ts"/>
/// <reference path="../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import DominioRealLifeBase = RealLifeDominio.DominioRealLifeBase;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Client
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Client;

        public static get i(): Client
        {
            if (Client._i != null)
            {
                return Client._i;
            }

            Client._i = new Client();

            return Client._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executarJson(strClassName: string, strMetodoNome: string, objDominio: DominioRealLifeBase): void
        {
            if (resourceCall == null)
            {
                return;
            }

            if (Utils.getBooStrVazia(strClassName))
            {
                return;
            }

            if (Utils.getBooStrVazia(strMetodoNome))
            {
                return;
            }

            var strCodigo = "RealLife._class_name.i._method_name";

            strCodigo = strCodigo.replace("_class_name", strClassName);
            strCodigo = strCodigo.replace("_method_name", strMetodoNome);

            resourceCall(strCodigo, JSON.stringify(objDominio));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}