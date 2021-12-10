import React from "react";

function index() {
    return (
        <div className="fixed bottom-0 w-full z-20">
            <div className="bg-red2 px-3 py-2 text-sm leading-14px text-white f-f-cg2 table rounded-t ml-14 cursor-default">3 articles left</div>
            <div className="bg-white border-t-4 border-sunGolden  z-30 w-full py-7">
                <div className="flex items-center justify-center mx-auto container">
                    <div className="w-7/12 flex items-start justify-between">
                        <div className="w-7/12 mt-1.5">
                            <p className="text-2xl leading-6 f-f-cdb uppercase">Subscribe for $0.75/week</p>
                            <p className="text-base leading-4 mt-2 f-f-ctg2 text-gray2 italic">If you see it in The Sun, it's so!</p>
                        </div>
                        <div className="w-2/5">
                            <button className="text-left f-f-s text-white text-base leading-4 bg-sunGolden py-4 pl-4 rounded shadow-shadowBtn w-full">Join for $0.01/day</button>
                            <p className="text-xs leading-4 mt-2 f-f-ctg2 text-blue3">Get 1 month free on the annual plan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
