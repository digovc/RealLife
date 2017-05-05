using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace RealLifeUi.Html.Componente
{
    internal class CampoRealLifeUi : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private bool _booUltimo;
        private Div _divInputContainer;
        private Div _divNome;
        private Input _txt;

        public bool booUltimo
        {
            get
            {
                return _booUltimo;
            }

            set
            {
                _booUltimo = value;
            }
        }

        public Input txt
        {
            get
            {
                if (_txt != null)
                {
                    return _txt;
                }

                _txt = new Input();

                return _txt;
            }
        }

        private Div divInputContainer
        {
            get
            {
                if (_divInputContainer != null)
                {
                    return _divInputContainer;
                }

                _divInputContainer = new Div();

                return _divInputContainer;
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

        #endregion Atributos

        #region Construtores

        public CampoRealLifeUi(string strNome)
        {
            this.divNome.strConteudo = strNome;
        }

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divNome.setPai(this);

            this.divInputContainer.setPai(this);

            this.txt.setPai(this.divInputContainer);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBorder());

            if (!this.booUltimo)
            {
                this.addCss(css.setMarginBottom(1, "vh"));
            }

            this.divInputContainer.addCss(css.setBorderTop());

            this.divNome.addCss(css.setPaddingLeft(1, "vh"));

            this.txt.addCss(css.setBorder(0));
            this.txt.addCss(css.setOutline("none"));
            this.txt.addCss(css.setTextAlign("center"));
            this.txt.addCss(css.setWidth(100, "%"));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divNome.strId = (strId + "_divNome");
            this.txt.strId = (strId + "_txt");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}