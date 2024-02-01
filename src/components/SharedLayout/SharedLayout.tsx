import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SharedLayout: React.FC = () => {
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

          {/* <NavLink className="nav_link" to="/accounts/:accountId">
            Profiles
          </NavLink>

          <NavLink className="nav_link" to="/accounts/:accountId/:profileId">
            Campaigns
          </NavLink> */}
        </Container>
      </Header>
      <Suspense
        fallback={
          <>
            <Container className="container loader__container">
              <ThreeCircles
                visible={true}
                height="100%"
                width="100"
                color="rgb(33 79 151)"
                ariaLabel="three-circles-loading"
                wrapperStyle={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                wrapperClass=""
              />
            </Container>
            <Footer>
              <Container className="container footer__container">
                <span className="footer__element">&copy; {currentYear}</span>
                <span className="footer__element">All rights reserved</span>
                <span className="footer__element">
                  Developed by Volodymyr Marchenko
                </span>
              </Container>
            </Footer>
          </>
        }
      >
        <Outlet />
        <Footer>
          <Container className="container footer__container">
            <span className="footer__element">&copy; {currentYear}</span>
            <span className="footer__element">All rights reserved</span>
            <span className="footer__element">
              Developed by Volodymyr Marchenko
            </span>
          </Container>
        </Footer>
      </Suspense>
    </>
  );
};

export default SharedLayout;
