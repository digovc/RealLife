module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuPrincipal extends MenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: MenuPrincipal;

        public static get i(): MenuPrincipal
        {
            if (MenuPrincipal._i != null)
            {
                return MenuPrincipal._i;
            }

            MenuPrincipal._i = new MenuPrincipal();

            return MenuPrincipal._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.strSubTitulo = "GTA Real Life";
            this.strTitulo = "Menu principal";
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}