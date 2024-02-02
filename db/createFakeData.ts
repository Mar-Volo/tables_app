import * as shortid from 'shortid';
import writeDataToFile from './writeDataToFile';
import {
  Campaign,
  Profile,
  Account,
} from "../src/interfaces/types";

const accounts: Account[] = [];
const profiles: Profile[] = [];
const campaigns: Campaign[] = [];

const startDate = "2020-01-01";
const endDate = "2022-12-31";
const NUM_FAKE_ACCOUNTS = 60;


const generateFakeToken = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const tokenLength = 32;
  let fakeToken = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    fakeToken += characters.charAt(randomIndex);
  }

  return fakeToken;
};

const generateRandomDate = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString().split("T")[0];
};

const generateRandomEmail = (): string => {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "example.com",
    "test.com",
  ];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  const usernameLength = Math.floor(Math.random() * 10) + 5;
  let randomUsername = "";
  const possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < usernameLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    randomUsername += possibleCharacters.charAt(randomIndex);
  }

  return `${randomUsername}@${randomDomain}`;
};

const generateRandomCountry = (): string => {
  const countries = ["USA", "Canada", "UK", "Germany", "France", "Australia"];
  return countries[Math.floor(Math.random() * countries.length)];
};

const generateRandomMarketplace = (): string => {
  const marketplaces = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart"];
  return marketplaces[Math.floor(Math.random() * marketplaces.length)];
};

const campaignsCount = (): number => {
  const maxCampaignsPerProfile = 40;
  const minCampaignsPerProfile = 30;

  const numberOfCampaigns =
    Math.floor(
      Math.random() * (maxCampaignsPerProfile - minCampaignsPerProfile + 1)
    ) + minCampaignsPerProfile;
  return numberOfCampaigns;
};

const generateCampaign = (accountId: string, profileId: string): void => {
  const campaign = {
    account_id: accountId,
    profile_id: profileId,
    campaignId: shortid.generate(),
    clicks: Math.floor(Math.random() * 1000),
    cost: Math.random() * 1000,
    date: generateRandomDate(startDate, endDate),
  };
  campaigns.push(campaign);
};

const profilesCount = (): number => {
  const maxProfilesPerAccount = 20;
  const minProfilesPerAccount = 10;
  const numberOfProfiles =
    Math.floor(
      Math.random() * (maxProfilesPerAccount - minProfilesPerAccount + 1)
    ) + minProfilesPerAccount;
  return numberOfProfiles;
};

const generateProfile = (accountId: string, campaignsCount: number): void => {
  const profile = {
    profileId: shortid.generate(),
    account_id: accountId,
    country: generateRandomCountry(),
    marketplace: generateRandomMarketplace(),
  };
  profiles.push(profile);
  for (let i = 0; i < campaignsCount; i++) {
    generateCampaign(accountId, profile.profileId);
  }
};

const generateAccount = (profilesCount: number, campaignsCount: number): void => {
  const account = {
    accountId: shortid.generate(),
    email: generateRandomEmail(),
    authToken: generateFakeToken(),
    creationDate: generateRandomDate(startDate, endDate),
  };
  accounts.push(account);
  for (let i = 0; i < profilesCount; i++) {
    generateProfile(account.accountId, campaignsCount);
  }
};

const generateAndWriteData = async () => {
  for (let i = 0; i < NUM_FAKE_ACCOUNTS; i++) {
    generateAccount(profilesCount(), campaignsCount());
  }

  const dbFilePath = './db/db.json';
  const dataToWrite = {
    accounts,
    profiles,
    campaigns,
  };

  await writeDataToFile(dbFilePath, dataToWrite);
};

generateAndWriteData();





  // "generate": "tsc ./db/createFakeData.ts && node ./db/createFakeData.cjs && json-server ./db/db.json"
  // "serve": "concurrently \"json-server ./db/db.json\" \"vite preview\"",





