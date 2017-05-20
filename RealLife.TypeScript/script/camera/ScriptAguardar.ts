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

        private static _i: ScriptAguardar;

        public static get i(): ScriptAguardar
        {
            if (ScriptAguardar._i != null)
            {
                return ScriptAguardar._i;
            }

            ScriptAguardar._i = new ScriptAguardar();

            return ScriptAguardar._i;
        }

        private _booAlto: boolean;
        private _fncConclusao: Function;
        private _objCameraFinal: Camera;
        private _objCameraGamePlay: Camera;
        private _objCameraNivel1: Camera;
        private _objCameraNivel2: Camera;
        private _objCameraNivel3: Camera;
        private _objEtapaConcluir: EtapaAguardar002Concluir;
        private _objEtapaIniciar: EtapaAguardar001Iniciar;
        private _vctPosicaoFinal: Vector3;

        private get booAlto(): boolean
        {
            return this._booAlto;
        }

        private set booAlto(booAlto: boolean)
        {
            this._booAlto = booAlto;
        }

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

        public set objCameraFinal(objCameraFinal: Camera)
        {
            this._objCameraFinal = objCameraFinal;
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

        public set objCameraGamePlay(objCameraGamePlay: Camera)
        {
            this._objCameraGamePlay = objCameraGamePlay;
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

        public set objCameraNivel1(objCameraNivel1: Camera)
        {
            this._objCameraNivel1 = objCameraNivel1;
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

        public set objCameraNivel2(objCameraNivel2: Camera)
        {
            this._objCameraNivel2 = objCameraNivel2;
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

        public set objCameraNivel3(objCameraNivel3: Camera)
        {
            this._objCameraNivel3 = objCameraNivel3;
        }

        private get objEtapaConcluir(): EtapaAguardar002Concluir
        {
            if (this._objEtapaConcluir != null)
            {
                return this._objEtapaConcluir;
            }

            this._objEtapaConcluir = new EtapaAguardar002Concluir(this);

            return this._objEtapaConcluir;
        }

        private get objEtapaIniciar(): EtapaAguardar001Iniciar
        {
            if (this._objEtapaIniciar != null)
            {
                return this._objEtapaIniciar;
            }

            this._objEtapaIniciar = new EtapaAguardar001Iniciar(this);

            return this._objEtapaIniciar;
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

        public baixar(vctPosicaoFinal: Vector3, fncConclusao: Function = null): void
        {
            this.fncConclusao = fncConclusao;
            this.vctPosicaoFinal = vctPosicaoFinal;

            this.objEtapaConcluir.iniciar();
        }

        public baixarConcluir(): void
        {
            this.objCameraFinal.destruir();
            this.objCameraGamePlay.destruir();
            this.objCameraNivel1.destruir();
            this.objCameraNivel2.destruir();
            this.objCameraNivel3.destruir();

            this.objCameraFinal = null;
            this.objCameraGamePlay = null;
            this.objCameraNivel1 = null;
            this.objCameraNivel2 = null;
            this.objCameraNivel3 = null;

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

            if (this.booAlto)
            {
                return;
            }

            this.booAlto = true;

            this.objEtapaIniciar.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}