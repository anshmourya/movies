import { useEffect, useState, useContext } from "react";
import MovieCard from "../../Components/generalComponents/Card/movieCard/MovieCard";
import PosterCard from "../../Components/generalComponents/Card/posterCard/PosterCard";
import Nav from "../../Components/nav/Nav";
import { DataContext } from "../../hooks/data/DataHook";
import Btns from "../../Components/Buttons/Btns";
import { Loader } from "../../Components/Loader/Loader";
import Footer from "../../Components/generalComponents/footer/Footer";

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [pageNo, setpageNo] = useState(0);
  const [MovieData, setMovieData] = useState([]);
  const { getAllMovies } = useContext(DataContext);
  const loadMore = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const nextPageNo = pageNo + 1;
        setpageNo(nextPageNo);
        const result = await getAllMovies(nextPageNo);
        setMovieData([...MovieData, ...result]);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    loadMore();
  }, []);
  return (
    <>
      <Nav />
      <PosterCard
        showContent={false}
        imgStyling={
          "w-screen h-96 object-cover brightness-50 hover:scale-125 aaaa cursor-pointer"
        }
        img={"/assets/signinBg.jpg"}
      />
      <h1 className="container m-auto my-4 text-3xl">Movie Genere</h1>
      <div className="container grid grid-cols-1 m-auto my-10 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
        {MovieData.map((items) => (
          <MovieCard key={items.id} data={items} />
        ))}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <Btns
          onClickFuntion={loadMore}
          buttonStyle={
            "bg-red-600 text-white p-2 text-lg  w-52 my-3  m-auto block"
          }
          buttonTitle={"Load More"}
        />
      )}
      <Footer />
    </>
  );
};

export default Browse;
