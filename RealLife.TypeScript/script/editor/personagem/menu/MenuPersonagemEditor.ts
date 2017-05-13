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

        private get objEtapa(): Etapa002PersonagemEditorEdicao
        {
            return this._objEtapa;
        }

        private set objEtapa(objEtapa: Etapa002PersonagemEditorEdicao)
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

        protected inicializarArrObjMenuItem(arrObjMenuItem: Array<MenuItemBase>): void
        {
            arrObjMenuItem.push(new MenuItemSexo());
            arrObjMenuItem.push(new MenuItem(null, "Mudar aparência", null, (() => { Jogador.i.randomizarAparencia(); })));
            arrObjMenuItem.push(new MenuItemCabeca());
            arrObjMenuItem.push(new MenuItemRoupa());

            arrObjMenuItem.push(new MenuItem(null, "Salvar", null, (() => { this.salvar(); })));
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