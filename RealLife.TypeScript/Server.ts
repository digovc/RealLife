/// <reference path="../RealLifeShared.TypeScript/dominio/RespostaDominio.ts"/>
/// <reference path="../RealLifeShared.TypeScript/dominio/SolicitacaoDominio.ts"/>
/// <reference path="Objeto.ts"/>

module RealLife
{
    // #region Importações

    import RespostaDominio = RealLifeShared.RespostaDominio;
    import SolicitacaoDominio = RealLifeShared.SolicitacaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Server extends Objeto
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: Server;

        public static get i(): Server
        {
            if (Server._i != null)
            {
                return Server._i;
            }

            Server._i = new Server();

            return Server._i;
        }

        private _arrObjSolicitacao: Array<SolicitacaoDominio>;
        private _intSolicitacaoUltimaId: number = 0;

        private get arrObjSolicitacao(): Array<SolicitacaoDominio>
        {
            if (this._arrObjSolicitacao != null)
            {
                return this._arrObjSolicitacao;
            }

            this._arrObjSolicitacao = new Array<SolicitacaoDominio>();

            return this._arrObjSolicitacao;
        }

        private get intSolicitacaoUltimaId(): number
        {
            return this._intSolicitacaoUltimaId;
        }

        private set intSolicitacaoUltimaId(intSolicitacaoUltimaId: number)
        {
            this._intSolicitacaoUltimaId = intSolicitacaoUltimaId;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public enviar(objSolicitacao: SolicitacaoDominio): void
        {
            if (objSolicitacao == null)
            {
                return;
            }

            objSolicitacao.intId = this.intSolicitacaoUltimaId++;

            if (this.intSolicitacaoUltimaId >= 2147483647)
            {
                this.intSolicitacaoUltimaId = 0;
            }

            API.triggerServerEvent("0", JSON.stringify(objSolicitacao));

            if (objSolicitacao.fncRetorno == null)
            {
                return;
            }

            this.arrObjSolicitacao.push(objSolicitacao);
        }

        public processarEvtOnServerEventTriggerListener(strMetodo: string, arrObjArgumento: System.Array<any>): void
        {
            if (arrObjArgumento == null)
            {
                return;
            }

            if (arrObjArgumento.Length < 1)
            {
                return;
            }

            var strJson = arrObjArgumento[0];

            Log.i.debug(strJson);

            if (UtilsRealLife.getBooStrVazia(strJson))
            {
                return;
            }

            if ("0" == strMetodo)
            {
                var objSolicitacao = new SolicitacaoDominio(RealLifeShared.EnmMetodo.DESCONHECIDO);

                objSolicitacao.copiarJson(strJson);

                this.processarSolicitacao(objSolicitacao);
                return;
            }

            var objResposta = new RespostaDominio();

            objResposta.copiarJson(strJson);

            this.processarResposta(objResposta);
        }

        private processarResposta(objResposta: RespostaDominio): void
        {
            for (var i = 0; i < this.arrObjSolicitacao.length; i++)
            {
                if (this.arrObjSolicitacao[i].processarResposta(objResposta))
                {
                    this.arrObjSolicitacao.splice(i, 1);
                    return;
                }
            }
        }

        private processarSolicitacao(objSolicitacao: SolicitacaoDominio): void
        {
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}