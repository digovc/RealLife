using DigoFramework;

namespace RealLifeUi
{
    internal class TemaRealLife : TemaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TemaRealLife _i;

        public static TemaRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TemaRealLife();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private TemaRealLife()
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}