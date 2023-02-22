export type UserAuth = {
  userName: string;
  password: string;
  apiEndpoint: string;
};

export type TokenObject = {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
};

export type AccessObject = {
  apiEndpoint: UserAuth['apiEndpoint'];
  tokenData: TokenObject;
};
