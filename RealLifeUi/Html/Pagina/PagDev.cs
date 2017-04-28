using RealLifeUi.Html.Componente.Interface.Menu;

namespace RealLifeUi.Html.Pagina
{
    internal class PagDev : PagRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private DivMenuInterativo _divMenuInterativo;

        private DivMenuInterativo divMenuInterativo
        {
            get
            {
                if (_divMenuInterativo != null)
                {
                    return _divMenuInterativo;
                }

                _divMenuInterativo = new DivMenuInterativo();

                return _divMenuInterativo;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagDev() : base("Desenvolvimento")
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}