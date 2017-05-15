/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="../../evento/OnKeyUpListener.ts"/>

module RealLife
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;
    import EnmPedSkin = RealLifeShared.EnmPedSkin;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestPedSkin extends ScriptBase implements OnKeyUpListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intComponente: number = 0;
        private _intModelo: number = 0;
        private _intTextura: number = 0;

        private get intComponente(): number
        {
            return this._intComponente;
        }

        private set intComponente(intComponente: number)
        {
            this._intComponente = intComponente;
        }

        private get intModelo(): number
        {
            return this._intModelo;
        }

        private set intModelo(intModelo: number)
        {
            this._intModelo = intModelo;
        }

        private get intTextura(): number
        {
            return this._intTextura;
        }

        private set intTextura(intTextura: number)
        {
            this._intTextura = intTextura;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private processarOnKeyUp(enmKey: Keys): void
        {
            try
            {
                switch (enmKey)
                {
                    case Keys.Down:
                        this.intModelo -= 1;
                        return;

                    case Keys.Left:
                        this.intComponente -= 1;
                        this.intModelo = 0;
                        this.intTextura = 0;
                        return;

                    case Keys.PageDown:
                        this.intTextura -= 1;
                        return;

                    case Keys.PageUp:
                        this.intTextura += 1;
                        return;

                    case Keys.Right:
                        this.intComponente += 1;
                        this.intModelo = 0;
                        this.intTextura = 0;
                        return;

                    case Keys.Up:
                        this.intModelo += 1;
                        return;
                }
            }
            finally
            {
                this.atualizarSkin();
            }
        }

        private atualizarSkin(): void
        {
            Jogador.i.vestirRoupaDefault();

            API.setPlayerClothes(Jogador.i.objHandle, this.intComponente, this.intModelo, this.intTextura);

            var strLegenda = "Comp: _componente_value; mod: _modelo_value; text: _texture_value";

            strLegenda = strLegenda.replace("_componente_value", this.intComponente.toString());
            strLegenda = strLegenda.replace("_modelo_value", this.intModelo.toString());
            strLegenda = strLegenda.replace("_texture_value", this.intTextura.toString());

            Screen.i.strLegenda = strLegenda;
        }

        protected inicializar(): void
        {
            super.inicializar();

            Jogador.i.enmPedSkin = EnmPedSkin.FREEMODEMALE01;
        }

        protected setEventos(): void
        {
            super.setEventos();

            Keyboard.i.addEvtOnKeyUpListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onKeyUp(objSender: Object, arg: System.Windows.Forms.KeyEventArgs): void
        {
            this.processarOnKeyUp(arg.KeyCode);
        }

        // #endregion Eventos
    }
}