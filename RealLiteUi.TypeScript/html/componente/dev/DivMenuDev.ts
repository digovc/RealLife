/// <reference path="../menu/DivMenuBase.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuDev extends DivMenuBase implements OnItemSelecionadoListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divMenuItemCameraLivre: DivMenuItem;

        private get divMenuItemCameraLivre(): DivMenuItem
        {
            if (this._divMenuItemCameraLivre != null)
            {
                return this._divMenuItemCameraLivre;
            }

            this._divMenuItemCameraLivre = this.getDivMenuItemCameraLivre();

            return this._divMenuItemCameraLivre;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivMenuDev.name);
        }

        // #endregion Construtores

        // #region Métodos

        private desligarCameraLivre(): void
        {
            this.divMenuItemCameraLivre.divValor.strConteudo = "Desligada";
        }

        private getDivMenuItemCameraLivre(): DivMenuItem
        {
            var divMenuItemCameraLivreResultado = new DivMenuItem(0, "Câmera livre")

            divMenuItemCameraLivreResultado.divValor.strConteudo = "Desligada";

            return divMenuItemCameraLivreResultado;
        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            arrDivMenuItem.push(this.divMenuItemCameraLivre);
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