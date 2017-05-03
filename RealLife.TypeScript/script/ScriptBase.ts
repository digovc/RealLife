/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export abstract class ScriptBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objEtapaInicial: EtapaBase;

        private get objEtapaInicial(): EtapaBase
        {
            if (this._objEtapaInicial != null)
            {
                return this._objEtapaInicial;
            }

            this._objEtapaInicial = this.getObjEtapaInicial();

            return this._objEtapaInicial;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected finalizar(): void
        {
            super.finalizar();

            this.objEtapaInicial.iniciar();
        }

        protected abstract getObjEtapaInicial(): EtapaBase;

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}