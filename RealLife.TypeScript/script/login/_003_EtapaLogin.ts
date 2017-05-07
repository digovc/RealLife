/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class _003_EtapaLogin extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _pagLogin: PagLogin;

        private get pagLogin(): PagLogin
        {
            if (this._pagLogin != null)
            {
                return this._pagLogin;
            }

            this._pagLogin = new PagLogin(this);

            return this._pagLogin;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public criarContaSucesso(): void
        {
            this.objScript.destruir();

            new ScriptPersonagemEditor().iniciar();
        }

        public destruir(): void
        {
            super.destruir();

            this.pagLogin.destruir();
        }

        public entrarSucesso(): void
        {
            // TODO: Implementar.
        }

        protected inicializar(): void
        {
            super.inicializar();

            Screen.i.fadeIn();

            this.pagLogin.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}