import axios, { AxiosResponse } from "axios";
import { Account, Profile, Campaign } from "../interfaces/types";

const BASE_URL = "http://localhost:3000/";

// export async function getAccounts(
//   min: number,
//   max: number
// ): Promise<Account[]> {
//   try {

//     const responseSlice: AxiosResponse<Account[]> = await axios.get(
//       `${BASE_URL}accounts?_start=${min}&_end=${max}`
//     );
//     const dataToWrite = responseSlice.data;
//     const allResponse = await axios.get(`${BASE_URL}accounts`)
//     const allDataLength = allResponse.data.length;
//     return  {dataToWrite, allDataLength};
//   } catch (error) {
//     console.error("Error fetching accounts:", error);
//     throw error;
//   }
// }
export async function getAccounts(
  min: number,
  max: number
): Promise<{ dataToWrite: Account[]; allDataLength: number }> {
  try {
    const responseSlice: AxiosResponse<Account[]> = await axios.get(
      `${BASE_URL}accounts?_start=${min}&_end=${max}`
    );
    const dataToWrite = responseSlice.data;
    const allResponse = await axios.get(`${BASE_URL}accounts`);
    const allDataLength = allResponse.data.length;
    return { dataToWrite, allDataLength };
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
}

export async function getProfiles(accountId?: string): Promise<Profile[]> {
  try {
    const response: AxiosResponse<Profile[]> = await axios.get(
      `${BASE_URL}profiles?account_id=${accountId}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
}

export async function getCampaigns(
  accountId?: string,
  profileId?: string
): Promise<Campaign[]> {
  try {
    const response: AxiosResponse<Campaign[]> = await axios.get(
      `${BASE_URL}campaigns?account_id=${accountId}&profile_id=${profileId}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
}
