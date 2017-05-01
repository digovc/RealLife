/// <reference path="../../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class PagRealLifeBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objBrowserRealLife: BrowserRealLife;
        private _url: string;

        protected get objBrowserRealLife(): BrowserRealLife
        {
            if (this._objBrowserRealLife != null)
            {
                return this._objBrowserRealLife;
            }

            this._objBrowserRealLife = new BrowserRealLife(this);

            return this._objBrowserRealLife;
        }

        protected set objBrowserRealLife(objBrowserRealLife: BrowserRealLife)
        {
            this._objBrowserRealLife = objBrowserRealLife;
        }

        public get url(): string
        {
            if (this._url != null)
            {
                return this._url;
            }

            this._url = this.getUrl();

            return this._url;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected abstract getUrl(): string;

        public iniciar(): void
        {
            super.iniciar();

            this.objBrowserRealLife.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}