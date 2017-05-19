/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaAguardar002Concluir extends EtapaBase
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
            Jogador.i.booCongelado = false;
            Jogador.i.booVisivel = true;
            Jogador.i.vctPosicao = (this.objScript as ScriptAguardar).vctPosicaoFinal;

            (this.objScript as ScriptAguardar).objCameraGamePlay.clonarCameraGamePlay();

            Screen.i.objCameraAtual.interpolar((this.objScript as ScriptAguardar).objCameraFinal, 1, (() => { this.etapa002(); }));
        }

        private etapa002(): void
        {
            Screen.i.objCameraAtual.interpolar((this.objScript as ScriptAguardar).objCameraGamePlay, 1, (() => { this.etapa003(); }));
        }

        private etapa003(): void
        {
            Screen.i.ativarCameraGamePlay();

            (this.objScript as ScriptAguardar).baixarConcluir();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}