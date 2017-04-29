module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class BrowserRealLife extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objBrowser: GTANetwork.GUI.Browser;
        private _url: string;

        private get objBrowser(): GTANetwork.GUI.Browser
        {
            if (this._objBrowser != null)
            {
                return this._objBrowser;
            }

            this._objBrowser = API.createCefBrowser(Screen.i.objResolucao.Width, Screen.i.objResolucao.Height, true);

            return this._objBrowser;
        }

        private set objBrowser(objBrowser: GTANetwork.GUI.Browser)
        {
            this._objBrowser = objBrowser;
        }

        public get url(): string
        {
            return this._url;
        }

        public set url(url: string)
        {
            this._url = url;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public destruir(): void
        {
            this.destruirObjBrowser();
        }

        private destruirObjBrowser(): void
        {
            if (this.objBrowser == null)
            {
                return;
            }

            API.destroyCefBrowser(this.objBrowser);

            this.objBrowser = null;
        }

        public iniciar(): void
        {
            super.iniciar();

            if (UtilsRealLife.getBooStrVazia(this.url))
            {
                throw "A URL do browser não foi definida.";
            }

            if (API.isCefBrowserInitialized(this.objBrowser))
            {
                return;
            }

            API.waitUntilCefBrowserInit(this.objBrowser);

            API.setCefBrowserPosition(this.objBrowser, 0, 0);

            API.loadPageCefBrowser(this.objBrowser, this.url);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}