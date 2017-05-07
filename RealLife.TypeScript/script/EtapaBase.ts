/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class EtapaBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objScript: ScriptBase;

        protected get objScript(): ScriptBase
        {
            return this._objScript;
        }

        protected set objScript(objScript: ScriptBase)
        {
            this._objScript = objScript;

            this.setObjScript(this._objScript);
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objScript: ScriptBase)
        {
            super();

            this.objScript = objScript;
        }

        // #endregion Construtores

        // #region Métodos

        private setObjScript(objScript: ScriptBase): void
        {
            if (objScript == null)
            {
                return;
            }

            objScript.addEtapa(this);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}