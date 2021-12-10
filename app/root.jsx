import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "remix";
import React, { useState, useEffect, useContext } from "react";
import Header from './components/commons/header/index'
import Footer from './components/commons/footer/index'
import SearchAndScroll from './components/commons/scroll/index'
import SideBar from './components/commons/sidebar/index'
import {useLocation} from 'react-router-dom'
// CONTEXT api import started 
import { Provider, Context } from "./store/store";
// redux imports ended 
import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";
import slickSlider1 from "slick-carousel/slick/slick.css";
import slickSlider2 from "slick-carousel/slick/slick-theme.css";
import fonts from "../public/assets/styles/index.css";
import styles from "./tailwind.css";
import swiper from "../node_modules/swiper/swiper-bundle.min.css";

// https://remix.run/api/app#links
export let links = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: slickSlider1 },
    { rel: "stylesheet", href: slickSlider2 },
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: swiper },
    { rel: "stylesheet", href: fonts },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" }
  ];
};


// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
export default function App() {
  return (

    <Document title="NYS" >
      <Layout   >
        <Outlet />
      </Layout>
    </Document>

  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  const router = useLocation(); 
    const getprimaryColor = (color) => { 
      document.documentElement.style.setProperty("--background-color", color);
      alert(document.documentElement.style.getPropertyValue("--background-color"))
    };
    useEffect(() => {
      if (router.pathname === "/media") {   
        getprimaryColor("black");
      } else {
        getprimaryColor("#f9f9f5");
      }
    }, [router.pathname]);
  return (
    < >
      <Provider >
        <Header />
        {children}
        <Footer />
        <SideBar />
        <SearchAndScroll />
      </Provider>
    </>
  );
}
