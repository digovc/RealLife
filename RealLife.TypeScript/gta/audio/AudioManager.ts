/// <reference path="../../../RealLifeShared.TypeScript/dominio/AudioDominio.ts"/>

module RealLife
{
    // #region Importações

    import AudioDominio = RealLifeShared.AudioDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AudioManager extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: AudioManager;

        public static get i(): AudioManager
        {
            if (AudioManager._i != null)
            {
                return AudioManager._i;
            }

            AudioManager._i = new AudioManager();

            return AudioManager._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executar(objAudio: AudioDominio): void
        {
            if (objAudio == null)
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(objAudio.strNome))
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(objAudio.strSetNome))
            {
                return;
            }

            API.playSoundFrontEnd(objAudio.strNome, objAudio.strSetNome);

            Log.i.debug("Audio: {0}.{1}.", objAudio.strSetNome, objAudio.strNome);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}