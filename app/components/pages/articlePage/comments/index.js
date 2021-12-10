import React from "react";
import Comment from "./comment";
import data from "./data.json";
function index() {
    return (
        <div className="mt-12 w-full " id="comments">
            <div className="flex items-center justify-between pb-4 border-b border-coolCharcol">
                <p className="f-f-cd text-3xl leading-30px ">Conversation </p>
                <p className="text-gray2 text-base leading-4">338 Comments</p>
            </div>
            <div className="mt-4 border border-gray7 rounded flex items-center">
                <input className="w-full p-4 rounded bg-transparent text-lg leading-18px placeholder-gray2 focus:outline-none" placeholder="What do you think?" />
                <button className="focus:outline-none text-lg leading-18px font-bold text-sunGolden pr-7">Send</button>
            </div>
            <div className="mt-8 flex items-center text-lg leading-18px pl-4">
                <p className="text-gray2 ">Sort By</p>
                <select className="font-semibold focus:outline-none bg-transparent">
                    <option>Best</option>
                    <option>Old</option>
                    <option>New</option>
                </select>
            </div>
            <div className="w-full mt-12">
                {data.map((item, i) => {
                    return <Comment key={i} item={item} i={i} />;
                })}
            </div>
        </div>
    );
}

export default index;
