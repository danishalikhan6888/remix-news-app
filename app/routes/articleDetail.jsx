import React from "react";
import ArticleDetailPage from "../components/pages/articleDetailPage/index";
import {  Outlet } from "remix";
function ArticleDetail () {
    return (
        <>
            <ArticleDetailPage />
            <Outlet />
        </>
    );
}

export default ArticleDetail;

