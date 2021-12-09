import { useState } from "react";
import { useLoaderData, json, Link,Outlet } from "remix";  
import HomePage from "../components/pages/homePage/index";
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
export default function Index({title} ) { 
  const [menu, setMenu] = useState(false); 
  return (
    <div>
      {/* test{title} */}
       Article
       <Link to="/">Home</Link>
       <Outlet/>
    </div>
  );
}