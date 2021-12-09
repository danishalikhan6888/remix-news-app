 
import {Link} from "remix";
function index() {
    const data = [
        {
            text: "How the pandemic has caused a paradigm shift in how we view dating in the modern day and age",
        },
        {
            text: "Bitcoin cannot replace the banks of America",
        },
        {
            text: "If the Supreme Court Claims Power Over Gun Carry Laws, It Will Be Making a Grave Mistake",
        },
        {
            text: "Biden’s Fed Pick Could Prove His Commitment to Bipartisanship",
        },
    ];
    return (
        <div className="relative">
            <div className="pl-4 w-full">
                <p className="leading-4 text-sunGolden f-f-i font-semibold uppercase">EditorialS</p>
                <div className="mt-4 w-full">
                    {data.map((item, i) => {
                        return (
                            <Link to="javascript:void(0)">
                                <div className={`${i >= 1 && "mt-4"} f-f-cds2 text-xl leading-6 pb-4 ${i !== data.length - 1 && "border-b border-lightGray"}`}>{item.text}</div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="w-px h-4 absolute left-0 -ml-px bg-white" />
            <div className="w-px h-4 absolute left-0 mt-4 -ml-px bg-white" />
            <div className="w-full h-px mt-4 bg-darkGray" />
        </div>
    );
}

export default index;
