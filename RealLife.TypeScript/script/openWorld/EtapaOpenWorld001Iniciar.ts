/// <reference path="../../../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/dominio/SolicitacaoDominio.ts"/>
/// <reference path="../../../RealLifeShared.TypeScript/enumerado/EnmMetodo.ts"/>
/// <reference path="../EtapaBase.ts"/>

module RealLife
{
    // #region Importações

    import EnmMetodo = RealLifeShared.EnmMetodo;
    import RespostaDominio = RealLifeShared.RespostaDominio;
    import SolicitacaoDominio = RealLifeShared.SolicitacaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaOpenWorld001Iniciar extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.etapa001();
        }

        // Etapas

        private etapa001(): void
        {
            Jogador.i.booCongelado = true;
            Jogador.i.booDinamico = false;
            Jogador.i.booVisivel = false;

            Chat.i.booAtivo = false;
            Chat.i.booVisivel = false;

            Screen.i.booHudVisivel = false;

            Server.i.enviar(new SolicitacaoDominio(EnmMetodo.APARENCIA_RECUPERAR, ((objResposta) => { this.etapa002(objResposta); })));
        }

        private etapa002(objResposta: RespostaDominio): void
        {
            if (Screen.i.notificarErro(objResposta))
            {
                return;
            }


        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}