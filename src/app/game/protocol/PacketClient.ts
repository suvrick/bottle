import { ByteArray } from "../net/ByteArray";
import { UInt64 } from "../net/UInt64";

/* eslint-disable @typescript-eslint/indent */
export enum BuyType
{
	BUY_TOP = 0,
	BUY_HEART = 1,
	BUY_GIFT = 2,
	BUY_ADMIRE = 5,
	BUY_FRIEND = 6,
	BUY_TABLE = 7,
	BUY_BOTTLE = 14,
	BUY_WEDDING_TRANSWER = 25,
	BUY_WELCOME_GIFT = 26,
	BUY_ROOM_SECTOR = 27,
	BUY_CELL_OPEN = 33,
	BUY_CLEAR_MAGIC = 34,
	BUY_BACKGROUND = 39,
	BUY_ELITE = 42,
	BUY_STICKERS = 46,
	BUY_INSTANT_POTION_CRAFT = 47,
	BUY_CONTEST_GIFT = 56,
	BUY_PHOTOSHOWS = 57,
	BUY_PHOTOSHOWS_SPECIAL = 58,
	BUY_HOLIDAY_ITEM = 59,
	BUY_PRIORITY_KISS = 60,
	BUY_TITLES_LEVEL_UP = 62,
	BUY_TITLE_UP = 63,
	BUY_EVENT_GIFT = 65,
	BUY_HALLOWEEN_ITEM = 66,
	BUY_VIP_UPGRADE = 67,
	BUY_DECLINE_ADMIRE = 68,
	BUY_UNLOCK_GIFT = 69,
	BUY_SHOW_GUEST = 70,
	WEDDING_SUIT_GROOM = 210,	// server only
	WEDDING_SUIT_BRIDE = 211,	// server only
	BUY_SAVE = 214,			// server only
	BUY_KICK = 215,			// server only
	BUY_GIF = 216,			// server only
	BUY_VIDEO = 217,		// server only
	BUY_ROOM_PACK = 230,		// server only
	BUY_STATUS_GIFT = 231,
	CURIO_GIFT = 232,		// server only
	ROOM_ITEM_ADD = 236,		// server only
	WEDDING_DIVORCE = 237,		// server only
	WEDDING_CAKE = 238,		// server only
	WEDDING_INVITE = 239,		// server only
	WEDDING_BOUQUET = 240,		// server only
	WEDDING_GARTER = 241,		// server only
	WEDDING_MASTER = 242,		// server only
	WEDDING_BOTTLE = 243,		// server only
	WEDDING_TABLE = 244,		// server only
	WEDDING_RING = 245,		// server only
	PROPOSAL = 246,			// server only
	VIP_GIFT = 251			// server only
}

export enum CostType
{
	Regular = 0,
	Discount = 1
}

export enum MoveType
{
	MOVE_BOTTLE = 0,
	MOVE_WEDDING = 1,
	MOVE_HOUSE = 2,
	MOVE_MAFIA = 3,
	MOVE_ANY = 4
}

export enum Count
{
	COUNT_BANK_OPENS = 26,
	COUNT_BANK_PURCHASE = 27,
	COUNT_VIP_SMILES = 285,
	COUNT_NOTIFICATIONS = 393,
	COUNT_INVITE_FRIENDS = 438,
	ADVERTISING_AVAILABLE = 530,
	TRANSLATED_CHARS = 612
}

export enum TutorialStepType
{
	NotStarted = 0,
	Started = 1,
	Step1 = 2,
	Step2 = 3,
	Step3 = 4,
	Step4 = 5,
	Step5 = 6,
	MaxType
}

export enum KisslAnswer
{
	No = 0,
	Yes = 1
}

export enum ClientProposalAnswer
{
	Yes = 0,
	No
}

export enum ContestAction
{
	None = 0,
	Kick = 1,
	Save = 2
}

export enum VideoAdType
{
	DailyBonus = 0,
	CinemaGift = 1,
	ChatMessage = 2,
	Guest = 3
}
/* eslint-enable @typescript-eslint/indent */

export class PacketClient extends ByteArray
{
	// Play
	public static PLAY_NEW: number = 0;
	public static PLAY_CHANGE: number = 1;
	public static PLAY_PRIVATE: number = 2;
	public static PLAY_BACK: number = 3;

	// Search
	public static SEARCH_CUSTOM: number = 0;
	public static SEARCH_REGION: number = 1;
	// Rating
	public static RATING_COMMON: number = 0;
	public static RATING_KISSES: number = 1;
	public static RATING_HEARTS: number = 2;
	public static RATING_GIFTS: number = 3;
	public static RATING_ACTIVES: number = 4;

	// count 424 reserved by server

	// Wedding
	public static WEDDING_PROPOSAL_YES: number = 0;
	public static WEDDING_PROPOSAL_NO: number = 1;
	public static WEDDING_VOW_YES: number = 0;
	public static WEDDING_VOW_NO: number = 1;
	public static FIANCE_ANSWER_NO: number = 0;
	public static FIANCE_ANSWER_YES: number = 1;
	public static MARRY_GROOM: number = 0;
	public static MARRY_BRIDE: number = 1;
	public static THROW_BOUQUET: number = 0;
	public static THROW_GARTER: number = 1;
	public static CATCH_BOUQUET: number = 0;
	public static CATCH_GARTER: number = 1;
	// House
	public static HOUSE_MOVE_HOLD: number = 0;
	public static HOUSE_MOVE_PLACE: number = 1;
	// JOIN_SET
	public static JOIN_PROFILE: number = 4;
	public static JOIN_ACHIEVEMENT: number = 8;
	public static JOIN_PHOTOS: number = 11;
	public static JOIN_RATING_FORBES: number = 16;
	// MAFIA_PLAY
	public static MAFIA_PLAY_NEW: number = 0;
	public static MAFIA_PLAY_PRIVATE: number = 1;
	public static MAFIA_PLAY_CHANGE: number = 2;
	// PHOTO_RATE
	public static PHOTO_RATE_DISLIKE: number = 0;
	public static PHOTO_RATE_LIKE: number = 1;
	// PETS_ACTION
	public static PET_ACTION_TYPE_NORMAL: number = 0;
	public static PET_ACTION_TYPE_SUPER: number = 1;
	// room type for actions
	public static ROOM_BOTTLE: number = 0;
	public static ROOM_HOUSE: number = 1;
	public static ROOM_WEDDING: number = 2;
	public static ROOM_MAFIA: number = 3;
	public static ROOM_ANY: number = 4;
	// PhotoModeration
	public static MODERATION_APPROVE: number = 0;
	public static MODERATION_BLOCK: number = 1;
	public static MODERATION_ERROR: number = 2;
	// Kiss
	public static KISS_ANSWER_NO: number = 0;
	public static KISS_ANSWER_YES: number = 1;
	public static KISS_ANSWER_UNKNOWN: number = 2;

	// Login
	public static LOGIN_POSITION_SEX: number = 12;

	/* tslint:disable:member-ordering */
	private static FORMATS: string[] = [
		"",				// MIN_TYPE;

		// Admin
		"I",				// ADMIN_REQUEST(1); inner_id:I
		"IS",				// ADMIN_EDIT(2); player_id:I, json_data:S
		"S",				// ADMIN_MESSAGE(3); message:S

		"LBBS,BSIIBSBSBS",		// LOGIN(4); net_id:L, type:B, device:B, auth_key:S, oauth:B, session_key:S, referrer:I, tag:I, appicationID:B, timestamp:S, language:B, utm_source:S, sex:B, captcha:S
		"",				// REFILL(5);
		"IIIIB,SS",			// BUY(6); good_id:I, cost:I, target_id:I, data:I, price_type:B, hash:S, params: S
		"IIIBS,S",			// VIP_GIFT(7); gift_id:I, cost:I, target_id:I, private:B, message:S, hash:S
		"[I]I,I",			// REQUEST(8); [player_id:I], mask1:I, mask2:I
		"[L]BI,I",			// REQUEST_NET(9); [net_id:L], type:B, mask1:I, mask2:I
		"LBSS",				// ADMIN_ORDERS(10); net_id:L, type:B, start_date:S, finish_date:S (YYYY-MM-DD)
		"I",				// GAME_REWARDS_GET(11); reward_id:I
		"SSSB",				// INFO(12); name:S, profile:S, status:S, region:B
		"S",				// PARAMS_SET(13); params:S
		"I,BI",				// NOTIFY(14); target_id:I, type:B, gift_id:I
		"L",				// INVITE(15); inviter_id:L
		"B",				// SEX(16); sex: B
		"I",				// VIEW(17); inner_id:I
		"I",				// BIRTHDAY(18); bday:I
		"B",				// COLOR(19); color:B
		"W,LL",				// COUNT(20); type:W, data:L, count:L
		"IB",				// MOVE(21); target_id:I, destination:B
		"I",				// TAG(22); value:I
		"BB",				// LEADERBOARD_REQUEST(23); type:B, period:B
		"[I]",				// ROOM_INVITE(24); [player_id:I]
		"BB",				// FLAGS_SET(25); flag_id:B, value:B

		// Bottle
		"B,B",				// BOTTLE_PLAY(26); type:B, language:B
		"",				// BOTTLE_LEAVE(27);
		"I",				// BOTTLE_ROLL(28); speed:I
		"B",				// BOTTLE_KISS(29); answer:B
		"I",				// BOTTLE_SAVE(30); target_id:I
		"I",				// BOTTLE_KICK(31); player_id:I
		"B",				// BOMB_HURL(32); room_type:B
		"",				// BOTTLE_WAITER_JOIN(33);
		"",				// BOTTLE_WAITER_LEAVE(34);

		// Chat
		"",				// CHAT_JOIN(35);
		"",				// CHAT_LEAVE(36);
		"BS,II",			// CHAT_MESSAGE(37); chat_type:B, message:S, owner_id:I, data:I
		"IS",				// CHAT_WHISPER(38); target_id:I, message:S

		// History
		"I",				// HISTORY_REQUEST(39); target_id:I
		"I",				// HISTORY_CLEAR(40); target_id:I

		"I",				// UNFRIEND(41); friend_id:I
		"I",				// LAST_MESSAGE_REQUEST(42); playerId:I
		"",				// TOP(43);

		"",				// REQUEST_LEAGUES_RATING(44);
		"BI",				// REQUEST_LEAGUE(45); league:B, group_id:I
		"",				// (46); Removed
		"",				// (47); Removed
		"",				// (48); Removed
		"",				// (49); Removed
		"",				// (50); Removed
		"",				// (51); Removed
		"",				// (52); Removed
		"",				// (53); Removed

		// Anonym
		"[I]", 				// BOTTLE_LEAVING_ROOMS(54); list:[I]
		"",				// (55); Removed
		"",				// (56); Removed
		"",				// (57); Removed

		// Ignore
		"I",				// IGNORE_ADD(58); target_id:I
		"I",				// IGNORE_REMOVE(59); target_id:I

		"",				// (60); Removed

		"",				// RECEIVE_DAILY_BONUS(61);

		// Wedding
		"IBS",				// WEDDING_PROPOSAL(62); target_id:I, ring:B, message:S
		"IB",				// WEDDING_PROPOSAL_ANSWER(63); target_id:I, answer:B
		"I",				// WEDDING_PROPOSAL_CANCEL(64); target_id:I
		"[I]",				// WEDDING_REQUEST(65); [wedding_ids:I]
		"[I]",				// WEDDING_STATS(66); [wedding_ids:I]
		"I",				// WEDDING_ITEMS_GET(67); wedding_id:I
		"BB",				// WEDDING_ITEMS_SET(68); type:B, item_id:B
		"I",				// WEDDING_INVITE(69); target_id:I
		"",				// WEDDING_GUESTS_REQUEST(70);
		"I",				// WEDDING_PLAY(71); wedding_id:I
		"",				// WEDDING_LEAVE(72);
		"",				// WEDDING_ROLL(73);
		"B",				// WEDDING_KISS(74); answer:B
		"I",				// WEDDING_KICK(75); player_id:I
		"",				// (76); Removed
		"",				// WEDDING_WAITER_JOIN(77);
		"",				// WEDDING_WAITER_LEAVE(78);
		"",				// WEDDING_START(79);
		"",				// WEDDING_VOW_ANSWER(80);
		"",				// WEDDING_GARTER_THROW(81);
		"",				// WEDDING_COMPLETE (82);
		"",				// WEDDING_BOUQUET_THROW(83);
		"",				// (84); Removed
		"",				// (85); Removed
		"",				// WEDDING_DIVORCE(86);
		"I",				// WEDDING_RATING_HAPPY(87); page:I
		"",				// WEDDING_CANCEL(88);
		"",				// WEDDING_START_NOW(89);

		"",				// ACHIEVE_POST(90);

		// House
		"[I]I",				// HOUSE_REQUEST(91); [room_id:I], mask:I
		"II",				// HOUSE_MEMBER_ADD(92); houseId:I, target_id:I
		"II",				// HOUSE_MEMBER_REMOVE(93); houseId:I, target_id:I
		"",				// (94); Removed
		"IWI",				// HOUSE_ITEM_ADD(95); room_id:I, type:W, cost:I
		"",				// (96); Removed
		"",				// (97); Removed
		"[IBWWB]",			// HOUSE_ITEM_MOVE(98); [id:I, sector:B, pos_x:W, pos_y:W, rotation:B]
		"[I]B",				// HOUSE_ITEM_BOXROOM(99); [id:I], state:B
		"",				// HOUSE_ITEM_BOXROOM_UNSET(100);
		"",				// HOUSE_ITEM_ACTIVATE(101);
		"",				// HOUSE_ITEM_DEACTIVATE(102);
		"I",				// HOUSE_JOIN(103); room_id:I
		"",				// HOUSE_LEAVE(104);
		"BWWB",				// HOUSE_MOVE(105); sector:B, pos_x:W, pos_y:W, type:B
		"",				// HOUSE_WAITER_JOIN(106);
		"",				// HOUSE_WAITER_LEAVE(107);
		"",				// (108); Removed
		"I",				// HOUSE_KNOCK(109); target_id:I
		"",				// CHAT_CLEAR(110);

		// Curios gifts
		"",				// CURIOS_REQUEST(111);
		"III",				// CURIOS_GIFT(112); curio_id:I, cost:I, target_id:I

		"I",				// ADMIN_CLEAR_ROOM(113); room_id:I

		"B",				// GET_CHAT_HISTORY(114); chat_type:B
		"B",				// COLLECTIONS_ASSEMBLE(115); assemble_id:B
		"",				// (116); Removed
		"",				// (117); Removed
		"",				// (118); Removed
		"",				// (119); Removed
		"",				// (120); Removed
		"",				// (121); Removed
		"",				// (122); Removed
		"",				// (123); Removed
		"",				// VIDEO_POPULAR_GET(124);
		"",				// (125); Removed
		"B",				// TITLE_AWARD(126); award_type: B
		"",				// (127); Removed
		"BII",				// TITLE_REQUEST(128); type:B, offset:I, count:B
		"",				// (129); Removed
		"",				// (130); Removed
		"",				// (131); Removed
		"IBI",				// HOUSE_PACK_ADD(132); room_id:I, type:B, cost:I
		"S",				// PUSH_TOKEN(133); token:S
		"",				// (134); Removed
		"",				// (135); Removed
		"",				// (136); Removed
		"I",				// HOUSE_ACTION(137); action_id:I
		"BB",				// HOUSE_SECTOR(138); sector_id:B, type:B

		// Moderation
		"",				// (139); Removed
		"",				// (140); Removed
		"",				// (141); Removed
		"",				// (142); Removed
		"",				// (143); Removed
		"",				// SPECTATOR(144);
		"",				// (145); Removed
		"B",				// TRAINING_SET(146); type:B
		"[SS]",				// SING_XS(147); [key:S, data:S]
		"",				// (148); Removed
		"",				// (149); Removed
		"IB",				// COMPLAIN(150); player_id:I, type:B
		"",				// (151); Removed
		"",				// (152); Removed
		"",				// (153); Removed
		"B",				// JOIN_SET(154); set:B
		"",				// (155); Removed
		"",				// (156); Removed
		"",				// (157); Removed
		"[S]",				// VIDEO_INFO_GET (158); [video_id:S]
		"SSSSWI",			// VIDEO_INFO_ADD (159); video_id:S, title:S, url:S, channel:S, duration:W, view_count:I
		"",				// (160); Removed
		"",				// (161); Removed
		"",				// (162); Removed
		"",				// GET_BDAY_REWARD(163);
		"",				// (164); Removed
		"",				// (165); Removed
		"",				// (166); Removed
		"",				// (167); Removed
		"",				// (168); Removed
		"",				// (169); Removed
		"B",				// POST_AWARD(170); type:B
		"",				// (171); Removed
		"BI",				// CONTEST_ACTION (172); action_type:B, target_id:I
		"",				// HALLOWEEN_CRAFT_SUIT (173);
		"BI,BB",			// SET_ACTOIN_TIMEOUT(174); type:B, time:I, event_type:B, text_id:B
		"",				// (175); Removed
		"S",				// UTM_SET(176); utm:S
		"",				// (177); Removed
		"",				// (178); Removed
		"",				// (179); Removed
		"",				// (180); Removed
		"",				// (181); Removed
		"",				// (182); Removed
		"BBI",				// RATING(183); is_daily:B, type:B, page:I
		"",				// (184); Removed
		"",				// (185); Removed
		"",				// (186); Removed
		"",				// (187); Removed
		"",				// (188); Removed
		"",				// (189); Removed
		"",				// (190); Removed
		"",				// (191); Removed
		"",				// (192); Removed
		"",				// (193); Removed
		"",				// (194); Removed
		"",				// (195); Removed
		"",				// (196); Removed
		"",				// (197); Removed
		"",				// (198); Removed
		"",				// (199); Removed
		"BIBBBIB", 			// SEARCH(200); count:B, offset:I, min_age:B, max_age:B, sex_mask:B, I:region, B:online_only
		"",				// (201); Removed
		"I",				// BOTTLE_MOVE(202); room_id: I
		"I",				// REQUEST_PLAYER_ROOM_TYPE(203); player_id:I

		// Photos
		"BS,B",				// PHOTOS_ADD_PHOTO(204); photo_id:B, photo_url:S, active_id:B
		"B,I",				// PHOTOS_REMOVE_PHOTO(205); photo_id:B, player_id:I
		"IB",				// PHOTOS_REQUEST(206); player_id:I, photo_id:B
		"IBB",				// PHOTOS_LIKE(207); player_id:I, photo_id:B, is_like:B
		"",				// (208); Removed
		"",				// (209); Removed
		"IBB",				// PHOTO_RATES_LIKE(210); player_id:I, photo_id:B, is_like:B
		"",				// PHOTO_RATES_NEXT(211);
		"I",				// PHOTO_RATES_RATING(212); page:I
		"IB",				// PHOTO_RATES_FAILED(213); player_id:I, photo_id:B
		"BB",				// EMOTION(214); emotion:B, room_type:B
		"",				// PHOTOS_DIFFERENCE(215);
		"S",				// EMAIL(216); email:S

		// Admin
		"BSIB,BBII",			// ADD_NOTIFICATION(217); priority:B, message:S, player_id:I, net_type:B, sex:B, age:B, logout_time_after:I, logout_time_before:I

		"B",				// SET_PROFILE_BG(218); background_id:B

		"",				// (219); Removed
		"",				// (220); Removed
		"BI",				// WALL_POST(221);
		"",				// (222); Removed
		"B",				// SET_FRAME(223); frame_id:B
		"",				// BALLOON_BURST(224);
		"I",				// RATING_ELITE(225); page:I
		"",				// (226); Removed
		"",				// (227); Removed
		"",				// (228); Removed
		"BB",				// QUEST_ACTION(229); quest_id:B, action:B
		"B",				// MODERATION_REQUEST(230); count: B
		"IBSB",				// MODERATION_DECISION(231); player_id:I, photo_id:B, photo_url:S, decision:B
		"",				// (232); Removed
		"B",				// TIMEZONE(233); time_zone:B
		"SWS",				// VIDEO_PLAY(234); video_id:S, duration:W, title:S
		"",				// (235); Removed
		"",				// (236); Removed
		"SB",				// VIDEO_LIKE(237); video_id:S, type:B
		"II",				// HOLIDAY_ITEM_SEND(238); target_id:I, data:I
		"III",				// OFFER_GIFT(239); offer_id:I, target_id:I, gift_id:I
		"",				// REFILL_SUBSCRIPTION(240);
		"",				// REQUEST_BOX_INFO(241);
		"",				// BIRTHDAY_NOTIFY(242);
		"",				// (243); Removed
		"",				// (244); Removed
		"B",				// OPEN_CHEST(245); chest_id:B
		"",				// LIMITED_OFFERS_REQUEST (246);
		"I[B],S",			// BAN_MULTIPLE(247); target_id:I, [reason:B], link:S
		"",				// BAN_ACCEPT(248);
		"",				// (249); Removed
		"",				// (250); Removed
		"IS",				// ADMIN_BUYINGS_REQUEST(251); player_id:I, date:S
		"",				// ROULETTE_ROLL(252);
		"",				// HOLIDAY_ITEM_CLICK(253);
		"I",				// HOLIDAY_RATING_REQUEST(254); page:I
		"I",				// PHOTOS_ASK(255); player_id:I
		"I",				// GOAL_REACH(256); target_index:I
		"S",				// VIDEO_CANCEL(257); video_id:S
		"BIS",				// (258); Removed
		"I",				// WINK(259); player_id:I
		"B",				// EMAIL_BONUS(260); type:B
		"S",				// CAPTCHA(261); answer:B
		"I",				// ACTION(262); type:I
		"BII",				// VIDEO_AD_COMPLETE(263); video_ad_type:B, player_id:I, gift_id:I
		"BS",				// GIF(264); chat_type:B, gif_id:S
		"IS",				// GIF_WHISPER(265); target_id:I, gif_id:S
		"I",				// GET_ADMIRE_BONUS(266); player_id:I
		"",				// (267); Removed
		"",				// REQUEST_OFFERS(268);
		"ISS",				// ADMIN_REWARDS_REQUEST(269); player_id:I, start_date:S, finish_date:S
		"B",				// GIFT_BOXES(270); box_id:B
		"B"				// TUTORIAL(271); state:B
	];
	/* tslint:enable:member-ordering */

	private _type: number = 0;

	public constructor(type: number, deviceType: number)
	{
		super();

		if (type <= 0 || type >= PacketClient.FORMATS.length)
			throw new Error("Unknown client packet type " + type);

		this._type = type;
		this.endian = ByteArray.LITTLE_ENDIAN;

		this.writeShort(type);
		this.writeByte(deviceType);
	}

	public get type(): number
	{
		return this._type;
	}

	public load(rest: any[]): void
	{
		let format: string = PacketClient.FORMATS[this._type];
		let optional: boolean = false;

		let groupPos: number = 0;
		let groupLength: number = 0;

		let container: any[] = rest;

		for (let i: number = 0; i < format.length; i++)
		{
			let symbol: string = format.charAt(i);

			if (symbol === ",")
			{
				if (optional || groupPos !== 0)
					throw new Error("Bad signature for client packet " + this._type);

				optional = true;
				continue;
			}

			if (symbol === "]")
			{
				if (groupPos === 0)
					throw new Error("Bad signature for client packet " + this._type);

				groupLength--;

				if (groupLength !== 0)
				{
					i = groupPos - 1;
					continue;
				}

				groupPos = 0;
				container = rest;
				continue;
			}

			if (symbol === "[")
			{
				if (groupPos !== 0)
					throw new Error("Bad signature for server packet " + this._type);

				let last: number = this.getGroupLast(format, i);

				container = rest.shift();

				if (optional && container == null)
					break;

				let count: number = last - i - 1;

				if (container.length % count !== 0)
					throw new Error("Group incomplete for client packet " + this._type);

				groupLength = container.length / count;
				this.writeShort(groupLength);

				if (groupLength !== 0)
				{
					groupPos = i + 1;
					continue;
				}

				i = last;
				container = rest;
				continue;
			}

			if (container.length === 0)
			{
				if (optional && groupPos === 0)
					break;

				throw new Error("No data for client packet " + this._type);
			}

			let value = container.shift();

			switch (symbol)
			{
				case "S":
					this.writeUTF(value);
					this.writeByte(0);
					break;
				case "L":
					let result: UInt64 = new UInt64(value.toString());
					result.write(this);
					break;
				case "I":
					this.writeInt(value);
					break;
				case "W":
					this.writeShort(value);
					break;
				case "B":
					this.writeByte(value);
					break;
			}
		}

		if (rest.length)
			throw new Error("Data " + rest.length + " left in client packet " + this._type);
	}

	private getGroupLast(format: string, first: number): number
	{
		for (let last: number = first + 1; last < format.length; last++)
		{
			if (format.charAt(last) !== "]")
				continue;
			if (last === first + 1)
				break;
			return last;
		}

		throw new Error("Bad signature for client packet " + this._type);
	}
}