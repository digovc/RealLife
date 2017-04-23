/// <reference path="typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts" />

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class Browser
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos
        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }

    API.onResourceStart.connect(() =>
    {
        var resolution = API.getScreenResolution();

        var objBrowser = API.createCefBrowser((resolution.Width - 150), (resolution.Height - 150));
        
        API.waitUntilCefBrowserInit(objBrowser);
        API.setCefBrowserPosition(objBrowser, 75, 75);
        API.loadPageCefBrowser(objBrowser, "ui/pag_login.html");

        API.setCanOpenChat(false);
        API.showCursor(true);
    });
}