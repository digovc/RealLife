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

        private alterarAparencia(enmPedHash: EnmPedSkin): void
        {
            Jogador.i.enmPedSkin = enmPedHash;

            Jogador.i.randomizarAparencia();
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.strSubTitulo = "Teste";
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.inicializarArrObjMenuItem(arrObjMenuItem);

            arrObjMenuItem.push(new MenuItem(this, "Masculino", null, (() => { this.alterarAparencia(EnmPedSkin.FREEMODEMALE01) })));
            arrObjMenuItem.push(new MenuItem(this, "Feminino", null, (() => { this.alterarAparencia(EnmPedSkin.FREEMODEFEMALE01) })));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}