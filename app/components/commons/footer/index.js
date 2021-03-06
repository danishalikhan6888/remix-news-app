




 
import {Link} from "remix";
import { useLocation } from "react-router-dom";  
function Index() {
    const router = useLocation();
    const section = [
        {
            topic: "National",
        },
        {
            topic: "Foreign ",
        },
        {
            topic: "Politics",
        },
        {
            topic: " Culture",
        },
        {
            topic: " Economy",
        },
        {
            topic: " Education",
        },
        {
            topic: " Justice",
        },

        {
            topic: " Opinion",
        },
    ];
    const more = [
        {
            topic: "Tools & Services",
        },
        {
            topic: "Reader Center ",
        },
        {
            topic: " Podcasts",
        },
        {
            topic: "  Wirecutter",
        },
        {
            topic: "  Multimedia",
        },
        {
            topic: "  Cooking",
        },
        {
            topic: " Photography",
        },
        {
            topic: "  Live Events",
        },
    ];

    return (
        <div className="mt-46px border-t border-darkGray py-72px">
        <div className="mx-auto container flex items-center px-10 justify-center">
            <div className="w-7/12 flex flex-col justify-center items-center">
                {router.pathname === "/media" ? <img src="assets/images/homepage/logoFooterWhite.png" alt="footer logo" /> : <img src="assets/images/homepage/logoFooter.png" alt="footer logo" />}
                <div className="flex items-center justify-between mt-16 w-full pb-72px border-b border-darkGray">
                    <div>
                        <p className={`${router.pathname === "/media" ? "text-white" :""} f-f-cdb text-lg leading-18px `}>SECTIONS</p>
                        <div className="grid grid-cols-2 mt-4 gap-x-87px">
                            {section.map((item, i) => {
                                return (
                                    <Link key={i} to="javascript:void(0)">
                                        <p   id={i} className className={`text-lg f-f-ctg2 cursor-pointer  transition-all duration-300 ease-in-out leading-9 ${router.pathname === "/media" ? "text-white hover:text-gray1" :"hover:text-black text-coolCharcol"} `}>
                                            {item.topic}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <p className={`${router.pathname === "/media" ? "text-white" :""} f-f-cdb text-lg leading-18px `}>MORE</p>
                        <div className="grid grid-cols-2 mt-4 gap-x-87px">
                            {more.map((item, i) => {
                                return (
                                    <Link key={i} to="javascript:void(0)">
                                        <p   id={i} className className={`text-lg f-f-ctg2 cursor-pointer  transition-all duration-300 ease-in-out leading-9 ${router.pathname === "/media" ? "text-white hover:text-gray1" :"hover:text-black text-coolCharcol"} `}>
                                            {item.topic}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-10/12 flex flex-col items-center justify-center">
                    <p className={`mt-7 text-sm leading-4 f-f-ctg2 ${router.pathname === "/media" ? "text-white" :"text-coolCharcol"} text-center`}>?? 2021 The New York Sun. All rights reserved.</p>
                    <p className={`mt-4 text-sm leading-4 f-f-ctg2 ${router.pathname === "/media" ? "text-white" :"text-coolCharcol"} text-center`}>Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used.</p>
                    <ul className="flex items-center  space-x-8 mt-8">
                        <Link  to="javascript:void(0)">
                            <li key="facebook" className="text-red2 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0635C22.5 6.26504 17.7984 1.56348 12 1.56348C6.20156 1.56348 1.5 6.26504 1.5 12.0635C1.5 17.3041 5.33906 21.648 10.3594 22.4364V15.0996H7.69266V12.0635H10.3594V9.75019C10.3594 7.1191 11.9273 5.66457 14.3255 5.66457C15.4744 5.66457 16.6763 5.86988 16.6763 5.86988V8.4541H15.3516C14.048 8.4541 13.6402 9.26316 13.6402 10.0947V12.0635H16.552L16.087 15.0996H13.6406V22.4374C18.6609 21.6494 22.5 17.3055 22.5 12.0635Z" fill="currentColor" />
                                </svg>
                            </li>
                        </Link>
                        <Link key="twitter" to="javascript:void(0)">
                            <li className="text-red2 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98323 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.9901 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </li>
                        </Link>
                        <Link key="mail" to="javascript:void(0)">
                            <li className="text-red2 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </li>
                        </Link>
                        <Link key="message" to="javascript:void(0)">
                            <li className="text-red2 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.375 2.25H2.625C2.32663 2.25 2.04048 2.36853 1.8295 2.5795C1.61853 2.79048 1.5 3.07663 1.5 3.375V16.875C1.5 17.1734 1.61853 17.4595 1.8295 17.6705C2.04048 17.8815 2.32663 18 2.625 18H6V21.75L11.5191 18H21.375C21.6734 18 21.9595 17.8815 22.1705 17.6705C22.3815 17.4595 22.5 17.1734 22.5 16.875V3.375C22.5 3.07663 22.3815 2.79048 22.1705 2.5795C21.9595 2.36853 21.6734 2.25 21.375 2.25ZM7.5 11.625C7.20333 11.625 6.91332 11.537 6.66665 11.3722C6.41997 11.2074 6.22771 10.9731 6.11418 10.699C6.00065 10.4249 5.97094 10.1233 6.02882 9.83236C6.0867 9.54139 6.22956 9.27412 6.43934 9.06434C6.64912 8.85456 6.91639 8.7117 7.20736 8.65382C7.49834 8.59594 7.79994 8.62565 8.07403 8.73918C8.34811 8.85271 8.58238 9.04497 8.7472 9.29165C8.91203 9.53832 9 9.82833 9 10.125C9 10.5228 8.84196 10.9044 8.56066 11.1857C8.27936 11.467 7.89782 11.625 7.5 11.625ZM12 11.625C11.7033 11.625 11.4133 11.537 11.1666 11.3722C10.92 11.2074 10.7277 10.9731 10.6142 10.699C10.5006 10.4249 10.4709 10.1233 10.5288 9.83236C10.5867 9.54139 10.7296 9.27412 10.9393 9.06434C11.1491 8.85456 11.4164 8.7117 11.7074 8.65382C11.9983 8.59594 12.2999 8.62565 12.574 8.73918C12.8481 8.85271 13.0824 9.04497 13.2472 9.29165C13.412 9.53832 13.5 9.82833 13.5 10.125C13.5 10.5228 13.342 10.9044 13.0607 11.1857C12.7794 11.467 12.3978 11.625 12 11.625ZM16.5 11.625C16.2033 11.625 15.9133 11.537 15.6666 11.3722C15.42 11.2074 15.2277 10.9731 15.1142 10.699C15.0006 10.4249 14.9709 10.1233 15.0288 9.83236C15.0867 9.54139 15.2296 9.27412 15.4393 9.06434C15.6491 8.85456 15.9164 8.7117 16.2074 8.65382C16.4983 8.59594 16.7999 8.62565 17.074 8.73918C17.3481 8.85271 17.5824 9.04497 17.7472 9.29165C17.912 9.53832 18 9.82833 18 10.125C18 10.5228 17.842 10.9044 17.5607 11.1857C17.2794 11.467 16.8978 11.625 16.5 11.625Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </li>
                        </Link>
                        <Link key="whatsapp" to="javascript:void(0)">
                            <li className="text-red2 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.4405 4.55259C18.4697 3.58137 17.3165 2.81175 16.0471 2.28803C14.7777 1.76432 13.4172 1.49685 12.0441 1.50102C6.28125 1.50102 1.59 6.16884 1.58766 11.9073C1.58511 13.7345 2.06676 15.5298 2.98359 17.1104L1.5 22.501L7.04297 21.054C8.57729 21.8852 10.2948 22.3202 12.0398 22.3196H12.0441C17.8064 22.3196 22.4972 17.6513 22.5 11.9134C22.5035 10.5449 22.2348 9.18936 21.7095 7.92568C21.1843 6.662 20.413 5.5154 19.4405 4.55259ZM12.0441 20.5632H12.0403C10.4847 20.5637 8.95739 20.1474 7.61719 19.3576L7.29984 19.1701L4.01062 20.0288L4.88859 16.8371L4.68187 16.509C3.81206 15.1319 3.35121 13.5361 3.35297 11.9073C3.35297 7.13868 7.25344 3.25884 12.0473 3.25884C14.347 3.25473 16.5542 4.16424 18.1833 5.78733C19.8125 7.41042 20.7302 9.61416 20.7347 11.9138C20.7328 16.6829 16.8342 20.5632 12.0441 20.5632ZM16.8108 14.0856C16.5497 13.9552 15.2639 13.3262 15.0258 13.2395C14.7877 13.1527 14.6119 13.1092 14.438 13.3698C14.2641 13.6304 13.763 14.2135 13.6106 14.3893C13.4583 14.5651 13.3059 14.5843 13.0448 14.454C12.7837 14.3237 11.9414 14.0495 10.9434 13.1635C10.1667 12.474 9.64266 11.6227 9.49031 11.3626C9.33797 11.1024 9.47391 10.9613 9.60469 10.832C9.72234 10.7152 9.86578 10.5282 9.99656 10.3763C10.1273 10.2245 10.1709 10.1157 10.2577 9.94228C10.3444 9.76884 10.3012 9.61696 10.2361 9.48712C10.1709 9.35728 9.64828 8.07712 9.43078 7.55634C9.21844 7.04915 9.00328 7.11806 8.84297 7.11009C8.69062 7.10259 8.51484 7.10071 8.34187 7.10071C8.20965 7.10416 8.07955 7.13482 7.9597 7.19079C7.83985 7.24676 7.73283 7.32684 7.64531 7.42603C7.40578 7.68665 6.73078 8.31665 6.73078 9.5954C6.73078 10.8742 7.66828 12.1117 7.79766 12.2851C7.92703 12.4585 9.63984 15.0849 12.2606 16.2113C12.7473 16.4198 13.2445 16.6025 13.7503 16.7588C14.3761 16.9567 14.9456 16.929 15.3956 16.862C15.8977 16.7874 16.9425 16.2329 17.1595 15.6254C17.3766 15.0179 17.377 14.4976 17.3119 14.3893C17.2467 14.281 17.0723 14.2154 16.8108 14.0856Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Index;

