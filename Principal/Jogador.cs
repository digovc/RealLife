using DigoFramework;
using DigoFramework.Json;
using GTANetworkServer;
using RealLife.DataBase.Dominio;
using RealLife.DataBase.Tabela;
using System;
using System.Threading;

namespace RealLife
{
    internal class Jogador : Objeto
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Client _objClient;
        private ContaDominio _objConta;
        private SessaoDominio _objSessao;

        public Client objClient
        {
            get
            {
                return _objClient;
            }

            set
            {
                _objClient = value;
            }
        }

        private ContaDominio objConta
        {
            get
            {
                return _objConta;
            }

            set
            {
                _objConta = value;
            }
        }

        private SessaoDominio objSessao
        {
            get
            {
                return _objSessao;
            }

            set
            {
                _objSessao = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        internal void desconectar()
        {
            this.objSessao.dttSaida = DateTime.Now;

            TblSessao.i.salvar(this.objSessao);
        }

        internal void iniciar()
        {
            this.inicializar();
            this.setEventos();
        }

        private RespostaDominio aparenciaRecuperar(SolicitacaoDominio objSolicitacao)
        {
            if (this.objConta == null)
            {
                throw new NullReferenceException();
            }

            if (this.objConta.intId < 1)
            {
                throw new Exception();
            }

            return new RespostaDominio(objSolicitacao);
        }

        private RespostaDominio aparenciaSalvar(SolicitacaoDominio objSolicitacao)
        {
            var objPersonagem = objSolicitacao.getObjArgumento<PersonagemDominio>();

            if (objPersonagem == null)
            {
                throw new NullReferenceException();
            }

            if (this.objConta == null)
            {
                throw new NullReferenceException();
            }

            if (this.objSessao == null)
            {
                throw new NullReferenceException();
            }

            TblPersonagem.i.aparenciaSalvar(this.objConta, this.objSessao, objPersonagem);

            if (objPersonagem.intId < 1)
            {
                throw new Exception("Erro ao salvar o personagem.");
            }

            var arrObjHeadOverlay = objSolicitacao.getObjArgumento<HeadOverlayDominio[]>(1);

            TblHeadOverlay.i.aparenciaSalvar(objPersonagem, objSessao, arrObjHeadOverlay);

            var arrObjPedComponente = objSolicitacao.getObjArgumento<PedComponenteDominio[]>(2);

            TblPedComponente.i.aparenciaSalvar(objPersonagem, objSessao, arrObjPedComponente);

            return new RespostaDominio(objSolicitacao).addArgumento(true);
        }

        private RespostaDominio contaSalvar(SolicitacaoDominio objSolicitacao)
        {
            this.objConta = objSolicitacao.getObjArgumento<ContaDominio>();

            if (this.objConta == null)
            {
                throw new NullReferenceException();
            }

            TblConta.i.contaSalvar(this.objConta);

            this.objSessao.intJogadorId = this.objConta.intId;

            TblSessao.i.salvar(this.objSessao);

            return new RespostaDominio(objSolicitacao).addArgumento(this.objConta, this.objSessao);
        }

        private RespostaDominio entrar(SolicitacaoDominio objSolicitacao)
        {
            this.objConta = objSolicitacao.getObjArgumento<ContaDominio>();

            if (this.objConta == null)
            {
                throw new NullReferenceException();
            }

            TblConta.i.entrar(this.objConta);

            this.objSessao.intJogadorId = this.objConta.intId;

            TblSessao.i.salvar(this.objSessao);

            return new RespostaDominio(objSolicitacao).addArgumento(this.objConta, this.objSessao);
        }

        private void enviar(SolicitacaoDominio objSolicitacao)
        {
            if (objSolicitacao == null)
            {
                return;
            }

            AppRealLife.i.api.triggerClientEvent(this.objClient, "0", Json.i.toJson(objSolicitacao));
        }

        private void enviar(RespostaDominio objResposta)
        {
            if (objResposta == null)
            {
                return;
            }

            AppRealLife.i.api.triggerClientEvent(this.objClient, "1", Json.i.toJson(objResposta));
        }

        private void inicializar()
        {
            this.inicializarObjSessao();
        }

        private void inicializarObjSessao()
        {
            this.objSessao = new SessaoDominio();

            this.objSessao.dttAlteracao = DateTime.Now;
            this.objSessao.dttCadastro = DateTime.Now;
            this.objSessao.strIp = this.objClient.address;
            this.objSessao.strSessaoId = Utils.getStrToken(this.objSessao.intObjetoId.ToString(), this.objClient.address, DateTime.Now.ToString());

            TblSessao.i.salvar(this.objSessao);
        }

        private void processarOnClientEventTriggerLocal(Client objClient, object[] arrObjArg)
        {
            if (this.objClient == null)
            {
                return;
            }

            if (!this.objClient.Equals(objClient))
            {
                return;
            }

            if (arrObjArg == null)
            {
                return;
            }

            if (arrObjArg.Length < 1)
            {
                return;
            }

            if (arrObjArg[0] == null)
            {
                return;
            }

            SolicitacaoDominio objSolicitacao = null;

            try
            {
                objSolicitacao = Json.i.fromJson<SolicitacaoDominio>(arrObjArg[0].ToString());

                if (objSolicitacao == null)
                {
                    return;
                }

                var objResposta = this.processarSolicitacao(objSolicitacao);

                if (objResposta == null)
                {
                    return;
                }

                this.enviar(objResposta);
            }
            catch (Exception ex)
            {
                this.processarSolicitacaoErro(objSolicitacao, ex);
            }
        }

        private RespostaDominio processarSolicitacao(SolicitacaoDominio objSolicitacao)
        {
            switch (objSolicitacao.enmMetodo)
            {
                case SolicitacaoDominio.EnmMetodo.CONTA_SALVAR:
                    return this.contaSalvar(objSolicitacao);

                case SolicitacaoDominio.EnmMetodo.LOGIN_ENTRAR:
                    return this.entrar(objSolicitacao);

                case SolicitacaoDominio.EnmMetodo.APARENCIA_RECUPERAR:
                    return this.aparenciaRecuperar(objSolicitacao);

                case SolicitacaoDominio.EnmMetodo.APARENCIA_SALVAR:
                    return this.aparenciaSalvar(objSolicitacao);

                default:
                    return null;
            }
        }

        private void processarSolicitacaoErro(SolicitacaoDominio objSolicitacao, Exception ex)
        {
            var objResposta = new RespostaDominio(objSolicitacao);

            objResposta.strErro = ex.Message;

            this.enviar(objResposta);
        }

        private void setEventos()
        {
            AppRealLife.i.api.onClientEventTrigger += this.onClientEventTrigger;
        }

        #endregion Métodos

        #region Eventos

        private void onClientEventTrigger(Client objClient, string strMetodo, object[] arrObjArg)
        {
            new Thread(() => this.processarOnClientEventTriggerLocal(objClient, arrObjArg)).Start();
        }

        #endregion Eventos
    }
}