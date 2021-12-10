import React from "react";
import {Link }from "remix";
function index() {
    const data = [
        {
            img: "assets/images/homepage/j1.png",
            imgdesc: "(John Rashford/The Sun)",
            heading: "In a first, the Justice Department will investigate whether Alabama’s sewage crisis violates civil rights",
            description: "In a first-of-its-kind investigation, on Tuesday the U.S. Department of Justice, or DOJ, announced an environmental justice probe into wastewater management and infectious disease programs managed by the Alabama Department of Public Health",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/j2.png",
            imgdesc: "(John Rashford/The Sun)",
            heading: "When It Comes To Corporate Crime, the DOJ Means Business",
            description: "In a first-of-its-kind investigation, on Tuesday the U.S. Department of Justice, or DOJ, announced an environmental justice probe into wastewater management and infectious disease programs managed by the Alabama Department of Public Health",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    const data2 = [
        {
            heading: "Seattle’s Choice: A Police Abolitionist or a Law-and-Order Republican?",
            description: "The court, which is hearing major cases on abortion and guns, has revised its procedures to make sure that all justices are heard.            ",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            heading: "Glenn Youngkin’s Journey to the Top Tier of G.O.P. Politics",
            description: "Helped by his personal fortune, the victor in the Virginia governor’s race won over voters who were put off by Trumpism but were not, it turned out, entirely opposed to elevating another Republican.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    return (
        <div className="relative mt-4 border-b border-darkGray  pb-4">
            <Link to="javascript:void(0)">
                <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                    <p>justice</p>
                    <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                    </svg>
                </button>
            </Link>
            <div className="flex mt-4">
                <div className="w-2/3  pr-4 border-r border-lightGray">
                    {data.map((item, i) => {
                        return (
                            <div key={i} className={`${i >= 1 && "mt-4"} ${i === 0 && "border-b border-lightGray pb-4"}`}>
                                <div className="flex items-start space-x-4">
                                    <div>
                                        <p className="text-xl f-f-cd leading-6">{item.heading}</p>
                                        <p className="mt-2.5 f-f-ctg2 text-gray2 text-sm leading-18px ">{item.description}</p>
                                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                            <p>{item.name}</p>
                                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <img className="" alt={i} src={item.img} />
                                        <p className="text-xs leading-3 mt-2 text-gray3">{item.imgdesc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-1/3 ml-4">
                    {data2.map((item, i) => {
                        return (
                            <div key={i} className={`${i >= 1 && "mt-4"} ${i === 0 && "border-b border-lightGray pb-4"}`}>
                                <p className="text-xl f-f-cdb leading-6">{item.heading}</p>
                                <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-2">{item.description}</p>
                                <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                    <p>{item.name}</p>
                                    <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                    <p>{item.time}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default index;
