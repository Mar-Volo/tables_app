// import { create } from "zustand";
// import { Profile, Campaign } from "../interfaces/types";
// import { getCampaignsData } from "../pages/AccountsPage";
// import { getProfilessData } from "../pages/ProfilesPage";

// interface AccountsStore {
//   selectedProfiles: Profile[] | null;
//   selectedCampaigns: Campaign[] | null;
//   setSelectedProfiles: (profiles: Profile[] | null) => void;
//   setSelectedCampaigns: (campaigns: Campaign[] | null) => void;
// }

// const useAccountsStore = create<AccountsStore>((set) => ({
//   selectedProfiles: getProfilessData(),
//   selectedCampaigns: getCampaignsData(),
//   setSelectedProfiles: (profiles) => set({ selectedProfiles: profiles }),
//   setSelectedCampaigns: (campaigns) => set({ selectedCampaigns: campaigns }),
// }));

// export default useAccountsStore;
