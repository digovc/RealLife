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
        private _booInvencivel: boolean;
        private _booVisivel: boolean = true;
        private _intHash: number = 656641197;
        private _intSaudeMaxima: number;
        private _objHandle: LocalHandle;
        private _vctPosicao: Vector3;
        private _vctRotacao: Vector3;

        public get booDinamico(): boolean
        {
            return this._booDinamico;
        }

        public set booDinamico(booDinamico: boolean)
        {
            if (this._booDinamico == booDinamico)
            {
                return;
            }

            this._booDinamico = booDinamico;

            this.setBooDinamico(this._booDinamico);
        }

        public get booInvencivel(): boolean
        {
            return this._booInvencivel;
        }

        public set booInvencivel(booInvencivel: boolean)
        {
            if (this._booInvencivel == booInvencivel)
            {
                return;
            }

            this._booInvencivel = booInvencivel;

            this.setBooInvencivel(this._booInvencivel);
        }

        public get booVisivel(): boolean
        {
            this._booVisivel = this.getBooVisivel();

            return this._booVisivel;
        }

        public set booVisivel(booVisivel: boolean)
        {
            if (this._booVisivel == booVisivel)
            {
                return;
            }

            this._booVisivel = booVisivel;

            this.setBooVisivel(this._booVisivel);
        }

        public get intSaudeMaxima(): number
        {
            this._intSaudeMaxima = this.getIntSaudeMaxima();

            return this._intSaudeMaxima;
        }

        public set intSaudeMaxima(intSaudeMaxima: number)
        {
            if (this._intSaudeMaxima == intSaudeMaxima)
            {
                return;
            }

            this._intSaudeMaxima = intSaudeMaxima;

            this.setIntSaudeMaxima(this._intSaudeMaxima);
        }

        public get intHash(): number
        {
            return this._intHash;
        }

        public get objHandle(): LocalHandle
        {
            return this._objHandle;
        }

        public set objHandle(objHandle: LocalHandle)
        {
            this._objHandle = objHandle;
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

        public criar(intHash: number): void
        {
            if (this.objHandle != null)
            {
                return;
            }

            this._intHash = intHash;

            // TODO: Criar um enumerado com os objetos disponíveis.
            this.objHandle = API.returnNative("CREATE_OBJECT", Enums.NativeReturnTypes.Handle, this.intHash, 0, 0, 0, false, false, false);

            Log.i.debug("Criando objeto {0}.", this.intHash.toString());
        }

        private getBooVisivel(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("IS_ENTITY_VISIBLE", Enums.NativeReturnTypes.Bool, this.objHandle);
        }

        private getIntSaudeMaxima(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("GET_ENTITY_MAX_HEALTH", Enums.NativeReturnTypes.Int, this.objHandle);
        }

        private getVctPosicao(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("GET_ENTITY_COORDS", Enums.NativeReturnTypes.Vector3, this.objHandle, true);
        }

        private getVctRotacao(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("GET_ENTITY_ROTATION", Enums.NativeReturnTypes.Vector3, this.objHandle, 0);
        }

        private setBooInvencivel(booInvencivel: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_CAN_BE_DAMAGED", this.objHandle, booInvencivel);
        }

        private setBooDinamico(booDinamico: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_DYNAMIC", this.objHandle, booDinamico);
        }

        private setBooVisivel(booVisivel: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_VISIBLE", this.objHandle, booVisivel, false);
        }

        private setIntSaudeMaxima(intSaudeMaxima: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_MAX_HEALTH", this.objHandle, intSaudeMaxima);
        }

        private setVctPosicao(vctPosicao: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_COORDS", this.objHandle, this._vctPosicao.X, this._vctPosicao.Y, this._vctPosicao.Z, true, true, true, true);
        }

        private setVctRotacao(vctRotacao: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_ROTATION", this.objHandle, this._vctRotacao.X, this._vctRotacao.Y, this._vctRotacao.Z, 0, true);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}