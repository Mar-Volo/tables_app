import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState, useEffect } from "react";
// import {useLocation} from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProfiles } from "../fakeApi/fakeApi";
import { Link } from "react-router-dom";
import ProfileTable from "../components/ProfilesTable/ProfilesTable";
import Container from "../components/Container/Container";
import { Profile } from "../interfaces/types";


const ProfilePage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { accountId } = useParams<{ accountId: string }>();
  // const location = useLocation();
  // const params = useParams();
  useEffect(() => {
   const fetchProfiles = async () => {
    const response = await getProfiles(accountId);
    if (response.length !== 0) {
      setProfiles(response);
    }
   }
   fetchProfiles();
  }, [accountId]); 
  // console.log(params);
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
          <ProfileTable profiles={profiles} />
        )}
      </Container>
    </main>
  );
};

export default ProfilePage;
