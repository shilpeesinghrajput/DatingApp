
import coupleImage from "../../assets/coupleimage.jpeg"

const Banner = () => {
  return (
    <div className="mt-4">
      <div className=" bg-cover h-[600px] text-white sm:py-24 sm:px-10 object-fill flex justify-center" style={{ backgroundImage: `url(${coupleImage})` }}>
    <div className="text-white font-mono font-extrabold text-[60px] absolute left-3 top-[410px]">
        DATING APP
    </div>
      </div>
    </div>
  );
};

export default Banner;
