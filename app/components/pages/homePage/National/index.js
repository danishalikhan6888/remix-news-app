import React from "react";
import {Link} from "remix";
function index() {
    const data = [
        {
            img: "assets/images/homepage/n1.png",
            alt: "(John Rashford/The Sun)",
            heading: "Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry",
            description: "But a Trump lawyer has signaled an intent to appeal the ruling, which raises novel issues about an ex-president’s executive privilege powers.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/n2.png",
            alt: "(John Rashford/The Sun)",
            heading: "Moderna and U.S. at Odds Over Vaccine Patent Rights",
            description: "Moderna’s patent application names several employees as the sole inventors of a crucial component of its coronavirus vaccine, excluding three government scientists.           ",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/n3.png",
            alt: "(John Rashford/The Sun)",
            heading: "U.S. Urges Court Not to Block Vaccine Mandate on Employers",
            description: "The Biden Justice Department filed its case before an appeals court that has temporarily halted the measure.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    return (
        <>
            <div className="mt-4">
                <Link to="javascript:void(0)">
                    <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                        <p>National</p>
                        <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                        </svg>
                    </button>
                </Link>
                <div className="border-b border-darkGray  py-4 flex items-start">
                    <div className="w-1/3 pr-4">
                        <p className="text-22 f-f-cd leading-26px">Kim Kardashian speaks out in support of Travis Scott after Astroworld tragedy</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">
                            The Houston police and fire departments were deeply involved in safety measures for the music festival where a surging crowd killed eight people, playing key roles in crowd control measures, on-site security staffing and the emergency response. The police chief even says he met with the headlining performer before the show.
                            <br />
                            Now the city’s police department is leading the criminal investigation into how the deadly chaos erupted during Friday night’s performance by rapper Travis Scott.
                        </p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard and Rachel Freeman</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p className="text-red2">5 minutes ago</p>
                        </div>
                    </div>
                    <div className="ml-8 pr-4 border-r border-lightGray">
                        <img alt="" className="h-330px" src="assets/images/homepage/national1.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                    <div className="w-1/3 pl-4">
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
                </div>
            </div>
            <div className="border-b border-darkGray py-4 grid grid-cols-3 gap-8">
                {data.map((item, i) => {
                    return (
                        <div key={i}>
                            <img alt={item.alt} className="" src={item.img} />
                            <p className="text-xs leading-3 mt-2 text-gray3">{item.alt}</p>
                            <div className="mt-4">
                                <p className="text-xl f-f-cd leading-6">{item.heading} </p>
                                <p className="mt-2.5 f-f-ctg2 text-gray2 text-sm leading-18px ">{item.description}</p>
                                <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                    <p>{item.name}</p>
                                    <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                    <p>{item.time}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default index;
