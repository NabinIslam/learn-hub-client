import { useLoaderData } from 'react-router-dom';

const CoursePage = () => {
  const courseDetail = useLoaderData();

  return (
    <div>
      <div className="container mx-auto flex flex-col-reverse sm:flex-col-reverse md:flex-row py-10">
        <div className="basis-full sm:basis-full md:basis-3/5">
          <h2 className="text-2xl font-semibold">{courseDetail.title}</h2>
        </div>
        <div className="basis-full sm:basis-full md:basis-2/5">
          <img className="rounded-md" src={courseDetail.thumbnail} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
