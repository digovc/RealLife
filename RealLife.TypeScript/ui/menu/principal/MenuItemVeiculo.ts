module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemVeiculo extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Sub-opção 1"));
            arrObjMenuItem.push(new MenuItem(this, "Sub-opção 2"));
            arrObjMenuItem.push(new MenuItem(this, "Sub-opção 3"));
            arrObjMenuItem.push(new MenuItem(this, "Sub-opção 4"));
            arrObjMenuItem.push(new MenuItem(this, "Sub-opção 5"));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}