using DigoFramework;

namespace RealLifeUi
{
    internal class TemaRealLifeUi : TemaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TemaRealLifeUi _i;

        public static TemaRealLifeUi i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TemaRealLifeUi();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TemaRealLifeUi()
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}