type Snowflake = string;

/**
 * https://docs.discord.com/developers/events/gateway-events#activity-object
 */
export interface APIActivityData {
    /** Activity's name. */
    name: string;
    /** {@link ActivityType Activity type}. */
    type: ActivityType;
    /** Stream URL, is validated when type is 1. */
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
    /** Emoji used for a custom status. */
    emoji?: APIActivityDataEmoji;
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