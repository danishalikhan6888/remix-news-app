 
import React, {  useContext} from "react";
import {Link} from "remix"; 
import { useLocation } from "react-router-dom";  
import { Context } from "../../../store/store";
function Index() {
    const router = useLocation();
    const {  dispatch } = useContext(Context); 
    const sections = [
        {
            name: "National",
            link: "article",
        },
        {
            name: "Foreign",
            link: "article",
        },
        {
            name: "Politics",
            link: "article",
        },
        {
            name: "Culture ",
            link: "article",
        },
        {
            name: "Economy ",
            link: "article",
        },
        {
            name: "Education ",
            link: "article",
        },
        {
            name: "Justice ",
            link: "article",
        },
        {
            name: "Opinion ",
            link: "article",
        },
    ];
    const handleMenu= ()=>{
        dispatch({type:"SWITCH_MENU"})
     }
    return (
        <div className={`flex items-center ${router.pathname === "/" ? "justify-between" : "justify-center"} py-4 border-t border-gray1 border-b`}>
            {router.pathname === "/" && (
                <button onClick={() => handleMenu()} className="flex items-center space-x-2.5 focus:outline-none text-coolCharcol text-sm leading-14px f-f-s w-1/4">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10.9688H20.25V13.0312H3.75V10.9688Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 7.21875H20.25V9.28125H3.75V7.21875Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 14.7188H20.25V16.7812H3.75V14.7188Z" fill="currentColor" />
                    </svg>
                    <p>Sections</p>
                </button>
            )}
            <ul className={`flex items-center space-x-6 text-sm leading-14px f-f-s ${router.pathname === "/" ? "w-1/2" : ""} justify-center`}>
                {sections.map((item, i) => {
                    return (
                        <Link to={item.link}>
                            <li key={i} className="text-coolCharcol cursor-pointer">
                                {item.name}
                            </li>
                        </Link>
                    );
                })}
            </ul>
            {router.pathname === "/" && <div className="w-1/4" />}
        </div>
    );
}

export default Index;
