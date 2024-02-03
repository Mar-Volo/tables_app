import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileTable from "../components/ProfilesTable/ProfilesTable";
import Container from "../components/Container/Container";
import { Profile } from "../interfaces/types";


const ProfilePage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { accountId } = useParams<{ accountId: string }>();
  useEffect(() => {
   
  }, [accountId]); // Добавлен параметр зависимости для useEffect
  console.log(profiles);
  console.log(accountId);
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
