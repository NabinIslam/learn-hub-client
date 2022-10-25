import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-screen bg-white absolute flex items-center justify-center">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
