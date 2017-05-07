module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemList extends MenuItemBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrStrItem: Array<string>;

        private get arrStrItem(): Array<string>
        {
            return this._arrStrItem;
        }

        private set arrStrItem(arrStrItem: Array<string>)
        {
            this._arrStrItem = arrStrItem;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItem, strTitulo: string, arrStrItem: Array<string>, strDescricao: string = null, fnc: Function = null)
        {
            super(objMenuItemPai, strTitulo, strDescricao, fnc);

            this.arrStrItem = arrStrItem;
        }

        // #endregion Construtores

        // #region Métodos

        protected chamarFnc(): void
        {
            this.fnc((this.objUiMenuItem as NativeUI.UIMenuListItem).Index);
        }

        protected getObjUiMenuItem(): NativeUI.UIMenuListItem
        {
            return API.createListItem(this.strTitulo, this.strDescricao, (this.arrStrItem as any), 0);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}