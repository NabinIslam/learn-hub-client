import { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Course from '../components/Course';

const Courses = () => {
  const courses = useLoaderData();

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const url = 'http://localhost:5000/courses/categories';
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setCategories(data));
  // }, []);

  return (
    // <div>
    //   <div className="container mx-auto">
    //     <h2 className="text-3xl text-center font-bold my-4">
    //       Explore our amazing courses!
    //     </h2>
    //     <div className="flex justify-between">
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
    //       <aside className="px-10 basis-1/5">
    //         <h3 className="text-2xl font-semibold">Categories</h3>
    //         <ul>
    //           {categories.map(category => (
    //             <Link to={`/courses/${category.category}`} key={category.id}>
    //               <li>{category.category}</li>
    //             </Link>
    //           ))}
    //         </ul>
    //       </aside>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Courses;
