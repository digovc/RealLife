/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importa��es
    // #endregion Importa��es

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaLogin003Logar extends EtapaBase
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

        // #region M�todos

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
            this.objScript.destruir();

            new ScriptOpenWorld().iniciar();
        }

        protected inicializar(): void
        {
            super.inicializar();

            // TODO: Iniciar modo de loop de c�meras.

            Screen.i.fadeIn();

            this.pagLogin.iniciar();
        }

        // #endregion M�todos

        // #region Eventos
        // #endregion Eventos
    }
}