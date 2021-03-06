module RealLifeShared
{
    // #region Importações

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class DominioRealLifeBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _intId: number;

        public get intId(): number
        {
            return this._intId;
        }

        public set intId(intId: number)
        {
            this._intId = intId;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public copiarJson(jsn: string): void
        {
            if (jsn == null)
            {
                return;
            }

            var obj = JSON.parse(jsn);

            this.copiar(obj);
        }

        public copiar(obj: any): void
        {
            if (obj == null)
            {
                return;
            }

            for (var objPropriedade in obj)
            {
                (<any>this)[objPropriedade] = obj[objPropriedade];
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}