/// <reference path="../../../../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="../../EtapaBase.ts"/>

module RealLife
{
    // #region Importações

    import EnmPedSkin = RealLifeShared.EnmPedSkin;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaPersonagemEditor001Iniciar extends EtapaBase
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
            Jogador.i.booVisivel = false;
            Keyboard.i.booAtivo = false;

            Screen.i.booHudVisivel = false;

            World.i.setEnmClima(Enums.Weather.Clear);
            World.i.setHora(12);

            Screen.i.fadeOut(1, (() => { this.etapa002(); }));
        }

        private etapa002(): void
        {
            (this.objScript as ScriptPersonagemEditor).objCameraLonge.booAtiva = true;

            Jogador.i.fltRotacao = 99.99914;
            Jogador.i.vctPosicao = new Vector3(198.016464, 1165.42078, 227);
            Jogador.i.vctRotacao = new Vector3(1.00178786E-05, -0, 99.99914);

            Jogador.i.ajustarZ();

            Jogador.i.booVisivel = true;

            new Timer((() => { this.etapa003(); }), 1).iniciar();
        }

        private etapa003(): void
        {
            Log.i.debug("Etapa 3");

            Screen.i.fadeIn();

            (this.objScript as ScriptPersonagemEditor).objCameraLonge.interpolar((this.objScript as ScriptPersonagemEditor).objCameraPerto, 5, (() => { this.etapa004(); }));
        }

        private etapa004(): void
        {
            new EtapaPersonagemEditor002Editar(this.objScript).iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}