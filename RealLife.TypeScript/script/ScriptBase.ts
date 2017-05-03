/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        protected finalizar(): void
        {
            super.finalizar();

            this.objEtapaInicial.iniciar();
        }

        protected abstract getObjEtapaInicial(): EtapaBase;

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}