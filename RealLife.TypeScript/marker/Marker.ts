/// <reference path="../Cor.ts"/>
/// <reference path="../Entity.ts"/>
/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Marker extends Objeto implements OnUpdateListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booColidiu: boolean;
        private _cor: Cor;
        private _enmTipo: Enums.MarkerType;
        private _objHandle: LocalHandle;
        private _vctDirecao: Vector3;
        private _vctEscala: Vector3;
        private _vctPosicao: Vector3;

        private get booColidiu(): boolean
        {
            return this._booColidiu;
        }

        private set booColidiu(booColidiu: boolean)
        {
            this._booColidiu = booColidiu;
        }

        public get cor(): Cor
        {
            this._cor = this.getCor();

            return this._cor;
        }

        public set cor(cor: Cor)
        {
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

        private get vctPosicao(): Vector3
        {
            return this._vctPosicao;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public criar(vctPosicao: Vector3, vctRotacao: Vector3 = new Vector3()): void
        {
            if (this.objHandle)
            {
                return;
            }

            this._vctPosicao = vctPosicao;

            var vctDirecao = new Vector3();
            var vctEscala = new Vector3(1, 1, 1);

            this.objHandle = API.createMarker(Enums.MarkerType.VerticalCylinder, vctPosicao, vctDirecao, vctRotacao, vctEscala, 255, 255, 0, 255);

            Log.i.debug("Criando marca.");
        }

        public destruir(): void
        {
            super.destruir();

            Screen.i.removerEvtOnUpdateListener(this);

            if (this.objHandle == null)
            {
                return;
            }

            API.deleteEntity(this.objHandle);
        }

        private getCor(): Cor
        {
            if (this.objHandle == null)
            {
                return null;
            }

            var corTemp = API.getMarkerColor(this.objHandle);

            return new Cor(corTemp.R, corTemp.G, corTemp.B, corTemp.A);
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

        private processarOnUpdate(): void
        {
            var vctJogadorPosicao = Jogador.i.vctPosicao;

            var fltDistancia = API.returnNative("VDIST2", Enums.NativeReturnTypes.Float, this.vctPosicao.X, this.vctPosicao.Y, this.vctPosicao.Z, vctJogadorPosicao.X, vctJogadorPosicao.Y, vctJogadorPosicao.Z);

            if (fltDistancia > .25)
            {
                this.booColidiu = false;
                return;
            }

            if (this.booColidiu)
            {
                return;
            }

            this.booColidiu = true;

            this.dispararEvtOnColisaoListener();
        }

        private setCor(cor: Cor): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setMarkerColor(this.objHandle, cor.a, cor.r, cor.g, cor.b);
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

        public onUpdate(): void
        {
            this.processarOnUpdate();
        }

        // #region OnColisaoListener

        private _arrEvtOnColisaoListener: Array<OnColisaoListener>;

        private get arrEvtOnColisaoListener(): Array<OnColisaoListener>
        {
            if (this._arrEvtOnColisaoListener != null)
            {
                return this._arrEvtOnColisaoListener;
            }

            this._arrEvtOnColisaoListener = new Array<OnColisaoListener>();

            return this._arrEvtOnColisaoListener;
        }

        public addEvtOnColisaoListener(evtOnColisaoListener: OnColisaoListener): void
        {
            if (evtOnColisaoListener == null)
            {
                return;
            }

            if (this.arrEvtOnColisaoListener.indexOf(evtOnColisaoListener) > -1)
            {
                return;
            }

            if (this.arrEvtOnColisaoListener.length == 0)
            {
                Screen.i.addEvtOnUpdateListener(this);
            }

            this.arrEvtOnColisaoListener.push(evtOnColisaoListener);
        }

        private dispararEvtOnColisaoListener(): void
        {
            Log.i.debug("Disparando colisão.");

            if (this.arrEvtOnColisaoListener.length == 0)
            {
                return;
            }

            this.arrEvtOnColisaoListener.forEach((evt) =>
            {
                if (evt == null)
                {
                    return;
                }

                evt.onColisao();
            });
        }

        public removerEvtOnColisaoListener(evt: OnColisaoListener): void
        {
            if (evt == null)
            {
                return;
            }

            if (this.arrEvtOnColisaoListener.indexOf(evt) == -1)
            {
                return;
            }

            if (this.arrEvtOnColisaoListener.length == 1)
            {
                Screen.i.removerEvtOnUpdateListener(this);
            }

            this.arrEvtOnColisaoListener.splice(this.arrEvtOnColisaoListener.indexOf(evt), 1);
        }

        // #endregion OnColisaoListener

        // #endregion Eventos
    }
}