using RealLifeUi.Html.Componente.Dev;

namespace RealLifeUi.Html.Pagina
{
    internal class PagDev : PagRealLifeUiBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DivMenuDev _divMenuDev;

        private DivMenuDev divMenuDev
        {
            get
            {
                if (_divMenuDev != null)
                {
                    return _divMenuDev;
                }

                _divMenuDev = new DivMenuDev();

                return _divMenuDev;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagDev() : base("Desenvolvimento")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divMenuDev.setPai(this);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}