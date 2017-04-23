using NetZ.Persistencia;

namespace RealLife.DataBase
{
    public class DbeRealLife : DbePostgreSqlBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static DbeRealLife _i;

        public static DbeRealLife i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new DbeRealLife();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private DbeRealLife()
        {
        }

        #endregion Construtores

        #region Métodos

        protected override string getStrDataBase()
        {
            return "real_life";
        }

        protected override string getStrUsuarioLogin()
        {
            return "postgres";
        }

        protected override string getStrUsuarioSenha()
        {
            return "postgres";
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}