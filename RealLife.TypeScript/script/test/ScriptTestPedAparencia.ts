/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
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

            Jogador.i.alterarSkin(RealLifeShared.EnmPedHash.FREEMODEMALE01);

            Jogador.i.vestirRoupaDefault();

            Jogador.i.intCabelo = 17;
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