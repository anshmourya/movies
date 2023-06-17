const Logo = ({ width, height, img }) => {
  return (
    <div className={`${width} ${height}`}>
      {img ? (
        <img src={img} alt="" className="object-contain rounded-full" />
      ) : (
        <div>logo</div>
      )}
    </div>
  );
};

export default Logo;
