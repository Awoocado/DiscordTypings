export type Snowflake = string;

export type MessageDeleteData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	id: Snowflake;
}

export type MessageReactionAddData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	emoji: {
		id?: Snowflake;
		name: string;
	};
	member: MemberData & { user: UserData };
	message_id: Snowflake;
	user_id: Snowflake;
}

export type MessageReactionRemoveData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	emoji: {
		id?: Snowflake;
		name: string;
	};
	message_id: Snowflake;
	user_id: Snowflake;
}

export type MessageReactionRemoveAllData = {
	guild_id: Snowflake;
	channel_id: Snowflake;
	message_id: Snowflake;
}

export type GuildEmojisUpdateData = {
	emojis: GuildData["emojis"];
	guild_id: Snowflake;
}

export type VoiceStateData = {
	channel_id?: Snowflake;
	deaf: boolean;
	guild_id?: Snowflake;
	mute: boolean;
	self_deaf: boolean;
	self_mute: true;
	self_video: true;
	self_stream?: boolean;
	session_id: string;
	suppress: boolean;
	user_id: Snowflake;
	member?: MemberData & { user: UserData };
}

export type ChannelPinData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	last_pin_timestamp: string;
}

export type ReadyData = {
	_trace: Array<string>;
	application: { flags: number, id: string };
	guilds: Array<{ id: string, unavailable: boolean }>;
	presences: Array<PresenceData>;
	private_channels: Array<any>;
	relationships: Array<any>;
	session_id: string;
	shard: Array<number>;
	user: UserData;
}

export type ResumeData = {
	_trace: Array<string>;
}

export type ThreadListSyncData = {
	guild_id: Snowflake;
	channel_ids?: Array<Snowflake>;
	threads: Array<ThreadChannelData>;
	members: Array<ThreadMemberData>;
}

export type ThreadMembersUpdateData = {
	id: Snowflake;
	guild_id: Snowflake;
	member_count: number;
	added_members?: Array<ThreadMemberData>;
	removed_member_ids?: Array<Snowflake>;
}

export type ThreadMemberData = {
	id: Snowflake;
	user_id: Snowflake;
	join_timestamp: string;
	flags: string;
}

export type MessageData = {
	guild_id?: Snowflake;
	attachments: Array<AttachmentData>;
	author: UserData;
	channel_id: Snowflake;
	content?: string;
	edited_timestamp?: string;
	embeds: Array<EmbedData>;
	flags: number;
	id: Snowflake;
	member?: MemberData;
	mention_everyone: boolean;
	mention_roles: Array<Snowflake>;
	mentions: Array<UserData & { member: MemberData }>;
	mention_channels?: Array<ChannelMentionData>;
	nonce: Snowflake;
	pinned: boolean;
	timestamp: string;
	tts: boolean;
	type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
	webhook_id?: Snowflake;
	activity?: MessageActivityData;
	application?: Applicationdata;
	thread?: ThreadChannelData;
	stickers?: Array<StickerData>;
	message_reference?: MessageReferenceData;
	referenced_message?: MessageData | null;
	reactions?: Array<ReactionData>;
}

export type MemberData = {
	deaf: boolean;
	hoisted_role: Snowflake;
	joined_at: string;
	mute: boolean;
	nick: string;
	premium_since?: string;
	roles: Array<Snowflake>;
}

export type UserData = {
	avatar: string | null;
	discriminator: string;
	id: Snowflake;
	public_flags?: number;
	username: string;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	locale?: string;
	verified?: boolean;
}

export type EmbedData = {
	author?: {
		url?: string;
		icon_url?: string;
		iconURL?: string;
		name?: string;
		proxy_icon_url?: string;
		proxyIconURL?: string;
	};
	color?: number;
	description?: string;
	timestamp?: string;
	title?: string;
	type?: "rich";
	url?: string;
	icon_url?: string;
	name?: string;
	fields?: Array<any>;
	footer?: {
		text?: string;
		icon_url?: string;
		iconURL?: string;
		proxy_icon_url?: string;
		proxyIconURL?: string;
	}
	thumbnail?: {
		url?: string;
		proxy_url?: string;
		proxyURL?: string;
		height?: number;
		width?: number;
	};
	image?: {
		url?: string;
		proxy_url?: string;
		proxyURL?: string;
		height?: number;
		width?: number;
	};
	video?: {
		url?: string;
		proxy_url?: string;
		proxyURL?: string;
		height?: number;
		width?: number;
	};
	provider?: {
		name?: string;
	}
}

export type AttachmentData = {
	filename: string;
	height: number;
	id: Snowflake;
	proxy_url?: string;
	size: number;
	url: string;
	width: number;
}

export type GuildData = {
	roles: Array<RoleData>;
	default_message_notifications: number;
	rules_channel_id?: Snowflake;
	max_video_channel_users?: number;
	emojis: Array<EmojiData>;
	lazy: boolean;
	owner_id: Snowflake;
	discovery_splash?: string;
	preferred_locale: string;
	members: Array<MemberData & { user: UserData }>;
	icon?: string;
	banner?: string;
	premium_tier: number;
	permissions?: string;
	features: Array<string>;
	presences?: Array<PresenceData>;
	max_presences?: number;
	verification_level: number;
	voice_states: Array<VoiceStateData>;
	application_id?: Snowflake;
	vanity_url_code?: string;
	premium_subscription_count: number;
	name: string;
	channels: Array<TextChannelData | VoiceChannelData | StageChannelData | CategoryChannelData | NewsChannelData>;
	threads: Array<ThreadChannelData>;
	joined_at: string;
	unavailable: boolean;
	public_updates_channel_id?: Snowflake;
	mfa_level: number;
	explicit_content_filter: number;
	system_channel_id?: Snowflake;
	afk_timeout: number;
	member_count: number;
	splash?: string;
	system_channel_flags: number;
	region?: string;
	description?: string;
	large: boolean;
	afk_channel_id?: Snowflake;
	id: Snowflake;
	embed_enabled?: boolean;
	embed_channel_id?: Snowflake;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: WelcomeScreenData;
	nsfw: boolean;
}

export type WelcomeScreenData = {
	description?: string;
	welcome_channels: Array<WelcomeScreenChannelData>;
}

export type WelcomeScreenChannelData = {
	channel_id: Snowflake;
	description?: string;
	emoji_id?: Snowflake;
	emoji_name?: string;
}

export type RoleData = {
	color: number;
	hoist: boolean;
	id: Snowflake;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: number;
	permissions_new: string;
	position: number;
}

export type EmojiData = {
	animated?: boolean;
	available?: boolean;
	id: Snowflake | null;
	managed?: boolean;
	name: string;
	require_colons?: boolean;
	roles?: Array<Snowflake>;
	user?: UserData;
}

export type PresenceData = {
	user: UserData;
	roles: Array<Snowflake>;
	game: ActivityData;
	guild_id: Snowflake;
	activities: Array<ActivityData>;
	client_status: {
		desktop?: string;
		mobile?: string;
		web?: string;
	};
	premium_since?: string;
	nick?: string;
}

export type ActivityData = {
	name: string;
	type: number;
	url?: string;
	created_at: number;
	timestamps?: {
		start?: number;
		end?: number;
	};
	emoji?: {
		name: string;
		id?: Snowflake;
		animated?: boolean;
	};
	party?: {
		id?: string;
		size?: [number, number];
	};
	assets?: {
		large_image?: string;
		large_text?: string;
		small_image?: string;
		small_text?: string;
	};
	secrets?: {
		join?: string;
		spectate?: string;
		match?: string;
	};
	instance?: boolean;
	flags?: number;
}

export interface ChannelData {
	id: Snowflake;
	name: string;
	type: number;
}

export interface TextableChannelData extends ChannelData {
	last_message_id: Snowflake | null;
	last_pin_timestamp?: string;
}

export interface TextChannelData extends GuildChannelData, TextableChannelData {
	rate_limit_per_user: number;
	topic?: string;
	nsfw: boolean;
	type: 0;
}

export interface ThreadChannelData extends GuildChannelData, TextableChannelData {
	rate_limit_per_user: number;
	topic?: string;
	nsfw: boolean;
	owner_id: Snowflake;
	message_count: number;
	member_count: number;
	thread_metadata: {
		archived: boolean;
		archive_timestamp: string;
		archiver_id: Snowflake;
		auto_archive_duration: number;
		locked: boolean;
	};
	type: 10 | 11 | 12
}

export interface DMChannelData extends TextableChannelData {
	recipients: Array<UserData>;
	type: 1;
}

export interface VoiceChannelData extends GuildChannelData {
	bitrate: number;
	user_limit: number;
	type: 2;
	rtc_region: string | null;
}

// @ts-ignore
export interface StageChannelData extends VoiceChannelData {
	type: 13;
}

export interface GuildChannelData extends ChannelData {
	guild_id: string;
	permission_overwrites: Array<PermissionOverwriteData>;
	position: number;
	parent_id: Snowflake | null;
}

export interface CategoryChannelData extends GuildChannelData {
	nsfw: boolean;
	type: 4;
}

export interface NewsChannelData extends GuildChannelData, TextableChannelData {
	rate_limit_per_user: number;
	topic?: string;
	nsfw: boolean;
	type: 5;
}

export type PermissionOverwriteData = {
	id: Snowflake;
	/**
	 * 0 (role) or 1 (member)
	 */
	type: 0 | 1;
	allow: string;
	deny: string;
}

export type Applicationdata = {
	id: Snowflake;
	name: string;
	icon: string | null;
	description: string;
	rpc_origins?: Array<string>;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	terms_of_service_url?: string;
	privacy_policy_url?: string;
	owner: UserData;
	summary: string;
	verify_key: string;
	team: TeamData | null;
	guild_id: Snowflake | null;
	primary_sku_id?: Snowflake;
	slug?: string;
	cover_image?: string;
	flags: number;
}

export type TeamData = {
	icon: string | null;
	id: Snowflake;
	members: Array<TeamMemberData>;
	owner_user_id: Snowflake;
}

export type TeamMemberData = {
	membership_state: 1 | 2;
	permissions: ["*"];
	team_id: Snowflake;
	user: UserData;
}

export type StickerData = {
	id: Snowflake;
	pack_id: Snowflake;
	name: string;
	description: string;
	tags?: string;
	asset?: string;
	format_type: 1 | 2 | 3
}

export type MessageReferenceData = {
	message_id?: Snowflake;
	channel_id?: Snowflake;
	guild_id?: Snowflake;
	fail_if_not_exists?: boolean;
}

export type MessageActivityData = {
	type: 1 | 2 | 3 | 5;
	party_id?: string;
}

export type ChannelMentionData = {
	id: Snowflake;
	guild_id: Snowflake;
	type: ChannelData["type"];
	name: string;
}

export type ReactionData = {
	count: number;
	me: boolean;
	emoji: {
		id: Snowflake | null;
		name: string;
	};
}

export type InviteData = {
	code: string;
	guild?: Partial<GuildData>;
	channel: GuildChannelData;
	inviter?: UserData;
	target_type?: 1 | 2;
	target_user?: UserData;
	target_application?: Partial<Applicationdata>;
	approximate_presence_count?: number;
	approximate_member_count?: number;
}
