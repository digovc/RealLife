using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente.Missao
{
    internal class DivMissaoResultado : DivMissaoBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divResultado;
        private Div _divTextoMissao;

        private Div divResultado
        {
            get
            {
                if (_divResultado != null)
                {
                    return _divResultado;
                }

                _divResultado = new Div();

                return _divResultado;
            }
        }

        private Div divTextoMissao
        {
            get
            {
                if (_divTextoMissao != null)
                {
                    return _divTextoMissao;
                }

                _divTextoMissao = new Div();

                return _divTextoMissao;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.divResultado.strConteudo = "Concluída";

            this.divTextoMissao.strConteudo = "Missão";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divTextoMissao.setPai(this);
            this.divResultado.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.divTextoMissao.addCss(css.setColor("grey"));
            this.divTextoMissao.addCss(css.setFontSize(5, "vw"));

            this.divResultado.addCss(css.setFontSize(7, "vw"));
            this.divResultado.addCss(css.setMarginTop(-5, "vh"));
            this.divResultado.addCss(css.setPaddingLeft(5, "vw"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}