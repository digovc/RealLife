using NetZ.Web.Html;

namespace RealLifeUi.Html.Componente.Interface
{
    internal abstract class DivInterfaceTextoBase : DivInterfaceBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divValor;

        protected Div divValor
        {
            get
            {
                if (_divValor != null)
                {
                    return _divValor;
                }

                _divValor = new Div();

                return _divValor;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divValor.setPai(this.divConteudo);
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divValor.strId = (strId + "_divValor");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}