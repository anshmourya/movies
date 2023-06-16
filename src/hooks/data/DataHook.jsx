import { createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //universal fetch call function

  const fetchCall = async (url) => {
    try {
      const responses = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      // console.log(responses.data);
      return responses.data;
    } catch (error) {
      console.error(error);
    }
  };

  //get all the GENRES

  const getGenres = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    return fetchCall(url);
  };

  //getting all the movies data
  const getAllMovies = async (pageNo) => {
    try {
      let page = pageNo || 1;
      const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}`;
      const result = await fetchCall(url);
      return result.results;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider value={{ getGenres, getAllMovies }}>
      {children}
    </DataContext.Provider>
  );
};
