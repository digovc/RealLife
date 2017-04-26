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

            this.divResultado.strConteudo = "CONCLUÍDA";

            this.divTextoMissao.strConteudo = "MISSÃO";
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

            this.addCss(css.setPaddingBottom(200));
            this.addCss(css.setPaddingTop(200));

            this.divTextoMissao.addCss(css.setFontSize(150));

            this.divResultado.addCss(css.setFontSize(100));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}