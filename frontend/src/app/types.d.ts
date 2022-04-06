export interface IUser {
  id: string;
  name: string;
  picture: {
    comment: string;
    url: string;
  };
  last_login: Date;
  is_plus: boolean;
  online_status: OnlineStatus;
}

export enum OnlineStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}
