/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export abstract class ScriptMissaoBase extends ScriptBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected getObjEtapaInicial(): EtapaBase
        {
            return new _001_EtapaMissaoAbertura(this);
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}