using NetZ.Persistencia;
using RealLife.DataBase.Dominio;
using System;
using System.Collections.Generic;

namespace RealLife.DataBase.Tabela
{
    internal class TblJogador : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblJogador _i;

        private Coluna _clnStrEmail;
        private Coluna _clnStrGametag;
        private Coluna _clnStrSenha;

        public static TblJogador i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblJogador();

                return _i;
            }
        }

        public Coluna clnStrEmail
        {
            get
            {
                if (_clnStrEmail != null)
                {
                    return _clnStrEmail;
                }

                _clnStrEmail = new Coluna("str_email", this, Coluna.EnmTipo.TEXT);

                return _clnStrEmail;
            }
        }

        public Coluna clnStrGametag
        {
            get
            {
                if (_clnStrGametag != null)
                {
                    return _clnStrGametag;
                }

                _clnStrGametag = new Coluna("str_gametag", this, Coluna.EnmTipo.TEXT);

                return _clnStrGametag;
            }
        }

        public Coluna clnStrSenha
        {
            get
            {
                if (_clnStrSenha != null)
                {
                    return _clnStrSenha;
                }

                _clnStrSenha = new Coluna("str_senha", this, Coluna.EnmTipo.TEXT);

                return _clnStrSenha;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblJogador() : base("tbl_jogador")
        {
        }

        #endregion Construtores

        #region Métodos

        internal void criarConta(JogadorDominio objJogador)
        {
            try
            {
                this.bloquearThread();

                this.criarContaValidar(objJogador);
                this.criarContaPreparar(objJogador);

                this.salvar(objJogador);
            }
            finally
            {
                this.liberarThread();
            }
        }

        internal void entrar(JogadorDominio objJogador)
        {
            try
            {
                this.bloquearThread();

                if (objJogador == null)
                {
                    throw new NullReferenceException("O objeto jogador não pode estar nulo.");
                }

                if (string.IsNullOrEmpty(objJogador.strEmail) && string.IsNullOrEmpty(objJogador.strGametag))
                {
                    throw new ArgumentException("Um email ou gametag válido deve ser informado.");
                }

                if (string.IsNullOrEmpty(objJogador.strSenha))
                {
                    throw new ArgumentException("A senha deve ser informada.");
                }

                var lstFil = new List<Filtro>();

                if (!string.IsNullOrEmpty(objJogador.strEmail))
                {
                    lstFil.Add(new Filtro(this.clnStrEmail, objJogador.strEmail.ToLower()));
                }
                else
                {
                    lstFil.Add(new Filtro(this.clnStrGametag, objJogador.strGametag));
                }

                lstFil.Add(new Filtro(this.clnStrSenha, objJogador.strSenha));

                this.recuperar(lstFil);

                if (this.clnIntId.intValor < 1)
                {
                    throw new Exception("Dados inválidos.");
                }
            }
            finally
            {
                this.liberarThread();
            }
        }

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnStrEmail.intOrdem += intOrdem;
            this.clnStrGametag.intOrdem += intOrdem;
            this.clnStrSenha.intOrdem += intOrdem;

            return intOrdem;
        }

        private void criarContaPreparar(JogadorDominio objJogador)
        {
            objJogador.strEmail = objJogador.strEmail.ToLower();
        }

        private void criarContaValidar(JogadorDominio objJogador)
        {
            if (objJogador == null)
            {
                throw new NullReferenceException("O objeto jogador não pode estar nulo.");
            }

            if (string.IsNullOrEmpty(objJogador.strEmail))
            {
                throw new NullReferenceException("O email deve ser informado.");
            }

            if (string.IsNullOrEmpty(objJogador.strEmail))
            {
                throw new NullReferenceException("O email deve ser informado.");
            }

            if (string.IsNullOrEmpty(objJogador.strGametag))
            {
                throw new NullReferenceException("A gametag deve ser informada.");
            }

            if (string.IsNullOrEmpty(objJogador.strSenha))
            {
                throw new NullReferenceException("A senha deve ser informada.");
            }

            this.recuperar(this.clnStrEmail, objJogador.strEmail.ToLower());

            if (this.clnIntId.intValor > 0)
            {
                throw new NullReferenceException("Este email já está sendo usado.");
            }

            this.recuperar(this.clnStrGametag, objJogador.strGametag);

            if (this.clnIntId.intValor > 0)
            {
                throw new NullReferenceException("Esta gametag já está sendo usada.");
            }
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}