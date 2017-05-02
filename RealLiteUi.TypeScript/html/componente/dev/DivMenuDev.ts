/// <reference path="../../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../menu/DivMenuBase.ts"/>

module RealLifeUi
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuDev extends DivMenuBase implements OnItemSelecionadoListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemAudio: DivMenuItemAudio;
        private _divMenuItemCameraLivre: DivMenuItem;

        private get divMenuItemAudio(): DivMenuItemAudio
        {
            if (this._divMenuItemAudio != null)
            {
                return this._divMenuItemAudio;
            }

            this._divMenuItemAudio = new DivMenuItemAudio();

            return this._divMenuItemAudio;
        }

        private get divMenuItemCameraLivre(): DivMenuItem
        {
            if (this._divMenuItemCameraLivre != null)
            {
                return this._divMenuItemCameraLivre;
            }

            this._divMenuItemCameraLivre = new DivMenuItem("Câmera livre", "Desligada");

            return this._divMenuItemCameraLivre;
        }

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

        private desligarCameraLivre(): void
        {
            this.divMenuItemCameraLivre.divValor.strConteudo = "Desligada";
        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            arrDivMenuItem.push(this.divMenuItemCameraLivre);
            arrDivMenuItem.push(this.divMenuItemAudio);
        }

        private ligarCameraLivre(): void
        {
            this.divMenuItemCameraLivre.divValor.strConteudo = "Ligada";

            ClientRealLife.i.executar(PagDev.name, "ligarCameraLivre");
        }

        private ligarDesligarCameraLivre(): void
        {
            if (this.divMenuItemCameraLivre.divValor.strConteudo == "Ligada")
            {
                this.desligarCameraLivre();
            }
            else
            {
                this.ligarCameraLivre();
            }

            this.esconder();
        }

        private processarOnItemSelecionado(divMenuItem: DivMenuItem): void
        {
            switch (divMenuItem)
            {
                case this.divMenuItemCameraLivre:
                    this.ligarDesligarCameraLivre();
                    return;
            }
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.divMenuItemCameraLivre.addEvtOnItemSelecionadoListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onItemSelecionado(divMenuItem: DivMenuItem): void
        {
            this.processarOnItemSelecionado(divMenuItem);
        }

        // #endregion Eventos
    }
}