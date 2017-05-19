using NetZ.Persistencia;
using RealLife.DataBase.Dominio;

namespace RealLife.DataBase.Tabela
{
    internal class TblPersonagem : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblPersonagem _i;

        private Coluna _clnBooAtivo;
        private Coluna _clnBooMasculino;
        private Coluna _clnIntContaId;
        private Coluna _clnIntDinheiro;
        private Coluna _clnIntDoenca;
        private Coluna _clnIntExperiencia;
        private Coluna _clnIntFome;
        private Coluna _clnIntForca;
        private Coluna _clnIntInteligencia;
        private Coluna _clnIntNivel;
        private Coluna _clnIntPericiaArma;
        private Coluna _clnIntPericiaAviao;
        private Coluna _clnIntPericiaBarco;
        private Coluna _clnIntPericiaCarro;
        private Coluna _clnIntResistencia;
        private Coluna _clnIntSangue;
        private Coluna _clnIntSanidade;
        private Coluna _clnIntSessaoCadastroId;
        private Coluna _clnIntSessaoUltimaId;
        private Coluna _clnIntSono;
        private Coluna _clnIntVelocidade;

        public static TblPersonagem i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new TblPersonagem();

                return _i;
            }
        }

        private Coluna clnBooAtivo
        {
            get
            {
                if (_clnBooAtivo != null)
                {
                    return _clnBooAtivo;
                }

                _clnBooAtivo = new Coluna("boo_ativo", this, Coluna.EnmTipo.BOOLEAN);

                return _clnBooAtivo;
            }
        }

        private Coluna clnBooMasculino
        {
            get
            {
                if (_clnBooMasculino != null)
                {
                    return _clnBooMasculino;
                }

                _clnBooMasculino = new Coluna("boo_masculino", this, Coluna.EnmTipo.BOOLEAN);

                return _clnBooMasculino;
            }
        }

        private Coluna clnIntContaId
        {
            get
            {
                if (_clnIntContaId != null)
                {
                    return _clnIntContaId;
                }

                _clnIntContaId = new Coluna("int_conta_id", this, Coluna.EnmTipo.BIGINT, TblConta.i.clnIntId);

                return _clnIntContaId;
            }
        }

        private Coluna clnIntDinheiro
        {
            get
            {
                if (_clnIntDinheiro != null)
                {
                    return _clnIntDinheiro;
                }

                _clnIntDinheiro = new Coluna("int_dinheiro", this, Coluna.EnmTipo.INTEGER);

                return _clnIntDinheiro;
            }
        }

        private Coluna clnIntDoenca
        {
            get
            {
                if (_clnIntDoenca != null)
                {
                    return _clnIntDoenca;
                }

                _clnIntDoenca = new Coluna("int_doenca", this, Coluna.EnmTipo.INTEGER);

                return _clnIntDoenca;
            }
        }

        private Coluna clnIntExperiencia
        {
            get
            {
                if (_clnIntExperiencia != null)
                {
                    return _clnIntExperiencia;
                }

                _clnIntExperiencia = new Coluna("int_experiencia", this, Coluna.EnmTipo.INTEGER);

                return _clnIntExperiencia;
            }
        }

        private Coluna clnIntFome
        {
            get
            {
                if (_clnIntFome != null)
                {
                    return _clnIntFome;
                }

                _clnIntFome = new Coluna("int_fome", this, Coluna.EnmTipo.INTEGER);

                return _clnIntFome;
            }
        }

        private Coluna clnIntForca
        {
            get
            {
                if (_clnIntForca != null)
                {
                    return _clnIntForca;
                }

                _clnIntForca = new Coluna("int_forca", this, Coluna.EnmTipo.INTEGER);

                return _clnIntForca;
            }
        }

        private Coluna clnIntInteligencia
        {
            get
            {
                if (_clnIntInteligencia != null)
                {
                    return _clnIntInteligencia;
                }

                _clnIntInteligencia = new Coluna("int_inteligencia", this, Coluna.EnmTipo.INTEGER);

                return _clnIntInteligencia;
            }
        }

        private Coluna clnIntNivel
        {
            get
            {
                if (_clnIntNivel != null)
                {
                    return _clnIntNivel;
                }

                _clnIntNivel = new Coluna("int_nivel", this, Coluna.EnmTipo.INTEGER);

                return _clnIntNivel;
            }
        }

        private Coluna clnIntPericiaArma
        {
            get
            {
                if (_clnIntPericiaArma != null)
                {
                    return _clnIntPericiaArma;
                }

                _clnIntPericiaArma = new Coluna("int_pericia_arma", this, Coluna.EnmTipo.INTEGER);

                return _clnIntPericiaArma;
            }
        }

        private Coluna clnIntPericiaAviao
        {
            get
            {
                if (_clnIntPericiaAviao != null)
                {
                    return _clnIntPericiaAviao;
                }

                _clnIntPericiaAviao = new Coluna("int_pericia_aviao", this, Coluna.EnmTipo.INTEGER);

                return _clnIntPericiaAviao;
            }
        }

        private Coluna clnIntPericiaBarco
        {
            get
            {
                if (_clnIntPericiaBarco != null)
                {
                    return _clnIntPericiaBarco;
                }

                _clnIntPericiaBarco = new Coluna("int_pericia_barco", this, Coluna.EnmTipo.INTEGER);

                return _clnIntPericiaBarco;
            }
        }

        private Coluna clnIntPericiaCarro
        {
            get
            {
                if (_clnIntPericiaCarro != null)
                {
                    return _clnIntPericiaCarro;
                }

                _clnIntPericiaCarro = new Coluna("int_pericia_carro", this, Coluna.EnmTipo.INTEGER);

                return _clnIntPericiaCarro;
            }
        }

        private Coluna clnIntResistencia
        {
            get
            {
                if (_clnIntResistencia != null)
                {
                    return _clnIntResistencia;
                }

                _clnIntResistencia = new Coluna("int_resistencia", this, Coluna.EnmTipo.INTEGER);

                return _clnIntResistencia;
            }
        }

        private Coluna clnIntSangue
        {
            get
            {
                if (_clnIntSangue != null)
                {
                    return _clnIntSangue;
                }

                _clnIntSangue = new Coluna("int_sangue", this, Coluna.EnmTipo.INTEGER);

                return _clnIntSangue;
            }
        }

        private Coluna clnIntSanidade
        {
            get
            {
                if (_clnIntSanidade != null)
                {
                    return _clnIntSanidade;
                }

                _clnIntSanidade = new Coluna("int_sanidade", this, Coluna.EnmTipo.INTEGER);

                return _clnIntSanidade;
            }
        }

        private Coluna clnIntSessaoCadastroId
        {
            get
            {
                if (_clnIntSessaoCadastroId != null)
                {
                    return _clnIntSessaoCadastroId;
                }

                _clnIntSessaoCadastroId = new Coluna("int_sessao_cadastro_id", this, Coluna.EnmTipo.BIGINT);

                return _clnIntSessaoCadastroId;
            }
        }

        private Coluna clnIntSessaoUltimaId
        {
            get
            {
                if (_clnIntSessaoUltimaId != null)
                {
                    return _clnIntSessaoUltimaId;
                }

                _clnIntSessaoUltimaId = new Coluna("int_sessao_ultima_id", this, Coluna.EnmTipo.BIGINT);

                return _clnIntSessaoUltimaId;
            }
        }

        private Coluna clnIntSono
        {
            get
            {
                if (_clnIntSono != null)
                {
                    return _clnIntSono;
                }

                _clnIntSono = new Coluna("int_sono", this, Coluna.EnmTipo.INTEGER);

                return _clnIntSono;
            }
        }

        private Coluna clnIntVelocidade
        {
            get
            {
                if (_clnIntVelocidade != null)
                {
                    return _clnIntVelocidade;
                }

                _clnIntVelocidade = new Coluna("int_velocidade", this, Coluna.EnmTipo.INTEGER);

                return _clnIntVelocidade;
            }
        }

        #endregion Atributos

        #region Construtores

        private TblPersonagem() : base("tbl_personagem")
        {
        }

        #endregion Construtores

        #region Métodos

        internal void salvarAparencia(ContaDominio objConta, SessaoDominio objSessao, PersonagemDominio objPersonagem)
        {
            if (objConta == null)
            {
                return;
            }

            if (objConta.intId < 1)
            {
                return;
            }

            if (objSessao == null)
            {
                return;
            }

            if (objSessao.intId < 1)
            {
                return;
            }

            if (objPersonagem == null)
            {
                return;
            }

            this.dbe.execSql(string.Format("update {0} set {1} = false where {2} = {3};", this.sqlNome, this.clnBooAtivo.sqlNome, this.clnIntContaId.sqlNome, objConta.intId));

            objPersonagem.booAtivo = true;
            objPersonagem.intContaId = objConta.intId;
            objPersonagem.intDinheiro = 2500;
            objPersonagem.intSangue = 100;
            objPersonagem.intSessaoCadastroId = objSessao.intId;
            objPersonagem.intSessaoUltimaId = objSessao.intId;

            this.salvar(objPersonagem);
        }

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnBooAtivo.intOrdem += intOrdem;
            this.clnBooMasculino.intOrdem += intOrdem;
            this.clnIntContaId.intOrdem += intOrdem;
            this.clnIntDinheiro.intOrdem += intOrdem;
            this.clnIntDoenca.intOrdem += intOrdem;
            this.clnIntExperiencia.intOrdem += intOrdem;
            this.clnIntFome.intOrdem += intOrdem;
            this.clnIntForca.intOrdem += intOrdem;
            this.clnIntInteligencia.intOrdem += intOrdem;
            this.clnIntNivel.intOrdem += intOrdem;
            this.clnIntPericiaArma.intOrdem += intOrdem;
            this.clnIntPericiaAviao.intOrdem += intOrdem;
            this.clnIntPericiaBarco.intOrdem += intOrdem;
            this.clnIntPericiaCarro.intOrdem += intOrdem;
            this.clnIntResistencia.intOrdem += intOrdem;
            this.clnIntSangue.intOrdem += intOrdem;
            this.clnIntSanidade.intOrdem += intOrdem;
            this.clnIntSessaoCadastroId.intOrdem += intOrdem;
            this.clnIntSessaoUltimaId.intOrdem += intOrdem;
            this.clnIntSono.intOrdem += intOrdem;
            this.clnIntVelocidade.intOrdem += intOrdem;

            return intOrdem;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}