using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Missao
{
    internal abstract class DivMissaoValorBase : DivMissaoBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divCirculo;
        private Div _divValor;

        protected Div divCirculo
        {
            get
            {
                if (_divCirculo != null)
                {
                    return _divCirculo;
                }

                _divCirculo = new Div();

                return _divCirculo;
            }
        }

        protected Div divValor
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

        protected virtual int getIntDivCirculoFontSize()
        {
            return 175;
        }

        protected virtual string getStrDivCor()
        {
            return "#8bc34a";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divCirculo.setPai(this);

            this.divValor.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.divCirculo.addCss(css.setBackgroundColor(this.getStrDivCor()));
            this.divCirculo.addCss(css.setBorderRadius(50, "%"));
            this.divCirculo.addCss(css.setFloat("left"));
            this.divCirculo.addCss(css.setFontSize(this.getIntDivCirculoFontSize()));
            this.divCirculo.addCss(css.setHeight(150));
            this.divCirculo.addCss(css.setLineHeight(150));
            this.divCirculo.addCss(css.setMarginRight(25));
            this.divCirculo.addCss(css.setPadding(10));
            this.divCirculo.addCss(css.setTextAlign("center"));
            this.divCirculo.addCss(css.setWidth(150));

            this.divValor.addCss(css.setColor(this.getStrDivCor()));
            this.divValor.addCss(css.setFontSize(100));
            this.divValor.addCss(css.setLineHeight(170));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divCirculo.strId = (strId + "_divCirculo");
            this.divValor.strId = (strId + "_divValor");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}