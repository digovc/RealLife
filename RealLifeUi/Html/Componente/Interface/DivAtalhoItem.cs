using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Interface
{
    internal class DivAtalhoItem : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divControle;
        private Div _divNome;
        private Div _divTecla;

        private Div divControle
        {
            get
            {
                if (_divControle != null)
                {
                    return _divControle;
                }

                _divControle = new Div();

                return _divControle;
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

        private Div divTecla
        {
            get
            {
                if (_divTecla != null)
                {
                    return _divTecla;
                }

                _divTecla = new Div();

                return _divTecla;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.divControle.strConteudo = "X";
            this.divTecla.strConteudo = "Enter";
            this.divNome.strConteudo = "Comprar";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divControle.setPai(this);
            this.divTecla.setPai(this);
            this.divNome.setPai(this);

            new LimiteFloat().setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.divControle.addCss(css.setBackgroundColor("#252525"));
            this.divControle.addCss(css.setBorderRadius(15));
            this.divControle.addCss(css.setColor("#2196F3"));
            this.divControle.addCss(css.setFloat("left"));
            this.divControle.addCss(css.setHeight(21));
            this.divControle.addCss(css.setLineHeight(20));
            this.divControle.addCss(css.setMarginRight(5));
            this.divControle.addCss(css.setMarginTop(2));
            this.divControle.addCss(css.setTextAlign("center"));
            this.divControle.addCss(css.setWidth(20));

            this.divTecla.addCss(css.setBackgroundColor("white"));
            this.divTecla.addCss(css.setBorderRadius(5));
            this.divTecla.addCss(css.setColor("black"));
            this.divTecla.addCss(css.setFloat("left"));
            this.divTecla.addCss(css.setHeight(21));
            this.divTecla.addCss(css.setLineHeight(20));
            this.divTecla.addCss(css.setMarginRight(5));
            this.divTecla.addCss(css.setMarginTop(2));
            this.divTecla.addCss(css.setPaddingLeft(2));
            this.divTecla.addCss(css.setPaddingRight(2));
            this.divTecla.addCss(css.setTextAlign("center"));

            this.divNome.addCss(css.setFloat("left"));
            this.divNome.addCss(css.setMarginRight(25));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}