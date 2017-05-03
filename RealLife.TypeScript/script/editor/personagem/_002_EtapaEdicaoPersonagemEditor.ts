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

        private _pagPersonagemEditor: PagPersonagemEditor;

        private get pagPersonagemEditor(): PagPersonagemEditor
        {
            if (this._pagPersonagemEditor != null)
            {
                return this._pagPersonagemEditor;
            }

            this._pagPersonagemEditor = new PagPersonagemEditor();

            return this._pagPersonagemEditor;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getObjEtapaProxima(objScript: ScriptBase): EtapaBase
        {
            return new _003_EtapaFechamentoPersonagemEditor(objScript);
        }

        protected _001_comecar(): void
        {
            this.pagPersonagemEditor.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}