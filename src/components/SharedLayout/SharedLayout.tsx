import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useAccountsStore from "../../store/accountsStore";

const SharedLayout: React.FC = () => {
  const { selectedAccount, selectedProfile } = useAccountsStore(
    (state) => ({
      selectedAccount: state.selectedAccount,
      selectedProfile: state.selectedProfile,
    })
  );

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header>
        <Container className="container header__container">
          <NavLink className="nav_link" to="/">
            Home
          </NavLink>
          <NavLink className="nav_link" to="/accounts">
            Accounts
          </NavLink>
          {selectedAccount && (
            <NavLink className="nav_link" to="/profiles">
              Profiles
            </NavLink>
          )}
          {selectedProfile && (
            <NavLink className="nav_link" to="/campaigns">
              Campaigns
            </NavLink>
          )}
        </Container>
      </Header>
      <Suspense
        fallback={
          <Container className="container loader__container">
            <ThreeCircles
              visible={true}
              height="100%"
              width="100"
              color="rgb(33 79 151)"
              ariaLabel="three-circles-loading"
              wrapperStyle={{ display: 'flex', justifyContent: 'center', alignIems: 'center' }}
              wrapperClass=""
            />
          </Container>
        }
      >
        <Outlet />
        <Footer>
          <Container className="container footer__container">
          <span className="footer__element">&copy; {currentYear}</span>
          <span className="footer__element">All rights reserved</span>
          <span className="footer__element">Developed by Volodymyr Marchenko</span>
          </Container>
        </Footer>
      </Suspense>
    </>
  );
};

export default SharedLayout;
