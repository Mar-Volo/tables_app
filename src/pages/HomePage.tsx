import { Link } from "react-router-dom";

const Home = () => {
  return (
    
     
        <div className="home__container container">
          <Link className="home__link" to="/accounts">
            Get started!
          </Link>
        </div>
    
    
  );
};
export default Home;
