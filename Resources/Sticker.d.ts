import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
 */
export type Sticker = {
	id: Snowflake;
	pack_id?: Snowflake;
	name: string;
	description: string | null;
	tags: string;
	type: StickerType;
	format_type: StickerFormat;
	available?: boolean;
	guild_id?: Snowflake;
	user?: import("./User").User;
	sort_value?: number;
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure
 */
export type StickerItem = {
	id: Snowflake;
	name: string;
	format_type: StickerFormat;
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
export type StickerType = 1 | 2;

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
 */
export type StickerFormat = 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure
 */
export type StickerPack = {
	id: Snowflake;
	stickers: Array<Sticker>;
	name: string;
	sku_id: Snowflake;
	cover_sticker_id?: Snowflake;
	description: string;
	banner_asset_id?: Snowflake;
}
