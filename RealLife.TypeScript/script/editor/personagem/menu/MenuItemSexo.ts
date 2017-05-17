/// <reference path="../../../../../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações

    import EnmPedSkin = RealLifeShared.EnmPedSkin;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemSexo extends MenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores

        constructor(objMenuPai: MenuPersonagemEditor)
        {
            super(objMenuPai, "Sexo");
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Masculino", null, (() => { Jogador.i.booMasculino = true; })));
            arrObjMenuItem.push(new MenuItem(this, "Feminino", null, (() => { Jogador.i.booMasculino = false; })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}