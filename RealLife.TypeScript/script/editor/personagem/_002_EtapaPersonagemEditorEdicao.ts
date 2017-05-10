module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class _002_EtapaPersonagemEditorEdicao extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objMenu: MenuPersonagemEditor;

        private get objMenu(): MenuPersonagemEditor
        {
            if (this._objMenu != null)
            {
                return this._objMenu;
            }

            this._objMenu = new MenuPersonagemEditor();

            return this._objMenu;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarOjMenu();
        }

        private inicializarOjMenu(): void
        {
            this.objMenu.iniciar();

            this.objMenu.booVisivel = true;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}