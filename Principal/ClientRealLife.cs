using DigoFramework.Json;
using GTANetworkServer;
using RealLife.DataBase.Dominio;

namespace RealLife
{
    internal class ClientRealLife
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static ClientRealLife _i;

        public static ClientRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new ClientRealLife();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private ClientRealLife()
        {
        }

        #endregion Construtores

        #region Métodos

        public void executar(Client objClient, string strMetodoNome, DominioRealLifeBase objDominio = null)
        {
            if (objClient == null)
            {
                return;
            }

            if (string.IsNullOrEmpty(strMetodoNome))
            {
                return;
            }

            if (objDominio == null)
            {
                AppRealLife.i.api.triggerClientEvent(objClient, strMetodoNome);
            }
            else
            {
                AppRealLife.i.api.triggerClientEvent(objClient, strMetodoNome, Json.i.toJson(objDominio));
            }
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}