import React from "react";

function index() {
    const data = [
        {
            img: "assets/images/article/m1.png",
            t1: "World Politics",
            t2: "How States Are Addressing Violence Against Indigenous Women",
        },
        {
            img: "assets/images/article/m2.png",
            t1: "World Politics",
            t2: "Republican Glenn Youngkin Wins Virginia Governor’s Race",
        },
        {
            img: "assets/images/article/m3.png",
            t1: "World Politics",
            t2: "Takeaways From Tuesday's Elections: Bad Omens for Democrats",
        },
        {
            img: "assets/images/article/m4.png",
            t1: "World Politics",
            t2: "UK being ‘constructive’ in Brexit fishing row talks, says France",
        },
        {
            img: "assets/images/article/m5.png",
            t1: "World Politics",
            t2: "Northern Ireland leaders being shut out of Brexit talks, says Labour",
        },
        {
            img: "assets/images/article/m6.png",
            t1: "World Politics",
            t2: "Israeli spyware company NSO Group placed on US blacklist",
        },
        {
            img: "assets/images/article/m7.png",
            t1: "World Politics",
            t2: "UK rejects French claim of steps towards agreement over fishing rights row",
        },
        {
            img: "assets/images/article/m8.png",
            t1: "World Politics",
            t2: "Johnson tells Von der Leyen French threats are ‘completely unjustified’",
        },
    ];
    return (
        <div className="mx-auto container px-20 mt-24">
            <div className="flex items-center justify-center w-full">
                <div className="w-10/12">
                    <p className="text-2xl leading-6 uppercase text-blue4 f-f-cdb2">more from the new york sun</p>
                    <div className="grid grid-cols-4 gap-9 mt-8">
                        {data.map((item, i) => {
                            return (
                                <div key={i} className="">
                                    <img alt={i} src={item.img} />
                                    <p className="mt-4 text-sm leading-14px f-f-ctg2 text-gray-700 ">{item.t1}</p>
                                    <p className="mt-3  leading-6 f-f-cdbb text-xl  ">{item.t2}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
