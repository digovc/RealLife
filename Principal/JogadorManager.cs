﻿using DigoFramework;
using GTANetworkServer;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        private void processarOnPlayerConnected(Client objClient)
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

        private void processarOnPlayerDisconnected(Client objClient, string strMotivo)
        {
            if (objClient == null)
            {
                return;
            }

            foreach (var objJogador in this.lstObjJogador)
            {
                if (!objClient.Equals(objJogador.objClient))
                {
                    continue;
                }

                objJogador.desconectar();

                this.lstObjJogador.Remove(objJogador);
                return;
            }
        }

        private void setEventos()
        {
            AppRealLife.i.api.onPlayerConnected += this.onPlayerConnected;
            AppRealLife.i.api.onPlayerDisconnected += this.onPlayerDisconnected;
        }

        #endregion Métodos

        #region Eventos

        private void onPlayerConnected(Client objClient)
        {
            new Task(() => this.processarOnPlayerConnected(objClient)).Start();
        }

        private void onPlayerDisconnected(Client objClient, string strMotivo)
        {
            new Task(() => this.processarOnPlayerDisconnected(objClient, strMotivo)).Start();
        }

        #endregion Eventos
    }
}