
import Hero from "./Hero";
import Section from "../../commons/navigation/index";
import Breaking from "./Breaking/index";
import National from "./National/index";
import Foreign from "./Foreign/index";
import Politics from "./politics/index";
import Editorials from "./editorials/index";
import Opinion from "./opinion/index";
import Upcoming from "./upcoming/index";
import Popular from "./popular/index";
import Watch from "./watch/index";
 import Culture from "./culture/index";
import Economy from "./economy/index";
import Education from "./education/index";
import Justice from "./justice/index";
import Spotlight from "./spotlight/index"; 

function index( ) {
    return (
        <>
            <div className="mx-auto container px-20 z-30">

                <Hero />
             <Section   />    
             <div className="flex space-x-8 mt-6">
                    <div className="w-3/4">
                        <Breaking />
                        <National />
                        <Foreign />
                        <Politics />
                    </div>
                    <div className="border-l border-darkGray w-1/4">
                        <Editorials />
                        <div className="w-full pl-4 mt-4">
                            <Upcoming />
                            <Opinion />
                            <Popular />
                            <Watch />
                        </div>
                    </div>
                </div> 
                {/* <div style={{ background: "#E4E4E4", height: "168px", color: "#6B7280" }} className="w-full flex flex-col items-center justify-center text-lg mt-4">
                    Ad Space
                </div> */}
                <Culture />  
              <Economy />
                <Education />
                <Justice />
                <Spotlight />  
            </div>
        </>
    );
}

export default index;
