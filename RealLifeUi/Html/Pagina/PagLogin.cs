using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;
using RealLifeUi.Html.Componente.Login;

namespace RealLifeUi.Html.Pagina
{
    internal class PagLogin : PagRealLifeUiBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;
        private Div _divConteudo2;
        private DivLoginAtalho _divLoginAtalho;
        private DivLoginCabecalho _divLoginCabecalho;
        private DivLoginContaCadastro _divLoginContaCadastro;
        private DivLoginEntrar _divLoginEntrar;
        private DivLoginTab _divLoginTab;

        private Div divConteudo
        {
            get
            {
                if (_divConteudo != null)
                {
                    return _divConteudo;
                }

                _divConteudo = new Div();

                return _divConteudo;
            }
        }

        private Div divConteudo2
        {
            get
            {
                if (_divConteudo2 != null)
                {
                    return _divConteudo2;
                }

                _divConteudo2 = new Div();

                return _divConteudo2;
            }
        }

        private DivLoginAtalho divLoginAtalho
        {
            get
            {
                if (_divLoginAtalho != null)
                {
                    return _divLoginAtalho;
                }

                _divLoginAtalho = new DivLoginAtalho();

                return _divLoginAtalho;
            }
        }

        private DivLoginCabecalho divLoginCabecalho
        {
            get
            {
                if (_divLoginCabecalho != null)
                {
                    return _divLoginCabecalho;
                }

                _divLoginCabecalho = new DivLoginCabecalho();

                return _divLoginCabecalho;
            }
        }

        private DivLoginContaCadastro divLoginContaCadastro
        {
            get
            {
                if (_divLoginContaCadastro != null)
                {
                    return _divLoginContaCadastro;
                }

                _divLoginContaCadastro = new DivLoginContaCadastro();

                return _divLoginContaCadastro;
            }
        }

        private DivLoginEntrar divLoginEntrar
        {
            get
            {
                if (_divLoginEntrar != null)
                {
                    return _divLoginEntrar;
                }

                _divLoginEntrar = new DivLoginEntrar();

                return _divLoginEntrar;
            }
        }

        private DivLoginTab divLoginTab
        {
            get
            {
                if (_divLoginTab != null)
                {
                    return _divLoginTab;
                }

                _divLoginTab = new DivLoginTab();

                return _divLoginTab;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagLogin() : base("Login")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void addJsLib(LstTag<JavaScriptTag> lstJsLib)
        {
            base.addJsLib(lstJsLib);

            lstJsLib.Add(new JavaScriptTag("res/js/lib/md5.min.js"));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.divConteudo.strId = "divConteudo";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divConteudo.setPai(this);

            this.divLoginCabecalho.setPai(this.divConteudo);

            this.divLoginTab.setPai(this.divConteudo);

            this.divConteudo2.setPai(this.divConteudo);

            this.divLoginEntrar.setPai(this.divConteudo2);

            this.divLoginContaCadastro.setPai(this.divConteudo2);

            this.divLoginAtalho.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setAlignItems("center"));
            this.addCss(css.setDisplay("flex"));
            this.addCss(css.setHeight(100, "vh"));
            this.addCss(css.setJustifyContent("center"));

            this.divConteudo.addCss(css.setDisplay("none"));

            this.divConteudo2.addCss(css.setBackgroundColor("white"));
            this.divConteudo2.addCss(css.setBorder());
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}