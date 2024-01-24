import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAccountsStore from "../store/accountsStore";
import CampaignsTable from "../components/CompaignsTable/CampaignsTable";
import Container from "../components/Container/Container";

const CampaignsPage: React.FC = () => {
  const { selectedProfile, selectedCampaigns, setSelectedCampaigns } =
    useAccountsStore((state) => ({
      selectedProfile: state.selectedProfile,
      selectedCampaigns: state.selectedCampaigns,
      setSelectedCampaigns: state.setSelectedCampaigns,
    }));

  useEffect(() => {
    setSelectedCampaigns(selectedProfile?.campaigns || []);
  }, [selectedProfile, setSelectedCampaigns]);

  return (
    <main>
      <Container className="container">
      <h1>Campaigns for profile ID: {selectedProfile?.profileId}</h1>
      <Link className="backLink" to="/profiles">Back</Link>
      {selectedProfile && <CampaignsTable campaigns={selectedCampaigns} />}
      </Container>
      
    </main>
  );
};

export default CampaignsPage;
