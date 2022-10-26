import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const courseInfo = useLoaderData();

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold my-6">Checkout</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Course Name</th>

                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>{courseInfo.title}</td>
                <td>{courseInfo.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
