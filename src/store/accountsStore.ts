import { create } from "zustand";
import { Account, Profile, Campaign } from "../interfaces/types";

interface AccountsStore {
  accounts: Account[];
  selectedAccount: Account | null;
  selectedProfiles: Profile[] | null;
  selectedProfile: Profile | null;
  selectedCampaigns: Campaign[] | null;
  setAccounts: (newAccounts: Account[]) => void;
  setSelectedAccount: (account: Account | null) => void;
  setSelectedProfiles: (profiles: Profile[] | null) => void;
  setSelectedProfile: (profile: Profile | null) => void;
  setSelectedCampaigns: (campaigns: Campaign[] | null) => void;
}

const useAccountsStore = create<AccountsStore>((set) => ({
  accounts: [],
  selectedAccount: null,
  selectedProfiles: null,
  selectedProfile: null,
  selectedCampaigns: null,
  setAccounts: (newAccounts) => set({ accounts: newAccounts }),
  setSelectedAccount: (account) => set({ selectedAccount: account }),
  setSelectedProfiles: (profiles) => set({ selectedProfiles: profiles }),
  setSelectedProfile: (profile) => set({ selectedProfile: profile }),
  setSelectedCampaigns: (campaigns) => set({ selectedCampaigns: campaigns }),
}));

export default useAccountsStore;
