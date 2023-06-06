export const Communication = () => {
  return (
    <div className=" bg-black bg-opacity-80 text-white py-20">
      <h1 className="text-center text-6xl text-orange-400">Communication</h1>
      <div className="flex w-screen pt-20">
        <div className="w-1/4"></div>
        <div className="flex-col w-1/2">
          <h2 className="text-4xl mb-5 text-left justify-center ">
            Communications with Earth
          </h2>
          <p className="text-left font-light text-lg tracking-wider">
            The NASA Deep Space Network (DSN) is an international network of
            antennas that provide the communication links between the scientists
            and engineers on Earth to the missions in space and on Mars. <br />
            <br />
            The DSN consists of three deep-space communications facilities
            placed approximately 120 degrees apart around the world: at
            Goldstone, in California's Mojave Desert; near Madrid, Spain; and
            near Canberra, Australia. This strategic placement permits constant
            observation of spacecraft as the Earth rotates on its own axis.
          </p>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">
                Size and Strength of the DSN Antennas
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The DSN antennas are extremely large: 34 meters (about 37 yards)
                and 70 meters (about 76 yards). These enormous antennas enable
                humans to reach out to spacecraft millions of miles away. The
                larger the antenna, the stronger the signal and greater the
                amount of information the antenna can send and receive. The Mars
                Science Laboratory, while in its cruise stage configuration,
                communicated through low and medium-gain antennas. While
                Curiosity is roving on the planet, it is communicating with the
                Mars Reconnaissance Orbiter via its UHF antenna and to the DSN
                on Earth by way of its high-gain antenna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">
                Preventing Busy Signals
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The Deep Space Network (DSN) communicates with nearly all
                spacecraft flying throughout our solar system. Many spacecraft
                are cruising in space, observing Saturn, the sun, asteroids and
                comets. In addition, the Mars Exploration Rovers are still busy
                on the surface of Mars and NASA's Mars Reconnaissance Orbiter
                has joined the other martian orbiters. The DSN antennas are
                extremely busy trying to track all of these space missions at
                once. The Mars Science Laboratory spacecraft must therefore
                share time on the DSN antennas. A sophisticated scheduling
                system with a team of hundreds of negotiators around the world
                ensures that each mission's priorities are met.
                <br />
                <br /> During critical mission events, such as landing on Mars,
                multiple antennas on Earth and the Mars Reconnaissance Orbiter
                track the signals from the spacecraft to minimize risk of loss
                of communication. During the landed operations phase on the
                martian surface, the Mars Science Laboratory utilizes the
                Multiple Spacecraft Per Aperture (MSPA) capability of the DSN,
                which allows a single DSN antenna to receive downlink from up to
                four spacecraft simultaneously, as well as using the relay
                capabilities of the Mars Odyssey (ODY) and Mars Reconnaissance
                Orbiter (MRO) spacecraft. <br />
                <br />
                The rover's downlink sessions (when the rover sends information
                back to Earth) are generally roughly 15 minutes each, with
                usually two downlink sessions per relay orbiter (ODY, MRO) per
                martian day (sol), with two sessions overnight and two sessions
                in the late martian afternoon. MSPA allows only one spacecraft
                at a time to have the uplink, and Curiosity commands early in
                each sol (martian day) for roughly 30 minutes to provide the
                instructions for that sol's activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-6xl text-orange-400 mt-20">Navigation</h1>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">
                How the DSN helps engineers navigate the spacecraft during
                cruise
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                During cruise, the Deep Space Network antennas pick up signals
                from the spacecraft that tell navigators where the spacecraft
                are located. Engineers cannot physically see the spacecraft with
                the naked eye or a telescope, and they rely on radio "tracking"
                to know where the spacecraft are at any given time. Like a game
                of "Marco-Polo," the DSN listens for signals from outer space
                and can detect where the spacecraft is from where the sound
                comes from. <br />
                <br />
                This navigation service is called "tracking coverage" and it
                includes Doppler, ranging and delta differential one-way
                ranging, or "Delta DOR."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">Doppler Data</h2>
              <p className="text-left font-light text-lg tracking-wider">
                In order to calculate the speed that a spacecraft is flying,
                engineers use Doppler data to plot velocity along the line of
                sight between Earth and the spacecraft. <br />
                <br />
                Most people are familiar with the phenomenon of a car horn or
                train whistle changing its frequency as it moves towards or away
                from them. Electromagnetic radiation (e.g. light waves or radio
                signals) also experience this effect. The size of the frequency
                shift, or "Doppler shift," depends on how fast the light source
                is moving relative to the observer. Astronomers often refer to
                the "redshift" and "blueshift" of visible light, where the light
                from an object coming towards us is shifted to the blue end of
                the spectrum (higher frequencies), and light from an object
                moving away is shifted towards the red (lower frequencies).{" "}
                <br /> <br /> The Mars Science Laboratory spacecraft
                commmunicates with controllers on the ground by radio signals.
                Ground controllers know the frequency of the signal that is
                emitted from the spacecraft. However, since the spacecraft is
                moving away from (or towards) us, this frequency is being
                Doppler shifted to a different frequency. So, engineers (or,
                more accurately, computers) compare the received frequency with
                the emitted frequency to get the Doppler shift. It's then
                straightforward to find the velocity that would cause the
                resulting Doppler shift.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">Ranging</h2>
              <p className="text-left font-light text-lg tracking-wider">
                Ranging is sending a code to the spacecraft, having the
                spacecraft receive that code and immediately send it back out
                the spacecraft's own antenna, and finally receiving that code
                back on Earth. The time between sending the code and receiving
                the code, minus the delay in turning the signal around on the
                spacecraft, is twice the light time to the spacecraft. So that
                time, divided by two and multiplied by the speed of light, is
                the distance from the DSN station to the spacecraft. This
                distance is accurate to about five to ten meters (16-33 feet),
                even though the spacecraft may be 200 billion meters away!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">Delta Dor</h2>
              <p className="text-left font-light text-lg tracking-wider">
                Delta DOR is similar to ranging, but it also takes in a third
                signal from a naturally occurring radio source in space, such as
                a quasar, and this additional source helps scientists and
                engineers gain a more accurate location of the spacecraft.
                <br /> <br />
                Quasars are a few billion light years away and a few billion
                years in the past. Quasars are used as extremely well known
                positions in the sky to provide a calibration for the same
                measurements made within a few tens of minutes of each other on
                a spacecraft. Being able to do quasar and spacecraft ranging
                near the same time and subtracting the answers cancels a lot of
                errors that are the same in both measurements from the
                atmosphere and the equipment.
                <br /> <br />
                The "ranging" is not really ranging, but differenced ranging.
                What is measured is the difference in the distance to the source
                between two complexes on Earth (for example, Goldstone and
                Madrid or Goldstone and Canberra). From that an angle in the sky
                can be determined relative to the stations. The angle for the
                quasar is subtracted from the angle of the spacecraft, giving
                the angular separation of the quasar and the spacecraft. That
                angle is accurate to about five to ten nanoradians, which means
                when the spacecraft is near Mars, say 200 million kilometers
                away, it can determine the position of the spacecraft to within
                one kilometer (0.6 miles).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">
                Special signal tones the DSN received during entry, descent, and
                landing
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                During the entry, descent and landing phase of the Mars
                Exploration Rover mission, engineers listened anxiously for 128
                distinct tones that indicated when steps in the process were
                activated; one sound indicated the parachute deployed, while
                another signaled that the airbags had inflated. These sounds
                were a series of basic, special individual radio tones.
                <br /> <br />
                The Mars Science Laboratory spacecraft transmitted in X-band
                during its entry, descent and landing process, which was the
                expected path for confirmation of the initial events in the
                process. Due to signal strength constraints, these transmissions
                were simple tones, comparable to semaphore codes, rather than
                full telemetry. The Deep Space Network listened for these
                direct-to-Earth transmissions. However, Earth went out of view
                of the spacecraft, “setting” below the Martian horizon, partway
                through the descent, so the X-band tones were not available for
                confirming the final steps in descent and landing. By then, the
                bent-pipe relay via Odyssey had begun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-6xl text-orange-400 mt-20">
        Communication
      </h1>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">
                How the rover can communicate through Mars-orbiting spacecraft
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                Not only does the rover send messages directly to the DSN
                stations, but it is also able to uplink information to other
                spacecraft orbiting Mars, utilizing mainly the Mars
                Reconnaissance Orbiter and Mars Odyssey (if necessary)
                spacecraft as messengers that pass along news to Earth for the
                rover. The respective spacecraft mainly "talk" via their UHF
                antennas. The Mars Reconnaissance Orbiter carries an Electra UHF
                payload with the capability of helping navigate the Mars Science
                Laboratory safely toward Mars. The Ka-Band package aboard the
                Mars Reconnaissance Orbiter can serve as another possible
                pipeline to "talk" to the Mars Science Laboratory (read more
                about the Mars Reconnaissance Orbiter Engineering Instruments).
                <br /> <br />
                Because the orbiters are only between 160 and 250 miles (257 and
                400 kilometers) above the surface of Mars, the rover doesn’t
                have to "yell" as loudly (or use as much energy to send a
                message) to the orbiters as it does to the antennas on Earth.
                <br /> <br />
                The benefits of using the orbiting spacecraft are that the
                orbiters are closer to the rover than the DSN antennas on Earth
                and the orbiters have Earth in their field of view for much
                longer time periods than the rover on the ground.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-6xl text-orange-400 mt-20">
        X-band Radio Waves
      </h1>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">
                X-band radio waves used by the rover to communicate
              </h2>
              <p className="text-left font-light text-lg tracking-wider">
                The rover communicates with the orbiters and the DSN through
                radio waves. They communicate with each other through X-band,
                which are radio waves at a much higher frequency than radio
                waves used for FM stations.
                <br /> <br />
                The radio waves to and from the rover are sent through the
                orbiters using UHF antennas, which are close-range antennas that
                are like walkie-talkies compared to the long range of low-gain
                and high-gain antennas. All three orbiters active at Mars —
                NASA’s Mars Odyssey and Mars Reconnaissance Orbiter and the
                European Space Agency’s Mars Express — were at positions where
                they could receive transmissions from the Mars Science
                Laboratory spacecraft during its entry, descent and landing.
                Only Odyssey relayed the information immediately, however. The
                other two orbiters recorded Mars Science Laboratory data from
                the Mars Science Laboratory spacecraft, holding it onboard, and
                sending it to Earth hours later. Mars Reconnaisance Orbiter even
                captured images of the spacecraft on its parachute during entry,
                descent and landing.
                <br /> <br />
                The cruise stage had two antennas that were used to communicate
                with the Earth. The low-gain antenna was omni-directional and
                was used when the spacecraft was near the Earth. Because it
                radiated in all directions, the low-gain antenna did not need to
                be pointed at the Earth to enable a communications link. The
                medium-gain antenna was a directional antenna that had to be
                pointed toward the Earth for communications, but had more power
                to communicate when the spacecraft was farther away from the
                Earth. The medium-gain antenna acted like a floodlight and could
                direct the energy into a tighter beam to reach Earth. Just like
                a floodlight directs more light into a focused area than a
                normal light bulb does out of a lamp, the medium-gain antenna
                could direct the data from the spacecraft into a tighter beam
                than the low-gain antenna. <br /> <br />
                When the rover speaks directly to Earth (from the surface of
                Mars), it sends messages via its high-gain antenna (HGA). The
                high-gain antenna can send a "beam" of information in a specific
                direction and it is steerable, so the antenna can move to point
                itself directly to any antenna on Earth. The benefit of having a
                steerable antenna is that the entire rover doesn't necessarily
                have to change positions to talk to Earth. Like turning your
                neck to talk to someone beside you rather than turning your
                entire body, the rover can save energy by moving only the
                antenna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-20">
        <div className="w-1/4"></div>
        <div id="info" className="w-1/2">
          <div className="flex w-screen">
            <div className="flex-col w-1/2">
              <h2 className="text-4xl mb-5 text-left">Data Rates/Returns</h2>
              <p className="text-left font-light text-lg tracking-wider">
                The data rate direct-to-Earth varies from about 500 bits per
                second to 32,000 bits per second (roughly half as fast as a
                standard home modem). The data rate to the Mars Reconnaissance
                Orbiter is selected automatically and continuously during
                communications and can be as high as 2 million bits per second.
                The data rate to the Odyssey orbiter is a selectable 128,000 or
                256,000 bits per second (4-8 times faster than a home modem).
                <br /> <br />
                An orbiter passes over the rover and is in the vicinity of the
                sky to communicate with the rover for about eight minutes at a
                time, per sol. In that time, between 100 and 250 megabits of
                data can be transmitted to an orbiter. That same 250 megabits
                would take up to 20 hours to transmit direct to Earth! The rover
                can only transmit direct-to-Earth for a few hours a day due to
                power limitations or conflicts with other planned activities,
                even though Earth may be in view much longer.
                <br /> <br />
                Mars is rotating on its own axis so Mars often "turns its back"
                to Earth, taking the rover with it. The rover is turned out of
                the field of view of Earth and goes "dark," just like nighttime
                on Earth, when the sun goes out of the field of view of Earth at
                a certain location when the Earth turns its "back" to the sun.
                The orbiters can see Earth for about 2/3 of each orbit, or about
                16 hours a day. They can send much more data direct-to-Earth
                than the rover, not only because they can see Earth longer, but
                also because they have a lot of power and bigger antennas than
                the rover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
