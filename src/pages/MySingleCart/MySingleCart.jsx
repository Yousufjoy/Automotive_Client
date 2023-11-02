import { AiFillStar } from "react-icons/ai";
import Swal from "sweetalert2";
import Footer from "../../shared/footer/Footer";

const MySingleCart = ({ cart }) => {
  const { _id, image, name, brandName, type, price, description, rating } =
    cart;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto p-4 my-[100px]">
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
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySingleCart;
