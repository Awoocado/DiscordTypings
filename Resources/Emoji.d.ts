import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export type Emoji = {
	id: Snowflake | null;
	name: string | null;
	roles?: Array<Snowflake>;
	user?: import("./User").User;
	require_colons?: boolean;
	managed?: boolean;
	animated?: boolean;
	available?: boolean;
}

export type PartialEmoji = Pick<Emoji, "id" | "name" | "animated">;
