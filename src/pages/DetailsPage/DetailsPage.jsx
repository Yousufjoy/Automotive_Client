import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { _id } = data;

  console.log(data);
  console.log(`This is matching ${data[0]._id}`);
  console.log(`this is param ${id}`);

  //   const result = data.find((d) => d._id == id);
  //   console.log(result);

  return <div></div>;
};

export default DetailsPage;
