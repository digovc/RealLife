module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagMissaoConclusao extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagMissaoConclusao;

        public static get i(): PagMissaoConclusao
        {
            if (PagMissaoConclusao._i != null)
            {
                return PagMissaoConclusao._i;
            }

            PagMissaoConclusao._i = new PagMissaoConclusao();

            return PagMissaoConclusao._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}