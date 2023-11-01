import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json()) // Return the promise result
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className=" lg:px-[100px] ">
      <h1 className=" py-[50px]  text-[#F7A034] tracking-wide lg:pl-[680px] text-5xl font-medium ">
        Our Collaboration
      </h1>
      <div className="grid lg:grid-cols-3 gap-4 ">
        {datas.map((data) => {
          return <Brand key={data.id} data={data}></Brand>;
        })}
      </div>
    </div>
  );
};

export default Brands;
