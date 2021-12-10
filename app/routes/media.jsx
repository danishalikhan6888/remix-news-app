import React from "react";
import MediaLibrary from "../components/pages/mediaLibrary/index";
import {  Outlet } from "remix";

export let links = () => {
    return [ 
      { rel: "stylesheet", href: "https://cdn.plyr.io/3.6.9/plyr.css" },  
    ];
  };
function Media () {
    return (
        <>
            <MediaLibrary/>
            <Outlet />
        </>
    );
}

export default Media;

