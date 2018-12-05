export enum StorageKeys { Token = 'id_token', TokenExpires = 'exp' }

export enum Auth { Header = 'Authorization', Prefix = 'bearer'}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export interface RefreshTokenBody {
  grant_type: 'refresh_token';
  refresh_token: string;
  access_token: string;
}
