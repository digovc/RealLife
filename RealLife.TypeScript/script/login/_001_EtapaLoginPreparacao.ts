/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this._001_etapa();
        }

        private _001_etapa(): void
        {
            Screen.i.fadeOut();

            new Timer((() => { this._001_etapa(); }), 1).iniciar();
        }

        private _002_etapa(): void
        {
            Chat.i.booAtivo = false;
            Chat.i.booVisivel = false;
            Jogador.i.ped.booVisivel = false;

            new Timer((() => { new _003_EtapaLogin(this.objScript).iniciar() }), 2.5).iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}