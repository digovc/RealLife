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

        protected inicializar(): void
        {
            super.inicializar();

            new Etapa001PersonagemEditorAbertura(this).iniciar();
        }

        public destruir(): void
        {
            super.destruir();

            new ScriptOpenWorld().iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}