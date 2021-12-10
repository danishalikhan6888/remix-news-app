





  import React, { useState, useEffect ,useContext} from "react";
  import { Link } from "remix"; 
  import { useLocation } from "react-router-dom";  
  import {Context} from "../../../store/store";
  export default function Index() {
       const router = useLocation();
       const { menu, dispatch } = useContext(Context) ; 
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
        <div className={`${router.pathname !== "/" && router.pathname !== "/media" ? "bg-white py-3 shadow-shadow3" : `${whiteHeader ? `${router.pathname === "/media" ? "bg-coolCharcol" : "bg-white"} shadow-shadow3` : router.pathname === "/media" ? "bg-coolCharcol py-3" : "bg-warmGray"} py-2`} h-14 flex flex-col items-center justify-center transition-all duration-500 ease-in-out w-full top-0 z-50 fixed`}>
            <div className="px-20  w-full mx-auto container f-f-s">
                <div className="flex items-center justify-between">
                    <div className={`${router.pathname !== "/" || whiteHeader ? "opacity-100 z-50" : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} ${router.pathname === "/media" ? "text-white" : "text-coolCharcol"} flex items-center space-x-4`}>
                        <button onClick={() => handleMenu()} className="focus:outline-none">
                            {!menu ? (
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10.9688H20.25V13.0312H3.75V10.9688Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 7.21875H20.25V9.28125H3.75V7.21875Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 14.7188H20.25V16.7812H3.75V14.7188Z" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg className={`${router.pathname === "/" && "hidden"}`} width={24} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.59094 6.99988L13.0441 2.54675C13.2554 2.33578 13.3743 2.04949 13.3745 1.75087C13.3748 1.45225 13.2564 1.16575 13.0455 0.954408C12.8345 0.743063 12.5482 0.624183 12.2496 0.623919C11.951 0.623656 11.6645 0.74203 11.4531 0.953001L7 5.40613L2.54687 0.953001C2.33553 0.741657 2.04888 0.622925 1.75 0.622925C1.45111 0.622925 1.16447 0.741657 0.953123 0.953001C0.741779 1.16435 0.623047 1.45099 0.623047 1.74988C0.623047 2.04876 0.741779 2.33541 0.953123 2.54675L5.40625 6.99988L0.953123 11.453C0.741779 11.6643 0.623047 11.951 0.623047 12.2499C0.623047 12.5488 0.741779 12.8354 0.953123 13.0468C1.16447 13.2581 1.45111 13.3768 1.75 13.3768C2.04888 13.3768 2.33553 13.2581 2.54687 13.0468L7 8.59363L11.4531 13.0468C11.6645 13.2581 11.9511 13.3768 12.25 13.3768C12.5489 13.3768 12.8355 13.2581 13.0469 13.0468C13.2582 12.8354 13.3769 12.5488 13.3769 12.2499C13.3769 11.951 13.2582 11.6643 13.0469 11.453L8.59094 6.99988Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            )}
                        </button>
                        {router.pathname !== "/store" && (
                            <button onClick={() => handleSearch()} className="focus:outline-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.125 16.7188L13.2781 11.8711C14.0592 10.7977 14.4794 9.50407 14.4781 8.17656C14.4781 4.70195 11.6512 1.875 8.17656 1.875C4.70195 1.875 1.875 4.70195 1.875 8.17656C1.875 11.6512 4.70195 14.4781 8.17656 14.4781C9.50407 14.4794 10.7977 14.0592 11.8711 13.2781L16.7188 18.125L18.125 16.7188ZM8.17656 12.4879C7.32375 12.488 6.49007 12.2351 5.78095 11.7614C5.07183 11.2877 4.51913 10.6143 4.19274 9.82638C3.86635 9.0385 3.78093 8.17152 3.94728 7.33509C4.11364 6.49866 4.5243 5.73035 5.12733 5.12733C5.73035 4.5243 6.49866 4.11364 7.33509 3.94728C8.17152 3.78093 9.0385 3.86635 9.82638 4.19274C10.6143 4.51913 11.2877 5.07183 11.7614 5.78095C12.2351 6.49007 12.488 7.32375 12.4879 8.17656C12.4865 9.31959 12.0319 10.4154 11.2236 11.2236C10.4154 12.0319 9.31959 12.4865 8.17656 12.4879Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        )}
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
                        {router.pathname === "/media" ? (
                            <Link to="/">
                                <img alt="logo" className="cursor-pointer" src="assets/images/article/logo3.png" />
                            </Link>
                        ) : router.pathname === "/store" ? (
                            <Link to="/">
                                <img alt="logo" className="cursor-pointer" src="assets/images/store/storeLogo.png" />
                            </Link>
                        ) : (
                            <Link to="/">
                                <img alt="logo" className="cursor-pointer" src="assets/images/article/logo2.png" />
                            </Link>
                        )}
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
                    {router.pathname !== "/store" && (
                        <div className={`${router.pathname !== "/" || whiteHeader ? "opacity-100 z-50" : "opacity-0 absolute z-0 cursor-default pointer-events-none top-0"} flex items-center space-x-6`}>
                            <button className={` font-semibold text-white text-sm leading-14px bg-sunGolden py-2 px-60px rounded shadow-shadowBtn hover:shadow-shadowBtn3 transition-all duration-300 ease-in-out`}>Join for $0.01/day</button>
                            <Link to="javascript:void(0)">
                                <p className={`${router.pathname === "/media" ? "text-white" : "text-coolCharcol"} cursor-pointer text-sm leading-14px font-semibold uppercase`}>Sign In</p>
                            </Link>
                        </div>
                    )}
                    {router.pathname === "/store" && (
                        <div
                        //  onClick={() => setCart(true)}
                          className="flex items-center space-x-1.5 text-gray-800 text-sm leading-14px font-semibold hover:text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.25 3.75H5.25L7.5 16.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 13.5H19.1925C19.2792 13.5001 19.3633 13.4701 19.4304 13.4151C19.4975 13.3601 19.5434 13.2836 19.5605 13.1986L20.9105 6.44859C20.9214 6.39417 20.92 6.338 20.9066 6.28414C20.8931 6.23029 20.8679 6.18009 20.8327 6.13717C20.7975 6.09426 20.7532 6.05969 20.703 6.03597C20.6528 6.01225 20.598 5.99996 20.5425 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Cart</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="w-full h-14"></div>
    </>
    );
  }
  
















