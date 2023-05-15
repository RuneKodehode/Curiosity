import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ReactComponent as BurgerMenu } from "../svg/borgir.svg";

export const Header = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [sol, setSol] = useState("");
  const [expandedImage, setExpandedImage] = useState(null);

  const handleChange = async (event) => {
    const date = event.target.value;
    const apiEndpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=nbOcqt4gNqe7vaqXhEVlZ2Xu4rHfu2IK68Xdvgov`;
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    const urls = data.photos.map((photo) => photo.img_src);

    setImageUrls(urls);
    setSol(`Martian Sol: ${data.photos[0].sol}`);
  };

  const handleExpandImage = (index) => {
    setExpandedImage(index === expandedImage ? null : index);
  };

  const handleClearImages = () => {
    setImageUrls([]);
    setSol("");
  };

  return (
    <div>
      <div className="flex flex-row justify-between text-xl text-white bg-opacity-80 bg-black fixed w-full z-50 md:h-20 h-32">
        <div className="flex flex-row">
          <div className="menu flex" tab-index="0">
            <Link
              to="/"
              onClick={handleClearImages}
              className="py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400"
            >
              <BurgerMenu className="h-full my-auto mx-auto" />{" "}
              {/* Adjust the size and spacing as needed */}
            </Link>

            <ul className="sub-menu ease-in-out delay-1000 duration-700">
              <div className="flex">
                <Link
                  to="/Equipment"
                  onClick={handleClearImages}
                  className="bg-black bg-opacity-80 py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400 text-center"
                >
                  Equipment
                </Link>
                <Link
                  to="/Weather"
                  onClick={handleClearImages}
                  className="bg-black bg-opacity-80 py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400 text-center"
                >
                  Weather
                </Link>
              </div>
              <div className="div2 flex">
                <Link
                  to="/GPS"
                  onClick={handleClearImages}
                  className="bg-black bg-opacity-80 py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400 text-center"
                >
                  GPS
                </Link>
                <button className="bg-black bg-opacity-80 py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400 text-center">
                  Sites
                </button>
              </div>
              <div className="div3 flex">
                <button
                  id="discoveries"
                  className="bg-black bg-opacity-80 py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400 text-center"
                >
                  Discoveries
                </button>
                <button className="bg-black bg-opacity-80 py-3 w-24 focus:invert border border-black border-opacity-0 hover:border hover:border-orange-400 text-center">
                  Surprise
                </button>
              </div>
            </ul>
          </div>
          <div className="sm:flex sm:flex-row sm:gap-2 pl-4">
            <h1 className="text-center my-auto text-4xl">Mars</h1>
            <h3 className="text-center my-auto text-orange-400 text-4xl">
              Curiosity
            </h3>
            <h3 className="text-center my-auto text-4xl">Rover</h3>
          </div>
        </div>

        <div className="flex sm:gap-4 pr-10">
          <input
            type="date"
            to="/"
            onChange={handleChange}
            className="invert bg-white bg-opacity-0 text-black rounded-md"
          />

          <div id="sol" className="hidden sm:block my-auto">
            {sol}
          </div>
          <a href="https://mars.nasa.gov/msl/home/" className="my-auto">
            <img
              src="/NASA_logo.svg.png"
              id="myimage"
              alt="NASA logo"
              className="sm:h-[80px]"
            />
          </a>
        </div>
      </div>
      <div className="sm:pt-20 pt-32">
        <div id="image-container" className="w-screen h-auto flex flex-wrap">
          {imageUrls.map((url, index) => (
            <img
              key={url}
              src={url}
              alt="Mars Rover Image"
              onClick={() => handleExpandImage(index)}
              className={expandedImage === index ? "expanded" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
