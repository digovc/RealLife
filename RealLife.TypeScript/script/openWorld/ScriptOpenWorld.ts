/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptOpenWorld extends ScriptBase
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

            new ScriptAgenciaEmprego().iniciar();
            new ScriptAutoEscola().iniciar();
            new ScriptBanco().iniciar();
            new ScriptCabeleireiro().iniciar();
            new ScriptEscolaAviacao().iniciar();
            new ScriptEstudioTatuagem().iniciar();
            new ScriptLojaImovel().iniciar();
            new ScriptLojaRoupa().iniciar();
            new ScriptLojaVeiculo().iniciar();
            new ScriptMecanica().iniciar();
            new ScriptMercado().iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}