using DigoFramework.Json;
using GTANetworkServer;
using System;
using System.Collections.Generic;
using System.Globalization;

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

        public void executar(Client objClient, string strMetodoNome, params object[] arrObjDominio)
        {
            if (objClient == null)
            {
                return;
            }

            if (string.IsNullOrEmpty(strMetodoNome))
            {
                return;
            }

            if (arrObjDominio == null)
            {
                AppRealLife.i.api.triggerClientEvent(objClient, strMetodoNome);
                return;
            }

            var lstStrArg = new List<string>();

            foreach (var objArg in arrObjDominio)
            {
                lstStrArg.Add(this.getStrArgumento(objArg));
            }

            AppRealLife.i.api.triggerClientEvent(objClient, strMetodoNome, lstStrArg.ToArray());
        }

        private string getStrArgumento(object objArg)
        {
            if (objArg is bool)
            {
                return objArg.ToString();
            }

            if (objArg is string)
            {
                return (objArg as string);
            }

            if (objArg is float)
            {
                return Convert.ToString(objArg, CultureInfo.GetCultureInfo("en-US"));
            }

            return Json.i.toJson(objArg);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}