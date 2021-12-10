import React from "react";
import Video from "./listing";
function Index({ topic, data }) {
    return (
        <div className="w-full">
            <p className="f-f-cdb text-white text-22 leading-6">{topic}</p>
            <div className="mt-4 pt-4 border-t border-darkGray w-full  grid grid-cols-3 gap-x-8 gap-y-6">
                {data.map((item, i) => {
                    return <Video  key={i} data={data} item={item} i={i} />;
                })}
            </div>
            <div style={{ height: "240px", color: "#6B7280" }} className="w-full flex flex-col items-center justify-center text-lg mt-4 border border-darkGray bg-transparent">
                Ad Space
            </div>
        </div>
    );
}

export default Index;
