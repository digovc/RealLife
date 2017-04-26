module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        public abrir(): void
        {
            if (this.objResolucao == null)
            {
                throw "A resolução do browser não foi definida.";
            }

            if (Utils.getBooStrVazia(this.url))
            {
                throw "A URL do browser não foi definida.";
            }

            var objBrowser = API.createCefBrowser(this.objResolucao.Width, this.objResolucao.Height, true);

            API.waitUntilCefBrowserInit(objBrowser);

            API.setCefBrowserPosition(objBrowser, 0, 0);

            API.loadPageCefBrowser(objBrowser, this.url);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}