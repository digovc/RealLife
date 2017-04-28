/// <reference path="../RealLifeDominio.TypeScript/DominioRealLifeBase.ts"/>

module RealLife
{
    // #region Importa��es

    import DominioRealLifeBase = RealLifeDominio.DominioRealLifeBase;

    // #endregion Importa��es

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

        // #region M�todos

        public executarJson(strMetodoNome: string, objDominio: DominioRealLifeBase): void
        {
            if (UtilsRealLife.getBooStrVazia(strMetodoNome))
            {
                return;
            }

            API.triggerServerEvent(strMetodoNome, JSON.stringify(objDominio));
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}