module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class EtapaPersonagemEditor003Concluir extends EtapaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.salvarAparencia();
        }

        private salvarAparencia(): void
        {
            Jogador.i.salvarAparencia(this);

            Screen.i.notificar("Salvando o personagem.");
        }

        public salvarAparenciaSucesso(): void
        {
            Screen.i.notificar("Personagem salvo com sucesso.");

            this.etapa001();
        }

        // Etapas

        private etapa001(): void
        {
            Screen.i.fadeOut(1000, (() => { this.objScript.destruir(); }));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}