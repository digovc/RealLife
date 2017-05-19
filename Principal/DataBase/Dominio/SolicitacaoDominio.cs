using DigoFramework.Json;
using System.Collections.Generic;

namespace RealLife.DataBase.Dominio
{
    internal class SolicitacaoDominio : DominioRealLifeBase
    {
        #region Constantes

        public enum EnmMetodo
        {
            APARENCIA_SALVAR,

            CONTA_SALVAR,

            DESCONHECIDO,

            LOGIN_ENTRAR,
        }

        #endregion Constantes

        #region Atributos

        private object[] _arrObjArgumento;
        private EnmMetodo _enmMetodo = EnmMetodo.DESCONHECIDO;

        public object[] arrObjArgumento
        {
            get
            {
                return _arrObjArgumento;
            }

            set
            {
                _arrObjArgumento = value;
            }
        }

        public EnmMetodo enmMetodo
        {
            get
            {
                return _enmMetodo;
            }

            set
            {
                _enmMetodo = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        public T getObjArgumento<T>(int intIndex = 0)
        {
            if (intIndex < 0)
            {
                return default(T);
            }

            if (this.arrObjArgumento == null)
            {
                return default(T);
            }

            if (this.arrObjArgumento.Length < (intIndex + 1))
            {
                return default(T);
            }

            var jsn = this.arrObjArgumento[intIndex].ToString();

            if (string.IsNullOrEmpty(jsn))
            {
                return default(T);
            }

            return Json.i.fromJson<T>(jsn);
        }

        internal void addArgumento(params object[] arrObjArgumento)
        {
            if (arrObjArgumento == null)
            {
                return;
            }

            if (arrObjArgumento.Length < 1)
            {
                return;
            }

            var lstObjArgumento = new List<object>(this.arrObjArgumento);

            foreach (var objArgumento in arrObjArgumento)
            {
                lstObjArgumento.Add(objArgumento);
            }

            this.arrObjArgumento = lstObjArgumento.ToArray();
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}