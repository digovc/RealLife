/// <reference path="../../evento/keyboard/OnKeyMoverDireitaListener.ts"/>
/// <reference path="../../evento/keyboard/OnKeyMoverEsquerdaListener.ts"/>
/// <reference path="../../evento/keyboard/OnKeyMoverFrenteListener.ts"/>
/// <reference path="../../evento/keyboard/OnKeyMoverTrasListener.ts"/>
/// <reference path="../../evento/keyboard/OnKeyUpListener.ts"/>
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

            KeyBoard.i.booLigado = false;
            Screen.i.addEvtOnUpdateListener(this);
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

                    Log.i.debug("Velocidade alterada: {0}.", this.fltVelocidade);
                }

                if (API.isControlPressed(Enums.Controls.Cover))
                {
                    this.fltVelocidade = (this.fltVelocidade + (50 * fltDelta));

                    Log.i.debug("Velocidade alterada: {0}.", this.fltVelocidade);
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

            var vct = UtilsRealLife.copiarVct(this.vctRotacao);

            vct.X = (((intGirarVelocidade * fltDelta) * this.vctGirar.X) + vct.X);
            vct.Y = (((intGirarVelocidade * fltDelta) * this.vctGirar.Y) + vct.Y);
            vct.Z = (((intGirarVelocidade * fltDelta) * this.vctGirar.Z) + vct.Z);

            this.vctRotacao = vct;
        }

        private processarOnUpdateAtualizarMover(fltDelta: number): void
        {
            var vct = UtilsRealLife.copiarVct(this.vctPosicao);

            vct.X = (((this.fltVelocidade * fltDelta) * this.vctMover.X) + vct.X);
            vct.Y = (((this.fltVelocidade * fltDelta) * this.vctMover.Y) + vct.Y);
            vct.Z = (((this.fltVelocidade * fltDelta) * this.vctMover.Z) + vct.Z);

            this.vctPosicao = vct;
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