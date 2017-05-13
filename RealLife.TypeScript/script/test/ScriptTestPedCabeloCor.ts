/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestPedCabeloCor extends ScriptTestBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intCabeloCor: number = 0;

        private get intCabeloCor(): number
        {
            return this._intCabeloCor;
        }

        private set intCabeloCor(intCabeloCor: number)
        {
            this._intCabeloCor = intCabeloCor;
        }

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
            try
            {
                switch (arg.KeyCode)
                {
                    case Keys.Left:
                        this.intCabeloCor -= 1;
                        return;

                    case Keys.Right:
                        this.intCabeloCor += 1;
                        return;
                }
            }
            finally
            {
                Jogador.i.intCabeloCor = this.intCabeloCor;
            }
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}