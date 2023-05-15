export const GPS = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black bg-opacity-80 fixed">
      <iframe
        className="mx-auto md:w-[95%] w-screen md:h-[90%] h-5/6  rounded-md overflow-hidden"
        src="https://mars.nasa.gov/maps/location/?mission=MSL&site=NOW"
      ></iframe>
    </div>
  );
};
