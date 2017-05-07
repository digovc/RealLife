/// <reference path="../../../RealLifeShared.TypeScript/dominio/AudioDominio.ts"/>
/// <reference path="../componente/dev/DivMenuDev.ts"/>
/// <reference path="PagRealLifeUiBase.ts"/>

module RealLifeUi
{
    // #region Importações

    import AudioDominio = RealLifeShared.AudioDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagDev extends PagRealLifeUiBase
    {
        // #region Constantes

        // #endregion Constantes

        // #region Atributos

        private static _i: PagDev;

        public static get i(): PagDev
        {
            if (PagDev._i != null)
            {
                return PagDev._i;
            }

            PagDev._i = new PagDev();

            return PagDev._i;
        }

        private _divMenuDev: DivMenuDev;

        private get divMenuDev(): DivMenuDev
        {
            if (this._divMenuDev != null)
            {
                return this._divMenuDev;
            }

            this._divMenuDev = new DivMenuDev();

            return this._divMenuDev;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public executarAudio(objAudio: AudioDominio): void
        {
            if (objAudio == null)
            {
                return;
            }

            ClientRealLife.i.executar(this.strClassNome, "executarAudio", objAudio);
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.divMenuDev.iniciar();
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}