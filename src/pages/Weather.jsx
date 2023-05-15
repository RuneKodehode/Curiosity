export const Weather = () => {
  return (
    <div className="h-screen overflow-hidden fixed w-screen">
      <iframe
        className="mx-auto sm:w-[98%] w-[100%] sm:h-[70%] h-[55%] rounded-md "
        src="https://mars.nasa.gov/layout/embed/image/mslweather/"
      ></iframe>
    </div>
  );
};
