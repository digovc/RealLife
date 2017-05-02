/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagDev extends PagRealLifeBase
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

        private _camLivre: CameraLivre;

        private get camLivre(): CameraLivre
        {
            if (this._camLivre != null)
            {
                return this._camLivre;
            }

            this._camLivre = new CameraLivre();

            return this._camLivre;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected getBooEnviarTecla(enmKey: EnmKey): boolean
        {
            switch (enmKey)
            {
                case EnmKey.MENU:
                case EnmKey.MENU_ALTO:
                case EnmKey.MENU_BAIXO:
                case EnmKey.MENU_SELECIONAR:
                case EnmKey.MENU_VOLTAR:
                    return true;

                default:
                    return false;
            }
        }

        protected getUrl(): string
        {
            return "ui/pag_desenvolvimento.html";
        }

        public ligarCameraLivre(): void
        {
            this.camLivre.ativar();
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}