/// <reference path="../../../../RealLifeShared.TypeScript/enumerado/EnmKey.ts"/>
/// <reference path="../menu/DivMenuBase.ts"/>

module RealLifeUi
{
    // #region Importações

    import EnmKey = RealLifeShared.EnmKey;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuDev extends DivMenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores

        // #endregion Construtores

        // #region Métodos

        private addMarca(): void
        {
            ClientRealLife.i.executar(PagDev.name, "addMarca");
        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            arrDivMenuItem.push(new DivMenuItem("Camera livre", (() => { this.ligarCameraLivre(); })));
            arrDivMenuItem.push(new DivMenuItemObjeto());
            arrDivMenuItem.push(new DivMenuItem("Marca", (() => { this.addMarca(); })));
            arrDivMenuItem.push(new DivMenuItemAudio());
        }

        private ligarCameraLivre(): void
        {
            ClientRealLife.i.executar(PagDev.name, "ligarCameraLivre");
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}