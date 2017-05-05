/// <reference path="AppRealLife.ts"/>
/// <reference path="Objeto.ts"/>
/// <reference path="typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts" />

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptBoot extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: ScriptBoot;

        public static get i(): ScriptBoot
        {
            if (ScriptBoot._i != null)
            {
                return ScriptBoot._i;
            }

            ScriptBoot._i = new ScriptBoot();

            return ScriptBoot._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected finalizar(): void
        {
            super.finalizar();

            AppRealLife.i.iniciar();
        }

        protected setEventos(): void
        {
            super.setEventos();

            API.onChatCommand.connect((strComando: string) => { Chat.i.dispararEvtOnChatCommandListener(strComando); });
            API.onKeyUp.connect((objSender: any, arg: any) => { Keyboard.i.dispararEvtOnKeyUpListener(objSender, arg); });
            API.onServerEventTrigger.connect((strMetodoNome: string, arrObjArg: System.Array<any>) => { Server.i.dispararEvtOnServerEventTriggerListener(strMetodoNome, arrObjArg); });
            API.onUpdate.connect(() => { Screen.i.dispararEvtOnUpdateListener(); });
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}

API.onResourceStart.connect(() => { RealLife.ScriptBoot.i.iniciar(); });