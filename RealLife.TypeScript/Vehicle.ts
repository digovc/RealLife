/// <reference path="Entity.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Vehicle extends Entity
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booLigado: boolean;
        private _booSirene: boolean;
        private _fltRpm: number;
        private _objHandleCavalinho: LocalHandle;
        private _objHandleTrailer: LocalHandle;
        private _strPlaca: string;

        public get booLigado(): boolean
        {
            this._booLigado = this.getBooLigado();

            return this._booLigado;
        }

        public set booLigado(booLigado: boolean)
        {
            this._booLigado = booLigado;


        }

        public get booSirene(): boolean
        {
            this._booSirene = this.getBooSirene();

            return this._booSirene;
        }

        public get fltRpm(): number
        {
            this._fltRpm = this.getFltRpm();

            return this._fltRpm;
        }

        public get objHandleCavalinho(): LocalHandle
        {
            this._objHandleCavalinho = this.getObjHandleCavalinho();

            return this._objHandleCavalinho;
        }

        public get objHandleTrailer(): LocalHandle
        {
            this._objHandleTrailer = this.getObjHandleTrailer();

            return this._objHandleTrailer;
        }

        public get strPlaca(): string
        {
            this._strPlaca = this.getStrPlaca();

            return this._strPlaca;
        }

        public set strPlaca(strPlaca: string)
        {
            this._strPlaca = strPlaca;

            this.setStrPlaca(this._strPlaca);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public alterarJanelaCondicao(intJanela: number, booQuebrada: true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.breakVehicleWindow(this.objHandle, intJanela, booQuebrada);
        }

        public alterarPneuCondicao(intPneu: number, booEstourar: true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.popVehicleTyre(this.objHandle, intPneu, booEstourar);
        }

        public alterarPortaCondicao(intPorta: number, booQuebrada: true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.breakVehicleTyre(this.objHandle, intPorta, booQuebrada);
        }

        public criar(): void
        {
            super.criar();

            if (this.objHandle != null)
            {
                return;
            }

            this.objHandle = API.createVehicle(this.intHash, new Vector3(), 0);

            Log.i.debug("Criando veiculo {0}.", this.intHash.toString());
        }

        public explodir(): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.explodeVehicle(this.objHandle);
        }

        public getBooJanelaQuebrada(intJanela: number): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isVehicleWindowBroken(this.objHandle, intJanela);
        }

        private getBooLigado(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getEngineStatus(this.objHandle);
        }

        public getBooPneuEstourado(intPneu: number): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isVehicleTyrePopped(this.objHandle, intPneu);
        }

        public getBooPortaQuebrada(intPorta: number): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.isVehicleDoorBroken(this.objHandle, intPorta);
        }

        private getBooSirene(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleSirenState(this.objHandle);
        }

        private getFltRpm(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleRPM(this.objHandle);
        }

        private getObjHandleCavalinho(): LocalHandle
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleTraileredBy(this.objHandle);
        }

        private getObjHandleTrailer(): LocalHandle
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleTrailer(this.objHandle);
        }

        private getStrPlaca(): string
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleNumberPlate(this.objHandle);
        }

        private setStrPlaca(strPlaca: string): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleNumberPlate(this.objHandle, strPlaca);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}