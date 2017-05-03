module RealLife
{
    // #region Importa��es

    import AudioDominio = RealLifeShared.AudioDominio;

    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class Audio extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Audio;

        public static get i(): Audio
        {
            if (Audio._i != null)
            {
                return Audio._i;
            }

            Audio._i = new Audio();

            return Audio._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        private executar(strNome: string, strSetNome: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strNome))
            {
                return;
            }

            if (UtilsRealLife.getBooStrVazia(strSetNome))
            {
                return;
            }

            API.playSoundFrontEnd(strNome, strSetNome);

            Log.i.debug("Audio: {0}.{1}.", strSetNome, strNome);
        }

        public executarObjAudio(objAudio: AudioDominio): void
        {
            if (objAudio == null)
            {
                return;
            }

            this.executar(objAudio.strNome, objAudio.strSetNome);
        }

        public executarFadeIn(): void
        {
            this.executar("FocusIn", "HintCamSounds");
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}