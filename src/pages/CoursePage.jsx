import { Link, useLoaderData } from 'react-router-dom';
import React from 'react';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const CoursePage = () => {
  const courseDetail = useLoaderData();
  console.log(courseDetail);

  return (
    <div ref={ref}>
      <div className="container mx-auto flex flex-col-reverse sm:flex-col-reverse md:flex-row py-10">
        <div className="basis-full pr-10 sm:basis-full md:basis-3/5">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-error text-white">
                Download PDF
              </button>
            )}
          </Pdf>
          <h2 className="text-2xl font-bold my-2">{courseDetail.title}</h2>
          <h3 className="text-xl my-2">
            <strong>Course instructor:</strong> {courseDetail.instructor}
          </h3>
          <h2 className="text-2xl font-bold underline my-2">Description:</h2>
          <p className=" my-2">{courseDetail.description}</p>
        </div>
        <div className="basis-full border rounded-md sm:basis-full md:basis-2/5">
          <img className="rounded-md" src={courseDetail.thumbnail} alt="" />
          <div className="p-6">
            <h2 className="text-right font-semibold text-2xl">
              ${courseDetail.price}
            </h2>
            <Link to={`/checkout/${courseDetail.id}`}>
              <button className="btn btn-success text-white my-2">
                Get premium access
              </button>
            </Link>
            <h3 className="text-xl font-semibold my-2">
              <strong>Course duration:</strong> {courseDetail.duration}
            </h3>
            <h3 className="text-xl font-semibold my-2">
              <strong>Total videos:</strong> {courseDetail.total_videos}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
