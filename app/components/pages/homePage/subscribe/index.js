import React from "react";

function index() {
    return (
        <div className="bg-skyblue1 border-t-4 border-sunGolden fixed bottom-0 z-30 w-full py-7">
            <div className="flex items-center justify-center mx-auto container">
                <div className="w-9/12 flex items-start justify-between">
                    <div className="w-7/12 mt-1.5">
                        <p className="text-blue1 text-2xl leading-6 f-f-cdb uppercase">Illuminate your world. Read The Sun</p>
                        <p className="text-base leading-4 mt-2 f-f-ctg2 text-blue3">Daily delivery to your inbox</p>
                    </div>
                    <div className="w-5/12">
                        <div className="flex items-start space-x-2.5 w-full">
                            <div className="w-full">
                                <input style={{ background: "#F9F9F5" }} className=" rounded focus:outline-none pl-15px  text-lg leading-18px py-15px text-coolCharcol placeholder-coolCharcol w-full" placeholder="Email address" aria-label="Email address" />
                                <p className="text-xs leading-4 mt-2 f-f-ctg2 text-blue3">By joining, you agree to our privacy policy and terms of service</p>
                            </div>
                            <button className="text-white flex-shrink-0  text-lg leading-18px bg-blue1 py-4 px-6 rounded shadow-shadowBtn2 font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
