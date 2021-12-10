import React, { useEffect, useState } from "react";
import Plyr from "plyr";
function Index() {
    const [newPlayer, setPlayer] = useState(null);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        var player = new Plyr(`#player36`, {
            controls: ["play-large", "play", "duration", "fullscreen"],
            ratio: "16:10",
            autoplay: false,
            displayDuration: true,
            currentTime: 0,
        });
        player.on("ready", (event) => {
            let plyr = event.detail.plyr;
            setPlayer(plyr);
            plyr.autoplay = false;
            plyr.muted = false;
            plyr.play();
            
        });
    }, []);

    return (
        <div onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} className="bigVideo relative border-b border-gray2">
            <div style={{ "--plyr-video-controls-background": "linear-gradient(180deg, rgba(0, 0, 0, 0) 17.19%, #000000 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)" }} id={`player36`} data-plyr-provider={`youtube`} data-plyr-embed-id={`https://www.youtube.com/watch?v=btB__oHQ0sU`} />
            <>
                {pause && (
                    <div className="absolute bottom-20 z-40 w-1/2 px-20 ml-183px">
                        <p className="text-sm leading-14px text-white f-f-ctg2">Watch Now</p>
                        <p className="py-4 text-28 leading-8 f-f-i text-white pr-20">Cities have stopped being the engines of growth and opportunity they once were</p>
                        <p className="text-sm leading-18px text-warmGray f-f-ctg2">The pandemic is dealing prodigious blows to cities across the country. But the world can’t hope to thrive again if its cities don’t—they’re the places that have historically supplied the keys for unlocking human potential. Though beset by racism and other injustices, cities not only provided shared, robust public infrastructure like schools, libraries and transit systems, they stirred together vast numbers of people from different cultures and classes. </p>{" "}
                        <div className="mt-4 flex items-center text-white text-xs leading-3 f-f-ctg2">
                            <p>By Cole Richard</p>
                            <div className="h-2.5 w-px bg-lightGray mx-2 "></div>
                            <p>2 hours ago</p>{" "}
                        </div>
                    </div>
                )}
            </>
        </div>
    );
}

export default Index;
