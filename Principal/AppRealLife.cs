using DigoFramework;
using GTANetworkServer;
using RealLife.Jogador;

namespace RealLife
{
    internal class AppRealLife : Objeto
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

        #endregion Construtores

        #region Métodos

        public void iniciar(API api)
        {
            this.api = api;

            this.inicializar();
        }

        private void inicializar()
        {
            JogadorManager.i.iniciar();
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}