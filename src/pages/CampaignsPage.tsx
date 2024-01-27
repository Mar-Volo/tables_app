import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CampaignsTable from "../components/CompaignsTable/CampaignsTable";
import Container from "../components/Container/Container";
import { campaignsStorageKey } from "./ProfilesPage";
import { profileIdStorageKey } from "./ProfilesPage";

const getCampaignssData = () => {
  const storedData = localStorage.getItem(campaignsStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};
const getProfileIdData = () => {
  const storedData = localStorage.getItem(profileIdStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};
const CampaignsPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [profileId, setProfileId] = useState("");

  useEffect(() => {
    const campaignsData = getCampaignssData();
    const profileIdData = getProfileIdData();
  
    setCampaigns(campaignsData);
    setProfileId(profileIdData);
  }, []);

  return (
    <main>
      <Container className="container">
        {campaigns.length > 0 ? (
          <h1>Campaigns for profile ID: {profileId}</h1>
        ) : (
          <h1>Please select any profile in Profiles page</h1>
        )}

        <Link className="backLink" to="/profiles">
          <MdOutlineKeyboardBackspace />
          &nbsp;Back
        </Link>
        {campaigns.length > 0 && <CampaignsTable campaigns={campaigns} />}
      </Container>
    </main>
  );
};

export default CampaignsPage;
