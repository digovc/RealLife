/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações

    import ScriptBase = RealLife.ScriptBase;

    // #endregion Importações

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

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.etapa001();
        }

        // Etapas

        private etapa001(): void
        {
            Jogador.i.alterarSkin(RealLifeShared.EnmPedHash.FREEMODEMALE01);
            Jogador.i.vestirRoupaDefault();

            this.etapa002();

            new Timer((() => { this.etapa002(); }), 1.5, true).iniciar();
        }

        private etapa002(): void
        {
            Jogador.i.randomizarRoupa();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}