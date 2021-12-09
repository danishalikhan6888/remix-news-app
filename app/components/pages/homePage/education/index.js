 
import {Link} from "remix";
function index() {
    const data = [
        {
            img: "assets/images/homepage/eu1.png",
            heading: "California Tries to Close the Gap in Math, but Sets Off a Backlash",
            description: "Proposed guidelines in the state would de-emphasize calculus, reject the idea that some children are naturally gifted and build a connection to social justice. Critics say math shouldn’t be political.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/eu2.png",
            heading: "‘I Don’t Want to Die for It’: School Board Members Face Rising Threats",
            description: "Proposed guidelines in the state would de-emphasize calculus, reject the idea that some children are naturally gifted and build a connection to social justice. Critics say math shouldn’t be political.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    return (
        <div className="relative mt-4 border-b border-darkGray  pb-4">
            <Link to="javascript:void(0)">
                <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                    <p>Education</p>
                    
                    <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                    </svg>
                </button>
            </Link>
            <div className="flex mt-4"> 
                <div className="w-2/3  pr-4 border-r border-lightGray">
                    {data.map((item, i) => {
                        return (
                            <div className={`${i >= 1 && "mt-4"} ${i === 0 && "border-b border-lightGray pb-4"}`}>
                                <div className="flex items-start space-x-4">
                                    <div>
                                        <p className="text-xl f-f-cd leading-6">{item.heading}</p>
                                        <p className="mt-2.5 f-f-ctg2 text-gray2 text-sm leading-18px ">{item.description}</p>
                                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                            <p>{item.name}</p>
                                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                    <img className="" alt={i} src={item.img} />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-1/3 ml-4">
                    <img className="w-full" alt="(John Rashford/The Sun)" src="assets/images/homePage/eu3.png" />

                    <div className="mt-4">
                        <p className="text-xl f-f-cdb leading-6">Afghan Pilots Who Escaped Taliban Are Flown Out of Tajikistan</p>
                        <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-2">Economists expect the Labor Department to report that the consumer-price index rose 5.9% last month amid pandemic-related supply shortages and continued strength in consumer demand</p>
                        <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 " />
                            <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
