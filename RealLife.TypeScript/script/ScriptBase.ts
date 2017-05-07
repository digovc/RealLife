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

        private _arrObjEtapa: Array<EtapaBase>;

        private get arrObjEtapa(): Array<EtapaBase>
        {
            if (this._arrObjEtapa != null)
            {
                return this._arrObjEtapa;
            }

            this._arrObjEtapa = new Array<EtapaBase>();

            return this._arrObjEtapa;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public addEtapa(objEtapa: EtapaBase): void
        {
            if (objEtapa == null)
            {
                return;
            }

            if (this.arrObjEtapa.indexOf(objEtapa) > -1)
            {
                return;
            }

            this.arrObjEtapa.push(objEtapa);
        }

        public destruir(): void
        {
            super.destruir();

            for (var i = 0; i < this.arrObjEtapa.length; i++)
            {
                this.arrObjEtapa[i].destruir();
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}