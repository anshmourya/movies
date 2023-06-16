import React         from "react";
import PosterData from "./PosterData";
const PosterCard = ({ data, showContent = true, imgStyling }) => {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={
            !data?.backdrop_path
              ? "/assets/signinBg.jpg"
              : `https://image.tmdb.org/t/p/original${data.backdrop_path}`
          }
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

export default React.memo(PosterCard);
//
