import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export type Application = {
	id: Snowflake;
	name: string;
	icon: string | null;
	description: string;
	rpc_origins?: Array<string>;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	terms_of_service_url?: string;
	privacy_policy_url?: string;
	owner?: import("./User").User;
	summary: string;
	verify_key: string;
	team: import("../Topics/Teams").Team | null;
	guild_id?: Snowflake
	primary_sku_id?: Snowflake;
	slug?: string;
	cover_image?: string;
	flags?: number;
}
