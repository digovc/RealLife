/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaAguardar001Iniciar extends EtapaBase
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
            Chat.i.booAtivo = false;
            Jogador.i.booCongelado = false;
            Jogador.i.booVisivel = false;
            Screen.i.booHudVisivel = false;

            (this.objScript as ScriptAguardar).objCameraGamePlay.booAtiva = true;

            (this.objScript as ScriptAguardar).objCameraGamePlay.clonarCameraGamePlay();

            (this.objScript as ScriptAguardar).objCameraGamePlay.interpolar((this.objScript as ScriptAguardar).objCameraNivel1, ScriptAguardar.FLT_TEMPO, (() => { this.etapa002(); }));
        }

        private etapa002(): void
        {
            new Timer((() => { this.etapa003(); }), ScriptAguardar.FLT_TEMPO).iniciar();
        }

        private etapa003(): void
        {
            Screen.i.objCameraAtual.interpolar((this.objScript as ScriptAguardar).objCameraNivel2, ScriptAguardar.FLT_TEMPO, (() => { this.etapa004(); }));
        }

        private etapa004(): void
        {
            new Timer((() => { this.etapa005(); }), ScriptAguardar.FLT_TEMPO).iniciar();
        }

        private etapa005(): void
        {
            Screen.i.objCameraAtual.interpolar((this.objScript as ScriptAguardar).objCameraNivel3, ScriptAguardar.FLT_TEMPO, (() => { this.etapa006(); }));
        }

        private etapa006(): void
        {
            (this.objScript as ScriptAguardar).objCameraNivel3.tremer();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}