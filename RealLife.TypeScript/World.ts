/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class World extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: World;

        public static get i(): World
        {
            if (World._i != null)
            {
                return World._i;
            }

            World._i = new World();

            return World._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region M�todos

        public resetarClima(): void
        {
            API.resetWeather();
        }

        public resetarHora(): void
        {
            API.resetTime();
        }

        public setEnmClima(enmClima: Enums.Weather): void
        {
            API.setWeather(enmClima);
        }

        public setHora(intHora: number, intMinuto: number = 0): void
        {
            API.setTime(intHora, intMinuto);
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}