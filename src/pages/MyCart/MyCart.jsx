import { useLoaderData } from "react-router-dom";
import MySingleCart from "../MySingleCart/MySingleCart";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyCart = () => {
  const myCartValues = useLoaderData();

  const userData = useContext(AuthContext);

  const { user } = userData;

  const result = myCartValues.filter((d) => d.email == user.email);

  console.log(result);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" grid lg:grid-cols-2 max-w-7xl gap-5 mx-auto">
        {result.map((cart) => {
          return <MySingleCart key={cart._id} cart={cart}></MySingleCart>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
