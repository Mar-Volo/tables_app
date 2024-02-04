import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CampaignsTable from "../components/CompaignsTable/CampaignsTable";
import Container from "../components/Container/Container";
import { getCampaigns } from "../fakeApi/fakeApi";
import { Campaign } from "../interfaces/types";

const CampaignsPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const { accountId, profileId } = useParams<{
    profileId: string;
    accountId: string;
  }>();

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await getCampaigns(accountId, profileId);
      if (response.length !== 0) {
        setCampaigns(response);
      }
    };
    fetchProfiles();
  }, [accountId, profileId]);

  return (
    <main>
      <Container className="container">
        {campaigns.length > 0 ? (
          <h1>Campaigns for profile ID: {profileId}</h1>
        ) : (
          <h1>Please select any profile in Profiles page</h1>
        )}

        <Link className="backLink" to={`/accounts/${accountId}`}>
          <MdOutlineKeyboardBackspace />
          &nbsp;Back
        </Link>
        {campaigns.length > 0 && <CampaignsTable campaigns={campaigns} />}
      </Container>
    </main>
  );
};

export default CampaignsPage;
