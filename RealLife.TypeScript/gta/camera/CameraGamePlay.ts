/// <reference path="CameraBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

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

        // #region M�todos

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}