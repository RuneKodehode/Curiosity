import { ReactComponent as Radiation } from "../svg/radiation.svg";
import { ReactComponent as Oak } from "../svg/oak.svg";
import { ReactComponent as Carbon } from "../svg/Carbon.svg";
import { ReactComponent as Methane } from "../svg/Methane.svg";
export const Discoveries = () => {
  return (
    <div className=" bg-black bg-opacity-80 text-white pb-40">
      <h1 className="text-center text-6xl text-orange-400">Discoveries</h1>

      {/* -------------- */}
      <div className="flex w-screen mt-20">
        <div className="w-1/4">
          {" "}
          <div className="drop idden md:block mx-auto"></div>
        </div>
        <div className="flex-col w-1/2">
          <h2 className="text-4xl mb-5 text-left justify-center ">
            Curiosity Finds Evidence of Persistent Liquid Water in the Past
          </h2>
          <p className="text-left font-light text-lg tracking-wider">
            Just after landing, Curiosity found smooth, rounded pebbles that
            likely rolled downstream for at least a few miles in a river that
            was ankle- to hip-deep. When Curiosity reached Mount Sharp, the team
            found that over 1,000 vertical feet of rock formed originally as mud
            at the bottom of a series of shallow lakes. Rivers and lakes
            persisted in Gale crater for perhaps a million years or longer.
          </p>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 flex">
              <Oak className=" mx-auto w-1/4 h-auto " />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                A Suitable Home for Life
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Curiosity rover found that ancient Mars had the right
                chemistry to support living microbes. Curiosity found sulfur,
                nitrogen, oxygen, phosphorus and carbon-- key ingredients
                necessary for life--in the powder sample drilled from the
                "Sheepbed" mudstone in Yellowknife Bay. The sample also reveals
                clay minerals and not too much salt, which suggests fresh,
                possibly drinkable water once flowed there.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 flex">
              <Carbon className="mx-auto w-1/4 h-auto self-center" />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                Organic Carbon Found in Mars Rocks
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                Organic molecules are the building blocks of life, and they were
                discovered on Mars after a long search by the Sample Analysis at
                Mars (SAM) instrument in several samples drilled from Mount
                Sharp and the surrounding plains. The finding doesn't
                necessarily mean there is past or present life on Mars, but it
                shows that raw ingredients existed for life to get started there
                at one time. It also means that ancient organic materials can be
                preserved for us to recognize and study today.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
      {/* ----- */}
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 flex">
              <Methane className="mx-auto w-1/4 h-auto self-center" />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                Present and Active Methane in Mars' Atmosphere
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Tunable Laser Spectrometer within the SAM instrument
                detected a seasonally varying background level of atmospheric
                methane and observed a ten-fold increase in methane over a
                two-month period. The discovery of methane is exciting because
                methane can be produced by living organisms or by chemical
                reactions between rock and water, for example. Which process is
                producing methane on Mars? What caused the brief and sudden
                increase?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
      {/* ----- */}
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 flex">
              <Radiation className="radiation mx-auto w-1/4 self-center" />
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                Radiation Could Pose Health Risks for Humans
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                During her trip to Mars, Curiosity experienced radiation levels
                that would exceed NASA's career limit for astronauts, if left
                unshielded. The Radiation Assessment Detector (RAD) instrument
                on Curiosity found that two forms of radiation pose potential
                health risks to astronauts in deep space. One is galactic cosmic
                rays (GCRs), particles caused by supernova explosions and other
                high-energy events outside the solar system. The other is solar
                energetic particles (SEPs) associated with solar flares and
                coronal mass ejections from the sun. NASA will use Curiosity's
                data to design missions to be safe for human explorers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
      {/* ----- */}
      <div className="flex w-screen mt-20">
        <div id="info" className="w-1/2">
          {" "}
          <div className="flex w-screen">
            <div className="w-1/4 flex">
              <div className="atmos mx-auto w-1/4 self-center"></div>
            </div>
            <div className="flex-col w-1/2">
              {" "}
              <h2 className="text-4xl mb-5 text-left">
                A Thicker Atmosphere and More Water in Mars' Past
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The SAM instrument suite has found Mars' present atmosphere to
                be enriched in the heavier forms (isotopes) of hydrogen, carbon,
                and argon. These measurements indicate that Mars has lost much
                of its original atmosphere and inventory of water. This loss
                occurred to space through the top of the atmosphere, a process
                currently being observed by the MAVEN orbiter.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---- */}
    </div>
  );
};
