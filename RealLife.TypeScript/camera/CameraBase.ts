/// <reference path="../Objeto.ts"/>

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

    export abstract class CameraBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booAtiva: boolean;
        private _fltFov: number;
        private _objGlobalCamera: GTANetwork.Javascript.GlobalCamera;
        private _vctPosicao: Vector3 = new Vector3();
        private _vctRotacao: Vector3 = new Vector3();

        public get booAtiva(): boolean
        {
            this._booAtiva = (API.getActiveCamera() == this.objGlobalCamera);

            return this._booAtiva;
        }

        public set booAtiva(booAtiva: boolean)
        {
            this._booAtiva = booAtiva;

            this.setBooAtiva(this._booAtiva);
        }

        public get fltFov(): number
        {
            this._fltFov = this.getFltFov();

            return this._fltFov;
        }

        public set fltFov(fltFov: number)
        {
            this._fltFov = fltFov;

            this.setFltFov(this._fltFov);
        }

        public get vctPosicao(): Vector3
        {
            this._vctPosicao = this.getVctPosicao();

            return this._vctPosicao;
        }

        public set vctPosicao(vctPosicao: Vector3)
        {
            if (UtilsRealLife.getBooVctIgual(this._vctPosicao, vctPosicao))
            {
                return;
            }

            this._vctPosicao = vctPosicao;

            this.setVctPosicao(this._vctPosicao);
        }

        public get vctRotacao(): Vector3
        {
            this._vctRotacao = this.getVctRotacao();

            return this._vctRotacao;
        }

        public set vctRotacao(vctRotacao: Vector3)
        {
            if (UtilsRealLife.getBooVctIgual(this._vctRotacao, vctRotacao))
            {
                return;
            }

            this._vctRotacao = vctRotacao;

            this.setVctRotacao(this._vctRotacao);
        }

        protected get objGlobalCamera(): GTANetwork.Javascript.GlobalCamera
        {
            return this._objGlobalCamera;
        }

        protected set objGlobalCamera(objGlobalCamera: GTANetwork.Javascript.GlobalCamera)
        {
            this._objGlobalCamera = objGlobalCamera;
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

            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.attachCameraToEntity(this.objGlobalCamera, objEntity.objHandle, vctOffSet);
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

            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.attachCameraToEntityBone(this.objGlobalCamera, objEntity.objHandle, intBone, vctOffSet);
        }

        public criarCamera(): void
        {
            if (this.objGlobalCamera != null)
            {
                return;
            }

            Log.i.debug("Criando camera.");

            this.objGlobalCamera = API.createCamera(this.vctPosicao, this.vctRotacao);
        }

        public desanexar(): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.detachCamera(this.objGlobalCamera);
        }

        public focarEntity(objEntity: Entity, vctOffset: Vector3 = new Vector3()): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            API.pointCameraAtEntity(this.objGlobalCamera, objEntity.objHandle, vctOffset);
        }

        public focarEntityBone(objEntity: Entity, intBone: number, vctOffset: Vector3 = new Vector3()): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            API.pointCameraAtEntityBone(this.objGlobalCamera, objEntity.objHandle, intBone, vctOffset);
        }

        public focarParar(): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.stopCameraPointing(this.objGlobalCamera);
        }

        public focarPosicao(vctPosicao: Vector3): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            if (vctPosicao == null)
            {
                return;
            }

            API.pointCameraAtPosition(this.objGlobalCamera, vctPosicao);
        }

        private getFltFov(): number
        {
            if (this.objGlobalCamera == null)
            {
                return null;
            }

            return API.getCameraFov(this.objGlobalCamera);
        }

        private getStrShakeType(enmTremerTipo: CameraBase_EnmTremerTipo): string
        {
            switch (enmTremerTipo)
            {
                case CameraBase_EnmTremerTipo.DRUNK_SHAKE:
                    return "DRUNK_SHAKE";

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
            }
        }

        protected getVctPosicao(): Vector3
        {
            if (this.objGlobalCamera == null)
            {
                return null;
            }

            return API.getCameraPosition(this.objGlobalCamera);
        }

        protected getVctRotacao(): Vector3
        {
            if (this.objGlobalCamera == null)
            {
                return null;
            }

            return API.getCameraRotation(this.objGlobalCamera);
        }

        public interpolar(objCameraTo: CameraBase, fltDuracao: number = 1, booPosicaoSuave: boolean = true, booRotacaoSuave: boolean = true): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            if (objCameraTo.objGlobalCamera == null)
            {
                return;
            }

            API.interpolateCameras(this.objGlobalCamera, objCameraTo.objGlobalCamera, fltDuracao, booPosicaoSuave, booRotacaoSuave);
        }

        protected setBooAtiva(booAtiva: boolean): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            if (booAtiva)
            {
                API.setActiveCamera(this.objGlobalCamera);
            }
            else
            {
                API.setActiveCamera(null);
            }
        }

        private setFltFov(fltFov: number): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.setCameraFov(this.objGlobalCamera, fltFov);
        }

        private setVctPosicao(vctPosicao: Vector3): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.setCameraPosition(this.objGlobalCamera, vctPosicao);

            Log.i.debug("Posicao (camera): {0}, {1}, {2}.", vctPosicao.X, vctPosicao.Y, vctPosicao.Z);
        }

        private setVctRotacao(vctRotacao: Vector3): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.setCameraRotation(this.objGlobalCamera, vctRotacao);

            Log.i.debug("Rotacao (camera): {0}, {1}, {2}.", vctRotacao.X, vctRotacao.Y, vctRotacao.Z);
        }

        public tremer(fltAmplitude: number, enmTremerTipo: CameraBase_EnmTremerTipo = CameraBase_EnmTremerTipo.DRUNK_SHAKE): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            if (fltAmplitude >= 0)
            {
                return;
            }

            var strShakeType = this.getStrShakeType(enmTremerTipo);

            API.setCameraShake(this.objGlobalCamera, strShakeType, fltAmplitude);
        }

        public tremerParar(): void
        {
            if (this.objGlobalCamera == null)
            {
                return;
            }

            API.stopCameraShake(this.objGlobalCamera);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}