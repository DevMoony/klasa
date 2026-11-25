/* eslint-disable no-bitwise */
/* eslint-disable max-len */
/* eslint-disable camelcase */
type Snowflake = string;

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object
 */
export interface APIActivityData {
	/** Activity's name. */
	name: string;
	/** {@link ActivityType Activity type}. */
	type: ActivityType;
	/** Stream URL, is validated when type is `1`. */
	url?: string | null;
	/** Unix timestamp (in milliseconds) of when the activity was added to the user’s session. */
	created_at: number;
	/** Unix {@link APIActivityDataTimestamp timestamps} for start and/or end of the game. */
	timestamps?: APIActivityDataTimestamp;
	/** Application ID for the game. */
	application_id?: Snowflake;
	/** {@link APIActivityDataStatusDisplayType Status display type}; controls which field is displayed in the user’s status text in the member list. */
	status_display_type?: APIActivityDataStatusDisplayType | null;
	/** What the player is currently doing. */
	details?: string | null;
	/** URL that is linked when clicking on the details text. */
	details_url?: string | null;
	/** User's current party status, or text used for a custom status. */
	state?: string | null;
	/** URL that is linked when clicking on the state text. */
	state_url?: string | null;
	/** {@link APIActivityDataEmoji Emoji} used for a custom status. */
	emoji?: APIActivityDataEmoji | null;
	/** Information for the current {@link APIActivityDataParty party} of the player */
	party?: APIActivityDataParty;
	/** Images for the presence and their hover texts. */
	assets?: APIActivityDataAssets;
	/** Secrets for Rich Presence joining and spectating. */
	secrets?: APIActivityDataSecrets;
	/** Whether or not the activity is an instanced game session. */
	instance?: boolean;
	/** {@link APIActivityDataFlags Activity flags} `OR`d together, describes what the payload includes */
	flags?: APIActivityDataFlags;
	/** Custom buttons shown in the Rich Presence (max 2). */
	buttons?: APIActivityDataButtons;
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-timestamps
 */
export interface APIActivityDataTimestamp {
	/** Unix time (in milliseconds) of when the activity started. */
	start?: number;
	/** Unix time (in milliseconds) of when the activity ends. */
	end?: number;
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-emoji
 */
export interface APIActivityDataEmoji {
	/** Name of the emoji. */
	name: string;
	/** ID of the emoji. */
	id?: Snowflake;
	/** Whether the emoji is animated. */
	animated?: boolean;
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-party
 */
export interface APIActivityDataParty {
	/** ID of the party. */
	id?: string;
	/** Used to show the party’s current and maximum size. */
	size?: [number, number];
}

/**
 * https://docs.discord.com/developers/resources/audit-log#audit-log-object
 */
export interface APIAuditLogData {
    
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-assets
 */
export interface APIActivityDataAssets {
	/** See {@link https://docs.discord.com/developers/events/gateway-events#activity-object-activity-asset-image Activity Asset Image}. */
	large_image?: string;
	/** Text displayed when hovering over the large image of the activity. */
	large_text?: string;
	/** URL that is opened when clicking on the large image. */
	large_url?: string;
	/** See {@link https://docs.discord.com/developers/events/gateway-events#activity-object-activity-asset-image Activity Asset Image}. */
	small_image?: string;
	/** Text displayed when hovering over the small image of the activity. */
	small_text?: string;
	/** URL that is opened when clicking on the small image. */
	small_url?: string;
	/** See {@link https://docs.discord.com/developers/events/gateway-events#activity-object-activity-asset-image Activity Asset Image}. Displayed as a banner on a {@link https://docs.discord.com/developers/discord-social-sdk/development-guides/managing-game-invites Game Invite}. */
	invite_cover_image?: string;
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-secrets
 */
export interface APIActivityDataSecrets {
	/** Secret for joining a party. */
	join?: string;
	/** Secret for spectating a game. */
	spectate?: string;
	/** Secret for a specific instanced match. */
	match?: string;
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-buttons
 */
export interface APIActivityDataButtons {
	/** Text shown on the button (1-32 characters). */
	label: string;
	/** URL opened when clicking the button (1-512 characters). */
	url: string;
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-types
 */
export enum ActivityType {
	/**
     * Format: Playing {name}
     * >
     * Example: "Playing Rocket League"
     */
	Game = 0,
	/**
     * Format: Streaming {details}
     * >
     * Example: "Streaming Rocket League"
     */
	Streaming = 1,
	/**
     * Format: Listening {name}
     * >
     * Example: "Listening to Spotify"
     */
	Listening = 2,
	/**
     * Format: Watching {name}
     * >
     * Example: "Watching YouTube Together"
     */
	Watching = 3,
	/**
     * Format: {emoji} {state}
     * >
     * Example: ":smiley: I am cool"
     */
	CustomStatus = 4,
	/**
     * Format: Competing in {name}
     * >
     * Example: "Competing in Arena World Champions"
     */
	Competing = 5
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-status-display-types
 */
export enum APIActivityDataStatusDisplayType {
	/** Example: "Listening to Spotify" */
	Name = 0,
	/** Example: "Listening to Rick Astley" */
	State = 1,
	/** Example: "Listening to Never Gonna Give You Up" */
	Details = 2
}

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object-activity-flags
 */
export enum APIActivityDataFlags {
	INSTANCE = 1 << 0,
	JOIN = 1 << 1,
	SPECTATE = 1 << 2,
	JOIN_REQUEST = 1 << 3,
	SYNC = 1 << 4,
	PLAY = 1 << 5,
	PARTY_PRIVACY_FRIENDS = 1 << 6,
	PARTY_PRIVACY_VOICE_CHANNEL = 1 << 7,
	EMBEDDED = 1 << 8
}