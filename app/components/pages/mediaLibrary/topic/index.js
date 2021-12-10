import React from "react";
import Navigation from "./navigation";
import VideoList from "./list/index";
function Index() {
    const topics = [
        {
            name: "National",
            topci: "#national",
        },
        {
            name: "Foreign",
            topci: "#foreign",
        },
        {
            name: "Politics",
            topci: "#politics",
        },
        {
            name: "Culture",
            topci: "#culture",
        },
        {
            name: "Economy",
            topci: "#economy",
        },
        {
            name: "Education",
            topci: "#education",
        },
        {
            name: "Justice",
            topci: "#justice",
        },
        {
            name: "Opinion",
            topci: "#opinion ",
        },
    ];
    const data = [
        {
            videoId: "651386804",
            provider: `vimeo`,
            description: `Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry`,
        },
        {
            videoId: "https://www.youtube.com/watch?v=btB__oHQ0sU",
            provider: `youtube`,
            description: `Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry`,
        },
        {
            videoId: "https://www.youtube.com/watch?v=pWGLtjG-F5c",
            provider: `youtube`,
            description: `Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry`,
        },
        {
            videoId: "651386804",
            provider: `vimeo`,
            description: `Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry`,
        },
        {
            videoId: "https://www.youtube.com/watch?v=btB__oHQ0sU",
            provider: `youtube`,
            description: `Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry`,
        },
        {
            videoId: "https://www.youtube.com/watch?v=pWGLtjG-F5c",
            provider: `youtube`,
            description: `Judge Rejects Trump’s Bid to Keep Papers Secret in Jan. 6 Inquiry`,
        },
    ];
    return (
        <div className="mx-auto container px-20 mt-9">
            <div className="flex items-start space-x-8">
                <Navigation topics={topics} />
                <VideoList topic="Most Viewed" data={data} />
            </div>
        </div>
    );
}

export default Index;
