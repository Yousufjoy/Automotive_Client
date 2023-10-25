import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const result = data.find((d) => d._id == id);
  console.log(result);

  return <div></div>;
};

export default DetailsPage;
