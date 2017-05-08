using GTA;

namespace ModTool
{
    public abstract class ScriptBase : Script
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        public ScriptBase()
        {
            this.iniciar();
        }

        #endregion Construtores

        #region Métodos

        protected virtual void inicializar()
        {
        }

        protected virtual void setEventos()
        {
        }

        private void iniciar()
        {
            this.inicializar();
            this.setEventos();
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}