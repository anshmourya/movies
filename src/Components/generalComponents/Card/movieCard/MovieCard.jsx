import Btns from "../../../Buttons/Btns";

const MovieCard = ({ onClickFunction, data }) => {
  const { title, backdrop_path: img, release_date } = data;
  return (
    <>
      <div className="relative cursor-pointer border-l-4 border-transparent hover:border-red-600 transition-all  hover:scale-110 rounded-lg aaaa m-2">
        <img
          src={`http://image.tmdb.org/t/p/w400${img}`}
          alt={title}
          className="object-cover brightness-50 rounded-lg"
        />
        <div className="absolute top-14 left-8 text-sm leading-9 text-white ">
          <div>{title}</div>
          <div>{release_date}</div>
          <Btns
            buttonTitle={"Play Now"}
            onClickFuntion={onClickFunction}
            buttonStyle={" bg-red-600 text-white p-2 text-sm rounded-md w-35"}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;

// src={`http://image.tmdb.org/t/p/original${img}
