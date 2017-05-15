/// <reference path="../../evento/OnColisaoListener.ts"/>
/// <reference path="ScriptTestBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestMarker extends ScriptTestBase implements OnColisaoListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objMarker: Marker;

        private get objMarker(): Marker
        {
            return this._objMarker;
        }

        private set objMarker(objMarker: Marker)
        {
            this._objMarker = objMarker;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private criarMarker(): void
        {
            this.objMarker = new Marker();

            this.objMarker.addEvtOnColisaoListener(this);

            var vctPosicao = Jogador.i.vctPosicao;

            vctPosicao.X += 10;

            this.objMarker.criar(vctPosicao);
        }

        private destruirMarker(): void
        {
            this.objMarker.destruir();
        }

        protected processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void
        {
            switch (arg.KeyCode)
            {
                case Keys.Up:
                    this.criarMarker();
                    return;

                case Keys.Down:
                    this.destruirMarker();
                    return;
            }
        }

        // #endregion Métodos

        // #region Eventos

        public onColisao(): void
        {
            Screen.i.strLegenda = "Colidiu";
        }

        // #endregion Eventos
    }
}