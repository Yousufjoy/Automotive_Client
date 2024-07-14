// import { useLoaderData, useParams } from "react-router-dom";
// import Navbar from "../../shared/Navbar/Navbar";

// const UpdatePage = () => {
//   const data = useLoaderData();
//   console.log(data);

//   const { id } = useParams();
//   console.log("Param Id is", id);

//   //   const { _id } = data;
//   //   console.log("Matching id", _id);

//   const result = data.find((d) => d._id == id);
//   console.log("The result is", result);

//   const { _id, name, brandName, description, image, price, rating, type } =
//     result;

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const image = form.image.value;
//     const name = form.name.value;
//     const brandName = form.brandName.value;
//     const type = form.type.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     const rating = form.rating.value;
//     console.log("button submitted");
//     const updatedCar = {
//       name,
//       image,
//       brandName,
//       type,
//       price,
//       description,
//       rating,
//     };
//     console.log(updatedCar);

//     //   fetch(
//     //     `https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/products/${_id}`,
//     //     {
//     //       method: "PUT",
//     //       headers: {
//     //         "content-type": "application/json",
//     //       },
//     //       body: JSON.stringify(updatedCar),
//     //     }
//     //       .then((res) => res.json())
//     //       .then((data) => {
//     //         console.log(data);
//     //       })
//     //   );
//     // };

//     fetch(
//       `https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/products/${_id}`,
//       {
//         // eta korar jonno just google e Uploading JSON data likhe search dile pawa jabe doc
//         method: "PUT",
//         headers: {
//           "content-type": "application/json", // Ki dhoroner data pathabo jehetu json type
//         },
//         body: JSON.stringify(updatedCar),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   //   fetch(`https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/products/${_id}`, {
//   //     method: "PUT",
//   //     headers: {
//   //       "content-type": "application/json",
//   //     },
//   //     body: JSON.stringify(updatedCar), // Assuming updatedCar is the object you want to send
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error:", error);
//   //     });
//   // };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className=" text-3xl py-9 font-semibold text-orange-300">
//           Update Product
//         </h1>
//         <form onSubmit={handleUpdate} className="w-full max-w-lg">
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="image"
//               >
//                 Image URL
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="image"
//                 type="text"
//                 name="image"
//                 defaultValue={image}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className=" appearance-none block w-full bg-gray-200 text-gray-400  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="name"
//                 type="text"
//                 name="name"
//                 defaultValue={name}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="brandName"
//               >
//                 Brand Name
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="brandName"
//                 type="text"
//                 name="brandName"
//                 defaultValue={brandName}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="type"
//               >
//                 Type
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="type"
//                 type="text"
//                 name="type"
//                 defaultValue={type}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="price"
//               >
//                 Price
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="price"
//                 type="text"
//                 name="price"
//                 defaultValue={price}
//               />
//             </div>
//             <div className="w-full px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="description"
//               >
//                 Short description
//               </label>
//               <textarea
//                 className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="description"
//                 name="description"
//                 defaultValue={description}
//               ></textarea>
//             </div>
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="rating"
//               >
//                 Rating
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="rating"
//                 type="text"
//                 name="rating"
//                 defaultValue={rating}
//               />
//             </div>
//           </div>
//           <button
//             className="bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdatePage;
