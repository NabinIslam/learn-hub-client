import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCourse = ({ categoryCourse }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow mx-auto">
      <figure>
        <img src={categoryCourse.thumbnail} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{categoryCourse.title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/courses/course/${categoryCourse.id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCourse;
