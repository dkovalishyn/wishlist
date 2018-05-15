export enum StorageKeys { Token = 'id_token', TokenExpires = 'exp' }

export enum Auth { Header = 'Authorization', Prefix = 'bearer'}

export interface AuthResponse {
  token: string;
  exp: number;
}
