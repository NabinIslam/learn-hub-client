import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <AwesomeSlider
      buttonContentRight={<p style={buttonStyle}>{'>'}</p>}
      className="h-[80vh]"
    >
      <div className="flex flex-col justify-center items-center bg-slider-1 w-screen h-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-white">
          Welcome to LearnHub
        </h1>
        <p className="text-xl py-5 text-white">
          World's no. 1 E-learning platform
        </p>
        <Link to="/courses">
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center bg-slider-4 w-screen h-full text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center">
          Welcome to LearnHub
        </h1>
        <p className="text-xl py-5 text-white">
          World's no. 1 E-learning platform
        </p>
        <Link to="/courses">
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>
    </AwesomeSlider>
  );
};

export default Home;
