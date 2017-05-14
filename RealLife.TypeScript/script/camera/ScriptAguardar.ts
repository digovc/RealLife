/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptAguardar extends ScriptBase
    {
        // #region Constantes

        private static get FLT_DISTANCIA(): number { return 250 };

        public static get FLT_TEMPO(): number { return .3 };

        // #endregion Constantes

        // #region Atributos

        private _fncConclusao: Function;
        private _objCameraFinal: Camera;
        private _objCameraGamePlay: Camera;
        private _objCameraNivel1: Camera;
        private _objCameraNivel2: Camera;
        private _objCameraNivel3: Camera;
        private _vctPosicaoFinal: Vector3;

        private get fncConclusao(): Function
        {
            return this._fncConclusao;
        }

        private set fncConclusao(fncConclusao: Function)
        {
            this._fncConclusao = fncConclusao;
        }

        public get objCameraFinal(): Camera
        {
            if (this._objCameraFinal != null)
            {
                return this._objCameraFinal;
            }

            this._objCameraFinal = this.getObjCameraFinal();

            return this._objCameraFinal;
        }

        public get objCameraGamePlay(): Camera
        {
            if (this._objCameraGamePlay != null)
            {
                return this._objCameraGamePlay;
            }

            this._objCameraGamePlay = this.getObjCameraGamePlay();

            return this._objCameraGamePlay;
        }

        public get objCameraNivel1(): Camera
        {
            if (this._objCameraNivel1 != null)
            {
                return this._objCameraNivel1;
            }

            this._objCameraNivel1 = this.getObjCameraNivel1();

            return this._objCameraNivel1;
        }

        public get objCameraNivel2(): Camera
        {
            if (this._objCameraNivel2 != null)
            {
                return this._objCameraNivel2;
            }

            this._objCameraNivel2 = this.getObjCameraNivel2();

            return this._objCameraNivel2;
        }

        public get objCameraNivel3(): Camera
        {
            if (this._objCameraNivel3 != null)
            {
                return this._objCameraNivel3;
            }

            this._objCameraNivel3 = this.getObjCameraNivel3();

            return this._objCameraNivel3;
        }

        public get vctPosicaoFinal(): Vector3
        {
            return this._vctPosicaoFinal;
        }

        public set vctPosicaoFinal(vctPosicaoFinal: Vector3)
        {
            this._vctPosicaoFinal = vctPosicaoFinal;
        }

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

        public concluir(vctPosicaoFinal: Vector3, fncConclusao: Function = null): void
        {
            this.fncConclusao = fncConclusao;
            this.vctPosicaoFinal = vctPosicaoFinal;

            new EtapaAguardar002Concluir(this).iniciar();
        }

        public destruir(): void
        {
            super.destruir();

            if (this.fncConclusao != null)
            {
                this.fncConclusao();
            }
        }

        private getObjCameraFinal(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.vctPosicao = this.objCameraNivel3.vctPosicao;

            objCameraResultado.vctPosicao.X = this.vctPosicaoFinal.X;
            objCameraResultado.vctPosicao.Y = this.vctPosicaoFinal.Y;

            objCameraResultado.vctRotacao = this.objCameraNivel3.vctRotacao;

            return objCameraResultado;
        }

        private getObjCameraGamePlay(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.clonarCameraGamePlay();

            return objCameraResultado;
        }

        private getObjCameraNivel1(): Camera
        {
            var objCameraResultado = new Camera();

            var vctPosicao = this.objCameraGamePlay.vctPosicao;

            vctPosicao.Z += ScriptAguardar.FLT_DISTANCIA;

            var vctRotacao = this.objCameraGamePlay.vctRotacao;

            vctRotacao.X = -90;

            objCameraResultado.vctPosicao = vctPosicao;
            objCameraResultado.vctRotacao = vctRotacao;

            return objCameraResultado;
        }

        private getObjCameraNivel2(): Camera
        {
            var objCameraResultado = new Camera();

            var vctPosicao = this.objCameraNivel1.vctPosicao;

            vctPosicao.Z += ScriptAguardar.FLT_DISTANCIA;

            var vctRotacao = this.objCameraNivel1.vctRotacao;

            vctRotacao.X = -90;;

            objCameraResultado.vctPosicao = vctPosicao;
            objCameraResultado.vctRotacao = vctRotacao;

            return objCameraResultado;
        }

        private getObjCameraNivel3(): Camera
        {
            var objCameraResultado = new Camera();

            var vctPosicao = this.objCameraNivel2.vctPosicao;

            vctPosicao.Z += ScriptAguardar.FLT_DISTANCIA;

            var vctRotacao = this.objCameraNivel2.vctRotacao;

            vctRotacao.X = -90;

            objCameraResultado.vctPosicao = vctPosicao;
            objCameraResultado.vctRotacao = vctRotacao;

            return objCameraResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            new EtapaAguardar001Iniciar(this).iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}