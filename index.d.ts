export type Snowflake = string;

export type MessageDeleteData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	id: Snowflake;
}

export type MessageReactionAddData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	emoji: ReactionEmojiData;
	member: MemberData & { user: UserData };
	message_id: Snowflake;
	user_id: Snowflake;
}

export type MessageReactionRemoveData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	emoji: {
		id: Snowflake | null;
		name: string;
		animated?: boolean;
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
	emojis: Array<EmojiData>;
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
	flags: number;
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
	application?: ApplicationData;
	thread?: ThreadChannelData;
	stickers?: Array<StickerData>;
	message_reference?: MessageReferenceData;
	referenced_message?: MessageData | null;
	reactions?: Array<ReactionData>;
	application_id?: Snowflake;
}

export type MemberData = {
	deaf: boolean;
	hoisted_role: Snowflake;
	joined_at: string | null;
	mute: boolean;
	nick: string | null;
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
	height?: number | null;
	id: Snowflake;
	proxy_url: string;
	size: number;
	url: string;
	width?: number | null;
	content_type?: string;
}

export type GuildData = {
	roles: Array<RoleData>;
	default_message_notifications: 0 | 1;
	rules_channel_id?: Snowflake;
	max_video_channel_users?: number;
	emojis: Array<EmojiData>;
	owner_id: Snowflake;
	discovery_splash: string | null;
	preferred_locale: string;
	members?: Array<MemberData & { user: UserData }>;
	icon: string | null;
	banner: string | null;
	premium_tier: number;
	permissions?: string;
	features: Array<GuildFeature>;
	presences?: Array<PresenceData>;
	max_presences?: number;
	verification_level: 0 | 1 | 2 | 3 | 4;
	voice_states?: Array<VoiceStateData>;
	application_id?: Snowflake;
	vanity_url_code: string | null;
	premium_subscription_count?: number;
	name: string;
	channels?: Array<TextChannelData | VoiceChannelData | StageChannelData | CategoryChannelData | NewsChannelData>;
	threads?: Array<ThreadChannelData>;
	joined_at?: string;
	unavailable?: boolean;
	public_updates_channel_id: Snowflake | null;
	mfa_level: 0 | 1;
	explicit_content_filter: number;
	system_channel_id?: Snowflake;
	afk_timeout: number;
	member_count?: number;
	splash: string | null;
	system_channel_flags: number;
	region?: string;
	description: string | null;
	large?: boolean;
	afk_channel_id?: Snowflake;
	id: Snowflake;
	widget_enabled?: boolean;
	widget_channel_id?: Snowflake;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: WelcomeScreenData;
	nsfw: boolean;
	owner?: boolean;
	max_members?: number;
	stage_instances?: Array<StageInstanceData>;
}

export type StageInstanceData = {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake;
	topic: string;
}

export type GuildFeature = "ANIMATED_ICON" | "BANNER" | "COMMERCE" | "COMMUNITY" | "DISCOVERABLE" | "FEATURABLE" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED";

export type WelcomeScreenData = {
	description: string | null;
	welcome_channels: Array<WelcomeScreenChannelData>;
}

export type WelcomeScreenChannelData = {
	channel_id: Snowflake;
	description?: string;
	emoji_id: Snowflake | null;
	emoji_name: string | null;
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
	client_status: ClientStatusData;
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
	emoji?: ReactionEmojiData;
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
	type: ChannelType;
}

export type ChannelType = 0 | 1 | 2 | 4 | 5 | 6 | 10 | 11 | 12 | 13;

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
	thread_metadata: ThreadMetaData;
	type: 10 | 11 | 12
}

export interface ThreadMetaData {
	archived: boolean;
	archive_timestamp: string;
	archiver_id?: Snowflake;
	auto_archive_duration: number;
	locked: boolean;
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

export type ApplicationData = {
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
	name: string;
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
	type: ChannelType;
	name: string;
}

export type ReactionData = {
	count: number;
	me: boolean;
	emoji: ReactionEmojiData;
}

export type InviteData = {
	code: string;
	guild?: Partial<GuildData>;
	channel: GuildChannelData;
	inviter?: UserData;
	target_type?: 1 | 2;
	target_user?: UserData;
	target_application?: Partial<ApplicationData>;
	approximate_presence_count?: number;
	approximate_member_count?: number;
	expires_at?: string | null;
}

export type GuildDeleteData = {
	id: Snowflake;
	unavailable: boolean;
}

export type GuildBanAddData = {
	guild_id: Snowflake;
	user: UserData;
}

export type GuildBanRemoveData = {
	guild_id: Snowflake;
	user: UserData;
}

export type GuildMemberRemoveData = {
	guild_id: Snowflake;
	user: UserData;
}

export type GuildMembersChunkData = {
	guild_id: Snowflake;
	members: Array<MemberData & { user: UserData }>;
	chunk_index: number;
	chunk_count: number;
	not_found?: Array<Snowflake>;
	presences?: Array<PresenceData>;
	nonce?: string;
}

export type InviteCreateData = {
	channel_id: Snowflake;
	code: string;
	created_at: string;
	guild_id?: Snowflake;
	inviter?: UserData;
	max_age: number;
	max_uses: number;
	target_type?: 1 | 2;
	target_user?: UserData;
	temporary: boolean;
	uses: number;
}

export type InviteDeleteData = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	code: string;
}

export type MessageBulkDeleteData = {
	ids: Array<Snowflake>;
	channel_id: Snowflake;
	guild_id?: Snowflake;
}

export type MessageReactionRemoveEmojiData = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	message_id: Snowflake;
	emoji: ReactionEmojiData;
}

export type ReactionEmojiData = {
	id: Snowflake | null;
	name: string;
	animated?: boolean;
}

export type PresenceUpdateData = {
	user: UserData;
	guild_id: Snowflake;
	status: "online" | "idle" | "dnd" | "offline";
	activities: Array<ActivityData>;
	client_status: ClientStatusData;
};

export type ClientStatusData = {
	desktop?: string;
	mobile?: string;
	web?: string;
}

export type TypingStartData = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	user_id: Snowflake;
	timestamp: number;
	member?: MemberData;
}

export type VoiceServerUpdateData = {
	token: string;
	guild_id: Snowflake;
	endpoint: string;
};

export type ApplicationCommand = {
	id: Snowflake;
	application_id: Snowflake;
	name: string;
	description: string;
	options?: Array<ApplicationCommandOption>;
	default_permission?: boolean;
}

export type ApplicationCommandOption = {
	type: ApplicationCommandOptionType;
	name: string;
	description: string;
	required?: boolean;
	choices?: Array<ApplicationCommandOptionChoice>;
	options?: Array<ApplicationCommandOption>;
}

export type ApplicationCommandOptionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ApplicationCommandOptionChoice = {
	name: string;
	value: string | number;
}

export type GuildApplicationCommandPermissions = {
	id: Snowflake;
	application_id: Snowflake;
	guild_id: Snowflake;
	permissions: Array<ApplicationCommandPermissions>;
}

export type ApplicationCommandPermissions = {
	id: Snowflake;
	type: InteractionType;
	permission: boolean;
}

export type InteractionType = 1 | 2;

export type InteractionData = {
	id: Snowflake;
	application_id: Snowflake;
	type: 1 | 2;
	data?: ApplicationCommandInteractionData;
	guild_id?: Snowflake;
	channel_id?: Snowflake;
	member?: MemberData & { user: UserData };
	user?: UserData;
	token: string;
	version: number;
}

export type ApplicationCommandInteractionData = {
	id: Snowflake;
	name: string;
	resolved?: ApplicationCommandInteractionDataResolved;
	options?: Array<ApplicationCommandInteractionDataOption>;
}

export type ApplicationCommandInteractionDataResolved = {
	users?: { [id: string]: UserData };
	members?: { [id: string]: MemberData };
	roles?: { [id: string]: RoleData };
	channels?: { [id: string]: ChannelData; };
}

export type ApplicationCommandInteractionDataOption = {
	name: string;
	type: ApplicationCommandOptionType;
	value?: string | number;
	options?: Array<ApplicationCommandInteractionDataOption>;
}

export type InteractionResponseData = {
	type: InteractionCallbackType;
	data?: InteractionApplicationCommandCallbackData;
}

export type InteractionCallbackType = 1 | 4 | 5;

export type InteractionApplicationCommandCallbackData = {
	tts?: boolean;
	content?: string;
	embeds?: Array<EmbedData>;
	allowed_mentions?: AllowedMentionsData;
	flags?: number;
}

export type AllowedMentionsData = {
	parse: Array<"roles" | "users" | "everyone">;
	roles: Array<Snowflake>;
	users: Array<Snowflake>;
	replied_user: boolean;
}

export type MessageInteraction = {
	id: Snowflake;
	type: InteractionType;
	name: string;
	user: UserData;
}

export type WebhookData = {
	id: Snowflake;
	type: 1 | 2 | 3;
	guild_id?: Snowflake;
	channel_id: Snowflake;
	user?: UserData;
	name: string | null;
	avatar: string | null;
	token?: string;
	application_id: Snowflake | null;
	source_guild?: Partial<GuildData>;
	source_channel?: Partial<GuildChannelData>;
	url?: string;
}

export type AuditLogObject = {
	webhooks: Array<any>;
	users: Array<UserData>;
	audit_log_entries: Array<AuditLogEntry>;
}

export type AuditLogEntry = {
	target_id: string | null;
	changes?: Array<AuditLogChange>;
	user_id: string | null;
	id: string;
	action_type: AuditLogEventType;
	options?: {
		delete_member_days?: string;
		members_removed?: string;
		channel_id?: string;
		message_id?: string;
		count?: string;
		id?: string;
		type?: "0" | "1";
		role_name?: string;
	};
	reason?: string;
}

export type AuditLogChange = {
	new_value?: string | number | boolean | Array<RoleData> | Array<PermissionOverwriteData>;
	old_value?: string | number | boolean | Array<RoleData> | Array<PermissionOverwriteData>;
	key: string;
}

export type AuditLogEventType = 1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82;

export type GuildPreviewData = Pick<GuildData, "id" | "name" | "icon" | "splash" | "discovery_splash" | "emojis" | "features" | "approximate_member_count" | "approximate_presence_count" | "description">;

export type GuildWidgetData = {
	id: Snowflake;
	name: string;
	instant_invite: string;
	channels: Array<{ id: string; name: string; position: number; }>;
	members: Array<UserData & { status: string; avatar_url: string; }>;
	presence_count: number;
}

export type VoiceRegionData = {
	id: string;
	name: string;
	vip: boolean;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
}
