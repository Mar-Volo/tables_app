import React from "react";
import { Campaign } from "../../interfaces/types";

interface CampaignsTableProps {
  campaigns: Campaign[] | null;
}

const CampaignsTable: React.FC<CampaignsTableProps> = ({ campaigns }) => {
  return (
    <table className="table campaigns__table table-hover">
      <thead>
        <tr>
          <th>Campaign ID</th>
          <th>Clicks</th>
          <th>Cost</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {campaigns?.map((campaign) => (
          <tr key={campaign.campaignId}>
            <td>{campaign.campaignId}</td>
            <td>{campaign.clicks}</td>
            <td>{campaign.cost}</td>
            <td>{campaign.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CampaignsTable;
