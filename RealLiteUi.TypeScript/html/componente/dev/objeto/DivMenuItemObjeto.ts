/// <reference path="../../../../../RealLifeShared.TypeScript/dominio/EntityDominio.ts"/>
/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações

    import EntityDominio = RealLifeShared.EntityDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemObjeto extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objEntity: EntityDominio;

        private get objEntity(): EntityDominio
        {
            if (this._objEntity != null)
            {
                return this._objEntity;
            }

            this._objEntity = new EntityDominio();

            return this._objEntity;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Objeto");
        }

        // #endregion Construtores

        // #region Métodos

        private alterarHash(divMenuItem: DivMenuItem): void
        {

        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            arrDivMenuItem.push(new DivMenuItem("Hash", ((divMenuItem: DivMenuItem) => { this.alterarHash(divMenuItem); }), "656641197"));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}