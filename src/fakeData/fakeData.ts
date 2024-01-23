import shortid from "shortid";
import { Campaign, Profile, Account } from "../interfaces/types";

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

const generateRandomProfilesForAccount = (): Profile[] => {
  const maxProfilesPerAccount = 10;
  const minProfilesPerAccount = 1;

  const numberOfProfiles =
    Math.floor(
      Math.random() * (maxProfilesPerAccount - minProfilesPerAccount + 1)
    ) + minProfilesPerAccount;
  const profilesArr: Profile[] = [];

  for (let i = 0; i < numberOfProfiles; i++) {
    profilesArr[i] = {
      profileId: shortid.generate(),
      country: generateRandomCountry(),
      marketplace: generateRandomMarketplace(),
      campaigns: generateRandomCampaignsForProfile(),
    };
  }

  return profilesArr;
};

const generateRandomCountry = (): string => {
  const countries = ["USA", "Canada", "UK", "Germany", "France", "Australia"];
  return countries[Math.floor(Math.random() * countries.length)];
};

const generateRandomMarketplace = (): string => {
  const marketplaces = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart"];
  return marketplaces[Math.floor(Math.random() * marketplaces.length)];
};

const generateRandomCampaignsForProfile = (): Campaign[] => {
  const maxCampaignsPerProfile = 15;
  const minCampaignsPerProfile = 1;

  const numberOfCampaigns =
    Math.floor(
      Math.random() * (maxCampaignsPerProfile - minCampaignsPerProfile + 1)
    ) + minCampaignsPerProfile;
  const campaignsArr: Campaign[] = [];

  for (let i = 0; i < numberOfCampaigns; i++) {
    campaignsArr[i] = {
      campaignId: shortid.generate(),
      clicks: Math.floor(Math.random() * 1000),
      cost: Math.random() * 1000,
      date: generateRandomDate(startDate, endDate),
    };
  }

  return campaignsArr;
};

const startDate = "2020-01-01";
const endDate = "2022-12-31";

const localStorageKey = "fakeAccountsData";

export const accountsData = (): Account[] => {
  // Перевірка, чи вже є дані у локальному сховищі
  const storedData = localStorage.getItem(localStorageKey);

  if (storedData) {
    // Якщо є, повертаємо розпаковані дані
    return JSON.parse(storedData);
  }

  // Якщо немає, генеруємо нові дані
  const accountsArr: Account[] = [];

  for (let i = 0; i < 20; i++) {
    accountsArr[i] = {
      accountId: shortid.generate(),
      email: generateRandomEmail(),
      authToken: generateFakeToken(),
      creationDate: generateRandomDate(startDate, endDate),
      profiles: generateRandomProfilesForAccount(),
    };
  }

  // Зберігаємо дані у локальному сховищі
  localStorage.setItem(localStorageKey, JSON.stringify(accountsArr));

  return accountsArr;
};
