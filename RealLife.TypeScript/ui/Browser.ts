module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class Browser extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objResolucao: System.Drawing.Size;
        private _url: string;

        public get objResolucao(): System.Drawing.Size
        {
            return this._objResolucao;
        }

        public set objResolucao(objResolucao: System.Drawing.Size)
        {
            this._objResolucao = objResolucao;
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

        // #region M�todos

        public abrir(): void
        {
            if (this.objResolucao == null)
            {
                throw "A resolu��o do browser n�o foi definida.";
            }

            if (Utils.getBooStrVazia(this.url))
            {
                throw "A URL do browser n�o foi definida.";
            }

            var objBrowser = API.createCefBrowser(this.objResolucao.Width, this.objResolucao.Height, true);

            API.waitUntilCefBrowserInit(objBrowser);

            API.setCefBrowserPosition(objBrowser, 0, 0);

            API.loadPageCefBrowser(objBrowser, this.url);
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}