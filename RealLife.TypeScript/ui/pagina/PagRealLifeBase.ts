/// <reference path="../../Objeto.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

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

        // #region M�todos

        public abrir(): void
        {
            this.objBrowserRealLife.abrir();
        }

        private getobjBrowserRealLife(): BrowserRealLife
        {
            var objBrowserRealLifeResultado = new BrowserRealLife();

            objBrowserRealLifeResultado.url = this.getUrl();

            return objBrowserRealLifeResultado;
        }

        protected abstract getUrl(): string;

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}