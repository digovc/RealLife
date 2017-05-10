/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class _001_EtapaLoginPreparacao extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        protected inicializar(): void
        {
            super.inicializar();

            this._001_etapa();
        }

        private _001_etapa(): void
        {
            Screen.i.fadeOut(1000);

            new Timer((() => { this._001_etapa(); }), 1).iniciar();
        }

        private _002_etapa(): void
        {
            Chat.i.booAtivo = false;
            Chat.i.booVisivel = false;
            Jogador.i.ped.booVisivel = false;

            new Timer((() => { new _003_EtapaLogin(this.objScript).iniciar() }), 2.5).iniciar();
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}