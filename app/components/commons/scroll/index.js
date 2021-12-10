


import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import { Context } from "../../../store/store";
import SearchBar from "../searchbar/index";
function index() {
  const { search } = useContext(Context);
  //useEffect(() => {
  //   if (search) {
  //     document.body.style.overflow = "hidden";
  //   } else if (performance.getEntriesByType("navigation")[0].type === "reload") {
  //     document.body.style.overflow = "auto";
  //     window.scroll(0, 0);
  //   } else {
  //     document.body.style.overflow = "auto";
  //     window.scroll(0, 0);
  //   }
  // }, [search]);

  

  useEffect(() => {
    if (search) {
      document.body.style.overflow = "hidden";
    } else if (performance.getEntriesByType("navigation")[0].type === "reload") {
      document.body.style.overflow = "auto";
      window.scroll(0, 0);
    } else {
      document.body.style.overflow = "auto";
      window.scroll(0, 0);
    }
  }, [search]);

  return (
    <>
      {search && <SearchBar />}
    </>
  );
}

export default index;