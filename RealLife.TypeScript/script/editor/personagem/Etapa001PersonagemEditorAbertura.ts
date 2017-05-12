/// <reference path="../../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Etapa001PersonagemEditorAbertura extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objCameraCabeca: Camera;
        private _objCameraLonge: Camera;
        private _objCameraPerna: Camera;
        private _objCameraPerto: Camera;
        private _objCameraTronco: Camera;

        private get objCameraCabeca(): Camera
        {
            if (this._objCameraCabeca != null)
            {
                return this._objCameraCabeca;
            }

            this._objCameraCabeca = this.getObjCameraCabeca();

            return this._objCameraCabeca;
        }

        private get objCameraLonge(): Camera
        {
            if (this._objCameraLonge != null)
            {
                return this._objCameraLonge;
            }

            this._objCameraLonge = this.getObjCameraLonge();

            return this._objCameraLonge;
        }

        private get objCameraPerna(): Camera
        {
            if (this._objCameraPerna != null)
            {
                return this._objCameraPerna;
            }

            this._objCameraPerna = this.getObjCameraPerna();

            return this._objCameraPerna;
        }

        private get objCameraPerto(): Camera
        {
            if (this._objCameraPerto != null)
            {
                return this._objCameraPerto;
            }

            this._objCameraPerto = this.getObjCameraPerto();

            return this._objCameraPerto;
        }

        private get objCameraTronco(): Camera
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

            this.etapa001();
        }

        // Etapas

        private etapa001(): void
        {
            Screen.i.fadeOut(1, (() => { this.etapa002(); }));
        }

        private etapa002(): void
        {
            Jogador.i.booVisivel = false;
            Keyboard.i.booAtivo = false;
            Screen.i.booHudVisivel = false;
            World.i.setEnmClima(Enums.Weather.Clear);
            World.i.setHora(12);

            this.objCameraLonge.booAtiva = true;

            Jogador.i.fltRotacao = 99.99914;
            Jogador.i.vctPosicao = new Vector3(198.016464, 1165.42078, 227.009354);
            Jogador.i.vctRotacao = new Vector3(1.00178786E-05, -0, 99.99914);

            Jogador.i.ajustarZ();

            Jogador.i.booVisivel = true;

            new Timer((() => { this.etapa003(); }), 1).iniciar();
        }

        private etapa003(): void
        {
            Log.i.debug("Etapa 3");

            Screen.i.fadeIn();

            this.objCameraLonge.interpolar(this.objCameraPerto, 5, (() => { this.etapa004(); }));
        }

        private etapa004(): void
        {
            new Etapa002PersonagemEditorEdicao(this.objScript).iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}