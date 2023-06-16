import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PosterCard from "../../Components/generalComponents/Card/posterCard/PosterCard";
import Nav from "../../Components/nav/Nav";
import { DataContext } from "../../hooks/data/DataHook";
import Loader1 from "../../Components/Loader/Loader1";
import Footer from "../../Components/generalComponents/footer/Footer";

const SingleMovie = () => {
  const { getSingleMovie } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

  return (
    <>
      <Nav />
      <div className="container m-auto">
        {loading || data.length < 0 ? (
          <>
            {console.log(data.length)}
            <Loader1 />
          </>
        ) : (
          <PosterCard
            showContent={true}
            data={data}
            imgStyling={
              "brightness-50 md:h-auto md:w-screen md:object-cover my-20 rounded-lg"
            }
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleMovie;
