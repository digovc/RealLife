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

        public void executar(Client objClient, string strClassName, string strMetodoNome, DominioRealLifeBase objDominio = null)
        {
            if (objClient == null)
            {
                return;
            }

            if (string.IsNullOrEmpty(strClassName))
            {
                return;
            }

            if (string.IsNullOrEmpty(strMetodoNome))
            {
                return;
            }

            var strCodigo = "RealLife._class_name.i._method_name";

            strCodigo = strCodigo.Replace("_class_name", strClassName);
            strCodigo = strCodigo.Replace("_method_name", strMetodoNome);

            if (objDominio == null)
            {
                AppRealLife.i.api.triggerClientEvent(objClient, strCodigo);
            }
            else
            {
                AppRealLife.i.api.triggerClientEvent(objClient, strCodigo, Json.i.toJson(objDominio));
            }
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}