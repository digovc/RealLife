using GTANetworkServer;

namespace RealLife
{
    internal class AppRealLife
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static AppRealLife _i;

        private API _api;

        public static AppRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new AppRealLife();

                return _i;
            }
        }

        public API api
        {
            get
            {
                return _api;
            }

            private set
            {
                _api = value;
            }
        }

        #endregion Atributos

        #region Construtores

        private AppRealLife()
        {
        }

        public void iniciar(API api)
        {
            this.api = api;

            this.setEventos();
        }

        private void setEventos()
        {
            this.api.onPlayerConnected += this.api_onPlayerConnected;
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        private void api_onPlayerConnected(Client objClient)
        {
            Jogador.i.objClient = objClient;
        }

        #endregion Eventos
    }
}