using NetZ.Persistencia;
using RealLife.DataBase.Dominio;
using System;
using System.Collections.Generic;

namespace RealLife.DataBase.Tabela
{
    internal class TblConta : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblConta _i;

        private Coluna _clnStrEmail;
        private Coluna _clnStrGametag;
        private Coluna _clnStrSenha;

        public static TblConta i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblConta();

                return _i;
            }
        }

        private Coluna clnStrEmail
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

        private Coluna clnStrGametag
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

        private Coluna clnStrSenha
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

        private TblConta() : base("tbl_conta")
        {
        }

        #endregion Construtores

        #region Métodos

        internal void criarConta(ContaDominio objConta)
        {
            try
            {
                this.bloquearThread();

                this.criarContaValidar(objConta);

                this.criarContaPreparar(objConta);

                this.salvar(objConta);

                objConta.intId = this.clnIntId.intValor;
            }
            finally
            {
                this.liberarThread();
            }
        }

        internal void entrar(ContaDominio objConta)
        {
            try
            {
                this.bloquearThread();

                if (objConta == null)
                {
                    throw new NullReferenceException("O objeto conta não pode estar nulo.");
                }

                if (string.IsNullOrEmpty(objConta.strEmail) && string.IsNullOrEmpty(objConta.strGametag))
                {
                    throw new ArgumentException("Um email ou gametag válido deve ser informado.");
                }

                if (string.IsNullOrEmpty(objConta.strSenha))
                {
                    throw new ArgumentException("A senha deve ser informada.");
                }

                var lstFil = new List<Filtro>();

                if (!string.IsNullOrEmpty(objConta.strEmail))
                {
                    lstFil.Add(new Filtro(this.clnStrEmail, objConta.strEmail.ToLower()));
                }
                else
                {
                    lstFil.Add(new Filtro(this.clnStrGametag, objConta.strGametag));
                }

                lstFil.Add(new Filtro(this.clnStrSenha, objConta.strSenha));

                this.recuperar(lstFil);

                if (this.clnIntId.intValor < 1)
                {
                    throw new Exception("Dados inválidos.");
                }

                objConta.intId = this.clnIntId.intValor;
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

        private void criarContaPreparar(ContaDominio objConta)
        {
            objConta.strEmail = objConta.strEmail.ToLower();
        }

        private void criarContaValidar(ContaDominio objConta)
        {
            if (objConta == null)
            {
                throw new NullReferenceException("O objeto conta não pode estar nulo.");
            }

            if (string.IsNullOrEmpty(objConta.strEmail))
            {
                throw new NullReferenceException("O email deve ser informado.");
            }

            if (string.IsNullOrEmpty(objConta.strEmail))
            {
                throw new NullReferenceException("O email deve ser informado.");
            }

            if (string.IsNullOrEmpty(objConta.strGametag))
            {
                throw new NullReferenceException("A gametag deve ser informada.");
            }

            if (string.IsNullOrEmpty(objConta.strSenha))
            {
                throw new NullReferenceException("A senha deve ser informada.");
            }

            this.recuperar(this.clnStrEmail, objConta.strEmail.ToLower());

            if (this.clnIntId.intValor > 0)
            {
                throw new NullReferenceException("Este email já está sendo usado.");
            }

            this.recuperar(this.clnStrGametag, objConta.strGametag);

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