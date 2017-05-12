using GTA.Math;
using System.Globalization;
using System.Text;

namespace ModTool.Dominio
{
    internal class Vector3Dominio : DominioBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private string _strCode;
        private float _x;
        private float _y;
        private float _z;

        public string strCode
        {
            get
            {
                _strCode = this.getStrCode();

                return _strCode;
            }
        }

        public float x
        {
            get
            {
                return _x;
            }

            set
            {
                _x = value;
            }
        }

        public float y
        {
            get
            {
                return _y;
            }

            set
            {
                _y = value;
            }
        }

        public float z
        {
            get
            {
                return _z;
            }

            set
            {
                _z = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        public Vector3 getVct()
        {
            return new Vector3(this.x, this.y, this.z);
        }

        public void setVct(Vector3 vct)
        {
            this.x = vct.X;
            this.y = vct.Y;
            this.z = vct.Z;
        }

        private string getStrCode()
        {
            var cti = CultureInfo.GetCultureInfo("en-US");

            var stbResultado = new StringBuilder();

            stbResultado.Append(string.Format("new Vector3({0}, {1}, {2});", this.x.ToString(cti), this.y.ToString(cti), this.z.ToString(cti)));

            return stbResultado.ToString();
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}