namespace RealLifeUi.Html.Componente.Login
{
    internal class DivLoginContaCadastro : DivLoginBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private CampoRealLifeUi _cmpStrEmail;
        private CampoRealLifeUi _cmpStrGameTag;
        private CampoRealLifeUi _cmpStrSenha;
        private CampoRealLifeUi _cmpStrSenhaRepetir;

        private CampoRealLifeUi cmpStrEmail
        {
            get
            {
                if (_cmpStrEmail != null)
                {
                    return _cmpStrEmail;
                }

                _cmpStrEmail = new CampoRealLifeUi("Email");

                return _cmpStrEmail;
            }
        }

        private CampoRealLifeUi cmpStrGameTag
        {
            get
            {
                if (_cmpStrGameTag != null)
                {
                    return _cmpStrGameTag;
                }

                _cmpStrGameTag = new CampoRealLifeUi("Gametag");

                return _cmpStrGameTag;
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

        private CampoRealLifeUi cmpStrSenhaRepetir
        {
            get
            {
                if (_cmpStrSenhaRepetir != null)
                {
                    return _cmpStrSenhaRepetir;
                }

                _cmpStrSenhaRepetir = new CampoRealLifeUi("Confirmar senha");

                return _cmpStrSenhaRepetir;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.cmpStrSenha.txt.enmTipo = NetZ.Web.Html.Input.EnmTipo.PASSWORD;

            this.cmpStrSenhaRepetir.booUltimo = true;
            this.cmpStrSenhaRepetir.txt.enmTipo = NetZ.Web.Html.Input.EnmTipo.PASSWORD;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.cmpStrEmail.setPai(this.divConteudo);
            this.cmpStrGameTag.setPai(this.divConteudo);
            this.cmpStrSenha.setPai(this.divConteudo);
            this.cmpStrSenhaRepetir.setPai(this.divConteudo);
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.cmpStrEmail.strId = (strId + "_cmpStrEmail");
            this.cmpStrGameTag.strId = (strId + "_cmpStrGameTag");
            this.cmpStrSenha.strId = (strId + "_cmpStrSenha");
            this.cmpStrSenhaRepetir.strId = (strId + "_cmpStrSenhaRepetir");
        }
        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}