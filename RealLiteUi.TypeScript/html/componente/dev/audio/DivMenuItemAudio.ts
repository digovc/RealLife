/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemAudio extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrStrSet: Array<string>;

        private get arrStrSet(): Array<string>
        {
            if (this._arrStrSet != null)
            {
                return this._arrStrSet;
            }

            this._arrStrSet = this.getArrStrSet();

            return this._arrStrSet;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super("Áudio");
        }

        // #endregion Construtores

        // #region Métodos

        private getArrStrSet(): Array<string>
        {
            var arrStrSetResultado = new Array<string>();

            //arrStrSetResultado.push("0");
            arrStrSetResultado.push("APT_BvS_Soundset");
            arrStrSetResultado.push("ASSASSINATION_MULTI");
            arrStrSetResultado.push("ATM_SOUNDS");
            arrStrSetResultado.push("BARRY_02_SOUNDSET");
            arrStrSetResultado.push("BASEJUMPS_SOUNDS");
            arrStrSetResultado.push("BIG_SCORE_3A_SOUNDS");
            arrStrSetResultado.push("BulldozerDefault");
            arrStrSetResultado.push("CAR_STEAL_2_SOUNDSET");
            arrStrSetResultado.push("CB_RADIO_SFX");
            arrStrSetResultado.push("CELEBRATION_SOUNDSET");
            arrStrSetResultado.push("CELEBRATION_SWIPE");
            arrStrSetResultado.push("CONSTRUCTION_ACCIDENT_1_SOUNDS");
            arrStrSetResultado.push("DLC_Apartments_Drop_Zone_Sounds");
            arrStrSetResultado.push("DLC_APT_Apartment_SoundSet");
            arrStrSetResultado.push("DLC_APT_YACHT_DOOR_SOUNDS");
            arrStrSetResultado.push("DLC_Dmod_Prop_Editor_Sounds");
            arrStrSetResultado.push("DLC_HALLOWEEN_FVJ_Sounds");
            arrStrSetResultado.push("DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS");
            arrStrSetResultado.push("DLC_HEIST_FLEECA_SOUNDSET");
            arrStrSetResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS");
            arrStrSetResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS");
            arrStrSetResultado.push("DLC_HEISTS_FAILED_SCREEN_SOUNDS");
            arrStrSetResultado.push("DLC_HEISTS_FINALE_SCREEN_SOUNDS");
            arrStrSetResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS");
            arrStrSetResultado.push("DLC_HEISTS_GENERIC_SOUNDS");
            arrStrSetResultado.push("DLC_HEISTS_PREP_SCREEN_SOUNDS");
            arrStrSetResultado.push("DLC_Lowrider_Relay_Race_Sounds");
            arrStrSetResultado.push("DLC_PILOT_MP_HUD_SOUNDS");
            arrStrSetResultado.push("DLC_PRISON_BREAK_HEIST_SOUNDS");
            arrStrSetResultado.push("DLC_TG_Running_Back_Sounds");
            arrStrSetResultado.push("DOCKS_HEIST_FINALE_2B_SOUNDS");
            arrStrSetResultado.push("EXILE_1");
            arrStrSetResultado.push("FAMILY_5_SOUNDS");
            arrStrSetResultado.push("FAMILY1_BOAT");
            arrStrSetResultado.push("Feed_Message_Sounds");
            arrStrSetResultado.push("FM_Events_Sasquatch_Sounds");
            arrStrSetResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_GLASS_SOUNDS");
            arrStrSetResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_WOOD_SOUNDS");
            arrStrSetResultado.push("GTAO_Boss_Goons_FM_Shard_Sounds");
            arrStrSetResultado.push("GTAO_Boss_Goons_FM_Soundset");
            arrStrSetResultado.push("GTAO_FM_Cross_The_Line_Soundset");
            arrStrSetResultado.push("GTAO_FM_Events_Soundset");
            arrStrSetResultado.push("GTAO_Magnate_Boss_Modes_Soundset");
            arrStrSetResultado.push("GTAO_Magnate_Hunt_Boss_SoundSet");
            arrStrSetResultado.push("GTAO_Magnate_Yacht_Attack_Soundset");
            arrStrSetResultado.push("GTAO_MUGSHOT_ROOM_SOUNDS");
            arrStrSetResultado.push("GTAO_Shepherd_Sounds");
            arrStrSetResultado.push("GTAO_Speed_Convoy_Soundset");
            arrStrSetResultado.push("HEIST_BULLETIN_BOARD_SOUNDSET");
            arrStrSetResultado.push("HintCamSounds");
            arrStrSetResultado.push("HUD_AMMO_SHOP_SOUNDSET");
            arrStrSetResultado.push("HUD_AWARDS");
            arrStrSetResultado.push("HUD_DEATHMATCH_SOUNDSET");
            arrStrSetResultado.push("HUD_FREEMODE_SOUNDSET");
            arrStrSetResultado.push("HUD_FRONTEND_CLOTHESSHOP_SOUNDSET");
            arrStrSetResultado.push("HUD_FRONTEND_CUSTOM_SOUNDSET");
            arrStrSetResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET");
            arrStrSetResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS");
            arrStrSetResultado.push("HUD_FRONTEND_MP_SOUNDSET");
            arrStrSetResultado.push("HUD_FRONTEND_TATTOO_SHOP_SOUNDSET");
            arrStrSetResultado.push("HUD_FRONTEND_WEAPONS_PICKUPS_SOUNDSET");
            arrStrSetResultado.push("HUD_LIQUOR_STORE_SOUNDSET");
            arrStrSetResultado.push("HUD_MINI_GAME_SOUNDSET");
            arrStrSetResultado.push("HUD_MINIGAME_SOUNDSET");
            arrStrSetResultado.push("HUD_PROPERTY_SOUNDSET");
            arrStrSetResultado.push("JA16_Super_Mod_Garage_Sounds");
            arrStrSetResultado.push("LESTER1A_SOUNDS");
            arrStrSetResultado.push("LONG_PLAYER_SWITCH_SOUNDS");
            arrStrSetResultado.push("Lowrider_Super_Mod_Garage_Sounds");
            arrStrSetResultado.push("MINUTE_MAN_01_SOUNDSET");
            arrStrSetResultado.push("MissionFailedSounds");
            arrStrSetResultado.push("MP_LOBBY_SOUNDS");
            arrStrSetResultado.push("MP_MISSION_COUNTDOWN_SOUNDSET");
            arrStrSetResultado.push("MP_PROPERTIES_ELEVATOR_DOORS");
            arrStrSetResultado.push("MP_RADIO_SFX");
            arrStrSetResultado.push("NOIR_FILTER_SOUNDS");
            arrStrSetResultado.push("PALETO_SCORE_2A_BANK_SS");
            arrStrSetResultado.push("Phone_SoundSet_Default");
            arrStrSetResultado.push("Phone_Soundset_Franklin");
            arrStrSetResultado.push("Phone_SoundSet_Michael");
            arrStrSetResultado.push("PLAYER_SWITCH_CUSTOM_SOUNDSET");
            arrStrSetResultado.push("RESPAWN_ONLINE_SOUNDSET");
            arrStrSetResultado.push("RESPAWN_SOUNDSET");
            arrStrSetResultado.push("ROPE_CUT_SOUNDSET");
            arrStrSetResultado.push("TATTOOIST_SOUNDS");
            arrStrSetResultado.push("TRUCK_RAMP_DOWN");
            arrStrSetResultado.push("WastedSounds");
            arrStrSetResultado.push("WEB_NAVIGATION_SOUNDS_PHONE");

            return arrStrSetResultado;
        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            this.arrStrSet.forEach((strSet: string) => { arrDivMenuItem.push(new DivMenuItemAudioSet(strSet)); });
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}