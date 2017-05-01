/// <reference path="CameraBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class CameraGamePlay extends CameraBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: CameraGamePlay;

        public static get i(): CameraGamePlay
        {
            if (CameraGamePlay._i != null)
            {
                return CameraGamePlay._i;
            }

            CameraGamePlay._i = new CameraGamePlay();

            return CameraGamePlay._i;
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