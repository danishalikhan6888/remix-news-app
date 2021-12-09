import React from "react";
import {Link} from "remix";
function index() {
    const data = [
        {
            img: "assets/images/homepage/e2.png",
            heading: "Fed Says U.S. Public Health Among Biggest Near-Term Risks to Financial System",
            description: "The potential for U.S. public health to worsen as the Covid-19 pandemic continues is one of the greatest near-term risks to the financial system, the Federal Reserve said, while noting that asset prices are susceptible to large declines should investor sentiment shift",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/e3.png",
            heading: "China Factory Inflation Grows at Record Pace on High Energy Prices",
            description: "More than 140 Afghan Air Force pilots and crew members were evacuated to the United Arab Emirates three months after flying into Tajikistan to escape the Taliban.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    return (
        <>
            <div className="relative mt-4 border-b border-darkGray  py-4">
                <Link to="javascript:void(0)">
                    <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                        <p>eCONOMY</p>
                        <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                        </svg>
                    </button>
                </Link>
                <div className="flex items-start mt-4">
                    <div className="w-1/3 pr-4">
                        <p className="text-xl f-f-cd leading-6">Inflation Pickup Makes Fed More Likely to Raise Rates Next Year To Stablize Economy</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Interestingly, healthy ageing does not necessarily mean being completely disease-free. Certain health conditions can be controlled in many older adults, which then hardly affects their overall well-being, says the health body. With a significant rise projected in the coming 30-40 years.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard and Rachel Freeman</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="ml-8 pr-4 border-r border-lightGray">
                        <img alt="" className="" src="assets/images/homepage/e1.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                    <div className="w-1/4 pl-4">
                        <p className="text-xl f-f-cd leading-6">Jobless Claims Fall to Pandemic Low, Continuing Downward Trend</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Interestingly, healthy ageing does not necessarily mean being completely disease-free. Certain health conditions can be controlled in many older adults, which then hardly affects their overall well-being, says the health body. With a significant rise.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 border-b border-darkGray  py-4">
                <div className="flex items-start">
                    {data.map((item, i) => {
                        return (
                            <div className="w-1/2">
                                <div className={`flex items-start space-x-8 ${i === data.length-1 && "ml-4 border-l pl-4 border-lightGray"}`}>
                                    <img src={item.img} alt={i} />
                                    <div>
                                        <p className="text-xl f-f-cd leading-6">{item.heading}</p>
                                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">{item.description}</p>
                                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                            <p>{item.name}</p>
                                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default index;
