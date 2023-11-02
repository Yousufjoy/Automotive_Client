import { Link } from "react-router-dom";

const Brand = ({ data }) => {
  const { id, brandName, brandImage } = data;

  return (
    <div>
      <Link to={`/brands/${brandName}`}>
        <div className="card bg-base-100 shadow-xl dark:bg-zinc-700 ">
          <figure className="px-10 pt-10">
            <img
              src={brandImage}
              alt=""
              className="rounded-xl w-full h-[600px]"
            />
          </figure>
          <div className="card-body items-center text-center dark:text-white">
            <h2 className="card-title">{brandName}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
