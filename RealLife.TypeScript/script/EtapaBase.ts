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

        private _objEtapaProxima: EtapaBase;

        private get objEtapaProxima(): EtapaBase
        {
            if (this._objEtapaProxima != null)
            {
                return this._objEtapaProxima;
            }

            this._objEtapaProxima = this.getObjEtapaProxima(this.objScript);

            return this._objEtapaProxima;
        }

        private _objScript: ScriptBase;

        private get objScript(): ScriptBase
        {
            return this._objScript;
        }

        private set objScript(objScript: ScriptBase)
        {
            this._objScript = objScript;
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

        public destruir(): void
        {
            super.destruir();

            if (this.objEtapaProxima == null)
            {
                this.objScript.destruir();
                return;
            }

            this.objEtapaProxima.iniciar();
        }

        protected finalizar(): void
        {
            super.finalizar();

            this._001_comecar();
        }

        protected getObjEtapaProxima(objScript: ScriptBase): EtapaBase
        {
            return null;
        }

        protected abstract _001_comecar(): void;

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}