import banner from "../../assets/imgs/banner.jpg";

const Banner = () => {
  return (
    <div className="lg:flex my-[-150px] lg:my-[100px] lg:mx-[100px] ">
      <div>
        <h1 className="text-gray-700 dark:text-gray-100 text-5xl font-normal  mt-[200px] lg:mx-[100px] ml-[80px] text-start">
          Discover Premium Vehicles: Luxury Sophistication to Rugged
          Reliability.
        </h1>
        <div className=" mt-[40px] ml-[80px] lg:ml-[100px] bg-[#F7A034] w-[213px] h-[50px] rounded-full shadow-2xl">
          <button className=" w-[100px] text-white text-2xl font-normal pl-[65px] pt-[7px]">
            Explore
          </button>
        </div>
      </div>
      <div>
        <img
          className="my-[50px] lg:w-[1920px] lg:rounded-3xl "
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
