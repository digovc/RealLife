/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagDev extends PagRealLifeBase implements OnKeySelecionarListener, OnKeyMenuListener
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

        protected getUrl(): string
        {
            return "ui/pag_desenvolvimento.html";
        }

        public ligarCameraLivre(): void
        {
            this.camLivre.ativar();
        }

        private processarOnKeySelecionar(): void
        {
            this.objBrowserRealLife.executarJs("processarOnKeySelecionar");
        }

        private processarOnKeyMenu(): void
        {
            this.objBrowserRealLife.executarJs("processarOnKeyMenu");
        }

        protected setEventos(): void
        {
            super.setEventos();

            KeyBoard.i.addEvtOnKeyMenuListener(this);
            KeyBoard.i.addEvtOnKeySelecionarListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onKeySelecionar(): void
        {
            this.processarOnKeySelecionar();
        }

        public onKeyMenu(): void
        {
            this.processarOnKeyMenu();
        }

        // #endregion Eventos
    }
}