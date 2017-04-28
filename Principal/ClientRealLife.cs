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

        public void executarJson(Client objClient, string strClassName, string strMetodoNome, DominioRealLifeBase objDominio)
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

            AppRealLife.i.api.triggerClientEvent(objClient, strCodigo, objDominio);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}