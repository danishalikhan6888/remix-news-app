import React from "react";

function index() {
    const data = [
        {
            heading: "Tens of thousands die each year in the U.S., and no one claims their bodies",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            heading: "Michelle Wu Is Neither White Nor Male. She Was Elected Mayor of Boston.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    const columnist = [
        {
            heading: "Tens of thousands die each year in the U.S., with no claims",
            name: "Cole Richard",
            img: "assets/images/homepage/c1.png",
        },
        {
            heading: "The Fight Over Tenure Is Not Really About Tenure",
            name: "Jonathan Riley",
            img: "assets/images/homepage/c2.png",
        },
        {
            heading: "Covid hospital bills arrive as insurers restore co-pays",
            name: "Rachel Ferguson",
            img: "assets/images/homepage/c3.png",
        },
    ];
    return (
        <>
            <div className="flex items-start space-x-8 justify-between  pb-4">
                <div className="w-1/3 pr-6">
                    <p className="text-sm leading-14px text-red2 f-f-ctg2">BREAKING</p>
                    <p className="text-28 f-f-cd leading-30px mt-3">Cities have stopped being the engines of growth and opportunity they once were</p>
                    <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential. Though beset by racism and other injustices, cities not only provided shared, robust public infrastructure like schools, libraries and transit systems, they stirred together vast numbers of people from different cultures and classes.</p>
                    <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                        <p>By Cole Richard</p>
                        <div className="h-2.5 w-px bg-lightGray mx-2 " />
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className="w-2/3">
                    <img alt="breaking news" className="" src="assets/images/homepage/header1.png" />
                    <p className="text-xs leading-3 mt-2 text-gray3">Factory production disruption and bottlenecks in shipping are leaving nonprofit groups short of goods for vulnerable</p>
                </div>
            </div>
            <div className="border-b border-lightGray border-t py-4 flex items-start">
                <div className="w-1/3 pr-4">
                    <p className="text-22 f-f-cd leading-6">In Overwhelmed Del Rio, Texas, Migrants Cross the Border Freely</p>
                    <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places. Though beset by racism and other injustices, cities not only provided share</p>
                    <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                        <p>By Cole Richard and Rachel Freeman</p>   
                        <div className="h-2.5 w-px bg-lightGray mx-2 " />
                        <p>2 hours ago</p>
                    </div>   
                </div> 
                <div className="ml-8 pr-4 border-r border-lightGray">
                    <img alt="" className="" src="assets/images/homepage/header2.png" />
                    <p className="text-xs leading-3 mt-2 text-gray3">(John Rashford/The Sun)</p>
                </div>
                <div className="w-1/3 pl-4">
                    <p className="text-lg f-f-cd leading-6">After 16 years, German leader Angela Merkel is stepping down. </p>
                    <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px ">The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places. Though beset by racism and other injustices, cities not only provided share</p>
                    <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                        <p>By Cole Richard</p>
                        <div className="h-2.5 w-px bg-lightGray mx-2 " />
                        <p>2 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center  border-b border-lightGray py-4 ">
                {data.map((item, i) => {
                    return (
                        <div key={i} className={`${i >= 1 && "ml-74px pl-74px border-l border-lightGray"}`}>
                            <p className="text-xl leading-6 f-f-cds font-semibold">{item.heading}</p>
                            <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                <p>{item.name}</p>
                                <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                <p>{item.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-b border-darkGray py-4">
                <p className=" leading-4 text-blue1 f-f-i font-semibold uppercase">Columnists</p>
                <div className="flex items-center space-x-8 mt-4">
                    {columnist.map((item, i) => {
                        return (
                            <div id={i} className="flex items-center space-x-2.5 w-1/3">
                                <img src={item.img} className="rounded-full" alt="Columnist" />
                                <div>
                                    <p className="text-lg leading-6 f-f-cds">{item.heading}</p>
                                    <p className="text-xs leading-3 f-f-s text-coolCharcol mt-2">{item.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div style={{ background: "#E4E4E4", height: "168px", color: "#6B7280" }} className="w-full flex flex-col items-center justify-center text-lg mt-4">
                Ad Space
            </div>
        </>
    );
}

export default index;
