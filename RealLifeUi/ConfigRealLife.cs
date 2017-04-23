using NetZ.Web;

namespace RealLifeUi
{
    internal class ConfigRealLife : ConfigWebBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static ConfigRealLife _i;

        public static ConfigRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new ConfigRealLife();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private ConfigRealLife()
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}