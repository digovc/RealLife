/// <reference path="../../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../../../RealLifeShared.TypeScript/evento/OnGameKeyListener.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import EnmKey = RealLifeShared.EnmKey;
    import OnGameKeyListener = RealLifeShared.OnGameKeyListener;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class DivMenuBase extends ComponenteHtml implements OnGameKeyListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrDivMenuItem: Array<DivMenuItem>;
        private _arrDivMenuItemAtual: Array<DivMenuItem>;
        private _divContagem: Div;
        private _divConteudo: Div;
        private _divMenuItemFocado: DivMenuItem;

        private get arrDivMenuItem(): Array<DivMenuItem>
        {
            if (this._arrDivMenuItem != null)
            {
                return this._arrDivMenuItem;
            }

            this._arrDivMenuItem = this.getArrDivMenuItem();

            return this._arrDivMenuItem;
        }

        private get arrDivMenuItemAtual(): Array<DivMenuItem>
        {
            return this._arrDivMenuItemAtual;
        }

        private set arrDivMenuItemAtual(arrDivMenuItemAtual: Array<DivMenuItem>)
        {
            this._arrDivMenuItemAtual = arrDivMenuItemAtual;
        }

        private get divContagem(): Div
        {
            if (this._divContagem != null)
            {
                return this._divContagem;
            }

            this._divContagem = new Div(this.strId + "_divContagem");

            return this._divContagem;
        }

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div(this.strId + "_divConteudo");

            return this._divConteudo;
        }

        public get divMenuItemFocado(): DivMenuItem
        {
            return this._divMenuItemFocado;
        }

        public set divMenuItemFocado(divMenuItemFocado: DivMenuItem)
        {
            if (this._divMenuItemFocado == divMenuItemFocado)
            {
                return;
            }

            if (this._divMenuItemFocado != null)
            {
                this._divMenuItemFocado.perderFoco();
            }

            this._divMenuItemFocado = divMenuItemFocado;

            this.atualizarTop();
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("DivMenuInterativo");
        }

        // #endregion Construtores

        // #region Métodos

        private atualizarTop(): void
        {
            if (this.divMenuItemFocado == null)
            {
                return;
            }

            var intIndex = this.arrDivMenuItemAtual.indexOf(this.divMenuItemFocado);

            var intScrollTop = (intIndex * this.divMenuItemFocado.jq.height());

            this.divConteudo.jq.scrollTop(intScrollTop);
        }

        private anterior(): void
        {
            try
            {
                if (this.arrDivMenuItemAtual == null)
                {
                    return;
                }

                if (this.arrDivMenuItemAtual.length < 2)
                {
                    return;
                }

                if (this.arrDivMenuItemAtual.indexOf(this.divMenuItemFocado) == 0)
                {
                    this.arrDivMenuItemAtual[this.arrDivMenuItemAtual.length - 1].receberFoco();
                    return;
                }

                var intIndex = this.arrDivMenuItemAtual.indexOf(this.divMenuItemFocado);

                if (intIndex < 1)
                {
                    this.arrDivMenuItemAtual[0].receberFoco();
                    return;
                }

                this.arrDivMenuItemAtual[intIndex - 1].receberFoco();
            }
            finally
            {
                this.atualizarDivContagem();
            }
        }

        private atualizarDivContagem(): void
        {
            var strConteudo = "_index_atual/_index_total";

            strConteudo = strConteudo.replace("_index_atual", (this.arrDivMenuItemAtual.indexOf(this.divMenuItemFocado) + 1).toString());
            strConteudo = strConteudo.replace("_index_total", this.arrDivMenuItemAtual.length.toString());

            this.divContagem.strConteudo = strConteudo;
        }

        public esconder(): void
        {
            super.esconder(Web.Tag_EnmAnimacaoTipo.IMEDIATAMENTE);

            this.divMenuItemFocado = null;
        }

        protected finalizar(): void
        {
            super.finalizar();

            this.finalizarArrDivMenuItem();
        }

        private finalizarArrDivMenuItem(): void
        {
            this.arrDivMenuItem.forEach((divMenuItem: DivMenuItem) => { divMenuItem.iniciar(); });
        }

        private getArrDivMenuItem(): Array<DivMenuItem>
        {
            var arrDivMenuItemResultado = new Array<DivMenuItem>();

            this.inicializarArrDivMenuItem(arrDivMenuItemResultado);

            arrDivMenuItemResultado.forEach((divMenuItem: DivMenuItem) => { divMenuItem.divMenu = this; });

            return arrDivMenuItemResultado;
        }

        protected abstract inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void;

        public mostrar()
        {
            super.mostrar(Web.Tag_EnmAnimacaoTipo.IMEDIATAMENTE);

            if (this.arrDivMenuItem.length < 1)
            {
                return;
            }

            this.montarMenu(this.arrDivMenuItem);
        }

        public montarMenu(arrDivMenuItem: Array<DivMenuItem>): void
        {
            this.divConteudo.strConteudo = null;

            if (arrDivMenuItem == null)
            {
                return;
            }

            this.arrDivMenuItemAtual = arrDivMenuItem;

            this.arrDivMenuItemAtual.forEach((divMenuItem: DivMenuItem) => { this.montarMenuItem(divMenuItem); });

            this.atualizarDivContagem();

            this.arrDivMenuItemAtual[0].receberFoco();
        }

        private montarMenuItem(divMenuItem: DivMenuItem): void
        {
            divMenuItem.jq = null;

            this.divConteudo.jq.append(divMenuItem.strLayoutFixo);
        }

        private processarOnGameKey(enmKey: EnmKey): void
        {
            if ((enmKey != EnmKey.MENU) && (!this.booVisivel))
            {
                return;
            }

            switch (enmKey)
            {
                case EnmKey.MENU_ALTO:
                    this.anterior();
                    return;

                case EnmKey.MENU:
                    this.mostrarEsconder();
                    return;

                case EnmKey.MENU_BAIXO:
                    this.proximo();
                    return;

                case EnmKey.MENU_SELECIONAR:
                    this.selecionar();
                    return;

                case EnmKey.MENU_VOLTAR:
                    this.voltar();
                    return;
            }
        }

        private proximo(): void
        {
            try
            {
                if (this.arrDivMenuItemAtual == null)
                {
                    return;
                }

                if (this.arrDivMenuItemAtual.length < 2)
                {
                    return;
                }

                if (this.arrDivMenuItemAtual.indexOf(this.divMenuItemFocado) == (this.arrDivMenuItemAtual.length - 1))
                {
                    this.arrDivMenuItemAtual[0].receberFoco();
                    return;
                }

                var intIndex = this.arrDivMenuItemAtual.indexOf(this.divMenuItemFocado);

                if (intIndex > (this.arrDivMenuItemAtual.length - 1))
                {
                    this.arrDivMenuItemAtual[0].receberFoco();
                    return;
                }

                this.arrDivMenuItemAtual[intIndex + 1].receberFoco();
            }
            finally
            {
                this.atualizarDivContagem();
            }
        }

        public selecionar(): void
        {
            if (this.divMenuItemFocado == null)
            {
                return;
            }

            this.divMenuItemFocado.selecionar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            Keyboard.i.addEvtOnGameKeyListener(this);
        }

        private voltar(): void
        {
            if (this.arrDivMenuItem == this.arrDivMenuItemAtual)
            {
                this.esconder();
                return;
            }

            var divMenuItemFocadoAnterior = this.divMenuItemFocado;

            try
            {
                if (this.divMenuItemFocado.divMenuItemPai.divMenuItemPai == null)
                {
                    this.montarMenu(this.arrDivMenuItem);
                    return;
                }

                this.montarMenu(this.divMenuItemFocado.divMenuItemPai.divMenuItemPai.arrDivMenuItem);
            }
            finally
            {
                divMenuItemFocadoAnterior.divMenuItemPai.receberFoco();
            }
        }

        // #endregion Métodos

        // #region Eventos

        public onGameKey(enmKey: EnmKey): void
        {
            this.processarOnGameKey(enmKey);
        }

        // #endregion Eventos
    }
}