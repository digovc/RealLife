/// <reference path="Objeto.ts"/>

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

        private _booCongelado: boolean;
        private _booDinamico: boolean;
        private _booExiste: boolean;
        private _booInvencivel: boolean;
        private _booVisivel: boolean = true;
        private _enmTipo: Enums.EntityType;
        private _fltRotacao: number;
        private _intAlpha: number;
        private _intDimensao: number;
        private _intHash: number = 656641197;
        private _intSaude: number;
        private _intSaudeMaxima: number;
        private _objHandle: LocalHandle;
        private _vctPosicao: Vector3;
        private _vctRotacao: Vector3;
        private _vctVelocidade: Vector3;

        public get booCongelado(): boolean
        {
            this._booCongelado = this.getBooCongelado();

            return this._booCongelado;
        }

        public set booCongelado(booCongelado: boolean)
        {
            this._booCongelado = booCongelado;

            this.setBooCongelado(this._booCongelado);
        }

        public get booDinamico(): boolean
        {
            this._booDinamico = this.getBooDinamico();

            return this._booDinamico;
        }

        public set booDinamico(booDinamico: boolean)
        {
            this._booDinamico = booDinamico;

            this.setBooDinamico(this._booDinamico);
        }

        public get booExiste(): boolean
        {
            this._booExiste = this.getBooExiste();

            return this._booExiste;
        }

        public get booInvencivel(): boolean
        {
            this._booInvencivel = this.getBooInvencivel();

            return this._booInvencivel;
        }

        public set booInvencivel(booInvencivel: boolean)
        {
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
            this._booVisivel = booVisivel;

            this.setBooVisivel(this._booVisivel);
        }

        public get enmTipo(): Enums.EntityType
        {
            if (this._enmTipo != null)
            {
                return this._enmTipo;
            }

            this._enmTipo = this.getEnmTipo();

            return this._enmTipo;
        }

        public get fltRotacao(): number
        {
            this._fltRotacao = this.getFltRotacao();

            return this._fltRotacao;
        }

        public set fltRotacao(fltRotacao: number)
        {
            this._fltRotacao = fltRotacao;

            this.setFltRotacao(this._fltRotacao);
        }

        public get intAlpha(): number
        {
            this._intAlpha = this.getIntAlpha();

            return this._intAlpha;
        }

        public set intAlpha(intAlpha: number)
        {
            this._intAlpha = intAlpha;

            this.setIntAlpha(this._intAlpha);
        }

        public get intDimensao(): number
        {
            this._intDimensao = this.getIntDimensao();

            return this._intDimensao;
        }

        public set intDimensao(intDimensao: number)
        {
            this._intDimensao = intDimensao;

            this.setIntDimensao(this._intDimensao);
        }

        protected get intHash(): number
        {
            return this._intHash;
        }

        public get intSaude(): number
        {
            this._intSaude = this.getIntSaude();

            return this._intSaude;
        }

        public set intSaude(intSaude: number)
        {
            this._intSaude = intSaude;

            this.setIntSaude(this._intSaude);
        }

        public get intSaudeMaxima(): number
        {
            this._intSaudeMaxima = this.getIntSaudeMaxima();

            return this._intSaudeMaxima;
        }

        public set intSaudeMaxima(intSaudeMaxima: number)
        {
            this._intSaudeMaxima = intSaudeMaxima;

            this.setIntSaudeMaxima(this._intSaudeMaxima);
        }

        public get objHandle(): LocalHandle
        {
            this._objHandle = this.getObjHandle();

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

        public get vctVelocidade(): Vector3
        {
            this._vctVelocidade = this.getVctVelocidade();

            return this._vctVelocidade;
        }

        public set vctVelocidade(vctVelocidade: Vector3)
        {
            if (UtilsRealLife.getBooVctIgual(this._vctVelocidade, vctVelocidade))
            {
                return;
            }

            this._vctVelocidade = vctVelocidade;

            this.setVctVelocidade(this._vctVelocidade);
        }

        // #endregion Atributos

        // #region Construtores

        constructor(intHash: number = 656641197)
        {
            super();

            this._intHash = intHash;
        }

        // #endregion Construtores

        // #region Métodos

        public ajustarZ(): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("PLACE_OBJECT_ON_GROUND_PROPERLY", this.objHandle);
        }

        public anexarEntityBone(objEntity: Entity, intBone: number, vctOffSet: Vector3 = new Vector3(), vctRotacaoOffset: Vector3 = new Vector3()): void
        {
            if (objEntity == null)
            {
                return;
            }

            if (objEntity.objHandle == null)
            {
                return;
            }

            if (this.objHandle == null)
            {
                return;
            }

            API.attachEntity(this.objHandle, objEntity.objHandle, intBone.toString(), vctOffSet, vctRotacaoOffset);
        }

        public criar(): void
        {
            if (this.objHandle != null)
            {
                return;
            }

            // TODO: Criar um enumerado com os objetos disponíveis.
            this.objHandle = API.returnNative("CREATE_OBJECT", Enums.NativeReturnTypes.Handle, this.intHash, 0, 0, 0, false, false, false);

            Log.i.debug("Criando objeto {0}.", this.intHash.toString());
        }

        public desanexar(): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.detachEntity(this.objHandle);
        }

        public destruir(): void
        {
            super.destruir();

            if (this.objHandle == null)
            {
                return;
            }

            API.deleteEntity(this.objHandle);
        }

        private getBooCongelado(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityCollisionless(this.objHandle);
        }

        private getBooDinamico(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityCollisionless(this.objHandle);
        }

        private getBooExiste(): boolean
        {
            if (this.objHandle)
            {
                return false;
            }

            return API.doesEntityExist(this.objHandle);
        }

        private getBooVisivel(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("IS_ENTITY_VISIBLE", Enums.NativeReturnTypes.Bool, this.objHandle);
        }

        private getBooInvencivel(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityInvincible(this.objHandle);
        }

        private getEnmTipo(): Enums.EntityType
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityType(this.objHandle);
        }

        private getFltRotacao(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("GET_ENTITY_HEADING", Enums.NativeReturnTypes.Float, this.objHandle);
        }

        private getIntAlpha(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityTransparency(this.objHandle);
        }

        private getIntDimensao(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityDimension(this.objHandle);
        }

        private getIntSaude(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("GET_ENTITY_HEALTH", Enums.NativeReturnTypes.Int, this.objHandle);
        }

        private getIntSaudeMaxima(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.returnNative("GET_ENTITY_MAX_HEALTH", Enums.NativeReturnTypes.Int, this.objHandle);
        }

        protected getObjHandle(): LocalHandle
        {
            return this._objHandle;
        }

        private getVctPosicao(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityPosition(this.objHandle);
        }

        private getVctRotacao(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityRotation(this.objHandle);
        }

        private getVctVelocidade(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEntityVelocity(this.objHandle);
        }

        public setColisao(booPassivelDeColisao: boolean, booFisicaManter: boolean = true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_COLLISION", this.objHandle, booPassivelDeColisao, booFisicaManter);
        }

        private setBooCongelado(booCongelado: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setEntityPositionFrozen(this.objHandle, booCongelado);
        }

        private setBooInvencivel(booInvencivel: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setEntityInvincible(this.objHandle, booInvencivel);
        }

        private setBooDinamico(booDinamico: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setEntityCollissionless(this.objHandle, !booDinamico);
        }

        private setBooVisivel(booVisivel: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_VISIBLE", this.objHandle, booVisivel, false);
        }

        private setFltRotacao(fltRotacao: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_ENTITY_HEADING", this.objHandle, fltRotacao);
        }

        private setIntAlpha(intAlpha: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (intAlpha < 0)
            {
                intAlpha = 0;
            }

            if (intAlpha > 255)
            {
                intAlpha = 255;
            }

            API.setEntityTransparency(this.objHandle, intAlpha);
        }

        private setIntDimensao(intDimensao: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setEntityDimension(this.objHandle, intDimensao);
        }

        private setIntSaude(intSaude: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (intSaude < 0)
            {
                intSaude = 0;
            }

            API.callNative("SET_ENTITY_HEALTH", this.objHandle, intSaude);
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

            if (vctPosicao == null)
            {
                return;
            }

            Log.i.debug("Entity posição: {0}, {1}, {2}", vctPosicao.X.toString(), vctPosicao.Y.toString(), vctPosicao.Z.toString());

            API.setEntityPosition(this.objHandle, vctPosicao);
        }

        private setVctRotacao(vctRotacao: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (vctRotacao == null)
            {
                return;
            }

            Log.i.debug("Entity rotação: {0}, {1}, {2}", vctRotacao.X.toString(), vctRotacao.Y.toString(), vctRotacao.Z.toString());

            API.setEntityRotation(this.objHandle, vctRotacao);
        }

        private setVctVelocidade(vctVelocidade: Vector3): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (vctVelocidade == null)
            {
                return;
            }

            API.setEntityVelocity(this.objHandle, vctVelocidade);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}