namespace RealLife.Script
{
    internal abstract class ScriptBase : GTANetworkServer.Script
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        protected ScriptBase()
        {
            this.iniciar();
        }

        #endregion Construtores

        #region Métodos

        protected virtual void inicializar()
        {
            API.consoleOutput("Inicializando o script \"{0}\"", this.GetType().Name);
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