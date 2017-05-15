/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importa��es

    import EnmPedSkin = RealLifeShared.EnmPedSkin;
    import ScriptBase = RealLife.ScriptBase;

    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestPedSkinAleatorio extends ScriptBase
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

        // Etapas

        private etapa001(): void
        {
            Jogador.i.enmPedSkin = EnmPedSkin.FREEMODEMALE01;
            Jogador.i.vestirRoupaDefault();

            this.etapa002();

            new Timer((() => { this.etapa002(); }), 1.5, true).iniciar();
        }

        private etapa002(): void
        {
            Jogador.i.randomizarRoupa();
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}