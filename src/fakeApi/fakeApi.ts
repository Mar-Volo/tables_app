import axios, { AxiosResponse } from "axios";
import { Account, Profile } from "../interfaces/types";

const BASE_URL = "http://localhost:3000/accounts";

export async function getAccounts(): Promise<Account[]> {
  try {
    const response: AxiosResponse<Account[]> = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error; // Лучше прокидывать ошибку, чтобы ее можно было обработать выше
  }
}

export async function getProfiles(accountId: string): Promise<Profile[]> {
  try {
    const response: AxiosResponse<Profile[]> = await axios.get(
      { BASE_URL } + accountId
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error; // Лучше прокидывать ошибку, чтобы ее можно было обработать выше
  }
}

// import { fakeAccountsArr, fakeProfilesArr } from "../../db/createFakeData";

// export function getAccounts(): Promise<Account[]> { return Promise.resolve(fakeAccountsArr)};
// export function getAccountProfiles(accountId: string): Promise<ProfileWithAccount[]> {
//     const profiles = fakeProfilesArr.filter(p => p.account_id === accountId);
//     console.log(fakeProfilesArr);
//     return Promise.resolve(profiles);
// }
