import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
  const { loginWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate('/');
        toast.success('Login successful');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-[90vh] ">
      <div className="container">
        <div className="flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold my-6">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>
                Don't have account yet?{' '}
                <Link to={'/register'} className="text-blue-500">
                  Register
                </Link>
              </p>
              <div className="divider">OR</div>
              <GoogleButton className="mx-auto" onClick={handleGoogleSignIn} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
