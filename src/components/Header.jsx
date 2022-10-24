import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import { FaBars } from 'react-icons/fa';
import avatar from '../assets/avatar/avatar.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
  const [open, setOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logout successful');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="shadow">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div>
          <Link to={'/'}>
            <div className="flex items-center gap-1">
              <img src={logo} width={20} alt="" />
              <h2 className="text-xl font-bold">LearnHub</h2>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <FaBars
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <img
            className={`rounded-full ${!user ? 'hidden' : 'inline'}`}
            src={user ? user.photoURL : avatar}
            width={30}
            alt=""
          />
        </div>

        {/* desktop nav  */}
        <div className="hidden sm:hidden md:hidden lg:block">
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
            {user ? (
              <>
                <li className="py-1">
                  <Link onClick={handleLogout} className="font-semibold">
                    Logout
                  </Link>
                </li>
                <div className="dropdown dropdown-end dropdown-hover">
                  <img
                    className="rounded-full cursor-pointer"
                    tabIndex={0}
                    src={user ? user.photoURL : avatar}
                    width={30}
                    alt=""
                  />
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link>{user?.displayName}</Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="py-1">
                  <Link to={'/login'} className="font-semibold">
                    Login
                  </Link>
                </li>
                <li className="py-1">
                  <Link to={'/register'} className="font-semibold">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`shadow w-screen p-3 text-center absolute bg-white z-50 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <ul>
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
          {user ? (
            <li className="py-1">
              <Link onClick={handleLogout} className="font-semibold">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="py-1">
                <Link to={'/login'} className="font-semibold">
                  Login
                </Link>
              </li>
              <li className="py-1">
                <Link to={'/register'} className="font-semibold">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
