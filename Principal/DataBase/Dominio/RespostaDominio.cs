using DigoFramework.Json;
using System.Collections.Generic;

namespace RealLife.DataBase.Dominio
{
    internal class RespostaDominio : DominioRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private object[] _arrObjArgumento;
        private int _intSolicitacaoId;
        private string _strErro;

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

        public int intSolicitacaoId
        {
            get
            {
                return _intSolicitacaoId;
            }

            set
            {
                _intSolicitacaoId = value;
            }
        }

        public string strErro
        {
            get
            {
                return _strErro;
            }

            set
            {
                _strErro = value;
            }
        }

        #endregion Atributos

        #region Construtores

        public RespostaDominio(SolicitacaoDominio objSolicitacao)
        {
            this.intSolicitacaoId = objSolicitacao.intId;
        }

        #endregion Construtores

        #region Métodos

        internal RespostaDominio addArgumento(params object[] arrObjArgumento)
        {
            if (arrObjArgumento == null)
            {
                return this;
            }

            if (arrObjArgumento.Length < 1)
            {
                return this;
            }

            var lstObjArgumento = new List<object>(this.arrObjArgumento);

            foreach (var objArgumento in arrObjArgumento)
            {
                this.addArgumento(lstObjArgumento, objArgumento);
            }

            this.arrObjArgumento = lstObjArgumento.ToArray();

            return this;
        }

        private void addArgumento(List<object> lstObjArgumento, object objArgumento)
        {
            if (objArgumento == null)
            {
                return;
            }

            if (objArgumento is bool)
            {
                lstObjArgumento.Add(objArgumento.ToString());
                return;
            }

            if (objArgumento is float)
            {
                lstObjArgumento.Add(objArgumento.ToString());
                return;
            }

            if (objArgumento is string)
            {
                lstObjArgumento.Add(objArgumento.ToString());
                return;
            }

            lstObjArgumento.Add(Json.i.toJson(objArgumento));
            return;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}