module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuItemCheckBox extends MenuItemBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booMarcado: boolean;

        private get booMarcado(): boolean
        {
            return this._booMarcado;
        }

        private set booMarcado(booMarcado: boolean)
        {
            this._booMarcado = booMarcado;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objMenuItemPai: MenuItem, strTitulo: string, booMarcado: boolean = false, strDescricao: string = null, fnc: Function = null)
        {
            super(objMenuItemPai, strTitulo, strDescricao, fnc);

            this.booMarcado = booMarcado;
        }

        // #endregion Construtores

        // #region Métodos

        protected chamarFnc(): void
        {
            this.fnc((this.objUiMenuItem as NativeUI.UIMenuCheckboxItem).Checked);
        }

        protected getObjUiMenuItem(): NativeUI.UIMenuCheckboxItem
        {
            return API.createCheckboxItem(this.strTitulo, this.strDescricao, this.booMarcado);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}