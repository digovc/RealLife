/// <reference path="../../../../../RealLifeShared.TypeScript/enumerado/EnmPedHash.ts"/>
/// <reference path="../../../../ui/menu/MenuItem.ts"/>

module RealLife
{
    // #region Importações

    import EnmPedHash = RealLifeShared.EnmPedHash;

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

        constructor()
        {
            super(null, "Sexo");
        }

        // #endregion Construtores

        // #region Métodos

        private alterarAparencia(enmPedHash: EnmPedHash): void
        {
            Jogador.i.alterarSkin(enmPedHash);
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Masculino", null, (() => { this.alterarAparencia(EnmPedHash.FREEMODEMALE01) })));
            arrObjMenuItem.push(new MenuItem(this, "Feminino", null, (() => { this.alterarAparencia(EnmPedHash.FREEMODEFEMALE01) })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}