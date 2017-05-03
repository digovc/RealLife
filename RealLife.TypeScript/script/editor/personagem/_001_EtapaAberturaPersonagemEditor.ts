/// <reference path="../../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class _001_EtapaAberturaPersonagemEditor extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getObjEtapaProxima(objScript: ScriptBase): EtapaBase
        {
            return new _002_EtapaEdicaoPersonagemEditor(objScript);
        }

        protected _001_comecar(): void
        {
            Keyboard.i.booLigado = false;

            Screen.i.fadeOut(1000);

            new Timer((() => { this._002_posicionarCamera(); }), 1000);
        }

        private _002_posicionarCamera(): void
        {
            this._003_posicionarPed();
        }

        private _003_posicionarPed(): void
        {
            this._004_atualizarPedSkinDefault();
        }

        private _004_atualizarPedSkinDefault(): void
        {
            this._005_retornarTela();
        }

        private _005_retornarTela(): void
        {
            Audio.i.executarFadeIn();

            Screen.i.fadeIn(1000);

            this._006_comecarMusica();
        }

        private _006_comecarMusica(): void
        {
            this._007_pedAndarPosicao();
        }

        private _007_pedAndarPosicao(): void
        {
            this._008_cameraAproximar();
        }

        private _008_cameraAproximar(): void
        {
            this.destruir();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}