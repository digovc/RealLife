module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Test extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Test;

        public static get i(): Test
        {
            if (Test._i != null)
            {
                return Test._i;
            }

            Test._i = new Test();

            return Test._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private abrirPagInterface(): void
        {
            API.sendChatMessage("Executando o método abrirPagInterface.");

            var objREsolucao = API.getScreenResolution();

            var objBrowser = API.createCefBrowser(objREsolucao.Width, objREsolucao.Height, true);

            API.waitUntilCefBrowserInit(objBrowser);

            API.setCefBrowserPosition(objBrowser, 0, 0);

            API.loadPageCefBrowser(objBrowser, "ui/pag_interface.html");
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.abrirPagInterface();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}