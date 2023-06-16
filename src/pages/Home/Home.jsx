import { useContext, useEffect, useState } from "react";
import Data from "../../Poster.json";
import Nav from "../../Components/nav/Nav";
import { DataContext } from "../../hooks/data/DataHook";
import SliderStructure from "../../Components/generalComponents/Slider/SliderStructure";
import MovieCard from "../../Components/generalComponents/Card/movieCard/MovieCard";
import PosterCard from "../../Components/generalComponents/Card/posterCard/PosterCard";

const Home = () => {
  const { getAllMovies } = useContext(DataContext);
  const pageNumbers = [1, 2, 3]; // Array of page numbers
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const getData = async (page) => {
    try {
      const res = await getAllMovies(page);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        pageNumbers.map((page) => getData(page))
      );
      setData(newData);
    };

    fetchData();

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 1000) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav />

      <SliderStructure
        element={PosterCard}
        data={Data}
        slidesPerView={1}
        autoplay={true}
        showNav={false}
      />
      <div className="container m-auto">
        {data.map((result, index) => {
          const Title = [
            "Latest Movies",
            "Upcoming Movies",
            "Suggested For You",
          ];
          return (
            <SliderStructure
              key={index}
              data={result}
              element={MovieCard}
              title={Title[index]}
              slidesPerView={slidesPerView}
              showNav={true}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
