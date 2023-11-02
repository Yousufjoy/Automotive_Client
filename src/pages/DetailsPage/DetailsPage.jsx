import { useLoaderData, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import Footer from "../../shared/footer/Footer";

const DetailsPage = () => {
  const authInfo = useContext(AuthContext);
  const { user } = authInfo;

  const { id } = useParams();
  const data = useLoaderData();

  const result = data.find((d) => d._id == id);

  const { name, brandName, description, image, price, rating, type } = result;

  const fullInfo = {
    name: name,
    brandName: brandName,
    description: description,
    image: image,
    price: price,
    rating: rating,
    type: type,
    email: user.email,
  };

  const handleAddToCart = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to the cart!",
      showConfirmButton: false,
      timer: 1500,
    });
    fetch("https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  // const handleAddToCart = () => {
  //   const userEmail = "user@example.com"; // Replace with the actual user's email
  //   Swal.fire({
  //     position: "center",
  //     icon: "success",
  //     title: "Added to the cart!",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  //   fetch(`https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/cart?email=${userEmail}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(fullInfo),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //     });
  // };

  return (
    <div>
      <Navbar></Navbar>
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
            <button onClick={handleAddToCart} className="btn">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailsPage;
