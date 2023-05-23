import React from "react";

const Equipment = () => {
  return (
    <div className=" bg-black bg-opacity-80 text-white pb-40">
      <h1 className="text-center text-5xl text-orange-400">Cameras</h1>
      <div className="flex w-screen my-20">
        <div className="w-1/4 h-40 flex ">
          {" "}
          <img
            src="/Mastcam.jpg"
            alt=""
            className="mx-auto w-auto cover hidden sm:block"
          />
        </div>
        <div className="flex-col w-1/2">
          <h2 className="text-4xl mb-5 text-left justify-center ">
            Mastcam (Mast Camera) ›
          </h2>
          <p className="text-left font-light text-lg tracking-wider">
            The Mast Camera, or Mastcam for short, takes color images and color
            video footage of the Martian terrain. The images can be stitched
            together to create panoramas of the landscape around the rover.
          </p>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="flex w-screen">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/MAHLI.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                MAHLI (Mars Hand Lens Imager) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Mars Hand Lens Imager, called MAHLI, is the rover's version
                of the magnifying hand lens that geologists usually carry with
                them into the field. MAHLI's close-up images reveal the minerals
                and textures in rock surfaces.
              </p>
            </div>
          </div>
          <div className="flex w-screen mt-20">
            <div className="w-1/4 h-40 flex">
              {" "}
              <img
                src="/MARDI.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left justify-center ">
                MARDI (Mars Descent Imager) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Mars Descent Imager, nicknamed "MARDI," shot a color video
                of the terrain below as the rover descended to its landing site.
                The video helped mission planners select the best path for
                Curiosity when the rover started exploring Gale Crater.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-5xl text-orange-400 my-20">
        Spectrometers
      </h1>

      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/APXS.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                APXS (Alpha Particle X-Ray Spectrometer) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Alpha Particle X-Ray Spectrometer is called APXS for short.
                When it is placed right next to a rock or soil surface, it uses
                two kinds of radiation to measure the amounts and types of
                chemical elements that are present.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/Chemcam.jpg"
                alt=""
                className="mx-auto h-3/4 hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                ChemCam (Chemistry and Camera) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Chemistry and Camera tool is known as ChemCam. ChemCam's
                laser, camera and spectrograph work together to identify the
                chemical and mineral composition of rocks and soils.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/CheMin.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                CheMin (Chemical and Mineralogy) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Chemical and Mineralogy instrument, or CheMin for short,
                performs chemical analysis of powdered rock samples to identify
                the types and amounts of different minerals that are present.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/SAM.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                SAM (Sample Analysis at Mars) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Sample Analysis at Mars tool is called SAM. SAM is made up
                of three different instruments that search for and measure
                organic chemicals and light elements that are important
                ingredients potentially associated with life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-5xl text-orange-400 my-20">
        Radiation Detectors
      </h1>
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/RAD.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                RAD (Radiation Assessment Detector) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Radiation Assessment Detector is also known as RAD, and is
                helping prepare for future human exploration of Mars. RAD
                measures the type and amount of harmful radiation that reaches
                the Martian surface from the sun and space sources.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/DAN.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                DAN (Dynamic Albedo Of Neutrons) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Dynamic Albedo of Neutrons tool, called DAN for short, looks
                for telltale changes in the way neutrons released from Martian
                soil that indicate liquid or frozen water exists underground.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-5xl text-orange-400 my-20">
        Environmental Sensors
      </h1>
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/REMS.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                REMS (Rover Environmental Monitoring Station) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Rover Environmental Monitoring Station is nicknamed REMS,
                and it contains all the weather instruments needed to provide
                daily and seasonal reports on meteorological conditions around
                the rover.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-5xl text-orange-400 my-20">
        Atmospheric Sensors
      </h1>
      <div className="flex w-screen">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 h-40 flex">
              <img
                src="/MEDLI.jpg"
                alt=""
                className="mx-auto w-auto cover hidden sm:block"
              />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                MEDLI (Mars Science Laboratory Entry Descent and Landing
                Instrument) ›
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Mars Science Laboratory Entry Descent and Landing Instrument
                is called MEDLI. MEDLI measured the heating and atmospheric
                pressure changes that occurred during the descent to help
                determine the effects on different parts of the spacecraft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Equipment };
