import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export type Team = {
	icon: string | null;
	id: Snowflake;
	members: Array<TeamMember>;
	name: string;
	owner_user_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-member-object
 */
export type TeamMember = {
	membership_state: TeamMembershipState;
	permissions: ["*"];
	team_id: Snowflake;
	user: import("../Resources/User").User;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export type TeamMembershipState = 1 | 2;
