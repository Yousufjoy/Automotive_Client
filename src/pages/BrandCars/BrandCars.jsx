import { Link } from "react-router-dom";

const BrandCars = ({ brandCars }) => {
  //   console.log(brandCars);
  const { _id, brandName, description, image, name, price, rating, type } =
    brandCars;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {brandName}
            <div className="badge badge-secondary">{name}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{type}</div>
            <div className="badge badge-outline">{`*${rating}`}</div>
          </div>
          <div>
            <Link to={`/brands/details/:${_id}`}>
              <button className="btn">Details</button>
            </Link>
          </div>
          <div>
            <button className="btn">Update!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCars;
