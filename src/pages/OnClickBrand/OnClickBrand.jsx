import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import BrandCars from "../BrandCars/BrandCars";

const OnClickBrand = () => {
  const data = useLoaderData();
  console.log(data);
  const { advertiseImage1 } = data;
  const [brands, setBrands] = useState([]);

  const { brandName } = useParams();

  const brandNameData = data.find((d) => d.brandName === brandName);
  console.log(brandNameData);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((brandData) => {
        const matchingBrandData = brandData.filter(
          (b) => b.brandName === brandName
        );
        setBrands(matchingBrandData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [brandName]);

  console.log(brands);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        {/* Advertise imagee */}
        <img src={advertiseImage1} alt="" />
      </div>

      {brands.length > 0 ? (
        <div className=" grid grid-cols-2 gap-4">
          {brands.map((brandCars) => {
            return (
              <BrandCars key={brandCars.id} brandCars={brandCars}></BrandCars>
            );
          })}
        </div>
      ) : (
        <div>
          <h2 className=" text-6xl text-center ">
            Sorry, Nothing to show from this brand!
          </h2>
        </div>
      )}
    </div>
  );
};

export default OnClickBrand;
