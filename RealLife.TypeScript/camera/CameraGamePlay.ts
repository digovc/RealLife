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

        private _vctDirecao: Vector3;

        public get vctDirecao(): Vector3
        {
            this._vctDirecao = API.getGameplayCamDir();

            return this._vctDirecao;
        }

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region M�todos

        protected inicializar(): void
        {
            super.inicializar();

            this.objGlobalCamera = API.getActiveCamera();
        }

        protected getVctPosicao(): Vector3
        {
            //return super.getVctPosicao();

            return API.getGameplayCamPos();
        }

        protected getVctRotacao(): Vector3
        {
            //return super.getVctRotacao();

            return API.getGameplayCamRot();
        }

        protected setBooAtiva(booAtiva: boolean): void
        {
            //super.setBooAtiva(true);

            if (booAtiva)
            {
                API.setGameplayCameraActive();
            }
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}