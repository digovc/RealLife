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

    export class ClientRealLife
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: ClientRealLife;

        public static get i(): ClientRealLife
        {
            if (ClientRealLife._i != null)
            {
                return ClientRealLife._i;
            }

            ClientRealLife._i = new ClientRealLife();

            return ClientRealLife._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executar(strClassName: string, strMetodoNome: string, objDominio: DominioRealLifeBase = null): void
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

            if (objDominio == null)
            {
                resourceCall(strCodigo);
            }
            else
            {
                resourceCall(strCodigo, JSON.stringify(objDominio));
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}