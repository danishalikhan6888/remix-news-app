  import React, { useState, useEffect ,useContext} from "react";
  import { Link } from "remix"; 
  import { useLocation } from "react-router-dom";  
  import { Context } from "../../../store/store";
  export default function Index() {
       const router = useLocation();
       const { menu, dispatch } = useContext(Context); 
     const [whiteHeader, setWhiteHeader] = useState(null);   
     const handleMenu= ()=>{
        dispatch({type:"SWITCH_MENU"})
     }
     const handleSearch= ()=>{
        dispatch({type:"SWITCH_SEARCHBAR"})
    }
    useEffect(() => { 
        window.addEventListener("scroll", () => {
            setWhiteHeader(window.scrollY > 160);
        });
    }, []);   
  
    return (
      <>
           <div className={`${router.pathname !== "/" ? "bg-white py-3 shadow-shadow3" : `${whiteHeader ? "bg-white shadow-shadow3" : "bg-headerGray"} py-2`} transition-all duration-500 ease-in-out w-full top-0 z-50 fixed`}>
                <div className="px-20  w-full mx-auto container f-f-s">
                    <div className="flex items-center justify-between">
                        <div className={`${router.pathname !== "/" || whiteHeader ? "opacity-100 z-50" : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} flex items-center space-x-4`}>
                            <button onClick={() => handleMenu()} className="focus:outline-none">
                                {!menu ? (
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10.9688H20.25V13.0312H3.75V10.9688Z" fill="#262633" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 7.21875H20.25V9.28125H3.75V7.21875Z" fill="#262633" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 14.7188H20.25V16.7812H3.75V14.7188Z" fill="#262633" />
                                    </svg>
                                ) : (
                                    <svg className={`${router.pathname === "/" && "hidden"}`} width={24} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.59094 6.99988L13.0441 2.54675C13.2554 2.33578 13.3743 2.04949 13.3745 1.75087C13.3748 1.45225 13.2564 1.16575 13.0455 0.954408C12.8345 0.743063 12.5482 0.624183 12.2496 0.623919C11.951 0.623656 11.6645 0.74203 11.4531 0.953001L7 5.40613L2.54687 0.953001C2.33553 0.741657 2.04888 0.622925 1.75 0.622925C1.45111 0.622925 1.16447 0.741657 0.953123 0.953001C0.741779 1.16435 0.623047 1.45099 0.623047 1.74988C0.623047 2.04876 0.741779 2.33541 0.953123 2.54675L5.40625 6.99988L0.953123 11.453C0.741779 11.6643 0.623047 11.951 0.623047 12.2499C0.623047 12.5488 0.741779 12.8354 0.953123 13.0468C1.16447 13.2581 1.45111 13.3768 1.75 13.3768C2.04888 13.3768 2.33553 13.2581 2.54687 13.0468L7 8.59363L11.4531 13.0468C11.6645 13.2581 11.9511 13.3768 12.25 13.3768C12.5489 13.3768 12.8355 13.2581 13.0469 13.0468C13.2582 12.8354 13.3769 12.5488 13.3769 12.2499C13.3769 11.951 13.2582 11.6643 13.0469 11.453L8.59094 6.99988Z"
                                            fill="#262633"
                                        />
                                    </svg>
                                )}
                            </button>
                            <button onClick={() => handleSearch()} className="focus:outline-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.125 16.7188L13.2781 11.8711C14.0592 10.7977 14.4794 9.50407 14.4781 8.17656C14.4781 4.70195 11.6512 1.875 8.17656 1.875C4.70195 1.875 1.875 4.70195 1.875 8.17656C1.875 11.6512 4.70195 14.4781 8.17656 14.4781C9.50407 14.4794 10.7977 14.0592 11.8711 13.2781L16.7188 18.125L18.125 16.7188ZM8.17656 12.4879C7.32375 12.488 6.49007 12.2351 5.78095 11.7614C5.07183 11.2877 4.51913 10.6143 4.19274 9.82638C3.86635 9.0385 3.78093 8.17152 3.94728 7.33509C4.11364 6.49866 4.5243 5.73035 5.12733 5.12733C5.73035 4.5243 6.49866 4.11364 7.33509 3.94728C8.17152 3.78093 9.0385 3.86635 9.82638 4.19274C10.6143 4.51913 11.2877 5.07183 11.7614 5.78095C12.2351 6.49007 12.488 7.32375 12.4879 8.17656C12.4865 9.31959 12.0319 10.4154 11.2236 11.2236C10.4154 12.0319 9.31959 12.4865 8.17656 12.4879Z"
                                        fill="#262633"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className={`${router.pathname === "/" && !whiteHeader ? "opacity-100 z-50 " : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} rounded w-241px bg-white pl-2 py-2 flex items-center border border-gray4`}>
                            <svg className="flex-shrink-0" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.5 12.375L9.6225 8.49687C10.2474 7.63817 10.5835 6.60325 10.5825 5.54125C10.5825 2.76156 8.32094 0.5 5.54125 0.5C2.76156 0.5 0.5 2.76156 0.5 5.54125C0.5 8.32094 2.76156 10.5825 5.54125 10.5825C6.60325 10.5835 7.63817 10.2474 8.49687 9.6225L12.375 13.5L13.5 12.375ZM5.54125 8.99031C4.859 8.99037 4.19206 8.78812 3.62476 8.40912C3.05747 8.03012 2.6153 7.4914 2.35419 6.8611C2.09308 6.2308 2.02474 5.53722 2.15783 4.86807C2.29091 4.19893 2.61944 3.58428 3.10186 3.10186C3.58428 2.61944 4.19893 2.29091 4.86807 2.15783C5.53722 2.02474 6.2308 2.09308 6.8611 2.35419C7.4914 2.6153 8.03012 3.05747 8.40912 3.62476C8.78812 4.19206 8.99037 4.859 8.99031 5.54125C8.98924 6.45567 8.62551 7.33233 7.97892 7.97892C7.33233 8.62551 6.45567 8.98924 5.54125 8.99031V8.99031Z"
                                    fill="#262633"
                                />
                            </svg>
                            <input onClick={() => handleSearch()} className="bg-transparent focus:outline-none ml-2  text-xs leading-3 text-coolCharcol placeholder-coolCharcol w-full" placeholder="Search" aria-label="search" />
                        </div>
                        <div className={`${router.pathname !== "/" || whiteHeader ? "opacity-100 z-50 absolute m-auto left-0 right-0 w-95px h-32px" : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} `}>
                            <Link to="/">
                                <img alt="logo" className="cursor-pointer" src="assets/images/article/logo2.png" />
                            </Link>
                        </div>
                        <div className={`${router.pathname === "/" && !whiteHeader ? "opacity-100 z-50 " : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} flex items-center`}>
                            <Link to="javascript:void(0)">
                                <p className="text-coolCharcol cursor-pointer text-base leading-14px font-semibold uppercase">ABOUT THE SUN</p>
                            </Link>
                            <div className="h-5 w-px bg-gray1 mx-4" />
                            <Link to="javascript:void(0)">
                                <p className="text-coolCharcol cursor-pointer text-base leading-14px font-semibold uppercase">Sign In</p>
                            </Link>
                        </div>
                        <div className={`${router.pathname !== "/" || whiteHeader ? "opacity-100 z-50" : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} flex items-center space-x-6`}>
                            <button className={` font-semibold text-white text-sm leading-14px bg-sunGolden py-2 px-60px rounded shadow-shadowBtn hover:shadow-shadowBtn3 transition-all duration-300 ease-in-out`}>Join for $0.01/day</button>
                            <Link to="javascript:void(0)">
                                <p className="text-coolCharcol cursor-pointer text-sm leading-14px font-semibold uppercase">Sign In</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-14" />  
        </>
    );
  }
  