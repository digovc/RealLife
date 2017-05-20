/// <reference path="../../RealLifeShared.TypeScript/dominio/DominioRealLifeBase.ts"/>
/// <reference path="../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import DominioRealLifeBase = RealLifeShared.DominioRealLifeBase;
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

        public executar(strClass: string, strMetodo: string, objDominio: DominioRealLifeBase = null): void
        {
            if (!AppRealLifeUi.i.booGame)
            {
                return;
            }

            if (Utils.getBooStrVazia(strClass))
            {
                return;
            }

            if (Utils.getBooStrVazia(strMetodo))
            {
                return;
            }

            var strCodigo = "RealLife._class_name.i._method_name";

            strCodigo = strCodigo.replace("_class_name", strClass);
            strCodigo = strCodigo.replace("_method_name", strMetodo);

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