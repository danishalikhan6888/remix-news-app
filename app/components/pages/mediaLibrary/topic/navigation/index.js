import React from "react";
import {Link} from "remix";
function Index({ topics }) {
    return (
        <div className="w-full max-w-200px">
            <div className="text-22 leading-6 font-semibold text-brightOrnage border-b border-darkGray pb-4">All Videos</div>
            <div className="">
                {topics.map((item, i) => {
                    return (
                        <div className={`pt-4 cursor-pointer text-base leading-4 text-warmGray font-semibold hover:text-brightOrnage transition-all duration-300 ease-in-out ${i !== topics.length - 1 && "pb-4 border-b border-darkGray"}`} key={i}>
                            <Link to="javascript:void(0)">
                                <>
                                    {item.name}
                                </>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Index;
