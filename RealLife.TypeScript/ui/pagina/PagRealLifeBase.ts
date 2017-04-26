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

        private _objBrowser: Browser;

        protected get objBrowser(): Browser
        {
            if (this._objBrowser != null)
            {
                return this._objBrowser;
            }

            this._objBrowser = this.getObjBrowser();

            return this._objBrowser;
        }

        protected set objBrowser(objBrowser: Browser)
        {
            this._objBrowser = objBrowser;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public abrir(): void
        {
            this.objBrowser.abrir();
        }

        private getObjBrowser(): Browser
        {
            var objBrowserResultado = new Browser();

            objBrowserResultado.objResolucao = Screen.i.objResolucao;
            objBrowserResultado.url = this.getUrl();

            return objBrowserResultado;
        }

        protected abstract getUrl(): string;

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}