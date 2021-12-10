 
import {Link} from "remix";
function index() {
    const data = [
        {
            img: "assets/images/homepage/u1.png",
        },
        {
          img: "assets/images/homepage/u2.png",
        }
    ];
    return (
        <div className="relative">
            <p className="leading-4 text-blue2 f-f-i font-semibold uppercase">Upcoming</p>
            <div className="mt-4 w-full">
                {data.map((item, i) => {
                    return (
                        <Link key={i} to="javascript:void(0)">
                            <img src={item.img} id={i} className={`${i >= 1 && "mt-4"} border-b pb-4 ${i === data.length - 1 ? "border-darkGray" : "border-lightGray"}`}/>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default index;
