/// <reference path="ObjetoGtaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Entity extends ObjetoGtaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booVisivel: boolean;
        private _vctPosicao: Vector3 = new Vector3();
        private _vctRotacao: Vector3 = new Vector3();

        public get booVisivel(): boolean
        {
            this._booVisivel = this.getBooVisivel();

            return this._booVisivel;
        }

        public set booVisivel(booVisivel: boolean)
        {
            this._booVisivel = booVisivel;

            this.setBooVisivel(this._booVisivel);
        }

        public get vctPosicao(): Vector3
        {
            this._vctPosicao = API.returnNative("GET_ENTITY_COORDS", Enums.NativeReturnTypes.Vector3, this.intHandle, true);

            return this._vctPosicao;
        }

        public set vctPosicao(vctPosicao: Vector3)
        {
            this._vctPosicao = vctPosicao;

            API.callNative("SET_ENTITY_COORDS", this.intHandle, this._vctPosicao.X, this._vctPosicao.Y, this._vctPosicao.Z, true, true, true, true);
        }

        public get vctRotacao(): Vector3
        {
            this._vctRotacao = API.returnNative("GET_ENTITY_ROTATION", this.intHandle, 0);

            return this._vctRotacao;
        }

        public set vctRotacao(vctRotacao: Vector3)
        {
            this._vctRotacao = vctRotacao;

            API.callNative("SET_ENTITY_ROTATION", this.intHandle, this._vctRotacao.X, this._vctRotacao.Y, this._vctRotacao.Z, 0, true);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private getBooVisivel(): boolean
        {
            return API.returnNative("IS_ENTITY_VISIBLE", Enums.NativeReturnTypes.Bool, this.intHandle);
        }

        private setBooVisivel(booVisivel: boolean): void
        {
            API.callNative("SET_ENTITY_VISIBLE", this.intHandle, booVisivel, false);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}