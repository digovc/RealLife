using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Interface.Menu
{
    internal class DivMenuInterativo : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divCabecalho;
        private Div _divContagem;
        private Div _divConteudo;
        private Div _divMostradorAbaixo;
        private Div _divMostradorAcima;
        private Div _divNome;

        private Div divCabecalho
        {
            get
            {
                if (_divCabecalho != null)
                {
                    return _divCabecalho;
                }

                _divCabecalho = new Div();

                return _divCabecalho;
            }
        }

        private Div divContagem
        {
            get
            {
                if (_divContagem != null)
                {
                    return _divContagem;
                }

                _divContagem = new Div();

                return _divContagem;
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

        private Div divMostradorAbaixo
        {
            get
            {
                if (_divMostradorAbaixo != null)
                {
                    return _divMostradorAbaixo;
                }

                _divMostradorAbaixo = new Div();

                return _divMostradorAbaixo;
            }
        }

        private Div divMostradorAcima
        {
            get
            {
                if (_divMostradorAcima != null)
                {
                    return _divMostradorAcima;
                }

                _divMostradorAcima = new Div();

                return _divMostradorAcima;
            }
        }

        private Div divNome
        {
            get
            {
                if (_divNome != null)
                {
                    return _divNome;
                }

                _divNome = new Div();

                return _divNome;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.divCabecalho.strConteudo = "gametag";
            this.divContagem.strConteudo = "2/20";
            this.divNome.strConteudo = "Menu de interação";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divCabecalho.setPai(this);
            this.divNome.setPai(this);
            this.divContagem.setPai(this.divNome);
            this.divMostradorAcima.setPai(this);
            this.divConteudo.setPai(this);
            this.divMostradorAbaixo.setPai(this);

            new DivMenuInterativoItem().setPai(this.divConteudo);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            var strBackgroundColor = css.setBackgroundColor("rgba(0,0,0,0.5)");

            this.addCss(css.setLeft(50));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setTop(50));
            this.addCss(css.setWidth(250));

            this.divCabecalho.addCss(css.setBackgroundColor("rgba(3,169,244,0.75)"));
            this.divCabecalho.addCss(css.setFontSize(20));
            this.divCabecalho.addCss(css.setOverflow("hidden"));
            this.divCabecalho.addCss(css.setPadding(10));
            this.divCabecalho.addCss(css.setPaddingBottom(20));
            this.divCabecalho.addCss(css.setPaddingTop(20));

            this.divContagem.addCss(css.setFloat("right"));

            this.divConteudo.addCss(css.setHeight(300));
            this.divConteudo.addCss(strBackgroundColor);

            this.divMostradorAbaixo.addCss(css.setHeight(10));
            this.divMostradorAbaixo.addCss(strBackgroundColor);

            this.divMostradorAcima.addCss(this.divMostradorAcima);

            this.divNome.addCss(css.setMarginTop(10));
            this.divNome.addCss(css.setOverflow("hidden"));
            this.divNome.addCss(css.setPadding(5));
            this.divNome.addCss(css.setPaddingLeft(10));
            this.divNome.addCss(strBackgroundColor);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}