/// <reference path="../../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class _001_EtapaPersonagemEditorAbertura extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objCameraCabeca: Camera;
        private _objCameraDistante: Camera;
        private _objCameraPernas: Camera;
        private _objCameraPerto: Camera;
        private _objCameraTronco: Camera;

        private get objCameraCabeca(): Camera
        {
            if (this._objCameraCabeca != null)
            {
                return this._objCameraCabeca;
            }

            this._objCameraCabeca = new Camera();

            return this._objCameraCabeca;
        }

        private get objCameraDistante(): Camera
        {
            if (this._objCameraDistante != null)
            {
                return this._objCameraDistante;
            }

            this._objCameraDistante = new Camera();

            return this._objCameraDistante;
        }

        private get objCameraPernas(): Camera
        {
            if (this._objCameraPernas != null)
            {
                return this._objCameraPernas;
            }

            this._objCameraPernas = new Camera();

            return this._objCameraPernas;
        }

        private get objCameraPerto(): Camera
        {
            if (this._objCameraPerto != null)
            {
                return this._objCameraPerto;
            }

            this._objCameraPerto = new Camera();

            return this._objCameraPerto;
        }

        private get objCameraTronco(): Camera
        {
            if (this._objCameraTronco != null)
            {
                return this._objCameraTronco;
            }

            this._objCameraTronco = new Camera();

            return this._objCameraTronco;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this._001_etapa();
        }

        private _001_etapa(): void
        {
            Keyboard.i.booAtivo = false;

            Screen.i.fadeOut(350);

            new Timer((() => { this._002_etapa(); }), .350).iniciar();
        }

        private _002_etapa(): void
        {
            this.objCameraDistante.criar();

            this.objCameraDistante.vctPosicao = new Vector3(126.8095, 1148.244, 237.1642);
            this.objCameraDistante.vctRotacao = new Vector3(-8.180131, -8.537736, -76.37589);

            this.objCameraDistante.booAtiva = true;

            Jogador.i.ped.fltRotacao = 104.4779;
            Jogador.i.ped.vctPosicao = new Vector3(198.6063, 1165.586, 227.0094);
            Jogador.i.ped.vctRotacao = new Vector3(1.494016, 0, 104.4779);

            Jogador.i.ped.ajustarZ();

            Screen.i.fadeIn();

            this.objCameraPerto.criar();

            this.objCameraPerto.vctPosicao = new Vector3(195.4025, 1164.994, 227.6242);
            this.objCameraPerto.vctRotacao = new Vector3(-8.180131, -8.537736, -76.37589);

            this.objCameraPerto.criar();

            this.objCameraDistante.interpolar(this.objCameraPerto, 5000);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}