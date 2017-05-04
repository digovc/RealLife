/// <reference path="CameraBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class CameraLivre extends CameraBase implements OnUpdateListener
    {
        // #region Constantes

        // #endregion Constantes

        // #region Atributos

        private _fltVelocidade: number = 10;
        private _objEntityAncora: Entity;
        private _vctGirar: Vector3 = new Vector3();
        private _vctMover: Vector3 = new Vector3();

        private get fltVelocidade(): number
        {
            return this._fltVelocidade;
        }

        private set fltVelocidade(fltVelocidade: number)
        {
            this._fltVelocidade = fltVelocidade;
        }

        private get objEntityAncora(): Entity
        {
            if (this._objEntityAncora != null)
            {
                return this._objEntityAncora;
            }

            this._objEntityAncora = this.getObjEntityAncora();

            return this._objEntityAncora;
        }

        private get vctGirar(): Vector3
        {
            return this._vctGirar;
        }

        private set vctGirar(vctGirar: Vector3)
        {
            this._vctGirar = vctGirar;
        }

        private get vctMover(): Vector3
        {
            return this._vctMover;
        }

        private set vctMover(vctMover: Vector3)
        {
            this._vctMover = vctMover;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public ativar(): void
        {
            super.ativar();

            Keyboard.i.booLigado = false;
            Screen.i.addEvtOnUpdateListener(this);

            Jogador.i.ped.booVisivel = false;

            this.objEntityAncora.criar();

            API.attachCameraToEntity(this.objGlobalCamera, this.objEntityAncora.objHandle, new Vector3(0, 0, 0));
        }

        private getObjEntityAncora(): Entity
        {
            var objEntityAncoraResultado = new Entity();

            objEntityAncoraResultado.intHash = 656641197;

            return objEntityAncoraResultado;
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.strNome = "cam_livre";

            this.inicializarVctPosicao();
        }

        private inicializarVctPosicao(): void
        {
            this.vctPosicao = UtilsRealLife.copiarVct(Jogador.i.ped.vctPosicao);
            this.vctRotacao = UtilsRealLife.copiarVct(Jogador.i.ped.vctRotacao);
        }

        private processarOnUpdate(fltDelta: number): void
        {
            this.processarOnUpdateCalcular(fltDelta);
            this.processarOnUpdateAtualizar(fltDelta);
        }

        private processarOnUpdateCalcular(fltDelta: number): void
        {
            this.processarOnUpdateCalcularAcelerar(fltDelta);
            this.processarOnUpdateCalcularGirar();
            this.processarOnUpdateCalcularMover();
        }

        private processarOnUpdateCalcularAcelerar(fltDelta: number): void
        {
            try
            {
                if (API.isControlPressed(Enums.Controls.VehicleAim))
                {
                    this.fltVelocidade = (this.fltVelocidade - (50 * fltDelta));

                    Log.i.debug("Velocidade: {0}.", this.fltVelocidade);
                }

                if (API.isControlPressed(Enums.Controls.Cover))
                {
                    this.fltVelocidade = (this.fltVelocidade + (50 * fltDelta));

                    Log.i.debug("Velocidade: {0}.", this.fltVelocidade);
                }
            }
            finally
            {
                if (this.fltVelocidade > 120)
                {
                    this.fltVelocidade = 120;
                }
                else if (this.fltVelocidade < 1)
                {
                    this.fltVelocidade = 1;
                }
            }
        }

        private processarOnUpdateCalcularGirar(): void
        {
            this.vctGirar = new Vector3();

            if (API.isControlPressed(Enums.Controls.Reload))
            {
                this.vctRotacao = new Vector3();
                return;
            }

            if (API.isControlPressed(Enums.Controls.LookUpOnly))
            {
                this.vctGirar.X = 1;
            }

            if (API.isControlPressed(Enums.Controls.LookDownOnly))
            {
                this.vctGirar.X = -1;
            }

            if (API.isControlPressed(Enums.Controls.LookRightOnly))
            {
                this.vctGirar.Z = -1;
            }

            if (API.isControlPressed(Enums.Controls.LookLeftOnly))
            {
                this.vctGirar.Z = 1;
            }
        }

        private processarOnUpdateCalcularMover(): void
        {
            this.vctMover = new Vector3();

            if (API.isControlPressed(Enums.Controls.MoveRightOnly))
            {
                this.vctMover.X = 1;
            }

            if (API.isControlPressed(Enums.Controls.MoveLeftOnly))
            {
                this.vctMover.X = -1;
            }

            if (API.isControlPressed(Enums.Controls.MoveUpOnly))
            {
                this.vctMover.Y = 1;
            }

            if (API.isControlPressed(Enums.Controls.MoveDownOnly))
            {
                this.vctMover.Y = -1;
            }

            if (API.isControlPressed(Enums.Controls.Aim))
            {
                this.vctMover.Z = -1;
            }

            if (API.isControlPressed(Enums.Controls.Attack))
            {
                this.vctMover.Z = 1;
            }
        }

        private processarOnUpdateAtualizar(fltDelta: number): void
        {
            this.processarOnUpdateAtualizarGirar(fltDelta);
            this.processarOnUpdateAtualizarMover(fltDelta);
        }

        private processarOnUpdateAtualizarGirar(fltDelta: number): void
        {
            var intGirarVelocidade = 25;

            var vctRotacao = UtilsRealLife.copiarVct(this.objEntityAncora.vctRotacao);

            vctRotacao.X = (((intGirarVelocidade * fltDelta) * this.vctGirar.X) + vctRotacao.X);
            vctRotacao.Y = (((intGirarVelocidade * fltDelta) * this.vctGirar.Y) + vctRotacao.Y);
            vctRotacao.Z = (((intGirarVelocidade * fltDelta) * this.vctGirar.Z) + vctRotacao.Z);

            this.objEntityAncora.vctRotacao = vctRotacao;
        }

        private processarOnUpdateAtualizarMover(fltDelta: number): void
        {
            var vctPosicao = UtilsRealLife.copiarVct(this.objEntityAncora.vctPosicao);

            vctPosicao.X = (((this.fltVelocidade * fltDelta) * this.vctMover.X) + vctPosicao.X);
            vctPosicao.Y = (((this.fltVelocidade * fltDelta) * this.vctMover.Y) + vctPosicao.Y);
            vctPosicao.Z = (((this.fltVelocidade * fltDelta) * this.vctMover.Z) + vctPosicao.Z);

            this.objEntityAncora.vctPosicao = vctPosicao;
        }

        // #endregion Métodos

        // #region Eventos

        public onUpdate(fltDelta: number): void
        {
            this.processarOnUpdate(fltDelta);
        }

        // #endregion Eventos
    }
}