/// <reference path="../../menu/DivMenuItem.ts"/>

module RealLifeUi
{
    // #region Importações

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivMenuItemAudioSet extends DivMenuItem
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrStrAudio: Array<string>;

        private get arrStrAudio(): Array<string>
        {
            if (this._arrStrAudio != null)
            {
                return this._arrStrAudio;
            }

            this._arrStrAudio = this.getArrStrAudio();

            return this._arrStrAudio;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private getArrStrAudio(): Array<string>
        {
            var arrStrAudioResultado = new Array<string>();

            arrStrAudioResultado.push("0.COMPUTERS_MOUSE_CLICK");
            arrStrAudioResultado.push("0.CUTSCENE_DIALOGUE_OVERRIDE_SOUND_01");
            arrStrAudioResultado.push("0.CUTSCENE_DIALOGUE_OVERRIDE_SOUND_02");
            arrStrAudioResultado.push("0.DRUG_TRAFFIC_AIR_BOMB_DROP_ERROR_MASTER");
            arrStrAudioResultado.push("0.DRUG_TRAFFIC_AIR_SCREAMS");
            arrStrAudioResultado.push("0.EXILE_3_TRAIN_BRAKE_PULL_MASTER");
            arrStrAudioResultado.push("0.EXILE_3_TRAIN_BRAKE_RELEASE_MASTER");
            arrStrAudioResultado.push("0.GOLF_HUD_HOLE_IN_ONE_MASTER");
            arrStrAudioResultado.push("0.GOLF_HUD_SCORECARD_MASTER");
            arrStrAudioResultado.push("0.HACKING_CLICK");
            arrStrAudioResultado.push("0.HACKING_CLICK_BAD");
            arrStrAudioResultado.push("0.HACKING_CLICK_GOOD");
            arrStrAudioResultado.push("0.HACKING_FAILURE");
            arrStrAudioResultado.push("0.HACKING_MOVE_CURSOR");
            arrStrAudioResultado.push("0.HACKING_SUCCESS");
            arrStrAudioResultado.push("0.HUD_FREEMODE_CANCEL_MASTER");
            arrStrAudioResultado.push("0.LAMAR1_PARTYGIRLS_master");
            arrStrAudioResultado.push("0.MARTIN1_DISTANT_TRAIN_HORNS_MASTER");
            arrStrAudioResultado.push("0.MICHAEL_SOFA_REMOTE_CLICK_VOLUME_MASTER");
            arrStrAudioResultado.push("0.MICHAEL_SOFA_TV_CHANGE_CHANNEL_MASTER");
            arrStrAudioResultado.push("0.MICHAEL_SOFA_TV_ON_MASTER");
            arrStrAudioResultado.push("0.NET_RACE_START_EVENT_MASTER");
            arrStrAudioResultado.push("0.PS2A_DISTANT_TRAIN_HORNS_MASTER");
            arrStrAudioResultado.push("0.RAMPAGE_KILLED_COUNTER_MASTER");
            arrStrAudioResultado.push("0.RAMPAGE_KILLED_HEAD_SHOT_MASTER");
            arrStrAudioResultado.push("0.RAMPAGE_PASSED_MASTER");
            arrStrAudioResultado.push("0.RAMPAGE_ROAR_MASTER");
            arrStrAudioResultado.push("0.Remote_Sniper_Rifle_Fire");
            arrStrAudioResultado.push("0.SCOPE_UI_MASTER");
            arrStrAudioResultado.push("0.THERMAL_VISION_GOGGLES_OFF_MASTER");
            arrStrAudioResultado.push("0.THERMAL_VISION_GOGGLES_ON_MASTER");
            arrStrAudioResultado.push("0.TIME_LAPSE_MASTER");
            arrStrAudioResultado.push("0.UNDER_WATER_COME_UP");
            arrStrAudioResultado.push("0.WOODEN_DOOR_CLOSED_AT");
            arrStrAudioResultado.push("0.WOODEN_DOOR_CLOSING_AT");
            arrStrAudioResultado.push("0.WOODEN_DOOR_OPEN_HANDLE_AT");
            arrStrAudioResultado.push("0.WOODEN_DOOR_OPEN_NO_HANDLE_AT");
            arrStrAudioResultado.push("APT_BvS_Soundset.Beast_Checkpoint");
            arrStrAudioResultado.push("APT_BvS_Soundset.Beast_Checkpoint_NPC");
            arrStrAudioResultado.push("APT_BvS_Soundset.Blade_Appear");
            arrStrAudioResultado.push("ASSASSINATION_MULTI.ASSASSINATIONS_HOTEL_TIMER_COUNTDOWN");
            arrStrAudioResultado.push("ATM_SOUNDS.PIN_BUTTON");
            arrStrAudioResultado.push("BARRY_02_SOUNDSET.HOORAY");
            arrStrAudioResultado.push("BASEJUMPS_SOUNDS.Grab_Parachute");
            arrStrAudioResultado.push("BIG_SCORE_3A_SOUNDS.Traffic_Control_Fail");
            arrStrAudioResultado.push("BIG_SCORE_3A_SOUNDS.Traffic_Control_Fail_Blank");
            arrStrAudioResultado.push("BIG_SCORE_3A_SOUNDS.Traffic_Control_Light_Switch_Back");
            arrStrAudioResultado.push("BIG_SCORE_3A_SOUNDS.TRAFFIC_CONTROL_MOVE_CROSSHAIR");
            arrStrAudioResultado.push("BulldozerDefault.DiggerRevOneShot");
            arrStrAudioResultado.push("CAR_STEAL_2_SOUNDSET.Thermal_Off");
            arrStrAudioResultado.push("CAR_STEAL_2_SOUNDSET.Thermal_On");
            arrStrAudioResultado.push("CB_RADIO_SFX.End_Squelch");
            arrStrAudioResultado.push("CB_RADIO_SFX.Start_Squelch");
            arrStrAudioResultado.push("CELEBRATION_SOUNDSET.ROUND_ENDING_STINGER_CUSTOM");
            arrStrAudioResultado.push("CELEBRATION_SOUNDSET.SCREEN_FLASH");
            arrStrAudioResultado.push("CELEBRATION_SWIPE.SCREEN_SWIPE");
            arrStrAudioResultado.push("CONSTRUCTION_ACCIDENT_1_SOUNDS.CABLE_SNAPS");
            arrStrAudioResultado.push("CONSTRUCTION_ACCIDENT_1_SOUNDS.PIPES_LAND");
            arrStrAudioResultado.push("CONSTRUCTION_ACCIDENT_1_SOUNDS.WEAKEN");
            arrStrAudioResultado.push("DLC_Apartments_Drop_Zone_Sounds.Enter_Capture_Zone");
            arrStrAudioResultado.push("DLC_Apartments_Drop_Zone_Sounds.Exit_Capture_Zone");
            arrStrAudioResultado.push("DLC_Apartments_Drop_Zone_Sounds.Zone_Enemy_Capture");
            arrStrAudioResultado.push("DLC_Apartments_Drop_Zone_Sounds.Zone_Neutral");
            arrStrAudioResultado.push("DLC_Apartments_Drop_Zone_Sounds.Zone_Team_Capture");
            arrStrAudioResultado.push("DLC_APT_Apartment_SoundSet.Apt_Style_Purchase");
            arrStrAudioResultado.push("DLC_APT_YACHT_DOOR_SOUNDS.CLOSED");
            arrStrAudioResultado.push("DLC_APT_YACHT_DOOR_SOUNDS.LIMIT");
            arrStrAudioResultado.push("DLC_APT_YACHT_DOOR_SOUNDS.PUSH");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Cycle_Item");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Delete_Placed_Prop");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Load_Scene");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Place_Prop_Fail");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Place_Prop_Success");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Reset_Prop_Position");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Save_Scene");
            arrStrAudioResultado.push("DLC_Dmod_Prop_Editor_Sounds.Select_Placed_Prop");
            arrStrAudioResultado.push("DLC_HALLOWEEN_FVJ_Sounds.Breaker_01");
            arrStrAudioResultado.push("DLC_HALLOWEEN_FVJ_Sounds.Breaker_02");
            arrStrAudioResultado.push("DLC_HALLOWEEN_FVJ_Sounds.Swap_Sides");
            arrStrAudioResultado.push("DLC_HALLOWEEN_FVJ_Sounds.Timer_10s");
            arrStrAudioResultado.push("DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS.Hack_Failed");
            arrStrAudioResultado.push("DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS.Hack_Success");
            arrStrAudioResultado.push("DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS.Pin_Bad");
            arrStrAudioResultado.push("DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS.Pin_Centred");
            arrStrAudioResultado.push("DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS.Pin_Good");
            arrStrAudioResultado.push("DLC_HEIST_FLEECA_SOUNDSET.Drill_Pin_Break");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Beep_Green");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Beep_Red");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Click");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Crash");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Failure");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Goal");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Lester_Laugh_Phone");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Power_Down");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Start");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Success");
            arrStrAudioResultado.push("DLC_HEIST_HACKING_SNAKE_SOUNDS.Turn");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Continue_Accepted");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Continue_Appears");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Highlight_Accept");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Highlight_Cancel");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Highlight_Error");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Highlight_Move");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Map_Roll_Down");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Map_Roll_Up");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Paper_Shuffle");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Pen_Tick");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Zoom_In");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Zoom_Left");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Zoom_Out");
            arrStrAudioResultado.push("DLC_HEIST_PLANNING_BOARD_SOUNDS.Zoom_Right");
            arrStrAudioResultado.push("DLC_HEISTS_FAILED_SCREEN_SOUNDS.Pre_Screen_Stinger");
            arrStrAudioResultado.push("DLC_HEISTS_FINALE_SCREEN_SOUNDS.Pre_Screen_Stinger");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.5_Second_Timer");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.LOCAL_PLYR_CASH_COUNTER_COMPLETE");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.LOCAL_PLYR_CASH_COUNTER_INCREASE");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.Mission_Pass_Notify");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.Nav_Arrow_Ahead");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.Nav_Arrow_Behind");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.Nav_Arrow_Left");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.Nav_Arrow_Right");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.On_Call_Player_Join");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.Out_Of_Bounds_Timer");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.REMOTE_PLYR_CASH_COUNTER_COMPLETE");
            arrStrAudioResultado.push("DLC_HEISTS_GENERAL_FRONTEND_SOUNDS.REMOTE_PLYR_CASH_COUNTER_INCREASE");
            arrStrAudioResultado.push("DLC_HEISTS_GENERIC_SOUNDS.Payment_Non_Player");
            arrStrAudioResultado.push("DLC_HEISTS_GENERIC_SOUNDS.Payment_Player");
            arrStrAudioResultado.push("DLC_HEISTS_PREP_SCREEN_SOUNDS.Pre_Screen_Stinger");
            arrStrAudioResultado.push("DLC_Lowrider_Relay_Race_Sounds.Enter_Area");
            arrStrAudioResultado.push("DLC_Lowrider_Relay_Race_Sounds.Out_Of_Area");
            arrStrAudioResultado.push("DLC_PILOT_MP_HUD_SOUNDS.Player_Collect");
            arrStrAudioResultado.push("DLC_PRISON_BREAK_HEIST_SOUNDS.Bus_Schedule_Pickup");
            arrStrAudioResultado.push("DLC_TG_Running_Back_Sounds.Airhorn");
            arrStrAudioResultado.push("DLC_TG_Running_Back_Sounds.Cheers");
            arrStrAudioResultado.push("DLC_TG_Running_Back_Sounds.Whistle");
            arrStrAudioResultado.push("DOCKS_HEIST_FINALE_2B_SOUNDS.Door_Open");
            arrStrAudioResultado.push("EXILE_1.Falling_Crates");
            arrStrAudioResultado.push("FAMILY_5_SOUNDS.FLYING_STREAM_END_INSTANT");
            arrStrAudioResultado.push("FAMILY_5_SOUNDS.MICHAEL_LONG_SCREAM");
            arrStrAudioResultado.push("FAMILY1_BOAT.FAMILY_1_CAR_BREAKDOWN");
            arrStrAudioResultado.push("FAMILY1_BOAT.FAMILY_1_CAR_BREAKDOWN_ADDITIONAL");
            arrStrAudioResultado.push("Feed_Message_Sounds.FestiveGift");
            arrStrAudioResultado.push("FM_Events_Sasquatch_Sounds.Checkpoint_Beast_Hit");
            arrStrAudioResultado.push("FM_Events_Sasquatch_Sounds.Frontend_Beast_Fade_Screen");
            arrStrAudioResultado.push("FM_Events_Sasquatch_Sounds.Frontend_Beast_Freeze_Screen");
            arrStrAudioResultado.push("FM_Events_Sasquatch_Sounds.Frontend_Beast_Text_Hit");
            arrStrAudioResultado.push("FM_Events_Sasquatch_Sounds.Frontend_Beast_Transform_Back");
            arrStrAudioResultado.push("FM_Events_Sasquatch_Sounds.Radar_Beast_Blip");
            arrStrAudioResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_GLASS_SOUNDS.LIMIT");
            arrStrAudioResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_GLASS_SOUNDS.PUSH");
            arrStrAudioResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_GLASS_SOUNDS.SWING_SHUT");
            arrStrAudioResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_WOOD_SOUNDS.LIMIT");
            arrStrAudioResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_WOOD_SOUNDS.PUSH");
            arrStrAudioResultado.push("GTAO_APT_DOOR_DOWNSTAIRS_WOOD_SOUNDS.SWING_SHUT");
            arrStrAudioResultado.push("GTAO_Boss_Goons_FM_Shard_Sounds.Shard_Disappear");
            arrStrAudioResultado.push("GTAO_Boss_Goons_FM_Soundset.Boss_Message_Orange");
            arrStrAudioResultado.push("GTAO_Boss_Goons_FM_Soundset.Goon_Paid_Small");
            arrStrAudioResultado.push("GTAO_FM_Cross_The_Line_Soundset.Player_Enter_Line");
            arrStrAudioResultado.push("GTAO_FM_Cross_The_Line_Soundset.Player_Exit_Line");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.5s_To_Event_Start_Countdown");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Checkpoint_Cash_Hit");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Checkpoint_Hit");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Criminal_Damage_High_Value");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Criminal_Damage_Kill_Player");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Criminal_Damage_Low_Value");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Enter_1st");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Event_Message_Purple");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Event_Start_Text");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Kill_List_Counter");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Lose_1st");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Near_Miss_Counter_Reset");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Object_Collect_Player");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Object_Collect_Remote");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Object_Dropped_Remote");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.OOB_Cancel");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.OOB_Start");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Parcel_Vehicle_Lost");
            arrStrAudioResultado.push("GTAO_FM_Events_Soundset.Shard_Disappear");
            arrStrAudioResultado.push("GTAO_Magnate_Boss_Modes_Soundset.Enter_1st");
            arrStrAudioResultado.push("GTAO_Magnate_Boss_Modes_Soundset.Lose_1st");
            arrStrAudioResultado.push("GTAO_Magnate_Hunt_Boss_SoundSet.Boss_Blipped");
            arrStrAudioResultado.push("GTAO_Magnate_Yacht_Attack_Soundset.Enemy_Capture_Start");
            arrStrAudioResultado.push("GTAO_Magnate_Yacht_Attack_Soundset.Team_Capture_Start");
            arrStrAudioResultado.push("GTAO_MUGSHOT_ROOM_SOUNDS.Lights_On");
            arrStrAudioResultado.push("GTAO_Shepherd_Sounds.Checkpoint_Teammate");
            arrStrAudioResultado.push("GTAO_Speed_Convoy_Soundset.Arming_Countdown");
            arrStrAudioResultado.push("GTAO_Speed_Convoy_Soundset.Bomb_Disarmed");
            arrStrAudioResultado.push("HEIST_BULLETIN_BOARD_SOUNDSET.MARKER_ERASE");
            arrStrAudioResultado.push("HEIST_BULLETIN_BOARD_SOUNDSET.PERSON_SCROLL");
            arrStrAudioResultado.push("HEIST_BULLETIN_BOARD_SOUNDSET.PERSON_SELECT");
            arrStrAudioResultado.push("HEIST_BULLETIN_BOARD_SOUNDSET.UNDO");
            arrStrAudioResultado.push("HintCamSounds.FocusIn");
            arrStrAudioResultado.push("HintCamSounds.FocusOut");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.BACK");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.ERROR");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.NAV");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_AMMO_PURCHASE");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_ATTACHMENT_EQUIP");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_ATTACHMENT_UNEQUIP");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_PURCHASE");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_ARMOR");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_BATON");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_FUEL_CAN");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_GRENADE_LAUNCHER");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_HANDGUN");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_KNIFE");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_OTHER");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_PARACHUTE");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_RIFLE");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_RPG_LAUNCHER");
            arrStrAudioResultado.push("HUD_AMMO_SHOP_SOUNDSET.WEAPON_SELECT_SHOTGUN");
            arrStrAudioResultado.push("HUD_AWARDS.BASE_JUMP_PASSED");
            arrStrAudioResultado.push("HUD_AWARDS.CHALLENGE_UNLOCKED");
            arrStrAudioResultado.push("HUD_AWARDS.FLIGHT_SCHOOL_LESSON_PASSED");
            arrStrAudioResultado.push("HUD_AWARDS.GOLF_BIRDIE");
            arrStrAudioResultado.push("HUD_AWARDS.GOLF_EAGLE");
            arrStrAudioResultado.push("HUD_AWARDS.GOLF_NEW_RECORD");
            arrStrAudioResultado.push("HUD_AWARDS.LOSER");
            arrStrAudioResultado.push("HUD_AWARDS.MEDAL_BRONZE");
            arrStrAudioResultado.push("HUD_AWARDS.MEDAL_GOLD");
            arrStrAudioResultado.push("HUD_AWARDS.MEDAL_SILVER");
            arrStrAudioResultado.push("HUD_AWARDS.OTHER_TEXT");
            arrStrAudioResultado.push("HUD_AWARDS.PROPERTY_PURCHASE");
            arrStrAudioResultado.push("HUD_AWARDS.RACE_PLACED");
            arrStrAudioResultado.push("HUD_AWARDS.RANK_UP");
            arrStrAudioResultado.push("HUD_AWARDS.SHOOTING_RANGE_ROUND_OVER");
            arrStrAudioResultado.push("HUD_AWARDS.TENNIS_MATCH_POINT");
            arrStrAudioResultado.push("HUD_AWARDS.TENNIS_POINT_WON");
            arrStrAudioResultado.push("HUD_AWARDS.UNDER_THE_BRIDGE");
            arrStrAudioResultado.push("HUD_AWARDS.WIN");
            arrStrAudioResultado.push("HUD_DEATHMATCH_SOUNDSET.DELETE");
            arrStrAudioResultado.push("HUD_DEATHMATCH_SOUNDSET.EDIT");
            arrStrAudioResultado.push("HUD_FREEMODE_SOUNDSET.BACK");
            arrStrAudioResultado.push("HUD_FREEMODE_SOUNDSET.CANCEL");
            arrStrAudioResultado.push("HUD_FREEMODE_SOUNDSET.NAV_LEFT_RIGHT");
            arrStrAudioResultado.push("HUD_FREEMODE_SOUNDSET.NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_FREEMODE_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_FRONTEND_CLOTHESSHOP_SOUNDSET.CANCEL");
            arrStrAudioResultado.push("HUD_FRONTEND_CLOTHESSHOP_SOUNDSET.ERROR");
            arrStrAudioResultado.push("HUD_FRONTEND_CLOTHESSHOP_SOUNDSET.NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_FRONTEND_CLOTHESSHOP_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_FRONTEND_CUSTOM_SOUNDSET.PICK_UP_WEAPON");
            arrStrAudioResultado.push("HUD_FRONTEND_CUSTOM_SOUNDSET.PICK_UP_SOUND");
            arrStrAudioResultado.push("HUD_FRONTEND_CUSTOM_SOUNDSET.ROBBERY_MONEY_TOTAL");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.ATM_WINDOW");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.BACK");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.CANCEL");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.CHARACTER_SELECT");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.CONTINUE");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.ERROR");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.EXIT");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.HIGHLIGHT");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.HIGHLIGHT_NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.HORDE_COOL_DOWN_TIMER");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.LEADER_BOARD");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.MP_5_SECOND_TIMER");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.MP_AWARD");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.MP_IDLE_KICK");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.MP_IDLE_TIMER");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.MP_RANK_UP");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.MP_WAVE_COMPLETE");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.NAV_LEFT_RIGHT");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.NO");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.OK");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.PICK_UP");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.QUIT");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.RESTART");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.RETRY");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.SKIP");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.TIMER");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.TOGGLE_ON");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.WAYPOINT_SET");
            arrStrAudioResultado.push("HUD_FRONTEND_DEFAULT_SOUNDSET.YES");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS.Deliver_Pick_Up");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS.Dropped");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS.Enemy_Deliver");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS.Enemy_Pick_Up");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS.Friend_Deliver");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_COLLECTABLE_SOUNDS.Friend_Pick_Up");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_SOUNDSET.BACK");
            arrStrAudioResultado.push("HUD_FRONTEND_MP_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_FRONTEND_TATTOO_SHOP_SOUNDSET.BACK");
            arrStrAudioResultado.push("HUD_FRONTEND_TATTOO_SHOP_SOUNDSET.ERROR");
            arrStrAudioResultado.push("HUD_FRONTEND_TATTOO_SHOP_SOUNDSET.NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_FRONTEND_TATTOO_SHOP_SOUNDSET.PURCHASE");
            arrStrAudioResultado.push("HUD_FRONTEND_TATTOO_SHOP_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_FRONTEND_WEAPONS_PICKUPS_SOUNDSET.PICKUP_WEAPON_SMOKEGRENADE");
            arrStrAudioResultado.push("HUD_LIQUOR_STORE_SOUNDSET.CANCEL");
            arrStrAudioResultado.push("HUD_LIQUOR_STORE_SOUNDSET.ERROR");
            arrStrAudioResultado.push("HUD_LIQUOR_STORE_SOUNDSET.NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_LIQUOR_STORE_SOUNDSET.PURCHASE");
            arrStrAudioResultado.push("HUD_LIQUOR_STORE_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.3_2_1");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.3_2_1_NON_RACE");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.5_SEC_WARNING");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.BACK");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CAM_PAN_DARTS");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CANCEL");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CHECKPOINT_AHEAD");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CHECKPOINT_BEHIND");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CHECKPOINT_MISSED");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CHECKPOINT_NORMAL");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CHECKPOINT_PERFECT");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CHECKPOINT_UNDER_THE_BRIDGE");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.CONFIRM_BEEP");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.FIRST_PLACE");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.GO");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.GO_NON_RACE");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.LEADERBOARD");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.LOOSE_MATCH");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.MEDAL_UP");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.NAV_UP_DOWN");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.QUIT_WHOOSH");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.SELECT");
            arrStrAudioResultado.push("HUD_MINI_GAME_SOUNDSET.TIMER_STOP");
            arrStrAudioResultado.push("HUD_MINIGAME_SOUNDSET.Phone_Generic_Key_02");
            arrStrAudioResultado.push("HUD_MINIGAME_SOUNDSET.Phone_Generic_Key_03");
            arrStrAudioResultado.push("HUD_PROPERTY_SOUNDSET.PROPERTY_PURCHASE_MEDIUM");
            arrStrAudioResultado.push("JA16_Super_Mod_Garage_Sounds.Banshee2_Upgrade");
            arrStrAudioResultado.push("JA16_Super_Mod_Garage_Sounds.SultanRS_Upgrade");
            arrStrAudioResultado.push("LESTER1A_SOUNDS.CLOSE_WINDOW");
            arrStrAudioResultado.push("LESTER1A_SOUNDS.OPEN_WINDOW");
            arrStrAudioResultado.push("LONG_PLAYER_SWITCH_SOUNDS.Hit_1");
            arrStrAudioResultado.push("Lowrider_Super_Mod_Garage_Sounds.Lowrider_Upgrade");
            arrStrAudioResultado.push("MINUTE_MAN_01_SOUNDSET.STUN_COLLECT");
            arrStrAudioResultado.push("MissionFailedSounds.ScreenFlash");
            arrStrAudioResultado.push("MP_LOBBY_SOUNDS.BOATS_PLANES_HELIS_BOOM");
            arrStrAudioResultado.push("MP_LOBBY_SOUNDS.CAR_BIKE_WHOOSH");
            arrStrAudioResultado.push("MP_LOBBY_SOUNDS.Whoosh_1s_L_to_R");
            arrStrAudioResultado.push("MP_LOBBY_SOUNDS.Whoosh_1s_R_to_L");
            arrStrAudioResultado.push("MP_MISSION_COUNTDOWN_SOUNDSET.10s");
            arrStrAudioResultado.push("MP_MISSION_COUNTDOWN_SOUNDSET.5s");
            arrStrAudioResultado.push("MP_MISSION_COUNTDOWN_SOUNDSET.Oneshot_Final");
            arrStrAudioResultado.push("MP_PROPERTIES_ELEVATOR_DOORS.CLOSED");
            arrStrAudioResultado.push("MP_PROPERTIES_ELEVATOR_DOORS.OPENED");
            arrStrAudioResultado.push("MP_RADIO_SFX.Off_High");
            arrStrAudioResultado.push("MP_RADIO_SFX.Retune_High");
            arrStrAudioResultado.push("NOIR_FILTER_SOUNDS.ON");
            arrStrAudioResultado.push("PALETO_SCORE_2A_BANK_SS.PS2A_MONEY_LOST");
            arrStrAudioResultado.push("Phone_SoundSet_Default.Menu_Accept");
            arrStrAudioResultado.push("Phone_Soundset_Franklin.Camera_Shoot");
            arrStrAudioResultado.push("Phone_SoundSet_Michael.Hang_Up");
            arrStrAudioResultado.push("Phone_SoundSet_Michael.Put_Away");
            arrStrAudioResultado.push("PLAYER_SWITCH_CUSTOM_SOUNDSET.1st_Person_Transition");
            arrStrAudioResultado.push("PLAYER_SWITCH_CUSTOM_SOUNDSET.Hit_In");
            arrStrAudioResultado.push("PLAYER_SWITCH_CUSTOM_SOUNDSET.Hit_Out");
            arrStrAudioResultado.push("PLAYER_SWITCH_CUSTOM_SOUNDSET.Short_Transition_In");
            arrStrAudioResultado.push("PLAYER_SWITCH_CUSTOM_SOUNDSET.Short_Transition_Out");
            arrStrAudioResultado.push("RESPAWN_ONLINE_SOUNDSET.Faster_Bar_Full");
            arrStrAudioResultado.push("RESPAWN_ONLINE_SOUNDSET.Faster_Click");
            arrStrAudioResultado.push("RESPAWN_ONLINE_SOUNDSET.Hit");
            arrStrAudioResultado.push("RESPAWN_SOUNDSET.Hit");
            arrStrAudioResultado.push("ROPE_CUT_SOUNDSET.ROPE_CUT");
            arrStrAudioResultado.push("TATTOOIST_SOUNDS.Tattooing_Oneshot");
            arrStrAudioResultado.push("TATTOOIST_SOUNDS.Tattooing_Oneshot_Remove");
            arrStrAudioResultado.push("TRUCK_RAMP_DOWN.RAMP_DOWN");
            arrStrAudioResultado.push("TRUCK_RAMP_DOWN.RAMP_UP");
            arrStrAudioResultado.push("WastedSounds.Bed");
            arrStrAudioResultado.push("WastedSounds.MP_Flash");
            arrStrAudioResultado.push("WastedSounds.MP_Impact");
            arrStrAudioResultado.push("WastedSounds.ScreenFlash");
            arrStrAudioResultado.push("WastedSounds.TextHit");
            arrStrAudioResultado.push("WEB_NAVIGATION_SOUNDS_PHONE.CLICK_BACK");
            arrStrAudioResultado.push("WEB_NAVIGATION_SOUNDS_PHONE.Click_Fail");
            arrStrAudioResultado.push("WEB_NAVIGATION_SOUNDS_PHONE.Click_Special");

            return arrStrAudioResultado;
        }

        protected inicializarArrDivMenuItem(arrDivMenuItem: Array<DivMenuItem>): void
        {
            super.inicializarArrDivMenuItem(arrDivMenuItem);

            this.arrStrAudio.forEach((strSound: string) => { this.inicializarArrDivMenuItemAudio(arrDivMenuItem, strSound); });
        }

        private inicializarArrDivMenuItemAudio(arrDivMenuItem: Array<DivMenuItem>, strSound: string): void
        {
            if (!strSound.startsWith(this.strNome))
            {
                return;
            }

            var strSoundNome = strSound.substr(strSound.indexOf(".") + 1);

            arrDivMenuItem.push(new DivMenuItemAudioSong(strSoundNome));
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}