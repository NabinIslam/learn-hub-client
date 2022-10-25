import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';
import GithubButton from 'react-github-login-button';

const Register = () => {
  const {
    loginWithGoogle,
    registerWithEmailAndPassword,
    updateUserProfile,
    loginWithGithub,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    registerWithEmailAndPassword(email, password)
      .then(() => {
        updateUserProfile(fullName, photoUrl)
          .then(() => {})
          .catch(error => {
            toast.error(error.message);
          });
        navigate('/');
        form.reset();
        toast.success('Registration successful');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        navigate('/');
        toast.success('Login successful');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGithubSignIn = () => {
    loginWithGithub()
      .then(() => {
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
          <div className="text-center ">
            <h1 className="text-5xl font-bold my-6">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your full name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your photo URL"
                  name="photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
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
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p>
                Already have an account?{' '}
                <Link to={'/login'} className="text-blue-500">
                  Login
                </Link>
              </p>
              <div className="divider">OR</div>
              <GoogleButton className="mx-auto" onClick={handleGoogleSignIn} />
              <GithubButton className="mx-auto" onClick={handleGithubSignIn} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
