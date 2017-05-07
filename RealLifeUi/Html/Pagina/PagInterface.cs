using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;
using RealLifeUi.Html.Componente.Interface;

namespace RealLifeUi.Html.Pagina
{
    internal class PagInterface : PagRealLifeUiBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DivBanco _divBanco;
        private Div _divCantoInferiorDireito;
        private Div _divCantoSuperiorDireito;
        private DivCarteira _divCarteira;
        private DivCombustivel _divCombustivel;
        private Div _divConteudo;
        private DivTimer _divTimer;

        private DivBanco divBanco
        {
            get
            {
                if (_divBanco != null)
                {
                    return _divBanco;
                }

                _divBanco = new DivBanco();

                return _divBanco;
            }
        }

        private Div divCantoInferiorDireito
        {
            get
            {
                if (_divCantoInferiorDireito != null)
                {
                    return _divCantoInferiorDireito;
                }

                _divCantoInferiorDireito = new Div();

                return _divCantoInferiorDireito;
            }
        }

        private Div divCantoSuperiorDireito
        {
            get
            {
                if (_divCantoSuperiorDireito != null)
                {
                    return _divCantoSuperiorDireito;
                }

                _divCantoSuperiorDireito = new Div();

                return _divCantoSuperiorDireito;
            }
        }

        private DivCarteira divCarteira
        {
            get
            {
                if (_divCarteira != null)
                {
                    return _divCarteira;
                }

                _divCarteira = new DivCarteira();

                return _divCarteira;
            }
        }

        private DivCombustivel divCombustivel
        {
            get
            {
                if (_divCombustivel != null)
                {
                    return _divCombustivel;
                }

                _divCombustivel = new DivCombustivel();

                return _divCombustivel;
            }
        }

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

        private DivTimer divTimer
        {
            get
            {
                if (_divTimer != null)
                {
                    return _divTimer;
                }

                _divTimer = new DivTimer();

                return _divTimer;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagInterface() : base("Interface")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divConteudo.setPai(this);

            //this.divMenuInterativo.setPai(this.divConteudo);

            //this.divCantoSuperiorDireito.setPai(this.divConteudo);

            //this.divBanco.setPai(this.divCantoSuperiorDireito);

            //this.divCarteira.setPai(this.divCantoSuperiorDireito);

            this.divCantoInferiorDireito.setPai(this.divConteudo);

            //this.divCombustivel.setPai(this.divCantoInferiorDireito);

            //this.divTimer.setPai(this.divCantoInferiorDireito);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            //this.addCss(css.setBackgroundImage("url(http://media.gtanet.com/gta-5/images/content/gta-v-facts-4.jpg)"));
            //this.addCss(css.setBackgroundRepeat("no-repeat"));
            this.addCss(css.setColor("white"));
            //this.addCss(css.setFontSize(20));
            this.addCss(css.setFontWeight("bold"));

            this.divCantoInferiorDireito.addCss(css.setBottom(0));
            this.divCantoInferiorDireito.addCss(css.setPosition("absolute"));
            this.divCantoInferiorDireito.addCss(css.setRight(0));

            this.divCantoSuperiorDireito.addCss(css.setPosition("absolute"));
            this.divCantoSuperiorDireito.addCss(css.setRight(0));
            this.divCantoSuperiorDireito.addCss(css.setTop(0));

            this.divConteudo.addCss(css.setBottom(INT_ESPACAMENTO));
            this.divConteudo.addCss(css.setLeft(INT_ESPACAMENTO));
            this.divConteudo.addCss(css.setPosition("absolute"));
            this.divConteudo.addCss(css.setRight(INT_ESPACAMENTO));
            this.divConteudo.addCss(css.setTop(INT_ESPACAMENTO));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}