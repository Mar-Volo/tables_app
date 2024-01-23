import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAccountsStore from "../store/accountsStore";
import ProfileTable from "../components/ProfilesTable/ProfilesTable";
import Container from "../components/Container/Container";

const ProfilePage: React.FC = () => {
  const {
    selectedAccount,
    selectedProfiles,
    setSelectedProfiles,
    setSelectedProfile,
  } = useAccountsStore((state) => ({
    selectedAccount: state.selectedAccount,
    selectedProfiles: state.selectedProfiles,
    setSelectedProfiles: state.setSelectedProfiles,
    setSelectedProfile: state.setSelectedProfile,
  }));

  useEffect(() => {
    setSelectedProfiles(selectedAccount?.profiles || []);
  }, [selectedAccount, setSelectedProfiles]);

  const handleProfileClick = (profileId: string) => {
    const selected = selectedProfiles?.find(
      (item) => item.profileId === profileId
    );
    setSelectedProfile(selected || null);
    console.log(selected);
  };

  return (
    <main>
<Container className="container">
<h1 className="profiles__title">Profiles for Account ID: {selectedAccount?.accountId}</h1>
      <Link className="backLink" to="/accounts">Back</Link>
      {selectedAccount && (
        <ProfileTable
          profiles={selectedProfiles || []}
          handleClick={handleProfileClick}
        />
      )}
</Container>
      
    </main>
  );
};

export default ProfilePage;
