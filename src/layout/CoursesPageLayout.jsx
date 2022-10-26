import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const CoursesPageLayout = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/courses-categories';
    fetch(url)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold my-4">
          Explore our amazing courses!
        </h2>
        <div className="flex justify-between">
          <div className="my-7 basis-full sm:basis-full md:basis-4/5">
            <Outlet />
          </div>
          <aside className="hidden sm:hidden md:block lg:block  px-10 basis-1/5">
            <h3 className="text-2xl font-semibold">Categories</h3>
            <ul className="my-3">
              <Link className="font-semibold" to={'/courses'}>
                <li className="border my-1 py-1 px-2 rounded-md hover:bg-slate-200">
                  All courses
                </li>
              </Link>
              {categories.map(category => (
                <Link
                  className="font-semibold"
                  to={`/courses/category/${category.id}`}
                  key={category.id}
                >
                  <li className="border my-1 py-1 px-2 rounded-md hover:bg-slate-200">
                    {category.category}
                  </li>
                </Link>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CoursesPageLayout;
