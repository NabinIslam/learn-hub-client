import { useLoaderData } from 'react-router-dom';
import CategoryCourse from '../components/CategoryCourse';

const CategoryCourses = () => {
  const categoryCourses = useLoaderData();

  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {categoryCourses.map(categoryCourse => (
        <CategoryCourse
          key={categoryCourse.id}
          categoryCourse={categoryCourse}
        />
      ))}
    </div>
  );
};

export default CategoryCourses;
