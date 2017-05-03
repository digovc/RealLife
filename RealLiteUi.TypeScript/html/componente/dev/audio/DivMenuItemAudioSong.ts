/// <reference path="../../../../../RealLifeShared.TypeScript/dominio/AudioDominio.ts"/>

module RealLifeUi
{
    // #region Importações

    import AudioDominio = RealLifeShared.AudioDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemAudioSong extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private executarAudio(): void
        {
            var objAudio = new AudioDominio();

            objAudio.strNome = this.strNome;
            objAudio.strSetNome = this.divMenuItemPai.strNome;

            PagDev.i.executarAudio(objAudio);
        }

        public selecionar(): void
        {
            super.selecionar();

            this.executarAudio();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}