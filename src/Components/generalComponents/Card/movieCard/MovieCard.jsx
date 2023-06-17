import { useNavigate } from "react-router-dom";
import Btns from "../../../Buttons/Btns";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  const { title, backdrop_path: img, release_date, id } = data;
  return (
    <>
      <div className="relative m-2 transition-all border-l-4 border-transparent rounded-lg cursor-pointer hover:border-red-600 hover:scale-110 aaaa">
        <img
          src={`http://image.tmdb.org/t/p/w400${img}`}
          alt={title}
          className="object-cover rounded-lg brightness-50"
        />
        <div className="absolute text-sm leading-9 text-white top-14 left-8 ">
          <div>{title}</div>
          <div>{release_date}</div>
          <Btns
            buttonTitle={"Play Now"}
            onClickFuntion={() => navigate(`/showdetail/${id}`)}
            buttonStyle={" bg-red-600 text-white p-2 text-sm rounded-md w-35"}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;

// src={`http://image.tmdb.org/t/p/original${img}
