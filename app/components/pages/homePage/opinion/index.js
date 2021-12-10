import React from "react";
import {Link} from "remix";
function index() {
    const data = [
        {
            text: "Roe Is as Good as Gone. It’s Time for a New Strategy.            ",
            name: "Jane Cooper",
        },
        {
            text: "If the Supreme Court Claims Power Over Gun Carry Laws, It Will Be Making a Grave Mistake            ",
            name: "Wade Warren",
        },
        {
            text: "What We’re Watching on Election Day and Movie Night",
            name: "Esther Howard",
        },
        {
            text: "On Elon Musk and the Dangerous Power of Insecure Billionaires",
            name: "Leslie Alexander",
        },
        {
            text: "On Elon Musk and the Dangerous Power of Insecure Billionaires",
            name: "Guy Hawkins",
        },
    ];
    return (
        <div className="relative mt-4">
            <p className="leading-4 text-red2 f-f-i font-semibold uppercase">OPINION</p>
            <div className="mt-4 w-full">
                {data.map((item, i) => {
                    return (
                        <Link key={i} to="javascript:void(0)">
                            <div className={`${i >= 1 && "mt-4"} f-f-cds2 text-xl leading-6 pb-4 border-b  ${i === data.length - 1 ? "border-darkGray" : "border-lightGray"}`}>
                                {item.text}
                                <p className="text-sm leading-14px text-coolCharcol mt-3 f-f-s">{item.name}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default index;
