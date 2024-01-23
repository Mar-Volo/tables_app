import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "../../interfaces/types";

interface ProfileTableProps {
  profiles: Profile[];
  handleClick: (profileId: string) => void;
}

const ProfileTable: React.FC<ProfileTableProps> = ({
  profiles,
  handleClick,
}) => {
  return (
    <table className="table profiles__table table-hover">
      <thead>
        <tr>
          <th>Profile ID</th>
          <th>Country</th>
          <th>Marketplace</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile) => (
          <tr
            key={profile.profileId}
            onClick={() => handleClick(profile.profileId)}
          >
            <td>
              <Link to="/campaigns" className="table__link">
                {profile.profileId}
              </Link>
            </td>
            <td>
              <Link to="/campaigns" className="table__link">
                {profile.country}
              </Link>
            </td>
            <td>
              <Link to="/campaigns" className="table__link">
                {profile.marketplace}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProfileTable;
