/// <reference path="CameraBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class CameraLivre extends CameraBase
    {
        // #region Constantes

        // #endregion Constantes

        // #region Atributos

        private _objEntityAncora: Entity;

        private get objEntityAncora(): Entity
        {
            if (this._objEntityAncora != null)
            {
                return this._objEntityAncora;
            }

            this._objEntityAncora = new Entity(656641197);

            return this._objEntityAncora;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        public ativar(): void
        {
            super.ativar();

            Jogador.i.booControlavel = false;
            Jogador.i.ped.booVisivel = false;

            this.objEntityAncora.criar();

            this.objEntityAncora.booControlavel = true;

            this.anexarEntity(this.objEntityAncora);
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarVctPosicao();
        }

        private inicializarVctPosicao(): void
        {
            this.vctPosicao = UtilsRealLife.copiarVct(Jogador.i.ped.vctPosicao);
            this.vctRotacao = UtilsRealLife.copiarVct(Jogador.i.ped.vctRotacao);
        }

        // #endregion M�todos

        // #region Eventos

        // #endregion Eventos
    }
}