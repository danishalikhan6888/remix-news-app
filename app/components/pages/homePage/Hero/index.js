import React, { useState, useEffect } from "react";

function Index() {
    const [btc, setBtc] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setBtc((btc) => !btc);
        }, 4000);
    }, []);
    return (
        <div className="flex items-center justify-between my-6">
            <div className="flex flex-col items-center">
                <div className="flex items-center space-x-3 ">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 15.4287L8 0.571568" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.4996 15C10.4996 15 12.5716 12.643 12.5716 8.00014C12.5716 3.35728 10.4996 1 10.4996 1" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.50037 1C5.50037 1 3.42837 3.357 3.42837 7.99986C3.42837 12.6427 5.50037 15 5.50037 15" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.4283 8L0.499573 8" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11" stroke="#B5903E" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="f-f-ctg2 leading-4 text-sm text-coolCharcol">Thursday, February 25, 2021</p>
                </div>
                <div className="mt-2 w-198px p-2.5 h-34px flex flex-col  justify-center rounded border border-gray4 relative">
                    <div className={` ${btc ? "invisible opacity-0" : "opacity-100"} transition-all relative duration-500 ease-in-out flex items-center  justify-between`}>
                        <p className="text-coolCharcol text-sm leading-14px f-f-ctg2 w-9 absolute left-0">Gold:</p>
                        <p className="text-gray2 text-sm leading-14px f-f-ctg2 w-20 absolute left-16">$1,790.50</p>
                        <p className="text-xs leading-3 text-green-500 w-7 absolute right-0">+1.40</p>
                    </div>

                    <div className={`${!btc ? "invisible opacity-0" : "opacity-100"} transition-all relative duration-500 ease-in-out flex items-center justify-between space-x-7`}>
                        <p className="text-coolCharcol text-sm leading-14px f-f-ctg2 w-9 absolute left-0">Btc:</p>
                        <p className="text-gray2 text-sm leading-14px f-f-ctg2 w-20 absolute left-8">$58,409.70</p>
                        <p className="text-xs leading-3 text-red-500 w-7 absolute right-0">+1.40</p>
                    </div>
                </div>
            </div>
            <img src="assets/images/homepage/logo.png" />
            <button className="f-f-s text-white text-base leading-4 bg-sunGolden py-4 px-52px rounded shadow-shadowBtn hover:shadow-shadowBtn3 transition-all duration-300 ease-in-out">Join for $0.01/day</button>
        </div>
    );
}

export default Index;
