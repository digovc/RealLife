using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Missao
{
    internal class DivMissaoRpProgresso : DivMissaoBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divNivelAtual;
        private Div _divNivelProximo;
        private Div _divProgresso;

        private Div divNivelAtual
        {
            get
            {
                if (_divNivelAtual != null)
                {
                    return _divNivelAtual;
                }

                _divNivelAtual = new Div();

                return _divNivelAtual;
            }
        }

        private Div divNivelProximo
        {
            get
            {
                if (_divNivelProximo != null)
                {
                    return _divNivelProximo;
                }

                _divNivelProximo = new Div();

                return _divNivelProximo;
            }
        }

        private Div divProgresso
        {
            get
            {
                if (_divProgresso != null)
                {
                    return _divProgresso;
                }

                _divProgresso = new Div();

                return _divProgresso;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.divNivelAtual.strConteudo = "5";
            this.divNivelProximo.strConteudo = "6";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divProgresso.setPai(this);

            this.divNivelProximo.setPai(this);
            this.divNivelAtual.setPai(this);

            new LimiteFloat().setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("lightgrey"));
            this.addCss(css.setBorderRadius(1, "vw"));
            this.addCss(css.setHeight(5, "vh"));

            this.divNivelAtual.addCss(css.setBackgroundColor("rgba(95,95,95,0.5)"));
            this.divNivelAtual.addCss(css.setBorderRadius(50, "%"));
            this.divNivelAtual.addCss(css.setFontSize(3, "vw"));
            this.divNivelAtual.addCss(css.setHeight(5, "vw"));
            this.divNivelAtual.addCss(css.setLineHeight(5, "vw"));
            this.divNivelAtual.addCss(css.setTextAlign("center"));
            this.divNivelAtual.addCss(css.setWidth(5, "vw"));

            this.divNivelProximo.addCss(this.divNivelAtual);

            this.divNivelAtual.addCss(css.setFloat("left"));
            this.divNivelProximo.addCss(css.setFloat("right"));

            this.divProgresso.addCss(css.setBackgroundColor("gray"));
            this.divProgresso.addCss(css.setBorderRadius(1, "vw"));
            this.divProgresso.addCss(css.setHeight(100, "%"));
            this.divProgresso.addCss(css.setMarginBottom(2, "vh"));
            this.divProgresso.addCss(css.setWidth(10, "%"));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divNivelAtual.strId = (strId + "_divNivelAtual");
            this.divNivelProximo.strId = (strId + "_divNivelProximo");            
            this.divProgresso.strId = (strId + "_divProgresso");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}