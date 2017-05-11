module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Gps extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Gps;

        public static get i(): Gps
        {
            if (Gps._i != null)
            {
                return Gps._i;
            }

            Gps._i = new Gps();

            return Gps._i;
        }

        private _booDestinoMarcado: boolean;
        private _vctDestino: Vector3;

        public get booDestinoMarcado(): boolean
        {
            this._booDestinoMarcado = API.isWaypointSet();

            return this._booDestinoMarcado;
        }

        public get vctDestino(): Vector3
        {
            this._vctDestino = API.getWaypointPosition();

            return this._vctDestino;
        }

        public set vctDestino(vctDestino: Vector3)
        {
            this._vctDestino = vctDestino;

            this.setVctDestino(this._vctDestino);
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public removerDestino(): void
        {
            if (!this.booDestinoMarcado)
            {
                return;
            }

            API.removeWaypoint();
        }

        private setVctDestino(vctDestino: Vector3): void
        {
            if (vctDestino == null)
            {
                return;
            }

            API.setWaypoint(vctDestino.X, vctDestino.Y);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}