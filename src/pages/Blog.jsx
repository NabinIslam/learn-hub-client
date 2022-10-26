import { FaCircle } from 'react-icons/fa';

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center justify-between">
            <p className="font-semibold">What is cors?</p> <FaCircle />
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              CORS stands for Cross-Origin Resource Sharing . It allows us to
              relax the security applied to an API. This is done by bypassing
              the Access-Control-Allow-Origin headers, which specify which
              origins can access the API
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center justify-between">
            <p className="font-semibold">
              Why are you using firebase ? What other options do you have to
              implement authentication?
            </p>{' '}
            <FaCircle />
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center justify-between">
            <p className="font-semibold">How does the private route work?</p>{' '}
            <FaCircle />
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center justify-between">
            <p className="font-semibold">What is Node? How does Node work?</p>{' '}
            <FaCircle />
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
