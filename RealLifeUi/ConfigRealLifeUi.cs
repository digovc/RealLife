using NetZ.Web;

namespace RealLifeUi
{
    internal class ConfigRealLifeUi : ConfigWebBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static ConfigRealLifeUi _i;

        public static ConfigRealLifeUi i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new ConfigRealLifeUi();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private ConfigRealLifeUi()
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}