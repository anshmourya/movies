export const getData = async (page, getMovies) => {
  try {
    const res = await getMovies(page);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const handleResize = (setSlidesPerView) => {
  const width = window.innerWidth;

  if (width < 1000) {
    setSlidesPerView(2);
  } else {
    setSlidesPerView(3);
  }
};
