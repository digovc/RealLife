/// <reference path="../../../RealLifeShared.TypeScript/dominio/ContaDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/dominio/SolicitacaoDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmMetodo.ts"/>
/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações

    import ContaDominio = RealLifeShared.ContaDominio;
    import EnmMetodo = RealLifeShared.EnmMetodo;
    import RespostaDominio = RealLifeShared.RespostaDominio;
    import SolicitacaoDominio = RealLifeShared.SolicitacaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaLogin002Logar extends EtapaBase
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

        public entrar(jsnConta: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnConta))
            {
                return;
            }

            AppRealLife.i.objConta.copiarJson(jsnConta);

            Server.i.enviar(new SolicitacaoDominio(EnmMetodo.LOGIN_ENTRAR, ((objResposta) => { this.entrarRetorno(objResposta); }), AppRealLife.i.objConta));
        }

        private entrarRetorno(objResposta: RespostaDominio): void
        {
            if (Screen.i.notificarErro(objResposta))
            {
                return;
            }

            AppRealLife.i.objConta.copiar(objResposta.getObjArgumento(0));

            if (UtilsRealLife.getBooStrVazia(AppRealLife.i.objConta.strGametag))
            {
                return;
            }

            var strNotificacao = "Seja bem vindo _player_gametag!".replace("_player_gametag", AppRealLife.i.objConta.strGametag);

            Screen.i.notificar(strNotificacao);

            this.objScript.destruir();

            new ScriptOpenWorld().iniciar();
        }

        public contaSalvar(jsnConta: string): void
        {
            if (UtilsRealLife.getBooStrVazia(jsnConta))
            {
                return;
            }

            var objConta = new ContaDominio();

            objConta.copiarJson(jsnConta);

            Server.i.enviar(new SolicitacaoDominio(EnmMetodo.CONTA_SALVAR, ((objResposta) => this.contaSalvarRetorno(objResposta)), objConta));
        }

        private contaSalvarRetorno(objResposta: RespostaDominio): void
        {
            if (Screen.i.notificarErro(objResposta))
            {
                return;
            }

            AppRealLife.i.objConta.copiar(objResposta.getObjArgumento(0));

            if (UtilsRealLife.getBooStrVazia(AppRealLife.i.objConta.strGametag))
            {
                return;
            }

            var strNotificacao = "Sua conta foi criada com sucesso _player_gametag!".replace("_player_gametag", AppRealLife.i.objConta.strGametag);

            Screen.i.notificar(strNotificacao);

            this.objScript.destruir();

            new ScriptPersonagemEditor().iniciar();
        }

        public destruir(): void
        {
            super.destruir();

            this.pagLogin.destruir();
        }

        protected inicializar(): void
        {
            super.inicializar();

            // TODO: Iniciar modo de loop de câmeras.

            Screen.i.fadeIn();

            this.pagLogin.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}