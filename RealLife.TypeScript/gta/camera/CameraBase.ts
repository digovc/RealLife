/// <reference path="../../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class CameraBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booAtiva: boolean;
        private _objGlobalCamera: GTANetwork.Javascript.GlobalCamera;
        private _strNome: string = "cam_desconhecida";
        private _vctPosicao: Vector3 = new Vector3();
        private _vctRotacao: Vector3 = new Vector3();

        public get booAtiva(): boolean
        {
            this._booAtiva = (API.getActiveCamera() == this.objGlobalCamera);

            return this._booAtiva;
        }

        public get strNome(): string
        {
            return this._strNome;
        }

        public set strNome(strNome: string)
        {
            this._strNome = strNome;
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

        public ativar(): void
        {
            if (this.objGlobalCamera == null)
            {
                this.criarCamera();
            }

            Log.i.debug("Ativando a camera {0}.", this.strNome);

            API.setActiveCamera(this.objGlobalCamera);
        }

        public criarCamera(): void
        {
            if (this.objGlobalCamera != null)
            {
                return;
            }

            Log.i.debug("Criando a camera {0}.", this.strNome);

            this.objGlobalCamera = API.createCamera(this.vctPosicao, this.vctRotacao);
        }

        private getVctPosicao(): Vector3
        {
            if (this.objGlobalCamera == null)
            {
                return null;
            }

            return API.getCameraPosition(this.objGlobalCamera);
        }

        private getVctRotacao(): Vector3
        {
            if (this.objGlobalCamera == null)
            {
                return null;
            }

            return API.getCameraRotation(this.objGlobalCamera);
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

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}