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
            this.divNome.strConteudo = "Ação";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divControle.setPai(this);
            this.divTecla.setPai(this);
            this.divNome.setPai(this);

            //new LimiteFloat().setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setHeight(100, "%"));

            this.divControle.addCss(css.setBorderBottom(1, "solid", "grey"));
            this.divControle.addCss(css.setBorderRadius(2, "px"));
            this.divControle.addCss(css.setBorderTop(1, "solid", "grey"));
            this.divControle.addCss(css.setFloat("left"));
            this.divControle.addCss(css.setHeight(90, "%"));
            this.divControle.addCss(css.setLineHeight(3.7m, "vh"));
            this.divControle.addCss(css.setMarginRight(0.5m, "vw"));
            this.divControle.addCss(css.setPaddingLeft(1, "vw"));
            this.divControle.addCss(css.setPaddingRight(1, "vw"));
            this.divControle.addCss(css.setTextAlign("center"));

            this.divTecla.addCss(this.divControle);

            this.divTecla.addCss(css.setBackgroundColor("white"));
            this.divTecla.addCss(css.setColor("black"));
            this.divTecla.addCss(css.setFloat("left"));

            this.divControle.addCss(css.setBackgroundColor("#444444"));
            this.divControle.addCss(css.setColor("#2196F3"));

            this.divNome.addCss(css.setFloat("left"));
            this.divNome.addCss(css.setLineHeight(4, "vh"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}