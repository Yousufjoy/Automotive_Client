import { useLoaderData } from "react-router-dom";
import MySingleCart from "../MySingleCart/MySingleCart";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/footer/Footer";

const MyCart = () => {
  const myCartValues = useLoaderData();

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" grid grid-cols-2 max-w-7xl gap-5 mx-auto">
        {myCartValues.map((cart) => {
          return <MySingleCart key={cart._id} cart={cart}></MySingleCart>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
