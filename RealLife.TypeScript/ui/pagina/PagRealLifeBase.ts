/// <reference path="../../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class PagRealLifeBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objBrowserRealLife: BrowserRealLife;

        protected get objBrowserRealLife(): BrowserRealLife
        {
            if (this._objBrowserRealLife != null)
            {
                return this._objBrowserRealLife;
            }

            this._objBrowserRealLife = this.getobjBrowserRealLife();

            return this._objBrowserRealLife;
        }

        protected set objBrowserRealLife(objBrowserRealLife: BrowserRealLife)
        {
            this._objBrowserRealLife = objBrowserRealLife;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private getobjBrowserRealLife(): BrowserRealLife
        {
            var objBrowserRealLifeResultado = new BrowserRealLife();

            objBrowserRealLifeResultado.url = this.getUrl();

            return objBrowserRealLifeResultado;
        }

        protected abstract getUrl(): string;

        public iniciar(): void
        {
            super.iniciar();

            this.objBrowserRealLife.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}