import React from "react";
import {Link} from "remix";
import Comments from "../comments";
function index() {
    const data = [
        {
            icon: "assets/images/article/s1.svg",
        },
        {
            icon: "assets/images/article/s2.svg",
        },
        {
            icon: "assets/images/article/s3.svg",
        },
        {
            icon: "assets/images/article/s4.svg",
        },
        {
            icon: "assets/images/article/s5.svg",
        },
    ];
    const data2 = [
        {
            icon: "assets/images/article/s7.svg",
        },
        {
            icon: "assets/images/article/s8.svg",
        },
        {
            icon: "assets/images/article/s9.svg",
        },
        {
            icon: "assets/images/article/s10.svg",
        },
        {
            icon: "assets/images/article/s11.svg",
        },
    ];
    const list = [
        {
            li: "What you have in China is more and more implementation but the headline targets are not up to the ambition that we need. What you have in the U.S. is completely the opposite,” Li said.",
        },
        {
            li: "What you have in China is more and more implementation but the headline targets are not up to the ambition that we need. What you have in the U.S. is completely the opposite,” Li said.",
        },
        {
            li: "What you have in China is more and more implementation but the headline targets are not up to the ambition that we need. What you have in the U.S. is completely the opposite,” Li said.",
        },
    ];
    const wildHero = false;

    return (
        <>
            {wildHero && (
                <div className="relative w-full flex flex-col items-center justify-end  h-462px">
                    <img className="absolute object-cover  w-full h-462px z-0" src="assets/images/article/wild.png" />
                    <div style={{ background: "linear-gradient(185.18deg, rgba(0, 0, 0, 0) 4.05%, rgba(0, 0, 0, 0.75) 95.74%)" }} className="absolute object-cover object-center w-full h-462px z-10" />
                    <div className="mx-auto container relative z-20 flex items-center justify-center pb-12">
                        <div className="w-11/12  flex items-center justify-center">
                            <div className="w-1/2 pl-16">
                                <button className="flex items-center space-x-2 focus:outline-none uppercase text-white f-f-s leading-14px text-sm font-semibold">
                                    <p>National</p>
                                    <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.267408 8.37516L3.64241 5.00016L0.267408 1.62516L1.0629 0.829665L5.2334 5.00016L1.0629 9.17065L0.267408 8.37516Z" fill="white" />
                                    </svg>
                                </button>
                                <h1 className="mt-3 text-4xl leading-10 font-bold text-white f-f-cdb">Biden Administration Moves to Limit Methane, a Potent Greenhouse Gas</h1>
                                <p className="text-xl leading-26px text-headerGray mt-3 f-f-ctg2">The world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={`mx-auto container flex items-center justify-center ${wildHero ? "mt-6" : "mt-9"}`}>
                <div className="w-10/12 flex items-center justify-center relative">
                    <div className="w-1/2 px-10">
                        {wildHero && <p className="text-sm leading-4 text-gray1">Factory production disruption and bottlenecks in shipping are leaving nonprofit groups short of goods for vulnerable</p>}{" "}
                        {!wildHero && (
                            <>
                                <button className="flex items-center space-x-1 focus:outline-none uppercase text-sunRed f-f-s leading-14px text-sm font-semibold">
                                    <p>National</p>
                                    <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.267408 8.37516L3.64241 5.00016L0.267408 1.62516L1.0629 0.829665L5.2334 5.00016L1.0629 9.17065L0.267408 8.37516Z" fill="#DB5640" />
                                    </svg>
                                </button>
                                <h1 className="mt-2.5 text-4xl leading-10 font-bold text-black1 f-f-cdb">Biden Administration Moves to Limit Methane, a Potent Greenhouse Gas</h1>
                                <p className="text-xl leading-26px text-coolCharcol mt-3 f-f-ctg2">The world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential</p>
                                <div className="w-full mt-4">
                                    <img src="assets/images/article/a1.png" />
                                    <p className="mt-1.5 text-sm leading-4 text-gray1">Factory production disruption and bottlenecks in shipping </p>
                                </div>
                            </>
                        )}
                        <div className="my-25px  border-t border-b border-darkGray py-4">
                            <div className="flex items-center justify-between w-full px-2">
                                <div className="flex items-center space-x-1">
                                    <img src="assets/images/article/a2.png" />
                                    <div className="">
                                        <p className="text-base leading-4 font-semibold text-coolCharcol">Cole Richard</p>
                                        <p className="text-xs leading-3 italic text-coolCharcol mt-1">November 3, 2021</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    {data.map((item, i) => {
                                        return (
                                            <Link key={i} to="javascript:void(0)">
                                                <img className="cursor-pointer" key={i} src={item.icon} alt={i} />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="mt-25px text-coolCharcol f-f-ctg2 ">
                            <p className="text-xl leading-30px ">
                                Had Virginia’s been the only major election held last night, that might have been the story: a turn in the Republican Party, back toward its traditional self. But a second gubernatorial contest, in New Jersey, followed a similar pattern, suggesting deeper problems for the Democrats. The incumbent Democrat, Phil Murphy, won the 2017 election by fourteen percentage points—slightly less than the margin by which Biden defeated Trump in New Jersey in 2020. Murphy was expected to handily defeat his opponent, a former legislator from Raritan named Jack Ciattarelli, who
                                campaigned largely by challenging Murphy’s response to the pandemic, but on Wednesday morning the race remained too close to call. This had nothing to do with Youngkin, and little to do with the culture-war issues that had surfaced in the Virginia race.
                            </p>
                            <ul className="text-xl leading-30px list-disc mt-7 space-y-6">
                                {list.map((item, i) => {
                                    return (
                                        <li key={i} className="">
                                            {item.li}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <a href="#comments">
                            <div className="w-full py-px border-t border-b border-gray1 my-6">
                                <div className="w-full py-2.5 border-t border-b border-gray1 flex items-center justify-between px-4">
                                    <div className="flex items-center space-x-2.5 text-coolCharcol text-lg leading-18px">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.2027 15.0281C19.1559 14.8594 19.259 14.625 19.3574 14.4562C19.3875 14.406 19.4204 14.3575 19.4559 14.3109C20.2979 13.0598 20.7483 11.5862 20.7496 10.0781C20.7637 5.75625 17.1168 2.25 12.6074 2.25C8.67461 2.25 5.39336 4.92656 4.62461 8.47969C4.5096 9.00632 4.45146 9.54377 4.45117 10.0828C4.45117 14.4094 7.95742 18.0094 12.4668 18.0094C13.184 18.0094 14.1496 17.7937 14.6793 17.6484C15.209 17.5031 15.734 17.3109 15.8699 17.2594C16.0093 17.2068 16.157 17.1798 16.3059 17.1797C16.4684 17.1791 16.6293 17.2109 16.7793 17.2734L19.4371 18.2156C19.4954 18.2403 19.557 18.2561 19.6199 18.2625C19.7194 18.2625 19.8148 18.223 19.8851 18.1527C19.9554 18.0823 19.9949 17.987 19.9949 17.8875C19.9917 17.8446 19.9838 17.8022 19.9715 17.7609L19.2027 15.0281Z"
                                                stroke="currentColor"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M2.11534 10.875C1.50054 11.9795 1.20314 13.2325 1.256 14.4954C1.30886 15.7584 1.70993 16.9821 2.41487 18.0314C2.52315 18.195 2.58409 18.3216 2.56534 18.4064C2.54659 18.4912 2.00612 21.3065 2.00612 21.3065C1.99312 21.3724 1.99805 21.4406 2.0204 21.5039C2.04274 21.5673 2.08169 21.6234 2.13315 21.6665C2.20183 21.7213 2.28722 21.7507 2.37503 21.75C2.42195 21.7501 2.46839 21.7405 2.51143 21.7219L5.14628 20.6906C5.32762 20.6191 5.52992 20.6225 5.70878 20.7C6.59659 21.0459 7.57815 21.2625 8.56018 21.2625C9.87797 21.2639 11.1726 20.9163 12.3125 20.2551"
                                                stroke="currentColor"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <p>Join the conversation</p>
                                    </div>
                                    <p className="text-lg text-coolCharcol leading-18px">1,293 comments</p>
                                </div>
                            </div>
                        </a>
                        <div className="w-full ">
                            <img src="assets/images/article/a3.png" />
                            <p className="mt-2 text-sm leading-18px text-gray1">President Biden at the opening session of the COP26 summit on Monday. Mr. Biden said that 70 countries had joined a coalition to cut methane levels 30 percent by 2030. </p>
                        </div>
                        <div className="text-coolCharcol text-xl mt-6 leading-30px">
                            <p>
                                The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential. Though beset by <span className="underline">racism and other injustices</span>, cities not only provided shared, robust public infrastructure like schools, libraries and transit systems, they stirred together vast numbers of people from different cultures and classes. Cryptocurrency hopes are based on a misunderstanding of how money is created
                                can’t hope to thrive again if its cities don’t start to build <span className="underline">when Angela leaves the highest seat in Germany</span> to a successor that may not be ready
                            </p>
                            <p className="mt-6">Mark Brownstein, a senior vice president at the Environmental Defense Fund, said the technology to reduce methane emissions exists. Operators can install vapor recovery systems in storage tanks, make sure pressure relief valves don’t get stuck open and replace leaking pipes.</p>
                        </div>
                        <div className="flex items-center mt-60px text-coolCharcol text-xl  leading-30px pb-12">
                            <div className="flex-shrink-0">
                                <img src="assets/images/article/a4.png" />
                                <p className="mt-1.5 text-sm leading-4 text-gray1">President Biden addressing the media </p>
                            </div>
                            <p className="ml-34px">Mark Brownstein, a senior vice president at the Environmental Defense Fund, said the technology to reduce methane emissions exists. Operators can install vapor recovery systems in storage tanks, make sure pressure relief valves don’t get stuck open and replace leaking pipes.</p>
                        </div>
                        <div className="flex items-center flex-col justify-center  py-12 text-center border-b border-darkGray border-t">
                            <p className="f-f-ctg2 italic text-28  leading-10">Climate Change is a reality and we as a planet need to take constructive measures to preserve the resources we have left</p>
                            <p className=" mt-6 f-f-cd text-coolCharcol text-xl  leading-5">President Biden</p>
                        </div>
                        <div className="text-coolCharcol text-xl mt-12 leading-30px">
                            <p>
                                The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential. Though beset by <span className="underline">racism and other injustices</span>, cities not only provided shared, robust public infrastructure like schools, libraries and transit systems, they stirred together vast numbers of people from different cultures and classes. Cryptocurrency hopes are based on a misunderstanding of how money is created
                                can’t hope to thrive again if its cities don’t start to build <span className="underline">when Angela leaves the highest seat in Germany</span> to a successor that may not be ready
                            </p>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl leading-5 text-black f-f-cds2 font-semibold">Correction: Nov. 2, 2021</p>
                            <p className="text-coolCharcol mt-3 text-xl  leading-30px">An earlier version of this article incorrectly described the American Gas Association. It represents the country's largest gas utilities, not its producers.</p>
                        </div>
                        <div className="flex items-center  py-4  border-b border-darkGray border-t mt-12">
                            <img src="assets/images/article/a5.png" alt="" className="flex-shrink-0" />
                            <div className="ml-2.5">
                                <p className="text-xl leading-5 italic font-semibold">Cole Richard</p>
                                <p className="mt-2 text-base text-coolCharcol leading-5 f-f-ctg2">Cole began contributing to The New York Sun in 2006 and joined the magazine as a staff writer in 2015. He writes about American politics and society.</p>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0">
                            <div className="flex flex-col space-y-5 items-center justify-center ">
                                {data2.map((item, i) => {
                                    return (
                                        <button key={i} className="w-10 h-10 rounded-full bg-gray6 flex flex-col items-center justify-center">
                                            <img alt={i} src={item.icon} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <Comments />
                    </div>
                </div>
            </div>
        </>
    );
}

export default index;
