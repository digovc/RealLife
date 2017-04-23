using GTANetworkServer;
using GTANetworkShared;

namespace RealLife
{
    internal class Jogador
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static Jogador _i;

        private Client _objClient;

        public static Jogador i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new Jogador();

                return _i;
            }
        }

        public Client objClient
        {
            get
            {
                return _objClient;
            }

            set
            {
                if (_objClient == value)
                {
                    return;
                }

                _objClient = value;

                this.setObjClient(_objClient);
            }
        }

        #endregion Atributos

        #region Construtores

        private Jogador()
        {
        }

        #endregion Construtores

        #region Métodos

        private void setObjClient(Client objClient)
        {
            this.test();
        }

        private void test()
        {
            //AppRealLife.i.api.createVehicle(VehicleHash.Kuruma2, new Vector3(), new Vector3(), 0, 0);
            //AppRealLife.i.api.givePlayerWeapon(objClient, WeaponHash.Minigun, int.MaxValue, false, true);
            //AppRealLife.i.api.setEntityPosition(objClient.handle, new Vector3());
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}