using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal abstract class TblRealLifeBase : TabelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        protected TblRealLifeBase(string sqlNome) : base(sqlNome, DbeRealLife.i)
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}