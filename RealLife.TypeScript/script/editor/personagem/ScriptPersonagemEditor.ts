/// <reference path="../../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptPersonagemEditor extends ScriptBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getObjEtapaInicial(): EtapaBase
        {
            return new _001_EtapaAberturaPersonagemEditor(this);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}