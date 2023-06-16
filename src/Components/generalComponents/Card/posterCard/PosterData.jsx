import { AiTwotoneStar } from "react-icons/ai";
import Btns from "../../../Buttons/Btns";

const PosterData = ({ data }) => {
  return (
    <>
      <div className="absolute top-20 left-16 md:top-40 lg:top-56 xl:top-60">
        <div className="logo hidden md:block text-red-700 font-bold">
          NETFLIX
        </div>
        <h1 className="text-lg font-bold my-2 md:text-4xl lg:text-6xl xl:my-6">
          {data.title}
        </h1>
        <div className="flex text-lg gap-2 items-center text-red-500">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <span className="text-white">{data.vote_average / 2}(imdb)</span>
        </div>
        <p className="w-1/3 text-sm hidden lg:block my-4 xl:text-lg">
          {data.overview}
        </p>
        <Btns
          buttonTitle={"Play Now"}
          buttonStyle={"bg-red-600 text-white p-2 text-lg rounded-md w-52 my-3"}
        />
      </div>
    </>
  );
};

export default PosterData;
