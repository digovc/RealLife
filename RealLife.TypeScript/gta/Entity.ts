/// <reference path="../Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Entity extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booDinamico: boolean;
        private _booVisivel: boolean;
        private _intHandle: number;
        private _intHash: number = 656641197;
        private _vctPosicao: Vector3;
        private _vctRotacao: Vector3;

        public get booDinamico(): boolean
        {
            return this._booDinamico;
        }

        public set booDinamico(booDinamico: boolean)
        {
            this._booDinamico = booDinamico;
        }

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

        public get intHandle(): number
        {
            return this._intHandle;
        }

        public set intHandle(intHandle: number)
        {
            this._intHandle = intHandle;
        }

        public get intHash(): number
        {
            return this._intHash;
        }

        public set intHash(intHash: number)
        {
            this._intHash = intHash;
        }

        public get vctPosicao(): Vector3
        {
            this._vctPosicao = this.getVctPosicao();

            return this._vctPosicao;
        }

        public set vctPosicao(vctPosicao: Vector3)
        {
            this._vctPosicao = vctPosicao;

            this.setVctPosicao(this._vctPosicao);
        }

        public get vctRotacao(): Vector3
        {
            this._vctRotacao = this.getVctRotacao();

            return this._vctRotacao;
        }

        public set vctRotacao(vctRotacao: Vector3)
        {
            this._vctRotacao = vctRotacao;

            this.setVctRotacao(this._vctRotacao);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public criar(): void
        {
            if (this.intHandle > 0)
            {
                return;
            }

            if (this.intHash < 1)
            {
                throw 'A propriedade "intHash" não pode estar vazia.';
            }

            this.intHandle = API.returnNative("CREATE_OBJECT", Enums.NativeReturnTypes.Handle, this.intHash, 0, 0, 0, false, false, false);

            Log.i.debug("Criando objeto {0}.", this.intHash.toString());
        }

        private getBooVisivel(): boolean
        {
            if (this.intHandle < 1)
            {
                return;
            }

            return API.returnNative("IS_ENTITY_VISIBLE", Enums.NativeReturnTypes.Bool, this.intHandle);
        }

        private getVctPosicao(): Vector3
        {
            if (this.intHandle < 1)
            {
                return;
            }

            return API.returnNative("GET_ENTITY_COORDS", Enums.NativeReturnTypes.Vector3, this.intHandle, true);
        }

        private getVctRotacao(): Vector3
        {
            if (this.intHandle < 1)
            {
                return;
            }

            return API.returnNative("GET_ENTITY_ROTATION", Enums.NativeReturnTypes.Vector3, this.intHandle, 0);
        }

        private setBooVisivel(booVisivel: boolean): void
        {
            if (this.intHandle < 1)
            {
                return;
            }

            API.callNative("SET_ENTITY_VISIBLE", this.intHandle, booVisivel, false);
        }

        private setVctPosicao(vctPosicao: Vector3): void
        {
            if (this.intHandle < 1)
            {
                return null;
            }

            API.callNative("SET_ENTITY_COORDS", this.intHandle, this._vctPosicao.X, this._vctPosicao.Y, this._vctPosicao.Z, true, true, true, true);
        }

        private setVctRotacao(vctRotacao: Vector3): void
        {
            if (this.intHandle < 1)
            {
                return null;
            }

            API.callNative("SET_ENTITY_ROTATION", this.intHandle, this._vctRotacao.X, this._vctRotacao.Y, this._vctRotacao.Z, 0, true);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}