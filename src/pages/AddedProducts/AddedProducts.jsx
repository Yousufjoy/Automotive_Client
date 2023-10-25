import { useLoaderData } from "react-router-dom";

const AddedProducts = () => {
  const products = useLoaderData();
  return <div>{products.length}</div>;
};

export default AddedProducts;
