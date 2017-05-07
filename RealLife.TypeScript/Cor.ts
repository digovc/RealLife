module RealLife
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class Cor
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _a: number;
        private _b: number;
        private _g: number;
        private _r: number;

        public get a(): number
        {
            return this._a;
        }

        public set a(a: number)
        {
            this._a = a;
        }

        public get b(): number
        {
            return this._b;
        }

        public set b(b: number)
        {
            this._b = b;
        }

        public get g(): number
        {
            return this._g;
        }

        public set g(g: number)
        {
            this._g = g;
        }

        public get r(): number
        {
            return this._r;
        }

        public set r(r: number)
        {
            this._r = r;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 0)
        {
            this.a = a;
            this.b = b;
            this.g = g;
            this.r = r;
        }

        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}