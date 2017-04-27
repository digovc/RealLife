/// <reference path="../../../RealLifeDominio.TypeScript/MissaoConclusaoDominio.ts"/>

module RealLifeUi
{
    // #region Importações

    import MissaoConclusaoDominio = RealLifeDominio.MissaoConclusaoDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagMissaoConclusao extends PagRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private static _i: PagMissaoConclusao;

        public static get i(): PagMissaoConclusao
        {
            if (PagMissaoConclusao._i != null)
            {
                return PagMissaoConclusao._i;
            }

            PagMissaoConclusao._i = new PagMissaoConclusao();

            return PagMissaoConclusao._i;
        }

        private _divMissaoDinheiro: DivMissaoDinheiro;
        private _divMissaoResultado: DivMissaoResultado;
        private _divMissaoRp: DivMissaoRp;
        private _divMissaoRpProgresso: DivMissaoRpProgresso;
        private _objMissaoConclusao: MissaoConclusaoDominio;

        private get divMissaoDinheiro(): DivMissaoDinheiro
        {
            if (this._divMissaoDinheiro != null)
            {
                return this._divMissaoDinheiro;
            }

            this._divMissaoDinheiro = new DivMissaoDinheiro();

            return this._divMissaoDinheiro;
        }

        private get divMissaoResultado(): DivMissaoResultado
        {
            if (this._divMissaoResultado != null)
            {
                return this._divMissaoResultado;
            }

            this._divMissaoResultado = new DivMissaoResultado();

            return this._divMissaoResultado;
        }

        private get divMissaoRp(): DivMissaoRp
        {
            if (this._divMissaoRp != null)
            {
                return this._divMissaoRp;
            }

            this._divMissaoRp = new DivMissaoRp();

            return this._divMissaoRp;
        }

        private get divMissaoRpProgresso(): DivMissaoRpProgresso
        {
            if (this._divMissaoRpProgresso != null)
            {
                return this._divMissaoRpProgresso;
            }

            this._divMissaoRpProgresso = new DivMissaoRpProgresso();

            return this._divMissaoRpProgresso;
        }

        public get objMissaoConclusao(): MissaoConclusaoDominio
        {
            return this._objMissaoConclusao;
        }

        public set objMissaoConclusao(objMissaoConclusao: MissaoConclusaoDominio)
        {
            this._objMissaoConclusao = objMissaoConclusao;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public animar(): void
        {
            if (this.objMissaoConclusao == null)
            {
                return;
            }

            this.divMissaoResultado.animar();
        }

        public animar2(): void
        {
            this.divMissaoDinheiro.animar();
        }

        public animar3(): void
        {
            this.divMissaoRp.animar();
        }

        public animar4(): void
        {
            this.divMissaoRpProgresso.animar();
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.divMissaoDinheiro.iniciar();
            this.divMissaoResultado.iniciar();
            this.divMissaoRp.iniciar();
            this.divMissaoRpProgresso.iniciar();

            this.testar();
        }

        private testar(): void
        {
            this.objMissaoConclusao = new MissaoConclusaoDominio();

            this.objMissaoConclusao.intDinheiro = 10000;
            this.objMissaoConclusao.intNivelAtual = 0;
            this.objMissaoConclusao.intReputacao = 250;

            this.animar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}