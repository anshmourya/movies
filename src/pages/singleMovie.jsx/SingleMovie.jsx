import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PosterCard from "../../Components/generalComponents/Card/posterCard/PosterCard";
import Nav from "../../Components/nav/Nav";
import { DataContext } from "../../hooks/data/DataHook";
import Loader1 from "../../Components/Loader/Loader1";
import Footer from "../../Components/generalComponents/footer/Footer";
import StarringCard from "../../Components/generalComponents/Card/starring card/StarringCard";
import PosterData from "../../Components/generalComponents/Card/posterCard/PosterData";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSingleMovie } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
            {console.log(data.production_companies)}
            <Loader1 />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SingleMovie;
