module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class _002_EtapaEdicaoPersonagemEditor extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getObjEtapaProxima(objScript: ScriptBase): EtapaBase
        {
            return new _003_EtapaConclusaoPersonagemEditor(objScript);
        }

        protected _001_comecar(): void
        {
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}