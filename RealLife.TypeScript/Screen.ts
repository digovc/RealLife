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

        private _objResolucao: System.Drawing.Size;

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
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}