 
import ReactPlayer from "react-player";

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
    ];

    return (
        <div className="relative mt-4">
            <p className="leading-4 text-red2 f-f-cdb font-bold uppercase">Watch</p>
            <div className="mt-4 w-full">
                {data.map((item, i) => {
                    return (
                        <div key={i} className={`  ${i >= 1 && "mt-4"}  ${i !== data.length - 1 && "border-b border-lightGray"} cursor-pointer  pb-4 `}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=F16ZS6rM29s" origin='http://localhost:3000'  controls={true} width="327px" height="200px" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default index;
