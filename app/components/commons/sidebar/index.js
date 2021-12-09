 
   

  import React, { useState,useContext } from "react";
  import { Link } from "remix";
  import { useLocation } from "react-router-dom";  
  import { Context } from "../../../store/store";
function index( ) {
  const router = useLocation(); 
  const { menu, dispatch } = useContext(Context); 
  const handleMenu= ()=>{
    dispatch({type:"SWITCH_MENU"})
 }
    const [value, setValue] = useState(null); 
    const sections = [
        {
            name: "National",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Foreign",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Politics",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Culture ",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Economy ",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Education ",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Justice ",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
        {
            name: "Opinion ",
            option: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
            link: "javascript:void(0)",
        },
    ];
    return (
        <>
            {menu && (
                <div
                    onClick={() => {
                        setValue(null);
                        handleMenu();
                    }}
                    style={{ background: "rgba(0, 0, 0, 0.25)", backdropFilter: " blur(6px)" }}
                    className="fixed w-full h-full z-40 inset-0"
                />
            )}
            <div className={`${menu ? "left-0" : "-left-full"} transition-all duration-500 ease-in-out fixed top-0 bottom-0 bg-white min-h-screen w-312px z-40 px-8 py-6`}>
                {router.pathname === "/" ? <div className="w-full h-12" /> : <div className="w-full h-8" />}

                {router.pathname === "/" && (
                    <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2.5 focus:outline-none text-coolCharcol text-sm leading-14px f-f-s">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10.9688H20.25V13.0312H3.75V10.9688Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 7.21875H20.25V9.28125H3.75V7.21875Z" fill="currentColor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 14.7188H20.25V16.7812H3.75V14.7188Z" fill="currentColor" />
                            </svg>
                            <p>Sections</p>
                        </button>
                        <button
                            onClick={() => {
                              handleMenu();
                                setValue(null);
                            }}
                            className="focus:outline-none"
                        >
                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.59094 6.99988L13.0441 2.54675C13.2554 2.33578 13.3743 2.04949 13.3745 1.75087C13.3748 1.45225 13.2564 1.16575 13.0455 0.954408C12.8345 0.743063 12.5482 0.624183 12.2496 0.623919C11.951 0.623656 11.6645 0.74203 11.4531 0.953001L7 5.40613L2.54687 0.953001C2.33553 0.741657 2.04888 0.622925 1.75 0.622925C1.45111 0.622925 1.16447 0.741657 0.953123 0.953001C0.741779 1.16435 0.623047 1.45099 0.623047 1.74988C0.623047 2.04876 0.741779 2.33541 0.953123 2.54675L5.40625 6.99988L0.953123 11.453C0.741779 11.6643 0.623047 11.951 0.623047 12.2499C0.623047 12.5488 0.741779 12.8354 0.953123 13.0468C1.16447 13.2581 1.45111 13.3768 1.75 13.3768C2.04888 13.3768 2.33553 13.2581 2.54687 13.0468L7 8.59363L11.4531 13.0468C11.6645 13.2581 11.9511 13.3768 12.25 13.3768C12.5489 13.3768 12.8355 13.2581 13.0469 13.0468C13.2582 12.8354 13.3769 12.5488 13.3769 12.2499C13.3769 11.951 13.2582 11.6643 13.0469 11.453L8.59094 6.99988Z"
                                    fill="#262633"
                                />
                            </svg>
                        </button>
                    </div>
                )}
                <div className="mt-6">
                    <p className="leading-4 text-base text-coolCharcol">Homepage</p>
                    <div className="">
                        {sections.map((item, i) => {
                            return (
                                <div className="flex items-center">
                                    <Link to={item.link}>
                                        <button
                                            onClick={() => {
                                                setValue(i);
                                            }}
                                            className="flex items-center justify-between leading-4 text-base text-coolCharcol mt-6 w-full relative"
                                        >
                                            <p>{item.name}</p>
                                            <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.689227 10.5001L5.18923 6.00007L0.689226 1.50007L1.74989 0.439411L7.31055 6.00007L1.74989 11.5607L0.689227 10.5001Z" fill="#78716C" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <div className={`${value === i ? "opacity-100 max-h-auto" : "opacity-0 pointer-events-none"} z-50 absolute  transition-all duration-200 ease-in-out  -right-56 mt-5`}>
                                        <div className="flex items-center">
                                            {" "}
                                            <svg className="-mr-1 " width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.8428 0.831612L14.6791 17.2853L0.511646 8.91668L14.8428 0.831612Z" fill="white" />
                                            </svg>
                                            <div className={`flex  flex-col space-y-5 w-[200px] bg-white  px-4 py-8 mt-20`}>
                                                {item.option.map((_item, j) => {
                                                    return <p className="text-coolCharcol font-bold">{_item}</p>;
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-9"></div>
            </div>
        </>
    );
}

export default index;