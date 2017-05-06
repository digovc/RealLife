module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class MenuItemBase extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _strDescricao: string;
        private _strTitulo: string;

        private get strDescricao(): string
        {
            return this._strDescricao;
        }

        private set strDescricao(strDescricao: string)
        {
            this._strDescricao = strDescricao;
        }

        private get strTitulo(): string
        {
            return this._strTitulo;
        }

        private set strTitulo(strTitulo: string)
        {
            this._strTitulo = strTitulo;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(strTitulo: string, strDescricao: string = null)
        {
            super();

            this.strDescricao = strDescricao;
            this.strTitulo = strTitulo;
        }

        // #endregion Construtores

        // #region Métodos



        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}