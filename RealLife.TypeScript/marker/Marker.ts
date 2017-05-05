/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Marker extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _cor: System.Drawing.Color;
        private _enmTipo: Enums.MarkerType;
        private _objHandle: LocalHandle;
        private _vctDirecao: Vector3;
        private _vctEscala: Vector3;

        public get cor(): System.Drawing.Color
        {
            this._cor = this.getCor();

            return this._cor;
        }

        public set cor(cor: System.Drawing.Color)
        {
            if (this._cor == cor)
            {
                return;
            }

            this._cor = cor;

            this.setCor(this._cor);
        }

        public get enmTipo(): Enums.MarkerType
        {
            this._enmTipo = this.getEnmTipo();

            return this._enmTipo;
        }

        public set enmTipo(enmTipo: Enums.MarkerType)
        {
            if (this._enmTipo == enmTipo)
            {
                return;
            }

            this._enmTipo = enmTipo;

            this.setEnmTipo(this._enmTipo);
        }

        private get objHandle(): LocalHandle
        {
            return this._objHandle;
        }

        private set objHandle(objHandle: LocalHandle)
        {
            this._objHandle = objHandle;
        }

        public get vctDirecao(): Vector3
        {
            this._vctDirecao = this.getVctDirecao();

            return this._vctDirecao;
        }

        public set vctDirecao(vctDirecao: Vector3)
        {
            if (UtilsRealLife.getBooVctIgual(this._vctDirecao, vctDirecao))
            {
                return;
            }

            this._vctDirecao = vctDirecao;

            this.setVctDirecao(this._vctDirecao);
        }

        public get vctEscala(): Vector3
        {
            this._vctEscala = this.getVctEscala();

            return this._vctEscala;
        }

        public set vctEscala(vctEscala: Vector3)
        {
            if (UtilsRealLife.getBooVctIgual(this._vctEscala, vctEscala))
            {
                return;
            }

            this._vctEscala = vctEscala;

            this.setVctEscala(this._vctEscala);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public criar(vctPosicao: Vector3, vctRotacao: Vector3): void
        {
            if (this.objHandle != null)
            {
                return;
            }

            // TODO: Confirmar se precisa ser desenhado a cada update.

            var corTemp = new System.Drawing.Color();
            var vctDirecaoTemp = new Vector3();
            var vctEscalaTemp = new Vector3(1, 1, 1);

            this.objHandle = API.createMarker(Enums.MarkerType.VerticalCylinder, vctPosicao, vctDirecaoTemp, vctRotacao, vctEscalaTemp, corTemp.R, corTemp.G, corTemp.B, corTemp.A);
        }

        public destruir(): void
        {
            super.destruir();

            if (this.objHandle == null)
            {
                return;
            }

            // TODO: Implementar.
        }

        private getCor(): System.Drawing.Color
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getMarkerColor(this.objHandle);
        }

        private getEnmTipo(): Enums.MarkerType
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getMarkerType(this.objHandle);
        }

        public getVctDirecao(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getMarkerDirection(this.objHandle);
        }

        public getVctEscala(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getMarkerScale(this.objHandle);
        }

        private setCor(cor: System.Drawing.Color): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setMarkerColor(this.objHandle, cor.A, cor.R, cor.G, cor.B);
        }

        private setEnmTipo(enmTipo: Enums.MarkerType): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setMarkerType(this.objHandle, enmTipo);
        }

        private setVctDirecao(vctDirecao: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setMarkerDirection(this.objHandle, vctDirecao);
        }

        private setVctEscala(vctEscala: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setMarkerScale(this.objHandle, vctEscala);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}