/// <reference path="../RealLifeShared.TypeScript/dominio/PedComponenteDominio.ts"/>
/// <reference path="Entity.ts"/>

module RealLife
{
    // #region Importações

    import PedComponenteDominio = RealLifeShared.PedComponenteDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Ped extends Entity
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrObjPedComponente: Array<PedComponenteDominio>;
        private _booAtirando: boolean;
        private _booDirigindo: boolean;
        private _booEmChamas: boolean;
        private _booEscondido: boolean;
        private _booMirando: boolean;
        private _booMorto: boolean;
        private _booParaquedasAberto: boolean;
        private _booQuedaLivre: boolean;
        private _booRecarregando: boolean;
        private _booSubindoEscadas: boolean;
        private _intCabeloCor: number;
        private _intOlhoCor: number;
        private _vctAlvo: Vector3;

        protected get arrObjPedComponente(): Array<PedComponenteDominio>
        {
            if (this._arrObjPedComponente != null)
            {
                return this._arrObjPedComponente;
            }

            this._arrObjPedComponente = new Array<PedComponenteDominio>();

            return this._arrObjPedComponente;
        }

        public get booAtirando(): boolean
        {
            this._booAtirando = this.getBooAtirando();

            return this._booAtirando;
        }

        public get booDirigindo(): boolean
        {
            this._booDirigindo = this.getBooDirigindo();

            return this._booDirigindo;
        }

        public get booEmChamas(): boolean
        {
            this._booEmChamas = this.getBooEmChamas();

            return this._booEmChamas;
        }

        public get booEscondido(): boolean
        {
            this._booEscondido = this.getBooEscondido();

            return this._booEscondido;
        }

        public get booMirando(): boolean
        {
            this._booMirando = this.getBooMirando();

            return this._booMirando;
        }

        public get booMorto(): boolean
        {
            this._booMorto = this.getBooMorto();

            return this._booMorto;
        }

        public get booParaquedasAberto(): boolean
        {
            this._booParaquedasAberto = this.getBooParaquedasAberto();

            return this._booParaquedasAberto;
        }

        public get booQuedaLivre(): boolean
        {
            this._booQuedaLivre = this.getBooQuedaLivre();

            return this._booQuedaLivre;
        }

        public get booRecarregando(): boolean
        {
            this._booRecarregando = this.getBooRecarregando();

            return this._booRecarregando;
        }

        public get booSubindoEscadas(): boolean
        {
            this._booSubindoEscadas = this.getBooSubindoEscadas();

            return this._booSubindoEscadas;
        }

        public get intCabeloCor(): number
        {
            return this._intCabeloCor;
        }

        public set intCabeloCor(intCabeloCor: number)
        {
            this._intCabeloCor = intCabeloCor;

            this.setIntCabeloCor(this._intCabeloCor);
        }

        public get intOlhoCor(): number
        {
            return this._intOlhoCor;
        }

        public set intOlhoCor(intOlhoCor: number)
        {
            this._intOlhoCor = intOlhoCor;

            this.setIntOlhoCor(this._intOlhoCor);
        }

        public get vctAlvo(): Vector3
        {
            this._vctAlvo = this.getVctAlvo();

            return this._vctAlvo;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public addObjPedComponente(objPedComponente: PedComponenteDominio): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (objPedComponente == null)
            {
                return;
            }

            if (this.arrObjPedComponente.indexOf(objPedComponente) > -1)
            {
                return;
            }

            for (var i = 0; i < this.arrObjPedComponente.length; i++)
            {
                if (objPedComponente.enmTipo != this.arrObjPedComponente[i].enmTipo)
                {
                    continue;
                }

                this.removerObjPedComponente(this.arrObjPedComponente[i]);
                break;
            }

            var booValido = API.returnNative("IS_PED_COMPONENT_VARIATION_VALID", Enums.NativeReturnTypes.Bool, this.objHandle, objPedComponente.enmTipo, objPedComponente.intModelo, objPedComponente.intTextura);

            if (!booValido)
            {
                Log.i.debug("Componente inválido: {0}, {1}, {2}", objPedComponente.enmTipo, objPedComponente.intModelo, objPedComponente.intTextura);
                return;
            }

            this.arrObjPedComponente.push(objPedComponente);

            API.callNative("SET_PED_COMPONENT_VARIATION", this.objHandle, objPedComponente.enmTipo, objPedComponente.intModelo, objPedComponente.intTextura, objPedComponente.intPaleta);
        }

        public criar(): void
        {
            //super.criar();

            if (this.objHandle != null)
            {
                return;
            }

            this.objHandle = API.createPed(this.intHash, new Vector3(), 0);

            Log.i.debug("Criando ped {0}.", this.intHash.toString());
        }

        private getBooAtirando(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerShooting(this.objHandle);
        }

        private getBooDirigindo(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerInAnyVehicle(this.objHandle);
        }

        private getBooEmChamas(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerOnFire(this.objHandle);
        }

        private getBooEscondido(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerInCover(this.objHandle);
        }

        private getBooMirando(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerAiming(this.objHandle);
        }

        private getBooMorto(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerDead(this.objHandle);
        }

        private getBooParaquedasAberto(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerParachuting(this.objHandle);
        }

        private getBooQuedaLivre(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerInFreefall(this.objHandle);
        }

        private getBooRecarregando(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerReloading(this.objHandle);
        }

        private getBooSubindoEscadas(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isPlayerOnLadder(this.objHandle);
        }

        private getVctAlvo(): Vector3
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getPlayerAimingPoint(this.objHandle);
        }

        public randomizarAcessorio(): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_PED_RANDOM_PROPS", this.objHandle);
        }

        public randomizarRoupa(): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_PED_RANDOM_COMPONENT_VARIATION", this.objHandle);
        }

        public removerObjPedComponente(objPedComponente: PedComponenteDominio): void
        {
            if (objPedComponente == null)
            {
                return;
            }

            if (this.arrObjPedComponente.indexOf(objPedComponente) < 0)
            {
                return;
            }

            this.arrObjPedComponente.slice(this.arrObjPedComponente.indexOf(objPedComponente), 1);
        }

        private setIntCabeloCor(intCabeloCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("_SET_PED_HAIR_COLOR", this.objHandle, intCabeloCor, 1);
        }

        private setIntOlhoCor(intOlhoCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("_SET_PED_EYE_COLOR", this.objHandle, intOlhoCor);
        }

        public vestirRoupaDefault(): void
        {
            if (this.objHandle)
            {
                return;
            }

            API.callNative("SET_PED_DEFAULT_COMPONENT_VARIATION", this.objHandle);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}