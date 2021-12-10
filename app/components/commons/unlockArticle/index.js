import React from "react";

function Index() {
    return (
        <div className="fixed bottom-0 w-full z-50">
            <div className="flex items-center justify-center w-full">
                <div className="max-w-664px w-full">
                    <div className="relative  bg-white border-t-4 border-sunGolden h-9 w-full">
                        <img alt="curve" className="absolute -top-1 -right-0.5" src="assets/images/article/curve.png" />
                    </div>
                    <div className="flex flex-col items-center justify-center pt-9 pb-74px bg-white shadow-lg w-full">
                        <div className="max-w-358px w-full">
                            <p className="f-f-cdbb text-26  leading-26px text-coolCharcol text-center">Enter Email to Unlock Article</p>
                            <div className="px-5 mt-9">
                                <input placeholder="Email address" className="bg-headerGray focus:outline-none border-gray4 border w-full placeholder-coolCharcol text-coolCharcol text-lg leading-18px rounded py-3.5 pl-4" />
                                <button className="flex items-center justify-center mt-3 space-x-2 bg-blue1 w-full py-3.5 text-lg leading-18px  text-white rounded font-semibold">
                                    <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.9375 6.75H4.75V3.9375C4.75 3.34076 4.98705 2.76847 5.40901 2.34651C5.83097 1.92455 6.40326 1.6875 7 1.6875C7.59674 1.6875 8.16903 1.92455 8.59099 2.34651C9.01295 2.76847 9.25 3.34076 9.25 3.9375C9.25 4.08668 9.30926 4.22976 9.41475 4.33525C9.52024 4.44074 9.66332 4.5 9.8125 4.5C9.96168 4.5 10.1048 4.44074 10.2102 4.33525C10.3157 4.22976 10.375 4.08668 10.375 3.9375C10.375 3.04239 10.0194 2.18395 9.38649 1.55101C8.75355 0.918079 7.89511 0.5625 7 0.5625C6.10489 0.5625 5.24645 0.918079 4.61351 1.55101C3.98058 2.18395 3.625 3.04239 3.625 3.9375V6.75H3.0625C2.46596 6.75065 1.89404 6.98791 1.47223 7.40973C1.05041 7.83154 0.813151 8.40346 0.8125 9V15.1875C0.813151 15.784 1.05041 16.356 1.47223 16.7778C1.89404 17.1996 2.46596 17.4368 3.0625 17.4375H10.9375C11.534 17.4368 12.106 17.1996 12.5278 16.7778C12.9496 16.356 13.1868 15.784 13.1875 15.1875V9C13.1868 8.40346 12.9496 7.83154 12.5278 7.40973C12.106 6.98791 11.534 6.75065 10.9375 6.75V6.75Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <p>Unlock</p>
                                </button>
                                <p className="text-xs leading-4 text-blue4 mt-5 text-center">By registering, you agree to our privacy policy and terms of service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
