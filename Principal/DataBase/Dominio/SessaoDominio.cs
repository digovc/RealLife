using System;

namespace RealLife.DataBase.Dominio
{
    internal class SessaoDominio : DominioRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DateTime _dttSaida;
        private int _intJogadorId;
        private string _strIp;
        private string _strSessaoId;

        public DateTime dttSaida
        {
            get
            {
                return _dttSaida;
            }

            set
            {
                _dttSaida = value;
            }
        }

        public int intJogadorId
        {
            get
            {
                return _intJogadorId;
            }

            set
            {
                _intJogadorId = value;
            }
        }

        public string strIp
        {
            get
            {
                return _strIp;
            }

            set
            {
                _strIp = value;
            }
        }

        public string strSessaoId
        {
            get
            {
                return _strSessaoId;
            }

            set
            {
                _strSessaoId = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}