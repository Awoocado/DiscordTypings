/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export type GatewayOpcode = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11;

export type SendGatewayOpcode = Extract<GatewayOpcode, 1 | 2 | 3 | 4 | 6 | 8>;

export type SendReceiveGatewayOpcode = 1;

export type ReceiveGatewayOpcode = Exclude<GatewayOpcode, SendGatewayOpcode> | SendReceiveGatewayOpcode;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 */
export type GatewayCloseCode = 4000 | 4001 | 4002 | 4003 | 4004 | 4005 | 4007 | 4008 | 4009 | 4010 | 4011 | 4012 | 4013 | 4014;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes
 */
export type VoiceOpcode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 13;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes
 */
export type VoiceCloseCode = 4001 | 4002 | 4003 | 4004 | 4005 | 4006 | 4009 | 4011 | 4012 | 4014 | 4015 | 4016;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes
 */
export type HTTPResponseCode = 200 | 201 | 204 | 304 | 400 | 401 | 403 | 404 | 405 | 429 | 500 | 502;

export type OKHTTPResponseCode = Extract<HTTPResponseCode, 200 | 201 | 204 | 304>;

export type BadHTTPResponseCode = Exclude<HTTPResponseCode, OKHTTPResponseCode>;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export type RPCErrorCode = 1000 | 4000 | 4002 | 4003 | 4004 | 4005 | 4006 | 4007 | 4008 | 4009 | 4010 | 5000 | 5001 | 5002 | 5003 | 5004;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export type RPCCloseCode = 4000 | 4001 | 4002 | 4003 | 4004 | 4005
