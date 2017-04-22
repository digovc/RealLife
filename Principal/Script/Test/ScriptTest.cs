using GTANetworkServer;

namespace RealLife.Script.Test
{
    internal class ScriptTest : ScriptBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void setEventos()
        {
            base.setEventos();

            this.API.onPlayerConnected += this.API_onPlayerConnected;
        }

        #endregion Métodos

        #region Eventos

        private void API_onPlayerConnected(Client objClient)
        {
            objClient.sendChatMessage("Seja bem vindo ao servidor de Real Life!");
        }

        #endregion Eventos
    }
}