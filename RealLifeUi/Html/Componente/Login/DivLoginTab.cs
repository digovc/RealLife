using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Login
{
    internal class DivLoginTab : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divTabContaCadastro;
        private Div _divTabLoginEntrar;

        private Div divTabContaCadastro
        {
            get
            {
                if (_divTabContaCadastro != null)
                {
                    return _divTabContaCadastro;
                }

                _divTabContaCadastro = new Div();

                return _divTabContaCadastro;
            }
        }

        private Div divTabLoginEntrar
        {
            get
            {
                if (_divTabLoginEntrar != null)
                {
                    return _divTabLoginEntrar;
                }

                _divTabLoginEntrar = new Div();

                return _divTabLoginEntrar;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;

            this.divTabLoginEntrar.strConteudo = "Login";
            this.divTabContaCadastro.strConteudo = "Nova conta";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divTabLoginEntrar.setPai(this);
            this.divTabContaCadastro.setPai(this);

            new LimiteFloat().setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("white"));
            this.addCss(css.setBorderLeft());
            this.addCss(css.setBorderRight());
            this.addCss(css.setBorderTop());
            this.addCss(css.setMarginTop(1, "vh"));
            this.addCss(css.setTextAlign("center"));

            this.divTabContaCadastro.addCss(css.setFloat("right"));
            this.divTabContaCadastro.addCss(css.setWidth(50, "%"));

            this.divTabLoginEntrar.addCss(css.setFloat("left"));
            this.divTabLoginEntrar.addCss(css.setFontWeight("bold"));
            this.divTabLoginEntrar.addCss(css.setWidth(50, "%"));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divTabContaCadastro.strId = (strId + "_divTabContaCadastro");
            this.divTabLoginEntrar.strId = (strId + "_divTabLoginEntrar");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}