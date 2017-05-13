/// <reference path="../../ScriptBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptPersonagemEditor extends ScriptBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objCameraCabeca: Camera;
        private _objCameraLonge: Camera;
        private _objCameraPerna: Camera;
        private _objCameraPerto: Camera;
        private _objCameraTronco: Camera;

        public get objCameraCabeca(): Camera
        {
            if (this._objCameraCabeca != null)
            {
                return this._objCameraCabeca;
            }

            this._objCameraCabeca = this.getObjCameraCabeca();

            return this._objCameraCabeca;
        }

        public get objCameraLonge(): Camera
        {
            if (this._objCameraLonge != null)
            {
                return this._objCameraLonge;
            }

            this._objCameraLonge = this.getObjCameraLonge();

            return this._objCameraLonge;
        }

        public get objCameraPerna(): Camera
        {
            if (this._objCameraPerna != null)
            {
                return this._objCameraPerna;
            }

            this._objCameraPerna = this.getObjCameraPerna();

            return this._objCameraPerna;
        }

        public get objCameraPerto(): Camera
        {
            if (this._objCameraPerto != null)
            {
                return this._objCameraPerto;
            }

            this._objCameraPerto = this.getObjCameraPerto();

            return this._objCameraPerto;
        }

        public get objCameraTronco(): Camera
        {
            if (this._objCameraTronco != null)
            {
                return this._objCameraTronco;
            }

            this._objCameraTronco = this.getObjCameraTronco();

            return this._objCameraTronco;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private getObjCameraCabeca(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.vctPosicao = new Vector3(197.3365, 1165.237, 227.6546);
            objCameraResultado.vctRotacao = new Vector3(0.6592886, -2.53464E-07, -76.61622);

            return objCameraResultado;
        }

        private getObjCameraLonge(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.vctPosicao = new Vector3(121.2315, 1145.925, 244.075);
            objCameraResultado.vctRotacao = new Vector3(-12.33284, 0, -75.63238);

            return objCameraResultado;
        }

        private getObjCameraPerna(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.vctPosicao = new Vector3(196.9738, 1165.13, 227.2032);
            objCameraResultado.vctRotacao = new Vector3(-33.98626, 1.28066E-06, -77.20695);

            return objCameraResultado;
        }

        private getObjCameraPerto(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.fltFov = 65;
            objCameraResultado.vctPosicao = new Vector3(196.3674, 1164.992, 227.6225);
            objCameraResultado.vctRotacao = new Vector3(-20.01, 0, -75.63219);

            return objCameraResultado;
        }

        private getObjCameraTronco(): Camera
        {
            var objCameraResultado = new Camera();

            objCameraResultado.vctPosicao = new Vector3(197.3234, 1165.227, 227.446);
            objCameraResultado.vctRotacao = new Vector3(-17.45088, -2.988208E-06, -76.61635);

            return objCameraResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            new Etapa001PersonagemEditorAbertura(this).iniciar();
        }

        public destruir(): void
        {
            super.destruir();

            new ScriptOpenWorld().iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}