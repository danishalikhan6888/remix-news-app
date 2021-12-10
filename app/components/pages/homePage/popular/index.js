import React from "react";
import {Link} from "remix";
function index() {
    const data = [
        {
            img: "assets/images/homepage/u3.png",
            imgDes: `If the Supreme Court Claims Power Over Gun Carry Laws, It Will Be Making a Grave Mistake`,
        },
        {
            heading: `How a 1950s Socialite’s LSD Habit Inspired a Play About Cary Grant`,
            description: `How’s this for an unlikely idea for a musical? Three celebrities, including Grant, experimenting with LSD. Together.`,
        },
        {
            heading: `A Cure for Gerrymandering Left U.S. Politics Ailing in New Ways`,
            description: `How’s this for an unlikely idea for a musical? Three celebrities, including Grant, experimenting with LSD. Together.`,
        },
        {
            heading: `Frida Kahlo Self-Portrait Sells for $34.9 Million`,
            description: `How’s this for an unlikely idea for a musical? Three celebrities, including Grant, experimenting with LSD. Together.`,
        },
        {
            heading: `Clarissa Eden, British Countess and Political Influencer, Dies at 101`,
            description: `How’s this for an unlikely idea for a musical? Three celebrities, including Grant, experimenting with LSD. Together.`,
        },
    ];
    return (
        <div className="relative mt-4">
            <p className="leading-4 text-blue3 f-f-i font-semibold uppercase">Popular</p>
            <div className="mt-4 w-full">
                {data.map((item, i) => {
                    return (
                        <Link key={i} to="javascript:void(0)">
                            <div className={` border-b ${i >= 1 && "mt-4"}  ${i === data.length - 1 ? "border-darkGray" : "border-lightGray"} cursor-pointer flex items-start space-x-3 pb-4`}>
                                <p className="text-gray1 text-2xl leading-6 f-f-i">{i + 1 + "."}</p>
                                {item.img && (
                                    <div className="relative w-278px overflow-hidden">
                                        <div className="absolute text-white text-xl leading-6 f-f-cdb2 z-20 mask w-full h-full flex flex-col items-center justify-end px-2 pb-2">{item.imgDes}</div>
                                        <img src={item.img} id={i} className={`z-0`} />
                                    </div>
                                )}
                                <div>
                                    <p className="text-xl leading-6 f-f-cdb2 pr-4">{item.heading}</p>
                                    <p className="mt-3 f-f-ctg2 text-sm leading-18px  text-gray2">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default index;
