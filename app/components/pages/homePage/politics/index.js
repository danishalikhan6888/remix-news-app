import React from "react";
import {Link} from "remix";
function index() {
    const data = [
        {
            heading: "Senators Block Most Biden Ambassador Nominations, While Foreign Crises Mount",
            description:"Economists expect the Labor Department to report that the consumer-price index rose 5.9% last month amid pandemic-related supply shortages and continued strength in consumer demand",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            heading: "Senate Set to Cut Provisions in House Democrats’ $2 Trillion Plan",
            description:"Polish authorities warned that the border crisis could stretch on for months, even as Belarusian forces moved migrants to a warehouse, offering desperate families their first humanitarian aid in weeks.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    return (
        <div className="mt-4">
            <Link to="javascript:void(0)">
                <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                    <p>Politics</p>
                    <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                    </svg>
                </button>
            </Link>
            <div className="flex items-start mt-4">
                <div className="w-1/3">
                    <div>
                        <p className="text-22 f-f-cdb leading-26px">Rising Oil Prices Put Biden in a Bind Over Climate Pledges</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-1">More than 140 Afghan Air Force pilots and crew members were evacuated to the United Arab Emirates three months after flying into Tajikistan to escape the Taliban.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <img alt="(John Rashford/The Sun)" src="assets/images/homePage/p1.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                </div>
                <div className="w-2/3 ml-4 pl-4 border-l border-lightGray">
                    <div className="border-b border-lightGray pb-4">
                        <div className="flex items-center space-x-4">
                            <div>
                                <p className="text-lg f-f-cd leading-6">A Black Man Killed by a White Mob in 1898 Finally Receives a Funeral</p>
                                <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Now the city’s police department is leading the criminal investigation into how the deadly chaos erupted during Friday night’s performance by rapper Travis Scott.</p>
                                <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                    <p>By Cole Richard</p>
                                    <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                    <p>2 hours ago</p>
                                </div>
                            </div>
                            <img className="" alt="(John Rashford/The Sun)" src="assets/images/homePage/p2.png" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center space-x-4">
                            <div>
                                <p className="text-lg f-f-cd leading-6">After 16 years, German leader Angela Merkel is stepping down. </p>
                                <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Economists expect the Labor Department to report that the consumer-price index rose 5.9% last month amid pandemic-related supply shortages and continued strength in consumer demand</p>
                                <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                    <p>By Cole Richard</p>
                                    <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                    <p>2 hours ago</p>
                                </div>
                            </div>
                            <img className="" alt="(John Rashford/The Sun)" src="assets/images/homePage/p3.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center border-t mt-4 border-b border-darkGray py-4 ">
                {data.map((item, i) => {
                    return (
                        <div className={`${i >= 1 && "ml-74px pl-74px border-l border-lightGray"}`}>
                            <p className="text-xl leading-6 f-f-cdb font-semibold">{item.heading}</p>
                            <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">
                                {item.description}
                            </p>
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
    );
}

export default index;
