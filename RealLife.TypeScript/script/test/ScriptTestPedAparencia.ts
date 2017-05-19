/// <reference path="../../../RealLifeShared.TypeScript/dominio/BlendDataDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/dominio/PedComponenteDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmPedSkin.ts"/>
/// <reference path="../ScriptBase.ts"/>

module RealLife
{
    // #region Importações

    import BlendDataDominio = RealLifeShared.BlendDataDominio;
    import EnmPedSkin = RealLifeShared.EnmPedSkin;
    import PedComponenteDominio = RealLifeShared.PedComponenteDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ScriptTestPedAparencia extends ScriptTestBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            Jogador.i.addObjPedComponente(new PedComponenteDominio(RealLifeShared.PedComponenteDominio_EnmTipo.HAIR, 17));

            Jogador.i.vestirRoupaDefault();
        }

        protected processarOnKeyUp(arg: System.Windows.Forms.KeyEventArgs): void
        {
            switch (arg.KeyCode)
            {
                case Keys.Up:
                    Jogador.i.objBlendData = UtilsRealLife.getObjBlendDataRandomico();
                    return;
            }
        }

        // #endregion Métodos

        // #region Eventos

        // #endregion Eventos
    }
}