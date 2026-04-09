import React from "react";
import bannerImage from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 backdrop-blur-md min-h-[70vh] rounded-2xl my-2  container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-10/12 justify-between">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-soft btn-primary mt-[20px]">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
