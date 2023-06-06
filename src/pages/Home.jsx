export const Home = () => {
  return (
    <div className="h-screen text-white sm:fixed">
      <h1 className="text-center text-6xl text-orange-400 mt-10 w-fit mx-auto bg-opacity-80">
        Curiosity Rover
      </h1>
      <div className=" w-screen gap-32 flex mt-20 justify-center ">
        <div className="w-3/4 sm:w-1/2 ">
          <h2 className="text-4xl mb-5 text-center w-fit mx-auto backdrop-blur-sm">
            Launch:
          </h2>
          <p className="text-center font-light text-3xl w-fit mx-auto backdrop-blur-sm">
            7:02 a.m. PST, Nov. 26, 2011 (10:02 a.m. EST)
          </p>
        </div>
      </div>
      <div className=" w-screen gap-32 flex mt-20 justify-center">
        <div className="w-3/4 sm:w-1/2 ">
          <h2 className="text-4xl mb-5 text-center backdrop-blur-sm w-fit mx-auto">
            Launch Vehicle:
          </h2>
          <p className="text-center text-3xl font-light backdrop-blur-sm w-1/2 mx-auto">
            Atlas V-451 Landing: 10:32 p.m. PDT, Aug. 5, 2012 (1:32 a.m. EDT,
            Aug. 6, 2012)
          </p>
        </div>
      </div>
      <div className=" w-screen gap-32 flex mt-20 justify-center">
        <div className="w-3/4 sm:w-1/2 ">
          <h2 className="text-4xl mb-5 text-center backdrop-blur-sm w-fit mx-auto">
            Landing Site:
          </h2>
          <p className="text-center text-3xl font-light backdrop-blur-sm w-fit mx-auto">
            Gale Crater
          </p>
        </div>
      </div>
    </div>
  );
};
