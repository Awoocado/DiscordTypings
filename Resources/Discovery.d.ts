import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-metadata-structure
 */
export type Discovery = {
	guild_id: Snowflake;
	primary_category_id: number;
	keywords: string[] | null;
	emoji_discoverability_enabled: boolean;
	partner_actioned_timestamp: string | null;
	partner_application_timestamp: string | null;
	category_ids: number[];
}

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-category-structure
 */
export type DiscoveryCategory = {
	id: Snowflake;
	name: string;
	is_primary: boolean;
}
