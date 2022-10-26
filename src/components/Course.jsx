import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow mx-auto">
      <figure>
        <img src={course.thumbnail} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/courses/course/${course.id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
