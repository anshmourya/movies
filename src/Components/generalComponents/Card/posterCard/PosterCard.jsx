import React from "react";
import PosterData from "./PosterData";

const PosterCard = ({ data, showContent = true, imgStyling, img }) => {
  const image = data?.backdrop_path || img;
  console.log(data);
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={img ? img : `https://image.tmdb.org/t/p/original${image}`}
          alt=""
          className={
            !imgStyling
              ? "brightness-50 md:h-screen md:w-screen md:object-cover"
              : imgStyling
          }
        />
        {showContent && <PosterData data={data} />}
      </div>
    </>
  );
};

export default PosterCard;
//brightness-50 md:h-screen md:w-screen md:object-cover
