import React, { useEffect } from "react";
import Article from "./article";
import Subscribe from "../../commons/subscribeWeek/index";
import More from "./more";
import UnlockArticle from "../../commons/unlockArticle/index";

function index() {
    const subscribed = true;
    useEffect(() => {
        if (!subscribed) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            window.scroll(0, 0);
        }
    }, [subscribed]);
    return (
        <>
            <Article />
            <More />
            {subscribed ? <Subscribe /> : <UnlockArticle />}
        </>
    );
}

export default index;
