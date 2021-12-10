import React, { useEffect } from "react";
import Plyr from "plyr";
function Index({ item, i, data }) {
    useEffect(() => {
        var player = new Plyr(`#player${i}`, {
            controls: ["play", "duration", "fullscreen"],
            ratio: "16:10",
            autoplay: false,
            displayDuration: true,
            currentTime: 0,
        });
        // player.on("ready", (event) => {
        //     let plyr = event.detail.plyr;
        //     setPlayer(plyr);
        //     plyr.autoplay = false;
        //     plyr.muted = false;
        //     plyr.play();
        // });
    }, []);

    return (
        <div key={i} className="relative">
            <div className={`  cursor-pointer `}>
                <div className="md:h-200px w-full" id={`player${i}`} data-plyr-provider={item.provider} data-plyr-embed-id={item.videoId} />
                <p className="mt-3 text-lg text-white f-f-ctg2">{item.description}</p>
            </div>
        </div>
    );
}

export default Index;
