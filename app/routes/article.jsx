import { useState } from "react";
import { useLoaderData, json, Link,Outlet } from "remix";  
import { useNavigate } from "react-router-dom";
import Article from "../components/pages/articlePage/index";
// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
 

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index(  ) { 
const navigate = useNavigate(); 
  const handleSubmit = () => { 
    navigate("/", { replace: true })
 }  
  return (
    <div>  
       <Link to="/">Home</Link>
       <br></br>
       <Link to="/article">articlee</Link>
       <br></br> 
       <div className="danish" onClick={handleSubmit}>home progrmatically</div>  
       <Article/>
       <Outlet/>
    </div>
  );
}