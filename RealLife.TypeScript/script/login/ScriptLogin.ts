/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptLogin extends ScriptBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected inicializar(): void
        {
            super.inicializar();

            new EtapaLogin001Iniciar(this).iniciar();
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}