/// <reference path="../../../../ui/menu/MenuBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuPersonagemEditor extends MenuBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _objEtapa: Etapa002PersonagemEditorEdicao;

        public get objEtapa(): Etapa002PersonagemEditorEdicao
        {
            return this._objEtapa;
        }

        public set objEtapa(objEtapa: Etapa002PersonagemEditorEdicao)
        {
            this._objEtapa = objEtapa;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(objEtapa: Etapa002PersonagemEditorEdicao)
        {
            super("Personagem");

            this.objEtapa = objEtapa;
        }

        // #endregion Construtores

        // #region Métodos

        private alterarAparencia(): void
        {
            Jogador.i.randomizarAparencia();

            AppRealLife.i.objCameraAtual.interpolar((this.objEtapa.objScript as ScriptPersonagemEditor).objCameraCabeca, .150);
        }

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            arrObjMenuItem.push(new MenuItemSexo(this));
            arrObjMenuItem.push(new MenuItem(this, "Alterar aparência", null, (() => { this.alterarAparencia(); })));
            arrObjMenuItem.push(new MenuItemCabeca(this));
            arrObjMenuItem.push(new MenuItemRoupa(this));

            arrObjMenuItem.push(new MenuItem(this, "Salvar", null, (() => { this.salvar(); })));
        }

        public montarMenu(arrObjMenuItem: Array<MenuItemBase>): void
        {
            super.montarMenu(arrObjMenuItem);

            if (this.arrObjMenuItem != arrObjMenuItem)
            {
                return;
            }

            (this.objEtapa.objScript as ScriptPersonagemEditor).objCameraPerto.booAtiva = true;
        }

        private salvar(): void
        {
            this.objEtapa.salvar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}