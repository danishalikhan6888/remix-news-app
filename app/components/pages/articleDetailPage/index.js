import React from "react";
import HeroDetail from "./heroDetail";
import Upcoming from "../homePage/upcoming";
import Popular from "../homePage/popular";
import Section from "../../commons/navigation"
function index() {
    return (
        <>
            <div className="mx-auto container px-20 z-30">
                <h1 className="text-4xl leading-9 f-f-cdbb py-6 text-center">National</h1>
                <Section />
                <div className="flex space-x-8 mt-6">
                    <div className="w-3/4">
                        <HeroDetail />
                    </div>
                    <div className="border-l border-darkGray w-1/4 pl-4">
                        <Upcoming />
                        <Popular />
                    </div>
                </div>
            </div>
        </>
    );
}

export default index;
