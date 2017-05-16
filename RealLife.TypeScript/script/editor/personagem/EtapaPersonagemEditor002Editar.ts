module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaPersonagemEditor002Editar extends EtapaBase
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

            this._objMenu = new MenuPersonagemEditor(this);

            return this._objMenu;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.etapa001();
        }

        public salvar(): void
        {
            this.objMenu.destruir();

            new EtapaPersonagemEditor003Concluir(this.objScript).iniciar();
        }

        // Etapas

        private etapa001(): void
        {
            this.objMenu.iniciar();

            this.objMenu.booVisivel = true;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}