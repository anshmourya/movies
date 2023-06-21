import { useContext, useEffect, useState, useCallback } from "react";
import Data from "../../Poster.json";
import Nav from "../../Components/nav/Nav";
import { DataContext } from "../../hooks/data/DataHook";
import SliderStructure from "../../Components/generalComponents/Slider/SliderStructure";
import MovieCard from "../../Components/generalComponents/Card/movieCard/MovieCard";
import PosterCard from "../../Components/generalComponents/Card/posterCard/PosterCard";
import Footer from "../../Components/generalComponents/footer/Footer";
import { handleResize, getData } from "./HelperFunction";

const Home = () => {
  const { getAllMovies } = useContext(DataContext);
  const pageNumbers = [1, 2, 3];
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Callback function to handle resize events
  const handleResizeCallback = useCallback(() => {
    handleResize(setSlidesPerView);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data for each page number asynchronously
      const newData = await Promise.all(
        pageNumbers.map((page) => getData(page, getAllMovies))
      );
      setData(newData); // Update data state with fetched data
    };

    fetchData(); // Call the fetchData function

    // Add event listener for resize events and invoke handleResizeCallback
    window.addEventListener("resize", handleResizeCallback);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResizeCallback);
    };
  }, [handleResizeCallback]); // Run effect only when handleResizeCallback changes

  return (
    <>
      <Nav /> {/* Render navigation component */}
      {/* rendering the poster getting the map from hardcode data */}
      <SliderStructure
        element={PosterCard}
        data={Data}
        slidesPerView={1}
        autoplay={true}
        showNav={false}
      />{" "}
      {/* rendering the slider based on the page no array. and title is passing by hardcode. using promise all to call the getAllmovies in parell. */}
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
            /> // Render slider for each data result with movie cards
          );
        })}
      </div>
      <Footer /> {/* Render footer component */}
    </>
  );
};

export default Home;
