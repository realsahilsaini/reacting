import React, { useEffect, useState } from "react";
import axios from "../utils/AxiosUtil";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { get, set } from "react-hook-form";

function APIPractice() {
  // const [products, setProducts] = useState([])

  // const getproducts = async () => {
  //   const api = "https://fakestoreapi.com/products";

  //   const response = await axios.get(api);
  //   const JsonResponse = await response.data;
  //   console.log(JsonResponse);
  //   setProducts(JsonResponse)
  // };

  // console.log('products', products);

  // const addProducts = async () => {
  //   const api = "https://fakestoreapi.com/products";

  //   const response = await axios.post(api, {
  //     title: "test product",
  //     price: 13.5,
  //     description: "lorem ipsum set",
  //     image: "https://i.pravatar.cc",
  //     category: "electronic",
  //   });

  //   console.log('response', response.data);

  // };

  return (
    <div className="">

      <nav className="flex p-4 gap-4 justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>

      <hr />

      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  );
}

// function Layout(){
//   return(
//     <div>
//       <Outlet />
//     </div>
//   )
// }


function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Show() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    // We already have the baseURL in AxiosUtil.js file so we don't need to write the full URL here.
    const api = "/products";
    const response = await axios.get(api);
    const JsonResponse = await response.data;
    console.log(JsonResponse);
    setProducts(JsonResponse);
  };

  useEffect(()=>{
    getProducts();


    return ()=>{
      console.log('Show component unmounted');
    }
  }, []);

  return (
    <div>

      {/* <button onClick={getProducts}>Call API</button> */}

      <h1 className="mb-10">Below Data is coming from because of useEffect</h1>

      <hr />
      
      <ul className="flex flex-wrap gap-4">
        {products.length > 0 ? products.map((product) => {
          return (
            <li className="w-40 border-2 p-2" key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <img className="w-32" src={product.image} alt={product.title} />
            </li>
          );  
        }
      ) : <p className="text-2xl font-bold">Loading...</p>}
      </ul>

    </div>
  );
}

function Services() {

  const [first, setFirst] =  useState('Normal Data');
  const [second, setSecond] =  useState("Important Data");
  

  useEffect(()=>{
    console.log('Services component mounted');

    return ()=>{
      console.log('Services component unmounted');
    }
  }, [second]); 
  // Empty array means it will only run once when component is mounted and will not run when component is unmounted or updated. 

  return (
    <div>
      <h1 className="mb-8">Services</h1>


      <p>{first}</p>
      <button
      onClick={()=>{
        setFirst('Changed Normal Data');        
      }}
      className="bg-red-200 p-2">Change Normal Data</button>

      <p>{second}</p>
      <button
      onClick={()=>{
        setSecond('Changed Important Data');
      }}
      className="bg-blue-200 p-2">Change Important Data</button>
    </div>
  );
}

export default APIPractice;
