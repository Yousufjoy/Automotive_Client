import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const data = useLoaderData();
  const [brands, setBrands] = useState([]);

  const { brandName } = useParams();

  const brnadNameData = data.find((d) => d.brandName == brandName);
  console.log(brnadNameData);

  const matchingBrandName = brands.find((b) => (b.brandName = brandName));
  console.log("I found it!", matchingBrandName);
  console.log(brands);

  // const { brandImage } = brnadNameData;
  useEffect(() => {
    fetch("http://localhost:5000/products").then((res) =>
      res.json().then((brandData) => {
        setBrands(brandData);
      })
    );
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {/* <div>   <p>{matchingBrandName.name}</p>
        <p>{matchingBrandName.brandName}</p>
        <p>{matchingBrandName.description}</p></div> */}
    </div>
  );
};

export default DetailsPage;
