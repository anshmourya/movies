import { useEffect, useState, useContext, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PosterCard from "../../Components/generalComponents/Card/posterCard/PosterCard";
import Nav from "../../Components/nav/Nav";
import { DataContext } from "../../hooks/data/DataHook";
import Loader1 from "../../Components/Loader/Loader1";
import Footer from "../../Components/generalComponents/footer/Footer";
import StarringCard from "../../Components/generalComponents/Card/starring card/StarringCard";
import PosterData from "../../Components/generalComponents/Card/posterCard/PosterData";
import { getData, handleResize } from "../Home/HelperFunction";
import SliderStructure from "../../Components/generalComponents/Slider/SliderStructure";
import MovieCard from "../../Components/generalComponents/Card/movieCard/MovieCard";
const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSingleMovie, getAllMovies } = useContext(DataContext);
  const [data, setData] = useState([]); //to store the data of single movie geeting id from useparam
  const [loading, setLoading] = useState(true);
  const pageNumbers = [3, 1, 5, 9]; // Array of page numbers
  const [Movies, setMovies] = useState([]); //to store the array of the movie getting from the pagenumber
  const [slidesPerView, setSlidesPerView] = useState(3);
  //callback function to handel the window resizing
  const handleResizeCallback = useCallback(() => {
    handleResize(setSlidesPerView);
  }, []);

  const fetchCall = async (movieId) => {
    try {
      setLoading(true);
      const data = await getSingleMovie(movieId);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCall(id);
  }, [id]);
  // fetching the data based on the pagenumber Array. and also using the handleResizeCallback handel the slidesPerView of the slider
  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        pageNumbers.map((page) => getData(page, getAllMovies))
      );
      setMovies(newData);
    };

    fetchData();

    window.addEventListener("resize", handleResizeCallback);

    return () => {
      window.removeEventListener("resize", handleResizeCallback);
    };
  }, [handleResizeCallback]);
  return (
    <>
      <Nav />
      <div className="container m-auto">
        {loading || data.length < 0 ? (
          <>
            {console.log(data.production_companies)}
            <Loader1 />
          </>
        ) : (
          <>
            {/* posterCard: to display the detailed info of the movie using the movied ID from the useparam */}
            <PosterCard
              showContent={true}
              data={data}
              imgStyling={
                "brightness-50 md:h-auto md:w-screen md:object-cover my-20 rounded-lg"
              }
            />
            <div className="grid grid-cols-1 gap-y-4 place-items-center md:grid-cols-2 lg:grid-cols-3 md:place-items-start xl:grid-cols-4">
              {data.production_companies.map((item) => {
                return (
                  <StarringCard
                    key={item.id}
                    title={item.name}
                    desc={item.origin_country}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-center my-20 gap-9 ">
              <PosterCard
                showContent={false}
                img={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                imgStyling={"brightness50 max-w[572px] max-h-[856px]"}
              />
              <PosterData
                data={data}
                postion={"static"}
                onClickFuntion={() => {
                  {
                    data.homepage
                      ? window.location.replace(data.homepage)
                      : navigate("/");
                  }
                }}
              />
            </div>
            {/* rendering the movies using the pagenumber array by calling the
            getAllMovies function */}
            {Movies.map((item, index) => {
              const Title = [
                "Popular Videos",
                "Specials & Latest Videos",
                "Videos Recommended For You",
                "Upcoming Videos",
              ];
              return (
                <SliderStructure
                  key={index}
                  element={MovieCard}
                  data={item}
                  title={Title[index]}
                  showNav={true}
                  slidesPerView={slidesPerView}
                />
              );
            })}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SingleMovie;
