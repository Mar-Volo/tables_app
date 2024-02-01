export interface Account {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
}

export interface Profile {
  account_id: string,
  profileId: string;
  country: string;
  marketplace: string;
}


export interface Campaign {
  account_id: string,
  profile_id: string,
  campaignId: string;
  clicks: number;
  cost: number;
  date: string;
}


