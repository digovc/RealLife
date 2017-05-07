/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../web.typescript/typedefinition/md5.d.ts" />
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class DivLoginBase extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected encriptar(strSenha: string): string
        {
            if (Utils.getBooStrVazia(strSenha))
            {
                return null;
            }

            var strSenhaEncriptadaResultado = "GTA_Real_Life__senha";

            strSenhaEncriptadaResultado = strSenhaEncriptadaResultado.replace("_senha", strSenha);

            strSenhaEncriptadaResultado = md5(strSenhaEncriptadaResultado);

            return strSenhaEncriptadaResultado;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}