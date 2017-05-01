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
        private _vctMovimento: Vector3 = new Vector3();

        private get fltVelocidade(): number
        {
            return this._fltVelocidade;
        }

        private set fltVelocidade(fltVelocidade: number)
        {
            this._fltVelocidade = fltVelocidade;
        }

        private get vctMovimento(): Vector3
        {
            return this._vctMovimento;
        }

        private set vctMovimento(vctMovimento: Vector3)
        {
            this._vctMovimento = vctMovimento;
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
            this.processarOnUpdateMover(fltDelta);
        }

        private processarOnUpdateCalcular(fltDelta: number): void
        {
            this.vctMovimento = new Vector3();

            if (API.isControlPressed(Enums.Controls.MoveRightOnly))
            {
                this.vctMovimento.X = 1;
            }

            if (API.isControlPressed(Enums.Controls.MoveLeftOnly))
            {
                this.vctMovimento.X = -1;
            }

            if (API.isControlPressed(Enums.Controls.MoveUpOnly))
            {
                this.vctMovimento.Y = 1;
            }

            if (API.isControlPressed(Enums.Controls.MoveDownOnly))
            {
                this.vctMovimento.Y = -1;
            }

            if (API.isControlPressed(Enums.Controls.Aim))
            {
                this.vctMovimento.Z = -1;
            }

            if (API.isControlPressed(Enums.Controls.Attack))
            {
                this.vctMovimento.Z = 1;
            }

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

        private processarOnUpdateMover(fltDelta: number): void
        {
            var vctPosicaoNova = UtilsRealLife.copiarVct(this.vctPosicao);

            vctPosicaoNova.X = (((this.fltVelocidade * fltDelta) * this.vctMovimento.X) + vctPosicaoNova.X);
            vctPosicaoNova.Y = (((this.fltVelocidade * fltDelta) * this.vctMovimento.Y) + vctPosicaoNova.Y);
            vctPosicaoNova.Z = (((this.fltVelocidade * fltDelta) * this.vctMovimento.Z) + vctPosicaoNova.Z);

            this.vctPosicao = vctPosicaoNova;
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