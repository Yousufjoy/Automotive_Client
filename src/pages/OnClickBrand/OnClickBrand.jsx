import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import BrandCars from "../BrandCars/BrandCars";

const OnClickBrand = () => {
  const [data, setData] = useState([]);
  const [brands, setBrands] = useState([]);

  const { brandName } = useParams();

  useEffect(() => {
    fetch(
      "https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/brandName"
    )
      .then((res) => res.json())
      .then((data) => {
        const brandNameData = data.find((d) => d.brandName == brandName);
        setData(brandNameData);
      });
  }, [brandName]);

  const { advertiseImage1, advertiseImage2, advertiseImage3 } = data;

  useEffect(() => {
    fetch(
      "https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/products"
    )
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

  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-[50px]  carousel lg:w-[500px] border lg:mx-[700px] rounded-2xl ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={advertiseImage1} className="w-full opacity-75" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={advertiseImage2} className="w-full opacity-75" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={advertiseImage3} className="w-full opacity-75" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-[100px]">
        {brands.length > 0 ? (
          <div className=" grid lg:grid-cols-2 gap-4 max-w-7xl mx-auto my-7">
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
    </div>
  );
};

export default OnClickBrand;
