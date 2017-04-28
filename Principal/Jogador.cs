using DigoFramework.Json;
using GTANetworkServer;
using RealLife.DataBase.Dominio;
using RealLife.DataBase.Tabela;
using System;
using System.Threading;

namespace RealLife
{
    internal class Jogador
    {
        #region Constantes

        private const string STR_METODO_CRIAR_CONTA = "STR_METODO_CRIAR_CONTA";
        private const string STR_METODO_CRIAR_CONTA_SUCESSO = "STR_METODO_CRIAR_CONTA_SUCESSO";
        private const string STR_METODO_ENTRAR = "STR_METODO_ENTRAR";
        private const string STR_METODO_ENTRAR_SUCESSO = "STR_METODO_ENTRAR_SUCESSO";
        private const string STR_METODO_ERRO = "STR_METODO_ERRO";

        #endregion Constantes

        #region Atributos

        private Client _objClient;
        private JogadorDominio _objJogador;

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

        private JogadorDominio objJogador
        {
            get
            {
                return _objJogador;
            }

            set
            {
                _objJogador = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        internal void iniciar()
        {
            this.setEventos();
        }

        private void criarConta(object[] arrObjArg)
        {
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

            this.objJogador = Json.i.fromJson<JogadorDominio>(arrObjArg[0].ToString());

            TblJogador.i.criarConta(this.objJogador);

            this.criarContaSucesso();
        }

        private void criarContaSucesso()
        {
            ClientRealLife.i.executar(this.objClient, STR_METODO_CRIAR_CONTA_SUCESSO);
        }

        private void entrar(object[] arrObjArg)
        {
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

            this.objJogador = Json.i.fromJson<JogadorDominio>(arrObjArg[0].ToString());

            TblJogador.i.entrar(this.objJogador);

            this.entrarSucesso();
        }

        private void entrarSucesso()
        {
            ClientRealLife.i.executar(this.objClient, STR_METODO_ENTRAR_SUCESSO, this.objJogador);
        }

        private void processarErro(Exception ex)
        {
            if (ex == null)
            {
                return;
            }

            var objErro = new ErroDominio();

            objErro.strMensagem = ex.Message;

            ClientRealLife.i.executar(this.objClient, STR_METODO_ERRO, objErro);
        }

        private void processarOnClientEventTrigger(string strMetodo, object[] arrObjArg)
        {
            switch (strMetodo)
            {
                case STR_METODO_CRIAR_CONTA:
                    this.criarConta(arrObjArg);
                    return;

                case STR_METODO_ENTRAR:
                    this.entrar(arrObjArg);
                    return;
            }
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
                this.processarErro(ex);
            }
        }

        #endregion Eventos
    }
}