import { Link } from "react-router-dom";

const Home = () => {
  return (
    
      <main className="home__main">
        <div className="home__container container">
          <Link className="home__link" to="/accounts">
            Get started
          </Link>
        </div>
      </main>
    
  );
};
export default Home;
