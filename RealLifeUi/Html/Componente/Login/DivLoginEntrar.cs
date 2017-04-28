using NetZ.Web.Html.Componente.Botao;

namespace RealLifeUi.Html.Componente.Login
{
    internal class DivLoginEntrar : DivLoginBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private CampoRealLifeUi _cmpStrLogin;
        private CampoRealLifeUi _cmpStrSenha;

        private CampoRealLifeUi cmpStrLogin
        {
            get
            {
                if (_cmpStrLogin != null)
                {
                    return _cmpStrLogin;
                }

                _cmpStrLogin = new CampoRealLifeUi("User");

                return _cmpStrLogin;
            }
        }

        private CampoRealLifeUi cmpStrSenha
        {
            get
            {
                if (_cmpStrSenha != null)
                {
                    return _cmpStrSenha;
                }

                _cmpStrSenha = new CampoRealLifeUi("Senha");

                return _cmpStrSenha;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.cmpStrSenha.booUltimo = true;
            this.cmpStrSenha.txt.enmTipo = NetZ.Web.Html.Input.EnmTipo.PASSWORD;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.cmpStrLogin.setPai(this.divConteudo);
            this.cmpStrSenha.setPai(this.divConteudo);
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.cmpStrLogin.strId = (this.strId + "_cmpStrLogin");
            this.cmpStrSenha.strId = (this.strId + "_cmpStrSenha");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}