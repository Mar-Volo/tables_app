// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import CampaignsTable from "../components/CompaignsTable/CampaignsTable";
// import Container from "../components/Container/Container";
// import { getAccountProfiles } from "../fakeApi/fakeApi";
// import { Campaign } from "../interfaces/types";

// const CampaignsPage: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);
//   const { accountId, profileId } = useParams<{
//     profileId: string;
//     accountId: string;
//   }>();

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         if (accountId) {
//           const response = await getAccountProfiles(accountId);
//           if (response && response[0] && response[0].profiles) {
//             // Объединяем все кампании в один массив
//             const allCampaigns = response[0].profiles
//               .filter((p) => p.profileId === profileId)
//               .flatMap((profile) => profile.campaigns);
//             setCampaigns([...allCampaigns]);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//       }
//     };

//     fetchProfiles();
//   }, [accountId]);

//   console.log(campaigns); // Выводим после завершения useEffect
//   return (
//     <main>
//       <Container className="container">
//         {campaigns.length > 0 ? (
//           <h1>Campaigns for profile ID: {profileId}</h1>
//         ) : (
//           <h1>Please select any profile in Profiles page</h1>
//         )}

//         <Link className="backLink" to={`/accounts/${accountId}`}>
//           <MdOutlineKeyboardBackspace />
//           &nbsp;Back
//         </Link>
//         {campaigns.length > 0 && <CampaignsTable campaigns={campaigns} />}
//       </Container>
//     </main>
//   );
// };

// export default CampaignsPage;
