import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const AccountsPage = lazy(() => import("./pages/AccountsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilesPage"));
const CampaignsPage = lazy(() => import("./pages/CampaignsPage"));
const Home = lazy(() => import("./pages/HomePage"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/profiles" element={<ProfilePage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
