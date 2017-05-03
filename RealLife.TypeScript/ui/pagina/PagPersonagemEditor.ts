/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importa��es

    import EnmKey = RealLifeShared.EnmKey;

    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class PagPersonagemEditor extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected getBooEnviarTecla(enmKey: EnmKey): boolean
        {
            return false;
        }

        protected getUrl(): string
        {
            return "ui/pag_personagem_editor.html";
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}