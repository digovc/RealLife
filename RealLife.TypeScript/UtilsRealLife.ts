/// <reference path="../reallifeshared.typescript/dominio/BlendDataDominio.ts"/>

module RealLife
{
    // #region Importações

    import BlendDataDominio = RealLifeShared.BlendDataDominio;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class UtilsRealLife
    {
        // #region Constantes

        public static get STR_VAZIA(): string { return "" };

        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public static copiarVct(vct: Vector3): Vector3
        {
            if (vct == null)
            {
                return new Vector3();
            }

            return new Vector3(vct.X, vct.Y, vct.Z);
        }

        public static getBooStrVazia(str: string): boolean
        {
            return ((str == null) || (str == UtilsRealLife.STR_VAZIA));
        }

        public static getBooVctIgual(vct1: Vector3, vct2: Vector3): boolean
        {
            if (vct1 == null)
            {
                return false;
            }

            if (vct2 == null)
            {
                return false;
            }

            if (vct1.X != vct2.X)
            {
                return false;
            }

            if (vct1.Y != vct2.Y)
            {
                return false;
            }

            if (vct1.Z != vct2.Z)
            {
                return false;
            }

            return true;
        }

        public static getIntRandom(intMinimo: number, intMaximo: number)
        {
            return (Math.floor(Math.random() * (intMaximo - intMinimo + 1)) + intMinimo);
        }

        public static getObjBlendDataRandomico(): BlendDataDominio
        {
            var objResultado = new BlendDataDominio();

            objResultado.fltAvoPercentual = Math.random();
            objResultado.fltMaePercentual = Math.random();
            objResultado.fltPaiPercentual = Math.random();
            objResultado.intAvo = UtilsRealLife.getIntRandom(42, 45);
            objResultado.intMae = UtilsRealLife.getIntRandom(21, 41);
            objResultado.intPai = UtilsRealLife.getIntRandom(0, 20);

            return objResultado;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}