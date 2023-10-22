const Brand = ({ data }) => {
  const { id, brandName, brandImage } = data;

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className=" w-full h-[650px]" src={brandImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center  px-[50px]">{brandName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Brand;
