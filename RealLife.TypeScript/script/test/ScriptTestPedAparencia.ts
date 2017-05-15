/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações

    import EnmPedSkin = RealLifeShared.EnmPedSkin;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestPedAparencia extends ScriptTestBase
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

            Jogador.i.enmPedSkin = EnmPedSkin.FREEMODEMALE01;
            Jogador.i.intCabelo = 17;

            Jogador.i.vestirRoupaDefault();
        }

        protected processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void
        {
            switch (arg.KeyCode)
            {
                case Keys.Up:
                    Jogador.i.randomizarAparencia();
                    return;
            }
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}