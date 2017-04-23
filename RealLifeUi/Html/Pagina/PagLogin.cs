using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Pagina
{
    internal class PagLogin : PagRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divOlaMundo;

        private Div divOlaMundo
        {
            get
            {
                if (_divOlaMundo != null)
                {
                    return _divOlaMundo;
                }

                _divOlaMundo = new Div();

                return _divOlaMundo;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagLogin() : base("Login")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.divOlaMundo.strConteudo = "Olá mundo!";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divOlaMundo.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            //this.addCss(css.setBackgroundColor("rgba(76,175,80,0.5)"));
            this.addCss(css.setColor("white"));
            this.addCss(css.setFontSize(50));
            this.addCss(css.setTextAlign("center"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}