/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaOpenWorld001Iniciar extends EtapaBase
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

            this.etapa001();
        }

        // Etapas

        private etapa001(): void
        {
            Jogador.i.booCongelado = true;
            Jogador.i.booDinamico = false;
            Jogador.i.booVisivel = false;

            Chat.i.booAtivo = false;
            Chat.i.booVisivel = false;

            Screen.i.booHudVisivel = false;

            Jogador.i.carregarAparencia(() => { this.etapa002(); });
        }

        private etapa002(): void
        {
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}