import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure
 */
export type GuildTemplate = {
	code: string;
	name: string;
	description: string | null;
	usage_count: number;
	creator_id: Snowflake;
	creator: import("./User").User;
	created_at: string;
	updated_at: string;
	source_guild_id: Snowflake;
	serialized_source_guild: import("./Guild").Guild;
	is_dirty: boolean | null;
}
