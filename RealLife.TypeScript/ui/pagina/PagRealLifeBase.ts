/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/evento/OnGameKeyListener.ts"/>
/// <reference path="../../Objeto.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;
    import OnGameKeyListener = RealLifeShared.OnGameKeyListener;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class PagRealLifeBase extends Objeto implements OnGameKeyListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objBrowserRealLife: BrowserRealLife;
        private _url: string;

        public get objBrowserRealLife(): BrowserRealLife
        {
            if (this._objBrowserRealLife != null)
            {
                return this._objBrowserRealLife;
            }

            this._objBrowserRealLife = new BrowserRealLife(this);

            return this._objBrowserRealLife;
        }

        public set objBrowserRealLife(objBrowserRealLife: BrowserRealLife)
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

        protected enviarCefKeyGame(enmKey: EnmKey): void
        {
            Keyboard.i.enviarCefKeyGame(this, enmKey);
        }

        protected abstract getBooEnviarTecla(enmKey: EnmKey): boolean;

        protected abstract getUrl(): string;

        public iniciar(): void
        {
            super.iniciar();

            this.objBrowserRealLife.iniciar();
        }

        private processarOnGameKey(enmKey: EnmKey): void
        {
            if (!this.getBooEnviarTecla(enmKey))
            {
                return;
            }

            this.enviarCefKeyGame(enmKey);
        }

        protected setEventos(): void
        {
            super.setEventos();

            Keyboard.i.addEvtOnGameKeyListener(this);
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