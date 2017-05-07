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

        private _booInicializado: boolean;
        private _objBrowser: GTANetwork.GUI.Browser;
        private _pag: PagRealLifeBase;

        public get booInicializado(): boolean
        {
            this._booInicializado = this.getBooInicializado();

            return this._booInicializado;
        }

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

        private get pag(): PagRealLifeBase
        {
            return this._pag;
        }

        private set pag(pag: PagRealLifeBase)
        {
            this._pag = pag;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(pag: PagRealLifeBase)
        {
            super();

            this.pag = pag;
        }

        // #endregion Construtores

        // #region Métodos

        public destruir(): void
        {
            if (this.objBrowser == null)
            {
                return;
            }

            API.destroyCefBrowser(this.objBrowser);

            this.objBrowser = null;
        }

        public executarJs(strClassNome: string, strMetodoNome: string, objArg: any): void
        {
            if (UtilsRealLife.getBooStrVazia(strMetodoNome))
            {
                return;
            }

            if (this.objBrowser == null)
            {
                return;
            }

            var strCodigo = "RealLifeUi._class_name.i._method_name";

            strCodigo = strCodigo.replace("_class_name", strClassNome);
            strCodigo = strCodigo.replace("_method_name", strMetodoNome);

            if (objArg != null)
            {
                this.objBrowser.call(strCodigo, objArg);
                Log.i.debug("JS CEF: {0} {1}.", strCodigo, JSON.stringify(objArg));
            }
            else
            {
                this.objBrowser.call(strCodigo);
                Log.i.debug("JS CEF: {0}.", strCodigo);
            }
        }

        private getBooInicializado(): boolean
        {
            if (this.objBrowser == null)
            {
                return;
            }

            return API.isCefBrowserInitialized(this.objBrowser);
        }

        public iniciar(): void
        {
            super.iniciar();

            if (this.pag == null)
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(this.pag.url))
            {
                return;
            }

            API.waitUntilCefBrowserInit(this.objBrowser);

            API.setCefBrowserPosition(this.objBrowser, 0, 0);

            API.loadPageCefBrowser(this.objBrowser, this.pag.url);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}