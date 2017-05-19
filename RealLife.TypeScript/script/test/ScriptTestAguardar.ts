/// <reference path="../ScriptBase.ts"/>
/// <reference path="ScriptTestBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestAguardar extends ScriptTestBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objScriptAguardar: ScriptAguardar;

        private get objScriptAguardar(): ScriptAguardar
        {
            return this._objScriptAguardar;
        }

        private set objScriptAguardar(objScriptAguardar: ScriptAguardar)
        {
            this._objScriptAguardar = objScriptAguardar;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private descer(): void
        {
            Log.i.debug("Descendo.");

            this.objScriptAguardar.baixar(Jogador.i.vctPosicao);
        }

        protected processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void
        {
            switch (arg.KeyCode)
            {
                case Keys.Up:
                    this.subir()
                    return;

                case Keys.Down:
                    this.descer()
                    return;
            }
        }

        private subir(): void
        {
            Log.i.debug("Subindo.");

            this.objScriptAguardar = new ScriptAguardar();

            this.objScriptAguardar.iniciar();
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}