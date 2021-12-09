import React from "react";
import {Link} from "remix";
function index() {
    const data = [
        {
            heading: "National",
            sub1: "As Thanksgiving Approaches, U.S. Virus Cases Tick Upward Once More",
            sub2: "Five Dead After Driver Plows S.U.V. Into Holiday Parade in Wisconsin",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so1.png",
        },
        {
            heading: "Foreign",
            sub1: "How the U.S. Lost Ground to China in the Contest for Clean Energy",
            sub2: "Angry and Divided, Austrians Argue Over a Lockdown and Vaccine Mandates",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so2.png",
        },
        {
            heading: "Politics",
            sub1: "As Hopes for Nuclear Deal Fade, Iran Rebuilds and Risks Grow",
            sub2: "With Back Channels to Manchin and Sinema, Pelosi Found a Path to a Deal",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so3.png",
        },
        {
            heading: "culture",
            sub1: "How Former Prisoners View the Parole System in the West",
            sub2: "Nick Kroll and Jason Mantzoukas Have All Kinds of Chemistry",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so4.png",
        },
        {
            heading: "economy",
            sub1: "Inflation in Britain climbs to a 10-year high with a 4.2 Percent Price Increase",
            sub2: "Angry and Divided, Austrians Argue Over a Lockdown and Vaccine Mandates",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so5.png",
        },
        {
            heading: "education",
            sub1: "How a School District Got Caught in Virginia’s Political Maelstrom",
            sub2: "Substitute Teachers Never Got Much Respect, but Now They Are in Demand",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so6.png",
        },
        {
            heading: "justice",
            sub1: "Justice Department asks Supreme Court to temporarily block Texas law that bans abortions",
            sub2: "Five Dead After Driver Plows S.U.V. Into Holiday Parade in Wisconsin",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so7.png",
        },
        {
            heading: "opinion",
            sub1: "What We Give Thanks for and What We Say No Thanks To",
            sub2: "Remote Work Can Be a Very Bad Way to Start a Career",
            date1: "November 1, 2021",
            date2: "November 1, 2021",
            img: "assets/images/homepage/so8.png",
        },
    ];
    return (
        <div className="relative mt-4">
            <Link to="javascript:void(0)">
                <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                    <p>Spotlight</p>
                    <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                    </svg>
                </button>
            </Link>
            <div className="mt-4 grid xl:grid-cols-3 gap-4">
                {data.map((item, i) => {
                    return (
                        <div id={i} className={`  ${i === data.length - 1 ? "pr-4" : (i + 1) % 3 === 0 ? "" : "pr-4 border-r border-lightGray"} `}>
                            <p className="uppercase text-coolCharcol text-lg leading-18px f-f-ctg2">{item.heading}</p>
                            <Link to="javascript:void(0)">
                                <div className="cursor-pointer">
                                    <img className="mt-4 h-248px w-full" alt={i} src={item.img} />
                                    <div className="mt-3 pb-4 border-b border-lightGray">
                                        <p className="text-xl leading-6 f-f-cd ">{item.sub1}</p>
                                        <p className="text-xs leading-3 text-coolCharcol mt-3">{item.date1}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="javascript:void(0)">
                                <div className="mt-3  cursor-pointer">
                                    <p className="text-xl leading-6 f-f-cd ">{item.sub2}</p>
                                    <p className="text-xs leading-3 text-coolCharcol mt-3">{item.date2}</p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default index;
