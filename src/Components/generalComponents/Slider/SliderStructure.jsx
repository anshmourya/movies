import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import Btns from "../../Buttons/Btns";
const SliderStructure = ({
  element: Element,
  slidesPerView,
  speed,
  data,
  title,
  autoplay,
  showNav,
}) => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
      {showNav && (
        <div className="flex justify-between items-center ">
          <h1 className="mt-4 mb-1 text-2xl text-white relative ">{title}</h1>
          <Btns
            buttonTitle={"View All"}
            buttonStyle={"mt-4 mb-1 text-red-600 font-bold"}
            onClickFuntion={() => navigate("/movies")}
          />
        </div>
      )}
      <Swiper
        slidesPerView={slidesPerView || 3}
        speed={speed}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        navigation={true}
        autoplay={autoplay || false}
        modules={[Autoplay, Navigation]}
      >
        {data.map((item) => (
          <>
            <SwiperSlide key={item.id}>
              <Element data={item} />
            </SwiperSlide>
          </>
        ))}
        <Btns
          buttonTitle={<BsChevronLeft />}
          buttonStyle={"absolute z-10 top-[50%] left-0 text-lg"}
          onClickFuntion={() => swiperRef.current.slidePrev()}
        />
        <Btns
          buttonTitle={<BsChevronRight />}
          buttonStyle={"absolute z-10 top-[50%] right-14 text-lg"}
          onClickFuntion={() => swiperRef.current.slideNext()}
        />
      </Swiper>
    </>
  );
};

export default SliderStructure;
