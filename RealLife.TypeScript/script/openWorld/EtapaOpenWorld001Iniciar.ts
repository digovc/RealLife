/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaOpenWorld001Iniciar extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objScriptAguardar: ScriptAguardar;

        private get objScriptAguardar(): ScriptAguardar
        {
            if (this._objScriptAguardar != null)
            {
                return this._objScriptAguardar;
            }

            this._objScriptAguardar = new ScriptAguardar();

            return this._objScriptAguardar;
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

        // Etapas

        private etapa001(): void
        {
            this.objScriptAguardar.iniciar();

        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}