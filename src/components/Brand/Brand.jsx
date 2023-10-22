const Brand = ({ data }) => {
  const { id, brandName, brandImage } = data;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={brandImage}
            alt="Shoes"
            className="rounded-xl w-full h-[600px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brandName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Brand;
