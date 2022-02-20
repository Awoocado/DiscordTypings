import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export type VoiceState = {
	guild_id?: Snowflake;
	channel_id: Snowflake | null;
	user_id: Snowflake;
	member: import("./Guild").Member;
	session_id: string;
	deaf: boolean;
	mute: boolean;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	suppress: boolean;
	request_to_speak_timestamp: string | null;
}

/**
 * https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export type VoiceRegion = {
	id: string;
	name: string;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
}
