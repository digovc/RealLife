/// <reference path="../../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import Erro = Web.Erro;
    import OnClickListener = Web.OnClickListener;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivLoginTab extends ComponenteHtml implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divTabContaCadastro: Div;
        private _divTabLoginEntrar: Div;

        private get divTabContaCadastro(): Div
        {
            if (this._divTabContaCadastro != null)
            {
                return this._divTabContaCadastro;
            }

            this._divTabContaCadastro = new Div(this.strId + "_divTabContaCadastro");

            return this._divTabContaCadastro;
        }

        private get divTabLoginEntrar(): Div
        {
            if (this._divTabLoginEntrar != null)
            {
                return this._divTabLoginEntrar;
            }

            this._divTabLoginEntrar = new Div(this.strId + "_divTabLoginEntrar");

            return this._divTabLoginEntrar;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(DivLoginTab.name);
        }

        // #endregion Construtores

        // #region Métodos

        private mostrarDivLoginContaCadastro(): void
        {
            this.divTabContaCadastro.jq.css("font-weight", "bold");
            this.divTabLoginEntrar.jq.css("font-weight", "initial");

            PagLogin.i.mostrarDivLoginContaCadastro();
        }

        private mostrarDivLoginEntrar(): void
        {
            this.divTabContaCadastro.jq.css("font-weight", "initial");
            this.divTabLoginEntrar.jq.css("font-weight", "bold");

            PagLogin.i.mostrarDivLoginEntrar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.divTabContaCadastro.addEvtOnClickListener(this);
            this.divTabLoginEntrar.addEvtOnClickListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Object, arg: JQueryEventObject): void
        {
            try
            {
                switch (objSender)
                {
                    case this.divTabContaCadastro:
                        this.mostrarDivLoginContaCadastro();
                        return;

                    case this.divTabLoginEntrar:
                        this.mostrarDivLoginEntrar();
                        return;
                }
            }
            catch (ex)
            {
                new Erro("Erro desconhecido.", ex);
            }
        }

        // #endregion Eventos
    }
}