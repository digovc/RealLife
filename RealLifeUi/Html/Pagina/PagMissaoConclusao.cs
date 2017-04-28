using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;
using RealLifeUi.Html.Componente.Missao;

namespace RealLifeUi.Html.Pagina
{
    internal class PagMissaoConclusao : PagRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DivMissaoDinheiro _divMissaoDinheiro;
        private DivMissaoResultado _divMissaoResultado;
        private DivMissaoRp _divMissaoRp;
        private DivMissaoRpProgresso _divMissaoRpProgresso;

        private DivMissaoDinheiro divMissaoDinheiro
        {
            get
            {
                if (_divMissaoDinheiro != null)
                {
                    return _divMissaoDinheiro;
                }

                _divMissaoDinheiro = new DivMissaoDinheiro();

                return _divMissaoDinheiro;
            }
        }

        private DivMissaoResultado divMissaoResultado
        {
            get
            {
                if (_divMissaoResultado != null)
                {
                    return _divMissaoResultado;
                }

                _divMissaoResultado = new DivMissaoResultado();

                return _divMissaoResultado;
            }
        }

        private DivMissaoRp divMissaoRp
        {
            get
            {
                if (_divMissaoRp != null)
                {
                    return _divMissaoRp;
                }

                _divMissaoRp = new DivMissaoRp();

                return _divMissaoRp;
            }
        }

        private DivMissaoRpProgresso divMissaoRpProgresso
        {
            get
            {
                if (_divMissaoRpProgresso != null)
                {
                    return _divMissaoRpProgresso;
                }

                _divMissaoRpProgresso = new DivMissaoRpProgresso();

                return _divMissaoRpProgresso;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagMissaoConclusao() : base("Missão (conclusão)")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divMissaoResultado.setPai(this);
            this.divMissaoDinheiro.setPai(this);
            this.divMissaoRp.setPai(this);
            this.divMissaoRpProgresso.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("black"));
            this.addCss(css.setColor("white"));
            this.addCss(css.setPaddingLeft(50));
            this.addCss(css.setPaddingRight(50));
            this.addCss(css.setPaddingTop(50));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}