using NetZ.Persistencia;

namespace RealLife.DataBase.Tabela
{
    internal class TblPersonagem : TblRealLifeBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static TblPersonagem _i;

        private Coluna _clnBooMasculino;
        private Coluna _clnFltAvoPercentual;
        private Coluna _clnFltMaePercentual;
        private Coluna _clnFltPaiPercentual;
        private Coluna _clnIntAvo;
        private Coluna _clnIntDinheiro;
        private Coluna _clnIntDoenca;
        private Coluna _clnIntExperiencia;
        private Coluna _clnIntFome;
        private Coluna _clnIntForca;
        private Coluna _clnIntInteligencia;
        private Coluna _clnIntJogadorId;
        private Coluna _clnIntMae;
        private Coluna _clnIntNivel;
        private Coluna _clnIntPai;
        private Coluna _clnIntPericiaArma;
        private Coluna _clnIntPericiaAviao;
        private Coluna _clnIntPericiaBarco;
        private Coluna _clnIntPericiaCarro;
        private Coluna _clnIntResistencia;
        private Coluna _clnIntSangue;
        private Coluna _clnIntSanidade;
        private Coluna _clnIntSessaoId;
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

        public Coluna clnBooMasculino
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

        public Coluna clnFltAvoPercentual
        {
            get
            {
                if (_clnFltAvoPercentual != null)
                {
                    return _clnFltAvoPercentual;
                }

                _clnFltAvoPercentual = new Coluna("flt_avo_percentual", this, Coluna.EnmTipo.FLOAT);

                return _clnFltAvoPercentual;
            }
        }

        public Coluna clnFltMaePercentual
        {
            get
            {
                if (_clnFltMaePercentual != null)
                {
                    return _clnFltMaePercentual;
                }

                _clnFltMaePercentual = new Coluna("flt_mae_percentual", this, Coluna.EnmTipo.FLOAT);

                return _clnFltMaePercentual;
            }
        }

        public Coluna clnFltPaiPercentual
        {
            get
            {
                if (_clnFltPaiPercentual != null)
                {
                    return _clnFltPaiPercentual;
                }

                _clnFltPaiPercentual = new Coluna("flt_pai_percentual", this, Coluna.EnmTipo.FLOAT);

                return _clnFltPaiPercentual;
            }
        }

        public Coluna clnIntAvo
        {
            get
            {
                if (_clnIntAvo != null)
                {
                    return _clnIntAvo;
                }

                _clnIntAvo = new Coluna("int_avo", this, Coluna.EnmTipo.INTEGER);

                return _clnIntAvo;
            }
        }

        public Coluna clnIntDinheiro
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

        public Coluna clnIntDoenca
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

        public Coluna clnIntExperiencia
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

        public Coluna clnIntFome
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

        public Coluna clnIntForca
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

        public Coluna clnIntInteligencia
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

        public Coluna clnIntJogadorId
        {
            get
            {
                if (_clnIntJogadorId != null)
                {
                    return _clnIntJogadorId;
                }

                _clnIntJogadorId = new Coluna("int_jogador_id", this, Coluna.EnmTipo.BIGINT, TblJogador.i.clnIntId);

                return _clnIntJogadorId;
            }
        }

        public Coluna clnIntMae
        {
            get
            {
                if (_clnIntMae != null)
                {
                    return _clnIntMae;
                }

                _clnIntMae = new Coluna("int_mae", this, Coluna.EnmTipo.INTEGER);

                return _clnIntMae;
            }
        }

        public Coluna clnIntNivel
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

        public Coluna clnIntPai
        {
            get
            {
                if (_clnIntPai != null)
                {
                    return _clnIntPai;
                }

                _clnIntPai = new Coluna("int_pai", this, Coluna.EnmTipo.INTEGER);

                return _clnIntPai;
            }
        }

        public Coluna clnIntPericiaArma
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

        public Coluna clnIntPericiaAviao
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

        public Coluna clnIntPericiaBarco
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

        public Coluna clnIntPericiaCarro
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

        public Coluna clnIntResistencia
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

        public Coluna clnIntSangue
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

        public Coluna clnIntSanidade
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

        public Coluna clnIntSessaoId
        {
            get
            {
                if (_clnIntSessaoId != null)
                {
                    return _clnIntSessaoId;
                }

                _clnIntSessaoId = new Coluna("int_sessao_id", this, Coluna.EnmTipo.BIGINT);

                return _clnIntSessaoId;
            }
        }

        public Coluna clnIntSono
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

        public Coluna clnIntVelocidade
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

        protected override int inicializarColunas(int intOrdem)
        {
            intOrdem = base.inicializarColunas(intOrdem);

            this.clnBooMasculino.intOrdem += intOrdem;
            this.clnFltAvoPercentual.intOrdem += intOrdem;
            this.clnFltMaePercentual.intOrdem += intOrdem;
            this.clnFltPaiPercentual.intOrdem += intOrdem;
            this.clnIntAvo.intOrdem += intOrdem;
            this.clnIntDinheiro.intOrdem += intOrdem;
            this.clnIntDoenca.intOrdem += intOrdem;
            this.clnIntExperiencia.intOrdem += intOrdem;
            this.clnIntFome.intOrdem += intOrdem;
            this.clnIntForca.intOrdem += intOrdem;
            this.clnIntInteligencia.intOrdem += intOrdem;
            this.clnIntJogadorId.intOrdem += intOrdem;
            this.clnIntMae.intOrdem += intOrdem;
            this.clnIntNivel.intOrdem += intOrdem;
            this.clnIntPai.intOrdem += intOrdem;
            this.clnIntPericiaArma.intOrdem += intOrdem;
            this.clnIntPericiaAviao.intOrdem += intOrdem;
            this.clnIntPericiaBarco.intOrdem += intOrdem;
            this.clnIntPericiaCarro.intOrdem += intOrdem;
            this.clnIntResistencia.intOrdem += intOrdem;
            this.clnIntSangue.intOrdem += intOrdem;
            this.clnIntSanidade.intOrdem += intOrdem;
            this.clnIntSessaoId.intOrdem += intOrdem;
            this.clnIntSono.intOrdem += intOrdem;
            this.clnIntVelocidade.intOrdem += intOrdem;

            return intOrdem;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}