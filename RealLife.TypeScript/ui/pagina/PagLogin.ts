/// <reference path="../../../RealLifeDominio.TypeScript/JogadorDominio.ts"/>
/// <reference path="../../typedefinition/gta-network-typescript/content/types-gtanetwork/index.d.ts" />
/// <reference path="../../UtilsRealLife.ts"/>
/// <reference path="PagRealLifeBase.ts"/>

module RealLife
{
    // #region Importações

    import JogadorDominio = RealLifeDominio.JogadorDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagLogin extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagLogin;

        public static get i(): PagLogin
        {
            if (PagLogin._i != null)
            {
                return PagLogin._i;
            }

            PagLogin._i = new PagLogin();

            return PagLogin._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public abrir(): void
        {
            super.abrir();

            Screen.i.booMostrarMouse = true;
        }

        public criarConta(jsnJogador: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnJogador))
            {
                return;
            }

            var objJogador = new JogadorDominio();

            objJogador.copiarDados(jsnJogador);

            Jogador.i.criarConta(objJogador);
        }

        public criarContaSucesso(): void
        {
            this.objBrowserRealLife.destruir();

            Screen.i.booMostrarMouse = false;
        }

        protected getUrl(): string
        {
            return "ui/pag_login.html";
        }

        public entrar(jsnJogador: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnJogador))
            {
                return;
            }

            var objJogador = new JogadorDominio();

            objJogador.copiarDados(jsnJogador);

            Jogador.i.entrar(objJogador);
        }

        public entrarSucesso(): void
        {
            this.objBrowserRealLife.destruir();

            Screen.i.booMostrarMouse = false;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}