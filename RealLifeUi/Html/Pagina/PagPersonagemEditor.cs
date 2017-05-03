using RealLifeUi.Html.Componente.Editor.Personagem;

namespace RealLifeUi.Html.Pagina
{
    internal class PagPersonagemEditor : PagRealLifeUiBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DivMenuPersonagemEditor _divMenuPersonagemEditor;

        private DivMenuPersonagemEditor divMenuPersonagemEditor
        {
            get
            {
                if (_divMenuPersonagemEditor != null)
                {
                    return _divMenuPersonagemEditor;
                }

                _divMenuPersonagemEditor = new DivMenuPersonagemEditor();

                return _divMenuPersonagemEditor;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagPersonagemEditor() : base("Personagem (editor)")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divMenuPersonagemEditor.setPai(this);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}