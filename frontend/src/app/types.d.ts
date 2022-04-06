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
  personal?: {
    age: number;
  };
  headline?: string;
  location?: {
    distance: number;
  },
  metadata?: {
    recentlyLoggedIn?: boolean;
  }
}

export enum OnlineStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE',
  Date = 'DATE'
}
