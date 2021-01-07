import { ByteArray } from "../net/ByteArray";
import { UInt64 } from "../net/UInt64";

/* eslint-disable @typescript-eslint/indent */
export enum ServerPacketType
{
	NULL = 0,
	HELLO = 1,
	ADMIN_INFO = 2,
	ADMIN_MESSAGE = 3,
	LOGIN = 4,
	INFO = 5,
	INFO_NET = 6,
	BALANCE = 7,
	BUY = 9,
	VIP_GIFT = 10,
	ADMIN_ORDERS_INFO = 11,
	EVENTS = 12,
	GAME_REWARDS = 13,
	ADMIRERS = 14,
	HEART = 15,
	GIFT = 16,
	BONUS = 17,
	LEADERBOARDS = 18,
	VIP_COLOR = 19,
	VIP = 20,
	ROOM_INVITE = 21,
	MOVE = 22,
	ADMIRE_BID = 23,
	BOTTLE_PLAY_DENIED = 24,
	BOTTLE_ROOM = 25,
	BOTTLE_JOIN = 26,
	BOTTLE_LEAVE = 27,
	BOTTLE_LEADER = 28,
	BOTTLE_ROLL = 29,
	BOTTLE_KISS = 30,
	BOTTLE_TABLE = 31,
	BOTTLE_BOTTLE = 32,
	BOMB_HURL = 33,
	BOMB_EXPLODE = 34,
	BOTTLE_ENTER = 35,
	CHAT_LEAVE = 36,
	CHAT_MESSAGE = 37,
	CHAT_WHISPER = 38,
	HISTORY_CONTACTS = 39,
	TITLE_POINTS = 40,
	IGNORE_LIST = 41,
	CHAMPION_CHEST = 42,
	BEST = 43,
	MONEY_BOX = 44,
	FRIENDS = 45,
	TOP = 46,
	LEAGUES_RATING = 47,
	LEAGUE_GROUP = 48,
	LEAGUE_COMMON_POINTS = 49,
	SEARCH = 50,
	LAST_MESSAGE = 51,
	BOTTLE_LIVE_ROOMS = 54,
	ADVENT_CALENDAR = 55,
	GIFTS_FOR_ACTIONS_STATS = 65,
	RATING_SIZE = 66,
	WEDDING_PROPOSAL_ANSWER = 67,
	WEDDING_PROPOSAL_CANCEL = 68,
	WEDDING_PROPOSAL_MAKE = 69,
	WEDDING_PROPOSAL_REFUSE = 70,
	WEDDING_PROPOSAL_INFO = 71,
	WEDDING_ADMISSIONS = 72,
	WEDDING_INFO = 73,
	WEDDING_STATS = 74,
	WEDDING_ITEMS = 75,
	WEDDING_SETTLED = 76,
	WEDDING_GUESTS = 77,
	WEDDING_ENTER = 78,
	WEDDING_CONTEST = 80,
	WEDDING_JOIN = 81,
	WEDDING_KISS = 82,
	WEDDING_LEADER = 83,
	WEDDING_LEAVE = 84,
	WEDDING_PLAY_DENIED = 85,
	WEDDING_ROLL = 86,
	WEDDING_ROOM = 87,
	WEDDING_STATUS = 88,
	WEDDING_VOW = 89,
	WEDDING_GARTER = 90,
	WEDDING_BOUQUET = 91,
	WEDDING_HAPPY = 93,
	WEDDING_DIVORCE = 94,
	WEDDING_RATING_HAPPY = 95,
	WEDDING_CANCEL = 96,
	WEDDING_START_TIME = 97,
	HOUSE_INFO_REQUEST = 98,
	HOUSE_ACCESS = 99,
	HOUSE_PUBLIC = 100,
	HOUSE_KEYS = 101,
	HOUSE_ITEMS = 103,
	HOUSE_GIFT = 104,
	HOUSE_ITEM_MOVE = 105,
	ACHIEVEMENT_GET = 106,
	HOUSE_ITEM_BOXROOM = 107,
	HOUSE_ENTER = 108,
	HOUSE_JOIN = 109,
	HOUSE_LEAVE = 110,
	HOUSE_MOVE = 111,
	HOUSE_PLAY = 112,
	HOUSE_ROOM = 113,
	HOUSE_MANSIONS = 116,
	CURIOS = 117,
	CURIOS_GIFT = 118,
	VIP_BONUS = 119,
	CHAT_HISTORY = 120,
	COLLECTIONS_ASSEMBLE = 121,
	COLLECTIONS_AWARD = 122,
	HOUSE_SECTOR = 125,
	HOUSE_STOCK = 126,
	STATUS_GIFT_STATS = 127,
	HALLOWEEN_DATA = 128,
	COLLECTIONS_POINTS = 130,
	SELF_RICH_UPDATE = 131,
	CHRISTMAS_DECORATIONS = 132,
	HOUSE_PACKS = 133,
	HOUSE_PACK_GIFT = 134,
	POSTING_REWARDS = 135,
	HOUSE_ACTION = 136,
	HOUSE_SECTORS = 137,
	TRAINING = 145,
	XSOLLA_SIGNATURE = 146,
	OFFERS_INFO = 163,
	COINS_LADDER = 164,
	TIMEOUTS = 173,
	COUNTER = 175,
	HOUSE_VALUE = 181,
	RATING = 183,
	PLAYER_ROOM_TYPE = 212,
	PHOTOS_INFO = 213,
	PHOTOS_SHOWS = 214,
	PHOTO_RATES_INFO = 215,
	PHOTO_RATES_RATING = 216,
	EMOTION = 217,
	PLAYERS_KISSES = 218,
	PHOTOS_LEADER = 219,
	PHOTOS_DIFFERENCE = 220,
	INVITER_STATE = 221,
	PLAYERS_VIEW = 230,
	UPDATE_INFO = 232,
	RATING_ELITE = 233,
	QUEST = 236,
	QUEST_AWARD = 237,
	MODERATION_LIST = 238,
	PHOTOS_LIKE_RATE = 243,
	SELF_POPULAR_UPDATE = 245,
	BALANCE_HOLIDAY = 246,
	HOLIDAY_ITEM_SEND = 247,
	OFFERS_BALANCE = 249,
	SUBSCRIPTION_DATA = 250,
	BIRTHDAY_NOTIFY = 253,
	POPULAR_GIFTS = 254,
	HISTORY_MESSAGES = 256,
	CHEST_DATA = 259,
	CHEST_OPEN = 260,
	ROULETTE = 262,
	BANS = 264,
	HOLIDAY_ITEM_APPEAR = 271,
	ADMIN_BUYINGS_INFO = 295,
	VIDEO_INFO = 296,
	VIDEO_ROOM = 297,
	VIDEO_LISTS = 298,
	VIDEO_QUEUE = 299,
	CHAT_OFFER = 300,
	WINK = 301,
	SPECTATOR_JOIN_LEAVE = 302,
	CAPTCHA = 304,
	CHAT_GIF = 305,
	GIF_HISTORY = 306,
	KISS_PRIORITY = 307,
	KICK_KICKS = 308,
	KICK_SAVE = 309,
	BALANCE_ITEMS = 310,
	TITLES = 311,
	TITLES_INFO = 312,
	TITLES_AWARD = 313,
	FRAMES = 314,
	REWARD_GOT = 315,
	CONTEST = 316,
	POPULAR_VIDEOS = 317,
	ADMIN_REWARDS_INFO = 318,
	GIFT_BOXES = 319,
	BALLOONS = 320,
	LIMITED_OFFERS = 321,
	CONTEST_WITH_ACTIONS = 322,
	CONTEST_ACTION = 323,
	LEAGUE_CURRENT_POINTS = 324,
	MAX_TYPE
}

export enum WhisperMessageDirection
{
	Incomming = 0,	// General
	Outcomming = 1	// Confirm
}

export enum GiftsChallengeState
{
	WaitingForPlayer = 0,
	Waiting = 1,
	Playing = 2
}

export enum SpectatorAction
{
	Join = 0,
	Leave = 1
}

export enum PlayerRoomType
{
	PLAYER_ROOM_NONE = 0,
	PLAYER_ROOM_BOTTLE,
	PLAYER_ROOM_WEDDING,
	PLAYER_ROOM_HOUSE,
	PLAYER_ROOM_MAFIA,
	PLAYER_ROOM_OFFLINE
}

export enum MoveFailReason
{
	OFFLINE = 0,
	NOT_IN_ROOM = 1,
	SAME_ROOM = 2,
	WRONG_AGE = 3,
	BOTTLE_NOT_FOUND = 4,
	BOTTLE_FULL = 5,
	BOTTLE_WAIT = 6,
	WEDDING_PRIVATE = 8
}

export enum PlayFailReason
{
	NO_AVAILABLE_ROOMS = 0,
	ROOM_FULL = 3,
	QUEUE_REMOVED = 6
}

export enum BuyResult
{
	BUY_SUCCESS,
	BUY_PRICE_CHANGED,
	BUY_NO_BALANCE,
	BUY_FAILED
}

export enum BottleMove
{
	MOVE_OFFLINE = 0,
	MOVE_NOT_IN_ROOM,
	MOVE_SAME_ROOM,
	MOVE_WRONG_AGE,
	MOVE_BOTTLE_PRIVATE,
	MOVE_BOTTLE_ROOM_FULL,
	MOVE_BOTTLE_WAIT,
	MOVE_WEDDING_WAIT,
	MOVE_WEDDING_PRIVATE,
	MOVE_WEDDING_ROOM_FULL,
	MOVE_WEDDING_NOT_ACTIVE,
	MOVE_HOUSE_DENIED,
	MOVE_HOUSE_FULL
}

export enum ProposalInfoFields	// fields order in WEDDING_PROPOSAL_INFO(71)
{
	ProposalId = 0,
	TargetId,
	SenderId,
	RingId,
	Message,
	Status,
	Delay
}

export enum ProposalStatus
{
	Proposal = 0,
	Engaged = 1,
	Removed = 2
}

export enum ServerProposalAnswer
{
	Accept,
	Reject,
	FailedAccept,
	FailedReject,
	AcceptUnadmire
}

export enum ProposalCancelStatus
{
	Success = 0,
	Failed
}

export enum WeddingAdmissionStatus
{
	Own = 0,
	Invited,
	Denied
}

export enum WeddingStatus
{
	Expired = 0,
	Reject = 1,
	Divorce = 2,
	Canceled = 3,
	Created = 4,
	Ready = 5,
	Vow = 6,
	GarterReady = 7,
	GarterThrown = 8,
	BouquetReady = 9,
	BouquetThrown = 10,
	Completed = 13,
	Contest = 14
}

export enum WeddingItemType
{
	Ring = 0,
	Table,
	Bottle,
	Emcee,
	Garter,
	Bouquet,
	GroomSuit,
	BrideSuit,
	MaxType
}

export enum WeddintEventStatus	// for garter and bouquet
{
	Throw = 0,
	Catch = 1
}

export enum WeddingPlayDeniedReason	// for garter and bouquet
{
	Closed = 0,
	WaitTimeExpired,
	NotActive
}

export enum ProposalMakeStatus
{
	Success = 0,
	Engaged,
	Admire
}

export enum LoginDataIndex
{
	Status = 0,
	InnerId = 1,
	Balance = 2,
	Invited = 3,
	LogoutTime = 4,
	Flags = 5,
	GamesCount = 6,
	KissesDaily = 7,
	LastPaymentTime = 8,
	SubscribeExpires = 9,
	Params = 10,
	SexSet = 11,
	TutorialStep = 12,
	GlobalTime = 13,
	FirstLogin = 14,
	PhotosHash = 15
}

/* eslint-enable @typescript-eslint/indent */

export class PacketServer extends Array<any>
{
	private static split: boolean = true;

	// Login
	public static LOGIN_SUCCESS: number = 0;
	public static LOGIN_FAILED: number = 1;
	public static LOGIN_EXIST: number = 2;
	public static LOGIN_BLOCKED: number = 3;
	public static LOGIN_WRONG_VERSION: number = 4;
	public static LOGIN_NO_SEX: number = 5;
	public static LOGIN_CAPTCHA: number = 6;

	// Bottle play
	public static PLAY_CHANGE_FAILED: number = 0;
	public static PLAY_PRIVATE_NOT_EXIST: number = 1;
	public static PLAY_PRIVATE_EXPIRED: number = 2;
	public static PLAY_PRIVATE_CLOSED: number = 3;
	public static PLAY_PRIVATE_WRONG_PASSWORD: number = 4;
	public static PLAY_WAIT_TIME_EXPIRED: number = 5;

	// Buy curios gift
	public static BUY_CURIOS_SUCCESS: number = 0;
	public static BUY_CURIOS_PRICE_CHANGED: number = 1;
	public static BUY_CURIOS_SOLD_OUT: number = 2;

	/* tslint:disable:member-ordering */
	private static readonly FORMATS: string[] = [
		"",							// MIN_TYPE;

		"",							// HELLO(1);

		"IIIIIIII[BII]IIBBIBI[BBBII]",				// ADMIN_INFO(2); inner_id:I, ligout_time:I, balance_paid:I, balance_free:I, subscribe:I, hearts:I, kisses:I, gifts:I, [type:B, value:I, daily_value:I], bridals_place:I, wedlocks_place:I, is_popular:B, is_rich:B, views_place:I, league:B, points:I, [ban_type:B, ban_reason:B, ban_repeated:B, ban_moderator:I, ban_finish:I]
		"S",							// ADMIN_MESSAGE(3); message:S

		"B,IIBI[B]IIIISBBIBS",					// LOGIN(4); status:B, inner_id:I, balance:I, invited:B, logout_time:I, [flags:B], games_count:I, kisses_daily_count:I, last_payment_time:I, subscribe_expires:I, params:S, sex_set:B, tutorial:B, server_time:I, first_login:B, photos_hash:S

		"AI,I",							// INFO(5); data:A, mask1:I, mask2:I
		"AI,I",							// INFO_NET(6); data:A, mask1:I, mask2:I
		"I,B",							// BALANCE(7); bottles:I, reason:B
		"II[[I]]",						// DATA(8); connected:I, global_count:I, [[leader_id:I]]
		"BIIIII",						// BUY(9); result:B, player_id:I, good_id:I, price:I, target_id:I, data:I
		"IIIBS",						// VIP_GIFT(10); target_id:I, sender_id:I, gift_id:I, isPrivate:B, message:S
		"[IFI]",						// ADMIN_ORDERS_INFO(11); [offer_id:I, revenue:F, time:I]
		"[BIIII]",						// EVENTS(12); [type:B, actor_id:I, data:I, time:I, count:I]
		"[IIS]",						// GAME_REWARDS(13); [id:I, count:I, json:S]
		"[III]",						// ADMIRERS(14); [player_id:I, cost:I, expired:I]
		"II",							// HEART(15); target_id:I, sender_id:I
		"III",							// GIFT(16); target_id:I, sender_id:I, data:I
		"BB",							// BONUS(17); can_collect:B, day:B
		"BBI[II]",						// LEADERBOARDS(18); leaderboard:B, period_type:B, season:I, [player_id:I, points:I]
		"IB",							// VIP_COLOR(19); player_id:I, color:B
		"I,B",							// VIP(20); time:I, reason:B
		"I",							// ROOM_INVITE(21); player_id: number
		"B,I",							// MOVE(22); status:B, room_id:I
		"II",							// ADMIRE_BID(23); admired_id:I, rival_id:I

		// Bottle
		"B",							// BOTTLE_PLAY_DENIED(24); status:B
		"IWW[I][I]",						// BOTTLE_ROOM(25); id:I, table_id:W, bottle_id:W, [player_id:I], [spectator_id:I]
		"IB",							// BOTTLE_JOIN(26); inner_id:I, index:B
		"I",							// BOTTLE_LEAVE(27); inner_id:I
		"I",							// BOTTLE_LEADER(28); leader_id:I
		"II,II",						// BOTTLE_ROLL(29); leader:I, rolled_id:I, speed:I, time:I,
		"IB",							// BOTTLE_KISS(30); player:I, answer:B
		"IW",							// BOTTLE_TABLE(31); actor_id:I, table_id:W
		"IW",							// BOTTLE_BOTTLE(32); actor_id:I, bottle_id:W
		"IIBB",							// BOMB_HURL(33); source_id:I, catcher_id:I, is_new:B, room_type:B
		"IB",							// BOMB_EXPLODE(34); player_id:I, room_type:B
		"",							// BOTTLE_ENTER(35);

		"",							// CHAT_LEAVE(36);
		"BIS,II",						// CHAT_MESSAGE(37); chat_type:B, player_id:I, message:S, owner_id:I, data:I
		"ISBIB",						// CHAT_WHISPER(38); player_id:I, message:S, type:B, history_id:I, is_new: B

		"[IIIB]",						// HISTORY_CONTACTS(39); [target_id:I, total:I, last:I, count_new:B]
		"I",							// TITLE_POINTS(40);

		// Ignore
		"[I]",							// IGNORE_LIST(41); [targed_id:I]
		"BBB",							// CHAMPION_CHEST(42); currentPoints:B, needPoints:B, boughtTodayCount:B

		"[II][II][II]",						// BEST(43); [wedding_id:I, value:I], [popular_player_id:I, value:I], [forbes_player_id:I, value:I]
		"IB",							// MONEY_BOX(44); coins_spent:I, count_bought:B
		"[IB]",							// FRIENDS(45); [friend_id:I, removed:B]
		"[I]",							// TOP(46); [topId:I]

		"[II]",							// LEAGUES_RATING(47); [player_id:I, common_points:I]
		"BI[II]",						// LEAGUE_GROUP(48); state:B, group_id:I [player_id:I, group_points:I]
		"BI",							// LEAGUE_COMMON_POINTS(49); league:B, league_common_points:I
		"[I]I",							// SEARCH(50); ids:[I], offset:I
		"I,IBSIBII",						// LAST_MESSAGE(51); player_id:I, message_id:I, event_type:B, message:S, data:I, is_my:B, count:I, time:I
		"",							// (52); Removed

		"IB",							// PUZZLE_AWARD(53); target_id:I, award:B
		"[I]",							// BOTTLE_LEAVING_ROOMS(54); [roomId:number]
		"[B]",							// ADVENT_CALENDAR(55); [state:B]
		"BB,B",							// PUZZLE_SOLVED(56); status:B, puzzle_id:B, award:B
		"[BI]",							// PUZZLE_STATS(57); [type:B, count:I]

		"[B]",							// EVENTS_IGNORE(58); [ignore:B]

		"",							// (59); Removed

		// Anonym
		"",							// (60); Removed
		"",							// (61); Removed
		"",							// (62); Removed
		"",							// (63); Removed
		"",							// (64); Removed
		"[II]",							// GIFTS_FOR_ACTIONS_STATS(65); [gift_id:I, count_actions:I]

		"BI",							// RATING_SIZE(66); type:B, count:I

		// Wedding
		"BII,I",						// WEDDING_PROPOSAL_ANSWER(67); status:B, target_id:I, source_id:I, wedding_id:I
		"BII",							// WEDDING_PROPOSAL_CANCEL(68); status:B, client_id:I, target_id:I
		"BI",							// WEDDING_PROPOSAL_MAKE(69); status:B, target_id:I
		"I",							// WEDDING_PROPOSAL_REFUSE(70); player_id:I

		"[IIIBSBI]",						// WEDDING_PROPOSAL_INFO(71); [id:I, owner_id:I, sender_id:I, ring_id:B, message:S, status:B, delay:I]
		"[IB]",							// WEDDING_ADMISSIONS(72); [wedding_id:I, type:B]

		"[IIIBIIIIIIB]",					// WEDDING_INFO(73); [id:I, groom_id:I, bride_id:I, status:B, delay:I, elapsed:I, admire:I, happy:I, happyRating:I, place:I, ring_id:B]
		"[I[BIII]]",						// WEDDING_STATS(74); [id:I, [type:B, count:I, value:I, time:I]]

		"I[B]",							// WEDDING_ITEMS(75); wedding_id:I, [item_id:B]
		"IBB",							// WEDDING_SETTLED(76); buyer_id:I, type:B, item_id:B
		"[II]",							// WEDDING_GUESTS(77); [invited_id:I, inviter_id:I]

		"",							// WEDDING_ENTER(78);
		"",							// (79); Removed
		"BI,[II]",						// WEDDING_CONTEST(80); state:B, finish_time: I, [player_id:I, points:I]
		"BIB",							// WEDDING_JOIN(81); type:B, player_id:I, sex:B
		"IB",							// WEDDING_KISS(82); player_id:I, answer:B
		"I",							// WEDDING_LEADER(83); player_id:I
		"I",							// WEDDING_LEAVE(84); player_id:I
		"B",							// WEDDING_PLAY_DENIED(85); status:B
		"II,I",							// WEDDING_ROLL(86); leader:I, rolled:I, time:I
		"III[IB]",						// WEDDING_ROOM(87); wedding_id:I, groom_id:I, bride_id:I, [player_id:I, sex:B]
		"B",							// WEDDING_STATUS(88); status:B

		"I",							// WEDDING_VOW(89); player_id:I
		"BI",							// WEDDING_GARTER(90); status:B, player_id:I
		"BI",							// WEDDING_BOUQUET(91); status:B, player_id:I
		"",							// (92); Removed
		"II",							// WEDDING_HAPPY(93); happy:I, happyRating:I
		"II",							// WEDDING_DIVORCE(94); client_id:I, wedding_id:I

		"I[II]",						// WEDDING_RATING_HAPPY(95); page:I, [wedding_id:I, value:I]

		"II",							// WEDDING_CANCEL(96); client_id:I, wedding_id:I
		"I",							// WEDDING_START_TIME(97); time:I

		// House
		"AI",							// HOUSE_INFO_REQUEST(98); data:A, mask:I
		"I[IBI]",						// HOUSE_ACCESS(99); houseId:I, [player_id:I, type:B, actor_id:I]
		"IB",							// HOUSE_PUBLIC(100); room_id:I, type:B
		"IB",							// HOUSE_KEYS(101); room_id:I, type:B

		"",							// Removed(102);

		"[IWIBWWBB]",						// HOUSE_ITEMS(103); [id:I, type:W, pack_id:I, sector:B, pos_x:W, pos_y:W, rotation:B, boxroom:B]
		"BIWIII",						// HOUSE_GIFT(104); status:B, player_id:I, type:W, price:I, target:I, room_id:I
		"[IBWWB]",						// HOUSE_ITEM_MOVE(105); [id:I, sector:B, pos_x:W, pos_y:W, rotation:B]
		"II",							// ACHIEVEMENT_GET(106); player_id:I, achievement_id:I
		"[I]B",							// HOUSE_ITEM_BOXROOM(107); [id:I], state:B

		"",							// HOUSE_ENTER(108);
		"I",							// HOUSE_JOIN(109); player_id:I
		"I",							// HOUSE_LEAVE(110); player_id:I
		"IBWWB",						// HOUSE_MOVE(111); player_id:I, sector:B, pos_x:W, pos_y:W, type:B
		"B",							// HOUSE_PLAY(112); status:B
		"IIWB[IBWW]",						// HOUSE_ROOM(113); id:I, owner_id:I, room_count:W, attic:B, [id:I, sector:B, pos_x:W, pos_y:W]
		"",							// (114); Removed
		"",							// (115); Removed

		"BI[II]",						// HOUSE_MANSIONS(116); is_daily:B, page:I, [room_id:I, mansion_value:I]

		// Curios gifts
		"[IIII]",						// CURIOS(117); [curio_id:I, count:I, max_count:I, price:I]
		"BIIII",						// CURIOS_GIFT(118); status:B, player_id:I, curio_id:I, price:I, target_id:I

		"",							// (119); Removed

		"B[ISI]",						// CHAT_HISTORY(120); chat_type:B, [id:I, message:S, time:I]

		// Collection
		"BB,B",							// COLLECTIONS_ASSEMBLE(121); status:B, assemble_id:B, award_id:B
		"IBB",							// COLLECTIONS_AWARD(122); target_id:I, award_id:B, reason:BB
		"IIB",							// COLLECTIONS_GIFT(123); target_id:I, sender_id:I, gift_id:B
		"I[II]",						// (124); Removed

		"B",							// HOUSE_SECTOR(125); sectorId:B

		"[WB]",							// HOUSE_STOCK(126); [id:W, discount:B]
		"[BI]",							// STATUS_GIFT_STATS(127); [row:B, stats:I]
		"WI[I]",						// HALLOWEEN_DATA (128); suits_count:W, suit_craft_finish:I, [item_count:I]
		"B",							// PACK(129); show:B
		"I",							// COLLECTIONS_POINTS(130); count:I
		"I",							// SELF_RICH_UPDATE(131); new_value:I

		"[BI]",							// CHRISTMAS_DECORATIONS(132); [BI]

		// House packs
		"[IB]",							// HOUSE_PACKS(133); [pack_id:I, pack_type:B]
		"BIBIII",						// HOUSE_PACK_GIFT(134); status:B, player_id:I, type:B, price:I, target_id:I, room_id:I

		"[BI]",							// POSTING_REWARDS (135); [reason:B, data:I]

		"II",							// HOUSE_ACTION(136); actor_id:I, action_id:I
		"[BB]",							// HOUSE_SECTORS(137); [sector_id:B, type:B]

		// Moderation
		"",							// (138); Removed
		"",							// (139); Removed
		"",							// (140); Removed
		"",							// (141); Removed
		"",							// (142); Removed

		"LS",							// SPECTATOR(143); id:L, auth_key:S
		"BLS",							// AUTH(144); type:B, net_id:L, auth_key:S

		"[B]",							// TRAINING(145); [type:B]

		"S",							// XSOLLA_SIGNATURE(146); singature:S

		"",							// (147); Removed

		"",							// (148); Removed
		"",							// (149); Removed

		"[IIBBS[B]WWWIIB]",					// PETS_INFO(150); [id:I, owner_id:I, type:B, state:B, name:S, [clothing:B], cleanliness:W, happiness:W, satiety:W, update_time:I, points:I]
		"BIIII",						// PETS_ADD(151); status:B, player_id:I, target_id:I, id:I, price:I
		"BIIBBI",						// PETS_ACTION(152); status:B, pet_id:I, actor_id:I, action_id:B, animation:B, power:I
		"IBWW",							// PETS_MOVE(153); pet_id:I, sector:B, pos_x:W, pos_y:W
		"IBB",							// PETS_WEARED(154); pet_id:I, place:B, type:B
		"IIB",							// PETS_CLOTHING_ADD(155); player_id:I, target_id:I, type:B
		"[BI]",							// PETS_CLOTHING_CONTENTS(156); [type:B, count:I]
		"III",							// VIP_TRANSFER(157); player_id:I, traget_id:I, transfer:I
		"I[II]",						// PETS_RATING(158); page:I, [player_id:I, value:I]
		"",							// (159); Removed
		"[I]",							// PETS_FORGOTTEN(160); [pet_id:I]
		"I",							// PETS_REMOVE(161); pet_id:I
		"IIBBI",						// PETS_ACTION_NOTIFY(162); pet_id:I, actor_id:I, act:B, animation:B, power:I
		"[III],B",						// OFFERS_INFO(163); [offer_id:I, seconds_left:I, stock:I], has_benefit:B
		"I",							// COINS_LADDER(164); last_coins_offer:I
		"IIB",							// ITEM_TRANSFER(165); source_id:I, target_id:I, item_id:B
		"BB,BWW",						// (166); Removed
		"",							// (167); Removed
		"S",							// OK_SIGNATURE(168); singature:S
		"",							// (169); Removed
		"II",							// (170); Removed
		"I",							// (171); Removed
		"BI",							// PURCHCASE(172); type:B, count:I
		"[BI]",							// TIMEOUTS(173); [type:B, timeout:I]
		"BB",							// (174); Removed
		"[W[LL]]",						// COUNTER(175); [type:W, [data:L, count:L]]

		"",							// (176); Removed
		"",							// (177); Removed
		"",							// (178); Removed
		"",							// (179); Removed
		"",							// (180); Removed

		"II",							// HOUSE_VALUE(181); common_points:I, daily_points:I
		"ISSIIBII",						// (182); Removed
		"BBI[II]",						// RATING(183); is_daily:B, type:B, page:I, [player_id:I, value:I]
		"I",							// (184); Removed
		"IBI",							// (185); Removed

		// Mafia
		"IWI[I]",						// MAFIA_ROOM(186); room_id:I, table_id:W, owner_id:I, [player_id:I]
		"I",							// MAFIA_JOIN(187); inner_id:I
		"IB",							// MAFIA_LEAVE(188); inner_id:I, role:B
		"I",							// MAFIA_LOCK(189); delay:I
		"II",							// MAFIA_VOTE(190); source_id:I, target_id:I
		"BW",							// MAFIA_STATE(191); state:B, delay:W
		"[IB]",							// MAFIA_ROLES(192); [inner_id:I, role:B]
		"[IB]",							// MAFIA_DIE(193); [inner_id:I, role:B]
		"[I]",							// MAFIA_TRIAL(194); [player_id:I]
		"B",							// MAFIA_RESULTS(195); is_mafioso_win:B
		"IW",							// MAFIA_TABLE(196); actor_id:I, table_id:W
		"BB",							// MAFIA_BUY_ROLE(197); role:B, status:B
		"BI[II]",						// (198); Removed

		// Music gifts
		"ISS",							// MUSIC_REQUEST(199); requesterId:I, url:S, song_name:S
		"IB",							// MUSIC_SENDER_STATUS(200); senderId:I, status:B
		"ISB",							// MUSIC_GIFT_PAUSE(201); requesterId:I, url:S, paused:B
		"IS",							// MUSIC_GIFT_STOP(202); requesterId:I, url:S
		"IS",							// MUSIC_SEARCH_REQUEST(203); requesterId:I, song_name:S
		"SS",							// MUSIC_SEARCH_ANSWER(204); url:S, song_name:S

		"B",							// MAFIA_PLAY(205); status:B

		"III",							// REWARD_STATE(206); hearts:I, gifts:I, time:I

		"[BB]",							// PUZZLE_SHOW(207); [index:B, puzzle_id:B]
		"IB",							// PUZZLE_WIN(208); target_id:I, piece_index:B
		"",							// (209); Removed

		"",							// (210); Removed

		"",							// (211); Removed
		"IB",							// PLAYER_ROOM_TYPE(212); player_id:I, room_type:B

		"IBBIB",						// PHOTOS_INFO(213); owner_id:I, photo_id:B, status:B, likes_count:I, is_like:B
		"I,B",							// PHOTOS_SHOWS(214); shows:I, type:B

		"IB",							// PHOTO_RATES_INFO(215); player_id:I, photo_id:B
		"I[II]",						// PHOTO_RATES_RATING(216); page:I, [player_id:I, value:I]

		"IBB",							// EMOTION(217); sender_id:I, emotion:B, room_type:I

		"[II]",							// PLAYERS_KISSES(218); [player_id:I, kisses:I]
		"I",							// PHOTOS_LEADER(219); player_id:I
		"I",							// PHOTOS_DIFFERENCE(220); difference:I
		"B",							// INVITER_STATE(221); state:B
		"",							// (222); Removed

		"[BI]",							// TREE_CATEGORIES_STATS(223); [category_id:B, stats:I]
		"IBIB[BB]",						// TREE_DATA(224); player_id, level:B, points:I, fertilizer:B, [slot_id:B, decor_id:B]
		"[BI]",							// TREE_ITEMS(225); [decor_id:B, count:I]
		"BB",							// TREE_DECOR_MOVE(226); decor_id:B, slot_id:B
		"IBI",							// TREE_LEVEL_UP(227); owner_id:I, level:B, helper_id:I
		"I[II]",						// (228); Removed
		"I",							// TREE_HELP_CONFIRM(229), player_id:I

		"[IIB]",						// PLAYERS_VIEW(230); [player_id:I, time:I, is_unocked:B]
		"IBI",							// DISCOUNT(231); average_order:I, discount:B, time:I
		"I",							// UPDATE_INFO(232); player_id:I

		"I[I]",							// RATING_ELITE(233); page:I, [player_id:I]
		"[I]",							// SELFOWNED_ROOMS(234); [room_id:I]
		"I",							// SELFOWNED_ROOM_NOTIFY(235); room_id:I

		"BB[BI]",						// QUEST(236); stage:B, canSkip:B, [quest_id:B, count:I]
		"[BI]",							// QUEST_AWARD(237); [award_type:B, award_count:I]

		"[IBS]",						// MODERATION_LIST(238); [player_id:I, photo_id:B, photo_url:S]
		"B",							// MAFIA_UNLOCKED(239); is_available:B
		"",							// (240); Removed
		"IIB",							// BOX_RESULT(241); count_bottles:I, count_vip:I, box_id:B
		"BBB[B]",						// FORTUNE_WHEEL(242); state:B, current_sector:B, discount:B, [sector:B]
		"IB",							// PHOTOS_LIKE_RATE(243); actor_id:I, photo_id:B
		"",							// (244); Removed
		"",							// SELF_POPULAR_UPDATE(245);

		"[BI]",							// BALANCE_HOLIDAY(246); [type:B, value:I]
		"III",							// HOLIDAY_ITEM_SEND(247); senderId:I, targetId:I, data:I

		"BBBB",							// GACHA_INFO(248); furniture_set:B, decoration_set:B, pet:B, apartments:B
		"[II]",							// OFFERS_BALANCE(249); [offer_type:I, count:I]

		"I",							// SUBSCRIPTION_DATA(250); subscribe_expires:I
		"",							// (251); Removed
		"BBI",							// BOX_MUTABLE_INFO(252); offer_id:B, state:B, timer_reset:I
		"I",							// BIRTHDAY_NOTIFY(253); senderId:I
		"[BB[I]]",						// POPULAR_GIFTS(254); [receiver_age_index:B, receiver_sex:B, [gift_id:I]]

		"[ISBIBB]",						// Removed(255);
		"I[IBSIBII]",						// HISTORY_MESSAGES(256); target_id:I, message:[id:I, type:B, message:S, data:I, is_my:B, count:I, time:I]
		"I[II]",						// EASTER_RATING(257); page:I, [player_id:I, points:I]

		"",							// (258); Removed

		"B[I]",							// CHEST_DATA(259); chest_type:B, [player_id:I]
		"B",							// CHEST_OPEN(260); chest_id
		"",							// (261); Removed
		"[I]",							// ROULETTE(262); [rewardId:I]
		"IB",							// WELL(263); time:I, state:B

		"I[BBBII]",						// BANS(264); target_id:I, [type:B, reason:B, repeated:B, moderator_id:I, duration:I]
		"[BB]",							// Removed (265);

		"ISBBI",						// MESSAGE_ACK(266); player_id:I, message:S, type:B, ack_num:B, message_id:I
		"II",							// MESSAGE_REMOVE_ACK(267); target_id:I, message_id:I

		"",							// REMOVED(268);
		"II",							// PLAYER_LEVEL(269); level:I, score:I

		"II",							// CERTIFICATE_GIFT(270); target_id:I, sender_id:I

		",I",							// HOLIDAY_ITEM_APPEAR(271); player_id:I
		"",							// (272); Removed
		"",							// (273); Removed
		"",							// (274); Removed
		"",							// (275); Removed
		"",							// (276); Removed
		"",							// (277); Removed

		"",							// (278); Removed
		"",							// (279); Removed
		"",							// (280); Removed

		// New Year
		"II[BI]",						// NEW_YEAR_DATA(281); energy:I, snowflakes:I, [decor_id:B, count:I]
		"IB[BB]I",						// NEW_YEAR_TREE_INFO(282); owner_id:I, level:B, [slot_id:B, decor_id:B], levelup_time:I
		"BB",							// NEW_YEAR_DECOR_MOVE(283); decor_id:B, slot_id:B
		"B,BI",							// NEW_YEAR_TREE_LEVELUP(284); result:B, level:B, levelup_time:I
		",I",							// NEW_YEAR_SNOWFLAKE(285); player_id:I
		"I",							// NEW_YEAR_ENERGY_BALANCE(286); count:I
		"[BI]",							// NEW_YEAR_GIFTS(287); [gift_type:B, sender_id:I]
		"BI",							// NEW_YEAR_GIFT_SEND(288); result:B, target_id:I
		"[BI]",							// NEW_YEAR_GIFT_OPEN(289); [item_type:B, count:I]
		",I",							// NEW_YEAR_SNOWDRIFT(290); player_id:I
		"[II]",							// NEW_YEAR_FIREWORKS_INFO(291); [firework_id:I, count:I]
		"[BI]",							// NEW_YEAR_DECOR_CRAFTED(292); [item_id:B, count:I]
		"I",							// NEW_YEAR_SNOWFLAKES_BALANCE(293); count:I
		"[II]",							// NEW_YEAR_FIREWORKS_CRAFTED(294); [item_id:I, count:I]

		"[IIII]",						// ADMIN_BUYINGS_INFO(295); [target_id:I, good_id:I, count:I, sum_price:I]
		"[SSSSWI]",						// VIDEO_INFO(296); video_id:S, title:S, url:S, channel:S, duration:W, view_count:I]

		"ISIWS",						// VIDEO_ROOM(297); player_id:I, videoId:S, elapsed:I, duration:W, title:S
		"[S][S]",						// VIDEO_LISTS(298); [video_history:S], [videos_liked:S]
		"[ISWS]",						// VIDEO_QUEUE(299); [player_id:I, videoId:S, duration:W, title:S]

		"IB",							// CHAT_OFFER(300); player_id:I, type:B
		"I",							// WINK(301); player_id:I

		"BI",							// SPECTATOR_JOIN_LEAVE(302); action:B, player_id:I
		"I",							// TITLE_POINTS(303); points:I
		"",							// CAPTCHA(304);
		"BIS,II",						// CHAT_GIF(305); chat_type:B, player_id:I, message:S, owner_id:I, data:I,
		"[S]",							// GIF_HISTORY(306); [gif_id:S]
		"[II]",							// KISS_PRIORITY(307); [player_id:I, count:I]
		"[III]",						// KICKS(308); [target_id:I, actor_id:I, kick_left:I]
		"II",							// KICK_SAVE(309); target_id:I, actor_id:I
		"[BII]",						// BALANCE_ITEMS(310); [type:B, common:B, daily:B]
		"BI[IIII]",						// TITLES(311); title:B, offset:I, [player_id:I, points:I, daily_points:I, time_update:I]
		"[BBI]",						// TITLES_INFO(312); [title:B, level:B, size:I]
		"[BB]",							// TITLES_AWARD(313); [awardType:B, count:B]
		"[B]",							// FRAMES(314); [frame_id:B]
		"II",							// REWARD_GOT(315); owner_id:I, reward_id:I
		"BI[II],II",						// CONTEST(316); state:B, time_till_finish:I, [player_id:I, count:I], winner_1:I, winner_2:I
		"[SI]",							// POPULAR_VIDEOS(317); [video_id:S, rating:I]
		"I[IBI]",						// ADMIN_REWARDS_INFO(318); target_id:I, [reward_id:I, count:B, time:I]
		"B[B]",							// GIFT_BOXES(319); current_box_id:B, [opened_boxes:B]
		"BI[II]",						// BALLOONS(320); state:B, time_till_finish:I, [player_id:I, count:I]
		"[II]",							// LIMITED_OFFERS(321); [offer_id:I, count_left:I]
		"BI[II],IB",						// CONTEST_WITH_ACTIONS(322); state:B, time_till_finish:I, [player_id:I, points:I], winner:I, ability_type:B
		"IIB",							// CONTEST_ACTION(323); player_id:I, target_id:I, action_type:B
		"I"							// LEAGUE_CURRENT_POINTS(324); current_points:I
	];
	/* tslint:enable:member-ordering */

	private _type: number = 0;
	private _id: number = 0;

	public bytesLength: number = 0;

	public constructor(type: number, id: number, buffer: ByteArray)
	{
		super();

		this.bytesLength = buffer.bytesAvailable;
		Object["setPrototypeOf"](this, PacketServer.prototype);

		this._type = type;
		this._id = id;

		let format: string = PacketServer.FORMATS[this._type];
		try
		{
			PacketServer.readData(buffer, format, this, this._type);
		}
		catch (e)
		{
			console.error(`Failed to read server packet ${this._type} "${format}"`, e);
		}
	}

	public get type(): number
	{
		return this._type;
	}

	public get id(): number
	{
		return this._id;
	}

	public static readData(buffer: ByteArray, format: string, output: any[], type: number): void
	{
		let optional: boolean = false;

		let groups: any[] = [output];
		// console.log("Try reading packet with type: " + type);

		for (let i: number = 0; i < format.length; i++)
		{
			let symbol: string = format.charAt(i);
			let groupCur: any[] = groups[groups.length - 1];

			if (symbol === ",")
			{
				if (optional || groupCur !== output)
					throw new Error("Bad signature 2 for server packet");

				optional = true;
				continue;
			}

			if (symbol === "]")
			{
				if (groupCur === output)
					throw new Error("Bad signature 3 for server packet");

				groupCur["group_length"]--;

				if (groupCur["group_length"] !== 0)
				{
					i = groupCur["group_pos"];
					continue;
				}
				PacketServer.splitGroup(groupCur);
				delete groupCur["group_length"];
				delete groupCur["group_pos"];
				delete groupCur["group_total"];

				groups.pop();
				continue;
			}

			if (buffer.bytesAvailable === 0)
			{
				if (optional && groupCur === output)
					break;
				throw new Error("No data for server packet " + type);
			}

			if (symbol === "[")
			{
				let groupNew: any[] = [];
				groupNew["group_total"] = groupNew["group_length"] = buffer.readUnsignedShort();

				groupCur.push(groupNew);

				if (groupNew["group_length"] !== 0)
				{
					groupNew["group_pos"] = i;
					groups.push(groupNew);
					continue;
				}

				i = PacketServer.getGroupLast(format, i);
				continue;
			}
			switch (symbol)
			{
				case "A":
					let length: number = buffer.readUnsignedInt();
					let array: ByteArray = new ByteArray();
					array.position = 0;
					array.endian = ByteArray.LITTLE_ENDIAN;
					if (length !== 0)
						buffer.readBytes(array, 0, length);
					groupCur.push(array);
					break;
				case "S":
					groupCur.push(buffer.readUTF());
					buffer.readByte();
					break;
				case "F":
					groupCur.push(buffer.readFloat());
					break;
				case "L":
					let result: UInt64 = new UInt64(buffer);
					groupCur.push(result.toString());
					break;
				case "I":
					groupCur.push(buffer.readInt());
					break;
				case "W":
					groupCur.push(buffer.readShort());
					break;
				case "B":
					groupCur.push(buffer.readUnsignedByte());
					break;
			}
		}

		if (buffer.bytesAvailable === 0)
			return;

		throw new Error("Data left in server packet " + type + " Avalible: " + buffer.bytesAvailable);
	}

	private static splitGroup(group: object[]): void
	{
		// eg [I]
		if (group["group_total"] === group.length || !this.split)
			return;

		let itemLength = group.length / group["group_total"];
		let result = [];
		let total = group["group_total"];
		for (let i = 0; i < total; i++)
			result.push(group.slice(i * itemLength, (i + 1) * itemLength));
		group.length = 0;
		group.push(...result);
	}

	private static getGroupLast(format: string, first: number): number
	{
		let left: number = 1;
		for (let last: number = first + 1; last < format.length; last++)
		{
			switch (format.charAt(last))
			{
				case "]":
					left--;
					break;
				case "[":
					left++;
					break;
			}

			if (left !== 0)
				continue;
			if (last === first + 1)
				break;
			return last;
		}

		throw new Error("Bad signature 1 for server packet");
	}
}