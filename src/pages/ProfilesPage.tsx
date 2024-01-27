import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileTable from "../components/ProfilesTable/ProfilesTable";
import Container from "../components/Container/Container";
import { Profile } from "../interfaces/types";
import { profilesStorageKey } from "./AccountsPage";
import { accountIdStorageKey } from "./AccountsPage";

const getAccountIdData = () => {
  const storedData = localStorage.getItem(accountIdStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};
export const getProfilesData = () => {
  const storedData = localStorage.getItem(profilesStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};
export const campaignsStorageKey = "fakeCampaignsData";
export const profileIdStorageKey = "fakeProfailIdData";
const ProfilePage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [accountId, setAccountId] = useState("");

  useEffect(() => {
    const profilesData = getProfilesData();
    const accountIdData = getAccountIdData();
    setProfiles(profilesData);
    setAccountId(accountIdData);
  }, []);
  const handleProfileClick = (profileId: string) => {
    const selected = profiles.find((item) => item.profileId === profileId);
    if (selected) {
      localStorage.setItem(
        campaignsStorageKey,
        JSON.stringify(selected.campaigns)
      );
      localStorage.setItem(profileIdStorageKey, JSON.stringify(profileId));
    } else {
      console.error(`Profile with ID ${profileId} not found`);
    }
  };

  return (
    <main>
      <Container className="container">
        {profiles.length > 0 ? (
          <h1 className="profiles__title">
            Profiles for account ID: {accountId}
          </h1>
        ) : (
          <h1 className="profiles__title">
            Please select any account in Accounts page!
          </h1>
        )}

        <Link className="backLink" to="/accounts">
          <MdOutlineKeyboardBackspace />
          &nbsp;Back
        </Link>
        {profiles.length > 0 && (
          <ProfileTable profiles={profiles} handleClick={handleProfileClick} />
        )}
      </Container>
    </main>
  );
};

export default ProfilePage;
