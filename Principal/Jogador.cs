using DigoFramework;
using DigoFramework.Json;
using GTANetworkServer;
using RealLife.DataBase.Dominio;
using RealLife.DataBase.Tabela;
using System;
using System.Collections.Generic;
using System.Threading;

namespace RealLife
{
    internal class Jogador : Objeto
    {
        #region Constantes

        private const string STR_METODO_CRIAR_CONTA = "STR_METODO_CRIAR_CONTA";
        private const string STR_METODO_CRIAR_CONTA_SUCESSO = "STR_METODO_CRIAR_CONTA_SUCESSO";
        private const string STR_METODO_ENTRAR = "STR_METODO_ENTRAR";
        private const string STR_METODO_ENTRAR_SUCESSO = "STR_METODO_ENTRAR_SUCESSO";
        private const string STR_METODO_ERRO = "STR_METODO_ERRO";
        private const string STR_METODO_SALVAR_APARENCIA = "STR_METODO_SALVAR_APARENCIA";
        private const string STR_METODO_SALVAR_APARENCIA_SUCESSO = "STR_METODO_SALVAR_APARENCIA_SUCESSO";

        private const string STR_SYNC_TAG = "STR_SYNC_TAG";

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

        private void criarConta(object[] arrObjArg)
        {
            this.objConta = this.getObjArg<ContaDominio>(arrObjArg);

            if (this.objConta == null)
            {
                return;
            }

            TblConta.i.criarConta(this.objConta);

            this.objSessao.intJogadorId = this.objConta.intId;

            TblSessao.i.salvar(this.objSessao);

            this.criarContaSucesso();
        }

        private void criarContaSucesso()
        {
            ClientRealLife.i.executar(this.objClient, STR_METODO_CRIAR_CONTA_SUCESSO);
        }

        private void entrar(object[] arrObjArg)
        {
            this.objConta = this.getObjArg<ContaDominio>(arrObjArg);

            if (this.objConta == null)
            {
                return;
            }

            TblConta.i.entrar(this.objConta);

            this.objSessao.intJogadorId = this.objConta.intId;

            TblSessao.i.salvar(this.objSessao);

            this.entrarSucesso();
        }

        private void entrarSucesso()
        {
            ClientRealLife.i.executar(this.objClient, STR_METODO_ENTRAR_SUCESSO, this.objConta);
        }

        private T getObjArg<T>(object[] arrObjArg, int intIndex = 0)
        {
            if (arrObjArg == null)
            {
                return default(T);
            }

            if (intIndex < 0)
            {
                return default(T);
            }

            if (arrObjArg.Length < (intIndex + 1))
            {
                return default(T);
            }

            var jsn = arrObjArg[intIndex].ToString();

            if (string.IsNullOrEmpty(jsn))
            {
                return default(T);
            }

            return Json.i.fromJson<T>(jsn);
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

        private void processarErro(string strMetodo, Exception ex)
        {
            if (string.IsNullOrEmpty(strMetodo))
            {
                return;
            }

            if (ex == null)
            {
                return;
            }

            var objErro = new ErroDominio();

            objErro.strMensagem = ex.Message;

            ClientRealLife.i.executar(this.objClient, STR_METODO_ERRO, strMetodo, objErro);
        }

        private void processarOnClientEventTrigger(string strMetodo, object[] arrObjArg)
        {
            if (this.processarOnClientEventTriggerSync(strMetodo, arrObjArg))
            {
                return;
            }

            switch (strMetodo)
            {
                case STR_METODO_CRIAR_CONTA:
                    this.criarConta(arrObjArg);
                    return;

                case STR_METODO_ENTRAR:
                    this.entrar(arrObjArg);
                    return;

                case STR_METODO_SALVAR_APARENCIA:
                    this.salvarAparencia(arrObjArg);
                    return;
            }
        }

        private bool processarOnClientEventTriggerSync(string strMetodo, object[] arrObjArg)
        {
            if (arrObjArg == null)
            {
                return false;
            }

            if (arrObjArg.Length < 1)
            {
                return false;
            }

            if (!STR_SYNC_TAG.Equals(arrObjArg[0]))
            {
                return false;
            }

            var lstObjArg = new List<object>(arrObjArg);

            lstObjArg.RemoveRange(0, 2);

            arrObjArg = lstObjArg.ToArray();

            lstObjArg.Clear();

            lstObjArg.Add(STR_SYNC_TAG);

            switch (strMetodo)
            {
                //case STR_METODO_CRIAR_CONTA:
                //    lstObjArgResultado = this.criarConta(arrObjArg);
                //    break;
            }

            ClientRealLife.i.executar(this.objClient, strMetodo, lstObjArg.ToArray());

            return true;
        }

        private void salvarAparencia(object[] arrObjArg)
        {
            var objPersonagem = this.getObjArg<PersonagemDominio>(arrObjArg);

            if (objPersonagem == null)
            {
                return;
            }

            if (this.objConta == null)
            {
                return;
            }

            if (this.objSessao == null)
            {
                return;
            }

            TblPersonagem.i.salvarAparencia(this.objConta, this.objSessao, objPersonagem);

            if (objPersonagem.intId < 1)
            {
                throw new Exception("Erro ao salvar o personagem.");
            }

            var arrObjHeadOverlay = this.getObjArg<HeadOverlayDominio[]>(arrObjArg, 1);

            TblHeadOverlay.i.salvarAparencia(objPersonagem, objSessao, arrObjHeadOverlay);

            var arrObjPedComponente = this.getObjArg<PedComponenteDominio[]>(arrObjArg, 2);

            TblPedComponente.i.salvarAparencia(objPersonagem, objSessao, arrObjPedComponente);

            this.salvarAparenciaSucesso();
        }

        private void salvarAparenciaSucesso()
        {
            ClientRealLife.i.executar(this.objClient, STR_METODO_SALVAR_APARENCIA_SUCESSO);
        }

        private void setEventos()
        {
            AppRealLife.i.api.onClientEventTrigger += this.onClientEventTrigger;
        }

        #endregion Métodos

        #region Eventos

        private void onClientEventTrigger(Client objClient, string strMetodo, object[] arrObjArg)
        {
            new Thread(() => this.onClientEventTriggerLocal(objClient, strMetodo, arrObjArg)).Start();
        }

        private void onClientEventTriggerLocal(Client objClient, string strMetodo, object[] arrObjArg)
        {
            if (this.objClient == null)
            {
                return;
            }

            if (!this.objClient.Equals(objClient))
            {
                return;
            }

            if (string.IsNullOrEmpty(strMetodo))
            {
                return;
            }

            try
            {
                this.processarOnClientEventTrigger(strMetodo, arrObjArg);
            }
            catch (Exception ex)
            {
                this.processarErro(strMetodo, ex);
            }
        }

        #endregion Eventos
    }
}