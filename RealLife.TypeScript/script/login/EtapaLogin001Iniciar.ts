/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaLogin001Iniciar extends EtapaBase
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

            this.etapa001();
        }

        private etapa001(): void
        {
            Screen.i.fadeOut(1, (() => { this.etapa002(); }));
        }

        private etapa002(): void
        {
            Chat.i.booAtivo = false;
            Chat.i.booVisivel = false;
            Jogador.i.booVisivel = false;

            new Timer((() => { new EtapaLogin003Logar(this.objScript).iniciar() }), 2.5).iniciar();
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}