import { useLoaderData, useParams } from "react-router-dom";

const UpdatePage = () => {
  const data = useLoaderData();
  console.log(data);

  const { id } = useParams();
  console.log("Param Id is", id);

  //   const { _id } = data;
  //   console.log("Matching id", _id);

  const result = data.find((d) => d._id == id);
  console.log("The result is", result);

  const { name, brandName, description, image, price, rating, type } = result;

  //   const finalResult = result.find((d1) => d1._id == id);
  //   console.log("The final result is", finalResult);
  //   const { name, brandName, description, image, price, rating, type } =
  //     finalResult;

  return (
    <div>
      <h2 className=" text-3xl ">
        <p>Name is {name}</p>
      </h2>
    </div>
  );
};

export default UpdatePage;
