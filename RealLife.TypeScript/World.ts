/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

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

        // #region Métodos

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

        public setHora(intHora: number, intMinuto: number): void
        {
            API.setTime(intHora, intMinuto);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}