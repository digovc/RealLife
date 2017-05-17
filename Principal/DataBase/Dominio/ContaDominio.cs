namespace RealLife.DataBase.Dominio
{
    internal class ContaDominio : DominioRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private string _strEmail;
        private string _strGametag;
        private string _strSenha;

        public string strEmail
        {
            get
            {
                return _strEmail;
            }

            set
            {
                _strEmail = value;
            }
        }

        public string strGametag
        {
            get
            {
                return _strGametag;
            }

            set
            {
                _strGametag = value;
            }
        }

        public string strSenha
        {
            get
            {
                return _strSenha;
            }

            set
            {
                _strSenha = value;
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