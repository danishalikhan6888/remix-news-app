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
    const data2 = [
        {
            img: "assets/images/articleDetail/3.png",
            alt: "(John Rashford/The Sun)",
            heading: "Despite vaccines, the U.S. has lost more lives to Covid this year than last.",
            description: "The higher death toll is attributed to lower-than-needed vaccination rates and the relaxation of everyday precautions amid a rise of the highly contagious Delta variant.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/4.png",
            alt: "(John Rashford/The Sun)",
            heading: "With cases surging, officials in the Buffalo area are the first in New York to bring back a mask mandate.",
            description: "Cases have doubled in Erie County over four weeks, prompting the return of a mask requirement for stores, restaurants, bars, salons, and other public indoor spaces.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/5.png",
            alt: "(John Rashford/The Sun)",
            heading: "Bus Crash in Bulgaria Leaves at Least 45 People Dead",
            description: "Fifty-two people, including 12 children, were on board when a bus caught fire and crashed on a western Bulgarian highway.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/6.png",
            alt: "(John Rashford/The Sun)",
            heading: "Europe’s death toll from Covid will exceed 2 million by spring, the W.H.O. says.",
            description: "Covid is now the leading cause of death in Europe, the W.H.O. said in a statement, with almost 4,200 new deaths a day, double the number at the end of September.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/7.png",
            alt: "(John Rashford/The Sun)",
            heading: "The U.S. asks an appeals court to unblock Biden’s vaccine mandate for large companies.",
            description: "The ruling being appealed was issued by a three-judge panel on the Court of Appeals for the Fifth Circuit, in New Orleans.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/8.png",
            alt: "(John Rashford/The Sun)",
            heading: "At least 210 coronavirus cases are linked to a South Korean religious settlement.",
            description: "Nearly half of the residents at the facility in the city of Cheonan tested positive for Covid, an outbreak that comes as South Korea’s case levels surge.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/9.png",
            alt: "(John Rashford/The Sun)",
            heading: "The United States and other world powers will tap oil reserves.",
            description: "In an attempt to reduce energy prices, the U.S. will release 50 million barrels of crude. Five other nations also will dip into stockpiles.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
        {
            img: "assets/images/articleDetail/10.png",
            alt: "(John Rashford/The Sun)",
            heading: "Bus Crash in Bulgaria Leaves at Least 45 People Dead",
            description: "Fifty-two people, including 12 children, were on board when a bus caught fire and crashed on a western Bulgarian highway.",
            name: "By Cole Richard",
            date: "Nov. 24, 2021",
        },
    ];
    return (
        <>
            <div className="flex items-start">
                <div className="w-2/3 ">
                    <div>
                        <img alt="(John Rashford/The Sun)" src="assets/images/articleDetail/1.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-28 f-f-cdbb leading-30px">Kim Kardashian speaks out in support of Travis Scott after Astroworld tragedy</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-12">The Houston police and fire departments were deeply involved in safety measures for the music festival where a surging crowd killed eight people, playing key roles in crowd control measures, on-site security staffing and the emergency response. The police chief even says he met with the headlining performer before the show.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 pl-4 ml-4 border-l border-lightGray">
                    <div>
                        <img alt="(John Rashford/The Sun)" className="w-full" src="assets/images/articleDetail/2.png" />
                        <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg f-f-cdb leading-6">Pakistan Reaches Cease-Fire With Resurgent Taliban Militants</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">More than 140 Afghan Air Force pilots and crew members were evacuated to the United Arab Emirates three months after flying into Tajikistan to escape the Taliban.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className="mt-4 border-t pt-4 border-lightGray">
                        <p className="text-lg f-f-cdb leading-6">Afghan Pilots Who Escaped Taliban Are Flown Out of Tajikistan</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">More than 140 Afghan Air Force pilots and crew members were evacuated to the United Arab Emirates three months after flying into Tajikistan to escape the Taliban.</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-t mt-4 border-darkGray py-4 grid grid-cols-3 gap-8">
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
            <div className="w-full">
                <div className="w-full mt-4 border-b border-darkGray pb-4">
                    <p className="f-f-cdb">More in National</p>
                </div>
                <div className="w-full">
                    {data2.map((item, i) => {
                        return (
                            <Link key={i} to="javascript:void(0)">
                                <div className={`cursor-pointer flex items-start space-x-8 w-full mt-4 ${i === data2.length - 1 ? "" : "pb-4 border-lightGray border-b"}`}>
                                    <p className="text-gray2 text-sm leading-14px flex-shrink-0">{item.date}</p>
                                    <div className="-mt-1">
                                        <p className="text-2xl f-f-cdb leading-28px">{item.heading}</p>
                                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">{item.description}</p>
                                        <p className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">{item.name}</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <img alt="(John Rashford/The Sun)" className="w-full" src={item.img} />
                                        <p className="text-xs leading-3 mt-2 text-gray3">{item.alt}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default index;
