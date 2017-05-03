using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Menu
{
    internal class DivMenuItem : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divNome;
        private Div _divValor;

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

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "_div_menu_item_id";

            this.divNome.strConteudo = "_div_nome_conteudo";
            this.divNome.strId = "_div_nome_id";

            this.divValor.strConteudo = "_div_valor_conteudo";
            this.divValor.strId = "_div_valor_id";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divNome.setPai(this);
            this.divValor.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setHeight(4, "vh"));
            this.addCss(css.setOverflow("hidden"));

            this.divNome.addCss(css.setFloat("left"));
            this.divNome.addCss(css.setLineHeight(4, "vh"));
            this.divNome.addCss(css.setMarginLeft(1, "vw"));
            this.divNome.addCss(css.setOverflow("hidden"));

            this.divValor.addCss(css.setFloat("right"));
            this.divValor.addCss(css.setLineHeight(4, "vh"));
            this.divValor.addCss(css.setOverflow("hidden"));
            this.divValor.addCss(css.setPaddingRight(1, "vw"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}