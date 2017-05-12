/// <reference path="../RealLifeShared.TypeScript/enumerado/EnmVehicleComponente.ts"/>
/// <reference path="Entity.ts"/>

module RealLife
{
    // #region Importações

    import EnmVehicleComponente = RealLifeShared.EnmVehicleComponente;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Vehicle extends Entity
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booLigado: boolean;
        private _booLuzEspecial: boolean;
        private _booPneuAProvaDeBala: boolean;
        private _booSirene: boolean;
        private _fltMotorForca: number;
        private _fltMotorTorque: number;
        private _fltRpm: number;
        private _intCorPerolizada: number;
        private _intCorPrincipal: number;
        private _intCorSecundaria: number;
        private _intJanelaCor: number;
        private _intPainelCor: number;
        private _intPlacaModelo: number;
        private _intRodaCor: number;
        private _intRodaModelo: number;
        private _intTrimColor: number;
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

            this.setBooLigado(this._booLigado);
        }

        public get booLuzEspecial(): boolean
        {
            this._booLuzEspecial = this.getBooLuzEspecial();

            return this._booLuzEspecial;
        }

        public set booLuzEspecial(booLuzEspecial: boolean)
        {
            this._booLuzEspecial = booLuzEspecial;

            this.setBooLuzEspecial(this._booLuzEspecial);
        }

        public get booPneuAProvaDeBala(): boolean
        {
            this._booPneuAProvaDeBala = this.getBooPneuAProvaDeBala();

            return this._booPneuAProvaDeBala;
        }

        public set booPneuAProvaDeBala(booPneuAProvaDeBala: boolean)
        {
            this._booPneuAProvaDeBala = booPneuAProvaDeBala;

            this.setBooPneuAProvaDeBala(this._booPneuAProvaDeBala);
        }

        public get booSirene(): boolean
        {
            this._booSirene = this.getBooSirene();

            return this._booSirene;
        }

        public set booSirene(booSirene: boolean)
        {
            this._booSirene = booSirene;

            this.setBooSirene(this._booSirene);
        }

        public get fltMotorForca(): number
        {
            this._fltMotorForca = this.getFltMotorForca();

            return this._fltMotorForca;
        }

        public set fltMotorForca(fltMotorForca: number)
        {
            this._fltMotorForca = fltMotorForca;

            this.setFltMotorForca(this._fltMotorForca);
        }

        public get fltMotorTorque(): number
        {
            this._fltMotorTorque = this.getFltMotorTorque();

            return this._fltMotorTorque;
        }

        public set fltMotorTorque(fltMotorTorque: number)
        {
            this._fltMotorTorque = fltMotorTorque;

            this.setFltMotorTorque(this._fltMotorTorque);
        }

        public get fltRpm(): number
        {
            this._fltRpm = this.getFltRpm();

            return this._fltRpm;
        }

        public get intCorPerolizada(): number
        {
            this._intCorPerolizada = this.getIntCorPerolizada();

            return this._intCorPerolizada;
        }

        public set intCorPerolizada(intCorPerolizada: number)
        {
            this._intCorPerolizada = intCorPerolizada;

            this.setIntCorPerolizada(this._intCorPerolizada);
        }

        public get intCorPrincipal(): number
        {
            this._intCorPrincipal = this.getIntCorPrincipal();

            return this._intCorPrincipal;
        }

        public set intCorPrincipal(intCorPrincipal: number)
        {
            this._intCorPrincipal = intCorPrincipal;

            this.setIntCorPrincipal(this._intCorPrincipal);
        }

        public get intCorSecundaria(): number
        {
            this._intCorSecundaria = this.getIntCorSecundaria();

            return this._intCorSecundaria;
        }

        public set intCorSecundaria(intCorSecundaria: number)
        {
            this._intCorSecundaria = intCorSecundaria;

            this.setIntCorSecundaria(this._intCorSecundaria);
        }

        public get intJanelaCor(): number
        {
            this._intJanelaCor = this.getIntJanelaCor();

            return this._intJanelaCor;
        }

        public set intJanelaCor(intJanelaCor: number)
        {
            this._intJanelaCor = intJanelaCor;

            this.setIntJanelaCor(this._intJanelaCor);
        }

        public get intPainelCor(): number
        {
            this._intPainelCor = this.getIntPainelCor();

            return this._intPainelCor;
        }

        public set intPainelCor(intPainelCor: number)
        {
            this._intPainelCor = intPainelCor;

            this.setIntPainelCor(this._intPainelCor);
        }

        public get intPlacaModelo(): number
        {
            this._intPlacaModelo = this.getIntPlacaModelo();

            return this._intPlacaModelo;
        }

        public set intPlacaModelo(intPlacaModelo: number)
        {
            this._intPlacaModelo = intPlacaModelo;

            this.setIntPlacaModelo(this._intPlacaModelo);
        }

        public get intRodaCor(): number
        {
            this._intRodaCor = this.getIntRodaCor();

            return this._intRodaCor;
        }

        public set intRodaCor(intRodaCor: number)
        {
            this._intRodaCor = intRodaCor;

            this.setIntRodaCor(this._intRodaCor);
        }

        public get intRodaModelo(): number
        {
            this._intRodaModelo = this.getIntRodaModelo();

            return this._intRodaModelo;
        }

        public set intRodaModelo(intRodaModelo: number)
        {
            this._intRodaModelo = intRodaModelo;

            this.setIntRodaModelo(this._intRodaModelo);
        }

        public get intTrimColor(): number
        {
            this._intTrimColor = this.getIntTrimColor();

            return this._intTrimColor;
        }

        public set intTrimColor(intTrimColor: number)
        {
            this._intTrimColor = intTrimColor;

            this.setIntTrimColor(this._intTrimColor);
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

        public criar(): void
        {
            super.criar();

            if (this.objHandle != null)
            {
                return;
            }

            this.objHandle = API.createVehicle(this.intHash, new Vector3(), 0);

            Log.i.debug("Criando veículo {0}.", this.intHash.toString());
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

        private getBooLuzEspecial(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleSpecialLightStatus(this.objHandle);
        }

        public getBooNeonLigado(intSlot: number): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleNeonState(this.objHandle, intSlot);
        }

        public getBooPneuAProvaDeBala(): boolean
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleBulletproofTyres(this.objHandle);
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

        private getFltMotorForca(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleEnginePowerMultiplier(this.objHandle);
        }

        private getFltMotorTorque(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleEngineTorqueMultiplier(this.objHandle);
        }

        private getFltRpm(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleRPM(this.objHandle);
        }

        public getIntComponenteModelo(enmComponente: EnmVehicleComponente): number
        {
            if (this.objHandle == null)
            {
                return;
            }

            return API.getVehicleMod(this.objHandle, enmComponente);
        }

        private getIntCorPerolizada(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehiclePearlescentColor(this.objHandle);
        }

        private getIntCorPrincipal(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehiclePrimaryColor(this.objHandle);
        }

        private getIntCorSecundaria(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleSecondaryColor(this.objHandle);
        }

        private getIntJanelaCor(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleWindowTint(this.objHandle);
        }

        private getIntPainelCor(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleDashboardColor(this.objHandle);
        }

        private getIntPlacaModelo(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleNumberPlateStyle(this.objHandle);
        }

        private getIntRodaCor(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleWheelColor(this.objHandle);
        }

        private getIntRodaModelo(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleWheelType(this.objHandle);
        }

        private getIntTrimColor(): number
        {
            if (this.objHandle == null)
            {
                return null;
            }

            return API.getVehicleTrimColor(this.objHandle);
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

        public removerComponente(enmComponente: EnmVehicleComponente): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.removeVehicleMod(this.objHandle, enmComponente);
        }

        public setBooJanelaQuebrada(intJanela: number, booQuebrada: true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.breakVehicleWindow(this.objHandle, intJanela, booQuebrada);
        }

        private setBooLigado(booLigado: boolean)
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleEngineStatus(this.objHandle, booLigado);
        }

        private setBooLuzEspecial(booLuzEspecial: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleSpecialLightStatus(this.objHandle, booLuzEspecial);
        }

        public setBooNeonLigado(intSlot: number, booLigado: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleNeonState(this.objHandle, intSlot, booLigado);
        }

        private setBooPneuAProvaDeBala(booPneuAProvaDeBala: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleBulletproofTyres(this.objHandle, booPneuAProvaDeBala);
        }

        public setBooPneuEstourado(intPneu: number, booEstourar: true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.popVehicleTyre(this.objHandle, intPneu, booEstourar);
        }

        public setBooPortaQuebrada(intPorta: number, booQuebrada: true): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.breakVehicleTyre(this.objHandle, intPorta, booQuebrada);
        }

        private setBooSirene(booSirene: boolean): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.callNative("SET_VEHICLE_SIREN", this.objHandle, booSirene);
        }

        public setCorNeon(corNeon: Cor): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (corNeon == null)
            {
                return;
            }

            API.setVehicleNeonColor(this.objHandle, corNeon.r, corNeon.g, corNeon.b);
        }

        public setCorPneuFumaca(corPneuFumaca: Cor): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            if (corPneuFumaca == null)
            {
                return;
            }

            API.setVehicleTyreSmokeColor(this.objHandle, corPneuFumaca.r, corPneuFumaca.g, corPneuFumaca.b);
        }

        public setEnmComponente(enmComponente: EnmVehicleComponente, intComponenteModelo: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleMod(this.objHandle, enmComponente, intComponenteModelo);
        }

        private setFltMotorForca(fltMotorForca: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleEnginePowerMultiplier(this.objHandle, fltMotorForca);
        }

        private setFltMotorTorque(fltMotorTorque: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleEngineTorqueMultiplier(this.objHandle, fltMotorTorque);
        }

        private setIntCorPerolizada(intCorPerolizada: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehiclePearlescentColor(this.objHandle, intCorPerolizada);
        }

        private setIntCorPrincipal(intCorPrincipal: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehiclePrimaryColor(this.objHandle, intCorPrincipal);
        }

        private setIntCorSecundaria(intCorSecundaria: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleSecondaryColor(this.objHandle, intCorSecundaria);
        }

        private setIntJanelaCor(intJanelaCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleWindowTint(this.objHandle, intJanelaCor);
        }

        private setIntPainelCor(intPainelCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleDashboardColor(this.objHandle, intPainelCor);
        }

        private setIntPlacaModelo(intPlacaModelo: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleNumberPlateStyle(this.objHandle, intPlacaModelo);
        }

        private setIntTrimColor(intTrimColor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleTrimColor(this.objHandle, intTrimColor);
        }

        private setIntRodaCor(intRodaCor: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleWheelColor(this.objHandle, intRodaCor);
        }

        private setIntRodaModelo(intRodaModelo: number): void
        {
            if (this.objHandle == null)
            {
                return;
            }

            API.setVehicleWheelType(this.objHandle, intRodaModelo);
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