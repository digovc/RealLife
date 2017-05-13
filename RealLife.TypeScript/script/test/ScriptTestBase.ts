/// <reference path="../../evento/OnKeyUpListener.ts"/>
/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class ScriptTestBase extends ScriptBase implements OnKeyUpListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected abstract processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void;

        protected setEventos(): void
        {
            super.setEventos();

            Keyboard.i.addEvtOnKeyUpListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onKeyUp(objSender: Object, arg: System.Windows.Forms.KeyEventArgs): void
        {
            this.processarOnKeyUp(arg);
        }

        // #endregion Eventos
    }
}