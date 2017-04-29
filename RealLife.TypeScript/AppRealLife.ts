/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppRealLife extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: AppRealLife;

        public static get i(): AppRealLife
        {
            if (AppRealLife._i != null)
            {
                return AppRealLife._i;
            }

            AppRealLife._i = new AppRealLife();

            return AppRealLife._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected finalizar(): void
        {
            super.finalizar();

            PagLogin.i.iniciar();
        }

        protected inicializar(): void
        {
            super.inicializar();

            Jogador.i.iniciar();

            PagDev.i.iniciar();

            //PagLogin.i.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}