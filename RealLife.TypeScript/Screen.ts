module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Screen extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Screen;

        public static get i(): Screen
        {
            if (Screen._i != null)
            {
                return Screen._i;
            }

            Screen._i = new Screen();

            return Screen._i;
        }

        private _booMostrarMouse: boolean;
        private _objResolucao: System.Drawing.Size;

        public get booMostrarMouse(): boolean
        {
            return this._booMostrarMouse;
        }

        public set booMostrarMouse(booMostrarMouse: boolean)
        {
            if (this._booMostrarMouse == booMostrarMouse)
            {
                return;
            }

            this._booMostrarMouse = booMostrarMouse;

            this.setBooMostrarMouse(this._booMostrarMouse);
        }

        public get objResolucao(): System.Drawing.Size
        {
            if (this._objResolucao != null)
            {
                return this._objResolucao;
            }

            this._objResolucao = API.getScreenResolution();

            return this._objResolucao;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public notificar(strNotificacao: string): void
        {
            if (UtilsRealLife.getBooStrVazia(strNotificacao))
            {
                return;
            }

            API.sendNotification(strNotificacao);
        }

        private setBooMostrarMouse(booMostrarMouse: boolean): void
        {
            API.showCursor(booMostrarMouse);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}