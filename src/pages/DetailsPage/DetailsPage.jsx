import { useLoaderData, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../shared/Navbar/Navbar";

const DetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const result = data.find((d) => d._id == id);
  console.log("This is result ", result);

  // const finalResult = result.find((d1) => d1._id == id);
  // console.log("This is final result", finalResult);
  const { name, brandName, description, image, price, rating, type } = result;
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-64 w-full object-cover" src={image} alt="Car" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{brandName}</h2>
            <p className="text-gray-600 font-semibold text-sm mb-4">{name}</p>
            <p className="text-gray-600 text-sm mb-4">{type}</p>
            <p className="text-gray-800 text-base mb-4">{description}</p>
            <p className="text-gray-800 text-lg font-semibold mb-4">{price}</p>
            <div className="flex items-center mb-4">
              <span className="text-black flex  text-2xl gap-2">
                <AiFillStar className="  mt-[5px] text-2xl"></AiFillStar>
                {rating}
              </span>
            </div>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
