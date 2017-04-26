using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Interface
{
    internal abstract class DivInterfaceProgressBase : DivInterfaceBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divTotal;
        private Div _divValor;

        private Div divTotal
        {
            get
            {
                if (_divTotal != null)
                {
                    return _divTotal;
                }

                _divTotal = new Div();

                return _divTotal;
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

            this.divTotal.setPai(this.divConteudo);

            this.divValor.setPai(this.divTotal);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.divTotal.addCss(css.setBackgroundColor("white"));
            this.divTotal.addCss(css.setHeight(9));
            this.divTotal.addCss(css.setMarginTop(8));
            this.divTotal.addCss(css.setWidth(100));

            this.divValor.addCss(css.setBackgroundColor("#1976D2"));
            this.divValor.addCss(css.setHeight(100, "%"));
            this.divValor.addCss(css.setWidth(25, "%"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}