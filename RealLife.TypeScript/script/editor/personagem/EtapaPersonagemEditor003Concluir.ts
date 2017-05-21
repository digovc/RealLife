/// <reference path="../../../../RealLifeShared.TypeScript/dominio/PersonagemDominio.ts"/>
/// <reference path="../../../../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>
/// <reference path="../../../../RealLifeShared.TypeScript/dominio/SolicitacaoDominio.ts"/>
/// <reference path="../../../../RealLifeShared.TypeScript/enumerado/EnmMetodo.ts"/>

module RealLife
{
    // #region Importações

    import EnmMetodo = RealLifeShared.EnmMetodo;
    import PersonagemDominio = RealLifeShared.PersonagemDominio;
    import RespostaDominio = RealLifeShared.RespostaDominio;
    import SolicitacaoDominio = RealLifeShared.SolicitacaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaPersonagemEditor003Concluir extends EtapaBase
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

            this.salvarAparencia();
        }

        private salvarAparencia(): void
        {
            var objPersonagem = new PersonagemDominio();

            objPersonagem.booMasculino = Jogador.i.booMasculino;
            objPersonagem.intCabeloCor = Jogador.i.intCabeloCor;
            objPersonagem.intOlhoCor = Jogador.i.intOlhoCor;
            objPersonagem.objBlendData = Jogador.i.objBlendData;

            Server.i.enviar(new SolicitacaoDominio(EnmMetodo.APARENCIA_SALVAR, ((objResposta) => { this.salvarAparenciaRetorno(objResposta); }), objPersonagem, Jogador.i.arrObjHeadOverlay, Jogador.i.arrObjPedComponente));

            Screen.i.notificar("Salvando o personagem.");
        }

        private salvarAparenciaRetorno(objResposta: RespostaDominio): void
        {
            if (Screen.i.notificarErro(objResposta))
            {
                return;
            }

            Screen.i.notificar("Personagem salvo com sucesso.");

            this.etapa001();
        }

        // Etapas

        private etapa001(): void
        {
            Screen.i.fadeOut(1000, (() => { this.objScript.destruir(); }));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}