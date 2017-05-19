/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados

    export enum CameraBase_EnmTremerTipo
    {
        DRUNK_SHAKE,
        GRENADE_EXPLOSION_SHAKE,
        HAND_SHAKE,
        JOLT_SHAKE,
        LARGE_EXPLOSION_SHAKE,
        MEDIUM_EXPLOSION_SHAKE,
        ROAD_VIBRATION_SHAKE,
        SKY_DIVING_SHAKE,
        SMALL_EXPLOSION_SHAKE,
        VIBRATE_SHAKE,
    }

    // #endregion Enumerados

    export class Camera extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booAtiva: boolean;
        private _fltFov: number;
        private _objHandle: GTANetwork.Javascript.GlobalCamera;
        private _vctPosicao: Vector3 = new Vector3();
        private _vctRotacao: Vector3 = new Vector3();

        public get booAtiva(): boolean
        {
            this._booAtiva = (API.getActiveCamera() == this.objHandle);

            return this._booAtiva;
        }

        public set booAtiva(booAtiva: boolean)
        {
            this._booAtiva = booAtiva;

            this.setBooAtiva(this._booAtiva);
        }

        public get fltFov(): number
        {
            this._fltFov = API.getCameraFov(this.objHandle);

            return this._fltFov;
        }

        public set fltFov(fltFov: number)
        {
            this._fltFov = fltFov;

            API.setCameraFov(this.objHandle, this._fltFov);
        }

        private get objHandle(): GTANetwork.Javascript.GlobalCamera
        {
            if (this._objHandle != null)
            {
                return this._objHandle;
            }

            this._objHandle = API.createCamera(new Vector3(), new Vector3());

            return this._objHandle;
        }

        public get vctPosicao(): Vector3
        {
            this._vctPosicao = API.getCameraPosition(this.objHandle);

            return this._vctPosicao;
        }

        public set vctPosicao(vctPosicao: Vector3)
        {
            this._vctPosicao = vctPosicao;

            this.setVctPosicao(this._vctPosicao);
        }

        public get vctRotacao(): Vector3
        {
            this._vctRotacao = API.getCameraRotation(this.objHandle);

            return this._vctRotacao;
        }

        public set vctRotacao(vctRotacao: Vector3)
        {
            this._vctRotacao = vctRotacao;

            this.setVctRotacao(this._vctRotacao);
        }

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

        public anexarEntity(objEntity: Entity, vctOffSet: Vector3 = new Vector3()): void
        {
            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            API.attachCameraToEntity(this.objHandle, objEntity.objHandle, vctOffSet);
        }

        public anexarEntityBone(objEntity: Entity, intBone: number, vctOffSet: Vector3 = new Vector3()): void
        {
            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            API.attachCameraToEntityBone(this.objHandle, objEntity.objHandle, intBone, vctOffSet);
        }

        public clonarCameraGamePlay(): void
        {
            this.vctPosicao = API.getGameplayCamPos();
            this.vctRotacao = API.getGameplayCamRot();
        }

        public desanexar(): void
        {
            API.detachCamera(this.objHandle);
        }

        public destruir(): void
        {
            super.destruir();

            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("DESTROY_CAM", this.objHandle, false);
        }

        public focar(objEntity: Entity, vctOffset: Vector3 = new Vector3()): void
        {
            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            API.pointCameraAtEntity(this.objHandle, objEntity.objHandle, vctOffset);
        }

        public focarBone(objEntity: Entity, intBone: number, vctOffset: Vector3 = new Vector3()): void
        {
            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            API.pointCameraAtEntityBone(this.objHandle, objEntity.objHandle, intBone, vctOffset);
        }

        public focarParar(): void
        {
            API.stopCameraPointing(this.objHandle);
        }

        public focarPosicao(vctPosicao: Vector3): void
        {
            if (vctPosicao == null)
            {
                return;
            }

            API.pointCameraAtPosition(this.objHandle, vctPosicao);
        }

        private getStrShakeType(enmTremerTipo: CameraBase_EnmTremerTipo): string
        {
            switch (enmTremerTipo)
            {
                case CameraBase_EnmTremerTipo.GRENADE_EXPLOSION_SHAKE:
                    return "GRENADE_EXPLOSION_SHAKE";

                case CameraBase_EnmTremerTipo.HAND_SHAKE:
                    return "HAND_SHAKE";

                case CameraBase_EnmTremerTipo.JOLT_SHAKE:
                    return "JOLT_SHAKE";

                case CameraBase_EnmTremerTipo.LARGE_EXPLOSION_SHAKE:
                    return "LARGE_EXPLOSION_SHAKE";

                case CameraBase_EnmTremerTipo.MEDIUM_EXPLOSION_SHAKE:
                    return "MEDIUM_EXPLOSION_SHAKE";

                case CameraBase_EnmTremerTipo.ROAD_VIBRATION_SHAKE:
                    return "ROAD_VIBRATION_SHAKE";

                case CameraBase_EnmTremerTipo.SKY_DIVING_SHAKE:
                    return "SKY_DIVING_SHAKE";

                case CameraBase_EnmTremerTipo.SMALL_EXPLOSION_SHAKE:
                    return "SMALL_EXPLOSION_SHAKE";

                case CameraBase_EnmTremerTipo.VIBRATE_SHAKE:
                    return "VIBRATE_SHAKE";

                default:
                    return "DRUNK_SHAKE";
            }
        }

        public interpolar(objCameraTo: Camera, fltDuracao: number = 1, fncAfter: Function = null): void
        {
            if (objCameraTo == null)
            {
                return;
            }

            if (objCameraTo.booAtiva)
            {
                return;
            }

            Log.i.debug("Interpolando câmeras.");

            API.interpolateCameras(this.objHandle, objCameraTo.objHandle, (fltDuracao * 1000), true, true);

            Screen.i.objCameraAtual = objCameraTo;

            if (fncAfter == null)
            {
                return;
            }

            new Timer(fncAfter, fltDuracao).iniciar();
        }

        protected setBooAtiva(booAtiva: boolean): void
        {
            if (booAtiva)
            {
                API.setActiveCamera(this.objHandle);

                Screen.i.objCameraAtual = this;
            }
            else
            {
                API.setGameplayCameraActive()

                Screen.i.objCameraAtual = null;
            }
        }

        private setVctPosicao(vctPosicao: Vector3): void
        {
            if (vctPosicao == null)
            {
                return;
            }

            API.setCameraPosition(this.objHandle, vctPosicao);

            Log.i.debug("Posição (câmera): {0}, {1}, {2}.", vctPosicao.X, vctPosicao.Y, vctPosicao.Z);
        }

        private setVctRotacao(vctRotacao: Vector3): void
        {
            if (vctRotacao == null)
            {
                return;
            }

            API.setCameraRotation(this.objHandle, vctRotacao);

            Log.i.debug("Rotação (câmera): {0}, {1}, {2}.", vctRotacao.X, vctRotacao.Y, vctRotacao.Z);
        }

        public tremer(fltAmplitude: number = 1, enmTremerTipo: CameraBase_EnmTremerTipo = CameraBase_EnmTremerTipo.HAND_SHAKE): void
        {
            if (fltAmplitude <= 0)
            {
                return;
            }

            var strShakeType = this.getStrShakeType(enmTremerTipo);

            API.setCameraShake(this.objHandle, strShakeType, fltAmplitude);
        }

        public tremerParar(): void
        {
            API.stopCameraShake(this.objHandle);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}