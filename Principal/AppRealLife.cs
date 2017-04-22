using System;

namespace RealLife
{
    internal class AppRealLife
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static AppRealLife _i;

        public static AppRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new AppRealLife();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private AppRealLife()
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}