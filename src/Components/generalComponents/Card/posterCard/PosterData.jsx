import { AiTwotoneStar } from "react-icons/ai";
import Btns from "../../../Buttons/Btns";

const PosterData = ({ data, postion, onClickFuntion }) => {
  return (
    <>
      <div
        className={`${
          postion ? postion : "absolute"
        } top-20 left-16 md:top-40 lg:top-56 xl:top-60`}
      >
        <div className="hidden font-bold text-red-700 logo md:block">
          NETFLIX
        </div>
        <h1 className="my-2 text-lg font-bold md:text-4xl lg:text-6xl xl:my-6">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-lg text-red-500">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <span className="text-white">{data.vote_average / 2}(imdb)</span>
        </div>
        <p className="hidden w-1/3 my-4 text-sm lg:block xl:text-lg">
          {data.overview}
        </p>
        <Btns
          buttonTitle={"Play Now"}
          buttonStyle={
            "bg-red-600 text-white p-2 text-lg rounded-md w-52 my-3 "
          }
          onClickFuntion={onClickFuntion}
        />
        {data.genres && data.genres.length > 0 && (
          <h1 className="hidden font-bold text-8xl opacity-40 xl:block">
            {data.genres[0].name}
          </h1>
        )}
      </div>
    </>
  );
};

export default PosterData;
