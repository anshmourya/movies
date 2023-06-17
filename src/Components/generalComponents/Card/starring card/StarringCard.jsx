const StarringCard = ({ title, img, desc }) => {
  return (
    <>
      <div className="flex items-center justify-between h-32 gap-3 bg-gray-900 rounded-lg w-72 ">
        <img
          src="https://templates.iqonic.design/streamit/frontend/html/images/genre/43.jpg"
          alt=""
          className="object-cover w-32"
        />
        <div className="flex-1">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default StarringCard;
