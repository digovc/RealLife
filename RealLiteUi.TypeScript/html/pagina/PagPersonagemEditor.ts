/// <reference path="PagRealLifeUiBase.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagPersonagemEditor extends PagRealLifeUiBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagPersonagemEditor;

        public static get i(): PagPersonagemEditor
        {
            if (PagPersonagemEditor._i != null)
            {
                return PagPersonagemEditor._i;
            }

            PagPersonagemEditor._i = new PagPersonagemEditor();

            return PagPersonagemEditor._i;
        }

        private _divMenuPersonagemEditor: DivMenuPersonagemEditor;

        private get divMenuPersonagemEditor(): DivMenuPersonagemEditor
        {
            if (this._divMenuPersonagemEditor != null)
            {
                return this._divMenuPersonagemEditor;
            }

            this._divMenuPersonagemEditor = new DivMenuPersonagemEditor();

            return this._divMenuPersonagemEditor;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.divMenuPersonagemEditor.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}