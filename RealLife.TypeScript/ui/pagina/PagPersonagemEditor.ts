/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;

    // #endregion Importações

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

        // #region Métodos

        protected getBooEnviarTecla(enmKey: EnmKey): boolean
        {
            return false;
        }

        protected getUrl(): string
        {
            return "ui/pag_personagem_editor.html";
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}