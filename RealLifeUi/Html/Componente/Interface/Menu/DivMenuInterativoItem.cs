using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Interface.Menu
{
    internal class DivMenuInterativoItem : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divIcone;

        private Div _divNome;

        private Div _divValor;

        private Div divIcone
        {
            get
            {
                if (_divIcone != null)
                {
                    return _divIcone;
                }

                _divIcone = new Div();

                return _divIcone;
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

        private Div divValor
        {
            get
            {
                if (_divValor != null)
                {
                    return _divValor;
                }

                _divValor = new Div();

                return _divValor;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divIcone.setPai(this);
            this.divNome.setPai(this);
            this.divValor.setPai(this);
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.divNome.strConteudo = "GPS";

            this.divValor.strConteudo = "Casa (Eclipse Tower)";
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setHeight(35));

            this.divIcone.addCss(css.setFloat("left"));
            this.divIcone.addCss(css.setHeight(100, "%"));
            this.divIcone.addCss(css.setWidth(35));

            this.divNome.addCss(css.setFloat("left"));
            this.divNome.addCss(css.setLineHeight(35));
            this.divNome.addCss(css.setOverflow("hidden"));

            this.divValor.addCss(css.setFloat("right"));
            this.divValor.addCss(css.setLineHeight(35));
            this.divValor.addCss(css.setOverflow("hidden"));
            this.divValor.addCss(css.setPaddingRight(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}