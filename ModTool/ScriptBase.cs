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

        public void notificar(string strNotificacao, params object[] arrObjParam)
        {
            if (string.IsNullOrEmpty(strNotificacao))
            {
                return;
            }

            if (arrObjParam != null)
            {
                strNotificacao = string.Format(strNotificacao, arrObjParam);
            }

            UI.Notify(strNotificacao);
        }

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