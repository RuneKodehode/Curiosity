import React from "react";

const Equipment = () => {
  return (
    <div id="equipment" className="text-white w-screen bg-opacity-80 bg-black">
      <div className="text-center mb-10">
        <h1 className="mb-4 text-5xl underline pt-20">Cameras</h1>
        <div className="w-1/2 flex mx-auto gap-10 mt-20">
          <img
            src="/Mastcam.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">Mastcam (Mast Camera)</h2>
            <p className="text-left font-light text-lg">
              The Mast Camera, or Mastcam for short, takes color images and
              color video footage of the Martian terrain. The images can be
              stitched together to create panoramas of the landscape around the
              rover.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/MAHLI.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              MAHLI (Mars Hand Lens Imager)
            </h2>
            <p className="text-left font-light text-lg">
              The Mars Hand Lens Imager, called MAHLI, is the rover's version of
              the magnifying hand lens that geologists usually carry with them
              into the field. MAHLI's close-up images reveal the minerals and
              textures in rock surfaces.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/MARDI.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              MARDI (Mars Descent Imager)
            </h2>
            <p className="text-left font-light text-lg">
              The Mars Descent Imager, nicknamed "MARDI," shot a color video of
              the terrain below as the rover descended to its landing site. The
              video helped mission planners select the best path for Curiosity
              when the rover started exploring Gale Crater.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-5xl mt-20 underline">Spectrometers</h1>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/APXS.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              APXS (Alpha Particle X-Ray Spectrometer)
            </h2>
            <p className="text-left font-light text-lg">
              The Alpha Particle X-Ray Spectrometer is called APXS for short.
              When it is placed right next to a rock or soil surface, it uses
              two kinds of radiation to measure the amounts and types of
              chemical elements that are present.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/Chemcam.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              ChemCam (Chemistry and Camera)
            </h2>
            <p className="text-left font-light text-lg">
              The Chemistry and Camera tool is known as ChemCam. ChemCam's
              laser, camera and spectrograph work together to identify the
              chemical and mineral composition of rocks and soils.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/CheMin.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              CheMin (Chemical and Mineralogy)
            </h2>
            <p className="text-left font-light text-lg">
              The Chemical and Mineralogy instrument, or CheMin for short,
              performs chemical analysis of powdered rock samples to identify
              the types and amounts of different minerals that are present.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/SAM.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              SAM (Sample Analysis at Mars)
            </h2>
            <p className="text-left font-light text-lg">
              The Sample Analysis at Mars tool is called SAM. SAM is made up of
              three different instruments that search for and measure organic
              chemicals and light elements that are important ingredients
              potentially associated with life.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-5xl underline mt-20">Radiation Detectors</h1>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/RAD.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              RAD(Radiation Assessment Detector)
            </h2>
            <p className="text-left font-light text-lg">
              The Radiation Assessment Detector is also known as RAD, and is
              helping prepare for future human exploration of Mars. RAD measures
              the type and amount of harmful radiation that reaches the Martian
              surface from the sun and space sources.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/DAN.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              DAN (Dynamic Albedo Of Neutrons)
            </h2>
            <p className="text-left font-light text-lg">
              The Dynamic Albedo of Neutrons tool, called DAN for short, looks
              for telltale changes in the way neutrons released from Martian
              soil that indicate liquid or frozen water exists underground.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-5xl mt-20 underline">Environmental Sensors</h1>
        <div className="w-1/2 mx-auto mt-20 flex gap-10">
          <img
            src="/REMS.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              REMS (Rover Environmental Monitoring Station)
            </h2>
            <p className="text-left font-light text-lg">
              The Rover Environmental Monitoring Station is nicknamed REMS, and
              it contains all the weather instruments needed to provide daily
              and seasonal reports on meteorological conditions around the
              rover.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-5xl mt-20 underline">Atmospheric Sensors</h1>
        <div className="w-1/2 mx-auto mt-20 pb-20 flex gap-10">
          <img
            src="/MEDLI.jpg"
            alt=""
            className="w-40 hidden md:block rounded-sm"
          />
          <div>
            <h2 className="text-4xl mb-5 text-left">
              MEDLI (Mars Science Laboratory Entry Descent and Landing
              Instrument)
            </h2>
            <p className="text-left font-light text-lg">
              The Mars Science Laboratory Entry Descent and Landing Instrument
              is called MEDLI. MEDLI measured the heating and atmospheric
              pressure changes that occurred during the descent to help
              determine the effects on different parts of the spacecraft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Equipment };
