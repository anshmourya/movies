//using get data to call the getAllMovies function for different pages.

export const getData = async (page, getMovies) => {
  try {
    const res = await getMovies(page);
    return res;
  } catch (error) {
    console.error(error);
  }
};
//handeling the resezing of the window . using useffect and event listeners to do this...
export const handleResize = (setSlidesPerView) => {
  const width = window.innerWidth;

  if (width < 1000) {
    setSlidesPerView(2);
  } else {
    setSlidesPerView(3);
  }
};
