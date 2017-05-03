/// <reference path="../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../RealLifeShared.TypeScript/evento/OnGameKeyListener.ts"/>
/// <reference path="../../Web.TypeScript/html/componente/Mensagem.ts"/>
/// <reference path="../../Web.TypeScript/Utils.ts"/>

module RealLifeUi
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;
    import Mensagem = Web.Mensagem;
    import OnGameKeyListener = RealLifeShared.OnGameKeyListener;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados

    // #endregion Enumerados

    export class Keyboard
    {
        // #region Constantes

        // #endregion Constantes

        // #region Atributos

        private static _i: Keyboard;

        public static get i(): Keyboard
        {
            if (Keyboard._i != null)
            {
                return Keyboard._i;
            }

            Keyboard._i = new Keyboard();

            return Keyboard._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        // #endregion Métodos

        // #region Eventos

        // #region OnGameKeyListener

        private _arrEvtOnGameKeyListener: Array<OnGameKeyListener>;

        private get arrEvtOnGameKeyListener(): Array<OnGameKeyListener>
        {
            if (this._arrEvtOnGameKeyListener != null)
            {
                return this._arrEvtOnGameKeyListener;
            }

            this._arrEvtOnGameKeyListener = new Array<OnGameKeyListener>();

            return this._arrEvtOnGameKeyListener;
        }

        public addEvtOnGameKeyListener(evtOnGameKeyListener: OnGameKeyListener): void
        {
            if (evtOnGameKeyListener == null)
            {
                return;
            }

            if (this.arrEvtOnGameKeyListener.indexOf(evtOnGameKeyListener) > -1)
            {
                return;
            }

            this.arrEvtOnGameKeyListener.push(evtOnGameKeyListener);
        }

        public dispararEvtOnGameKeyListener(enmKey: EnmKey): void
        {
            if (this.arrEvtOnGameKeyListener.length == 0)
            {
                return;
            }

            this.arrEvtOnGameKeyListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onGameKey(enmKey);
            });
        }

        public removerEvtOnGameKeyListener(evt: OnGameKeyListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnGameKeyListener.indexOf(evt) == -1)
            {
                return;
            }

            this.arrEvtOnGameKeyListener.splice(this.arrEvtOnGameKeyListener.indexOf(evt), 1);
        }

        // #endregion OnGameKeyListener

        // #endregion Eventos
    }
}