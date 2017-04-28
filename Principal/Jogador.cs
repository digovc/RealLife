using GTANetworkServer;
using RealLife.DataBase.Dominio;
using System.Threading;

namespace RealLife
{
    internal class Jogador
    {
        #region Constantes

        private const string STR_METODO_ENTRAR = "STR_METODO_ENTRAR";
        private const string STR_METODO_ENTRAR_SUCESSO = "STR_METODO_ENTRAR_SUCESSO";

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

        private void entrar(object[] arrObjArg)
        {
            // TODO: Implementar a leitura dos argumentos.

            this.objJogador = new JogadorDominio();

            // TODO: Validar dados do jogador.

            this.entrarSucesso();
        }

        private void entrarSucesso()
        {
            ClientRealLife.i.executarJson(this.objClient, this.GetType().Name, "entrarSucesso", this.objJogador);
        }

        private void processarOnClientEventTrigger(string strMetodo, object[] arrObjArg)
        {
            switch (strMetodo)
            {
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

            this.processarOnClientEventTrigger(strMetodo, arrObjArg);
        }

        #endregion Eventos
    }
}