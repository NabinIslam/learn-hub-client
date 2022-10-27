import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import { AuthContext } from '../contexts/AuthProvider';

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="flex flex-col items-center border py-10 gap-4">
      <img src={logo} width={80} alt="" />
      <h2 className="text-2xl font-extrabold ">LearnHub</h2>
      <ul className="flex items-center gap-4">
        <li className="py-1">
          <Link to={'/'} className="font-semibold">
            Home
          </Link>
        </li>
        <li className="py-1">
          <Link to={'/courses'} className="font-semibold">
            Courses
          </Link>
        </li>
        <li className="py-1">
          <Link to={'/faq'} className="font-semibold">
            FAQ
          </Link>
        </li>
        <li className="py-1">
          <Link to={'/blog'} className="font-semibold">
            Blog
          </Link>
        </li>
      </ul>
      <p>&copy; 2022 LearnHub. All rights reserved</p>
    </footer>
  );
};

export default Footer;
