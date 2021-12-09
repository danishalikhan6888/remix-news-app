import React from "react";
import {Link} from "remix";
function index() {
    
    return (
        <div className="mt-4">
            <Link to="javascript:void(0)">
                <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                    <p>Foreign</p>
                    <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                    </svg>
                </button>
            </Link>
            <div className="flex items-center space-x-4 mt-4">
                <div className="w-1/3">
                    <div>
                        <img alt="(John Rashford/The Sun)" src="assets/images/homePage/f1.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-22 f-f-cdb leading-26px">Afghan Pilots Who Escaped Taliban Are Flown Out of Tajikistan</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-2">More than 140 Afghan Air Force pilots and crew members were evacuated to the United Arab Emirates three months after flying into Tajikistan to escape the Taliban.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 px-4 border-l border-r border-lightGray">
                    <div className="border-b border-lightGray pb-4">
                        <p className="text-lg f-f-cd leading-6">A Black Man Killed by a White Mob in 1898 Finally Receives a Funeral</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Now the city’s police department is leading the criminal investigation into how the deadly chaos erupted during Friday night’s performance by rapper Travis Scott.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg f-f-cd leading-6">After 16 years, German leader Angela Merkel is stepping down. </p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Economists expect the Labor Department to report that the consumer-price index rose 5.9% last month amid pandemic-related supply shortages and continued strength in consumer demand</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div>
                        <p className="text-22 f-f-cdb leading-26px">Afghan Pilots Who Escaped Taliban Are Flown Out of Tajikistan</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-2">More than 140 Afghan Air Force pilots and crew members were evacuated to the United Arab Emirates three months after flying into Tajikistan to escape the Taliban.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <img alt="(John Rashford/The Sun)" src="assets/images/homePage/f2.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                </div>
            </div>
            <div className="border-b  border-darkGray border-t mt-4 py-4">
                <div className="flex items-start">
                    <div className="w-7/12 ">
                        <div>
                            <img alt="(John Rashford/The Sun)" src="assets/images/homePage/f3.png" />
                            <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-22 f-f-cdb leading-26px">Afghan Pilots Who Escaped Taliban Are Flown Out of Tajikistan</p>
                            <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-12">Economists expect the Labor Department to report that the consumer-price index rose 5.9% last month amid pandemic-related supply shortages and continued strength in consumer demand</p>
                            <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                <p>By Cole Richard</p>
                                <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                <p>2 hours ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12 pl-4 ml-4 border-l border-lightGray">
                        <div>
                            <img alt="(John Rashford/The Sun)" className="w-full" src="assets/images/homePage/f4.png" />
                            <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-22 f-f-cdb leading-26px">Afghan Pilots Who Escaped Taliban Are Flown Out of Tajikistan</p>
                            <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">Polish authorities warned that the border crisis could stretch on for months, even as Belarusian forces moved migrants to a warehouse, offering desperate families their first humanitarian aid in weeks.</p>
                            <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                <p>By Cole Richard</p>
                                <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                <p>2 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default index;
