import React  from "react";
import { useLoaderData, json, Link, Outlet } from "remix";
import { useNavigate } from "react-router-dom";
import HomePage from "../components/pages/homePage/index"; 
export let loader = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      },
      {
        to: "demos/danishtest",
        name: "Danish test"
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let navigate = useNavigate();  
  const handleSubmit = () => { 
     navigate("article", { replace: true })
  }  
  
  return (
    <div> 
      <div className="danish" onClick={handleSubmit}>switch</div>  
        <Link to="/">home</Link>
      <Outlet />
      <HomePage />
    </div>
  );
}

 