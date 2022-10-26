import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <Circles
        height="80"
        width="80"
        color="#594da9"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
