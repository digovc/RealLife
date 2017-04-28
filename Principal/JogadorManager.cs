using DigoFramework;
using GTANetworkServer;
using System.Collections.Generic;

namespace RealLife
{
    internal class JogadorManager : Objeto
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static JogadorManager _i;

        private List<Jogador> _lstObjJogador;

        public static JogadorManager i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new JogadorManager();

                return _i;
            }
        }

        private List<Jogador> lstObjJogador
        {
            get
            {
                if (_lstObjJogador != null)
                {
                    return _lstObjJogador;
                }

                _lstObjJogador = new List<Jogador>();

                return _lstObjJogador;
            }
        }

        #endregion Atributos

        #region Construtores

        private JogadorManager()
        {
        }

        #endregion Construtores

        #region Métodos

        internal void iniciar()
        {
            this.setEventos();
        }

        private void processarOnPlayerConnected(ClientRealLife objClient)
        {
            if (objClient == null)
            {
                return;
            }

            var objJogador = new Jogador();

            objJogador.objClient = objClient;

            objJogador.iniciar();

            this.lstObjJogador.Add(objJogador);
        }

        private void setEventos()
        {
            AppRealLife.i.api.onPlayerConnected += this.onPlayerConnected;
        }

        #endregion Métodos

        #region Eventos

        private void onPlayerConnected(ClientRealLife objClient)
        {
            this.processarOnPlayerConnected(objClient);
        }

        #endregion Eventos
    }
}