/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/html/Input.ts"/>

module RealLifeUi
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import Input = Web.Input;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class CampoRealLifeUi extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divNome: Div;
        private _txt: Input;

        private get divNome(): Div
        {
            if (this._divNome != null)
            {
                return this._divNome;
            }

            this._divNome = new Div(this.strId + "_divNome");

            return this._divNome;
        }

        public get txt(): Input
        {
            if (this._txt != null)
            {
                return this._txt;
            }

            this._txt = new Input(this.strId + "_txt");

            return this._txt;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.txt.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}