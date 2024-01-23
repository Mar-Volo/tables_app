export interface Account {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
  profiles: Profile[];
}

export interface Profile {
  profileId: string;
  country: string;
  marketplace: string;
  campaigns: Campaign[];
}

export interface Campaign {
  campaignId: string;
  clicks: number;
  cost: number;
  date: string;
}
