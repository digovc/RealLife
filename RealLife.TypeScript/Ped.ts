/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmPedComponente.ts"/>
/// <reference path="Entity.ts"/>

module RealLife
{
    // #region Importações

    import EnmPedComponente = RealLifeShared.EnmPedComponente;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Ped extends Entity
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

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
        private _intCabelo: number;
        private _intCabeloCor: number;
        private _intCalca: number;
        private _intCalcado: number;
        private _intCamisa: number;
        private _intOlhoCor: number;
        private _intRosto: number;
        private _vctAlvo: Vector3;

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

        public get intCabelo(): number
        {
            return this._intCabelo;
        }

        public set intCabelo(intCabelo: number)
        {
            this._intCabelo = intCabelo;

            this.setIntCabelo(this._intCabelo);
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

        public get intCalca(): number
        {
            return this._intCalca;
        }

        public set intCalca(intCalca: number)
        {
            this._intCalca = intCalca;

            this.setIntCalca(this._intCalca);
        }

        public get intCalcado(): number
        {
            return this._intCalcado;
        }

        public set intCalcado(intCalcado: number)
        {
            this._intCalcado = intCalcado;

            this.setIntCalcado(this._intCalcado);
        }

        public get intCamisa(): number
        {
            return this._intCamisa;
        }

        public set intCamisa(intCamisa: number)
        {
            this._intCamisa = intCamisa;

            this.setIntCamisa(this._intCamisa);
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

        public get intRosto(): number
        {
            return this._intRosto;
        }

        public set intRosto(intRosto: number)
        {
            this._intRosto = intRosto;

            this.setIntRosto(this._intRosto);
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

        private setIntCabelo(intCabelo: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setPlayerClothes(this.objHandle, EnmPedComponente.HAIR, intCabelo, 0);
        }

        private setIntCabeloCor(intCabeloCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("_SET_PED_HAIR_COLOR", this.objHandle, intCabeloCor, 1);
        }

        private setIntCalca(intCalca: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setPlayerClothes(this.objHandle, EnmPedComponente.LEGS, intCalca, 0);
        }

        private setIntCalcado(intCalcado: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setPlayerClothes(this.objHandle, EnmPedComponente.FEET, intCalcado, 0);
        }

        private setIntCamisa(intCamisa: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setPlayerClothes(this.objHandle, EnmPedComponente.TORSO, intCamisa, 0);
        }

        private setIntOlhoCor(intOlhoCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("_SET_PED_EYE_COLOR", this.objHandle, intOlhoCor);
        }

        private setIntRosto(intRosto: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setPlayerClothes(this.objHandle, EnmPedComponente.FACE, intRosto, 0);
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