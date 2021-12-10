import React, { useState } from "react";

function index({ item, i }) {
    const [intialComments, setIntialComments] = useState(2);
    const [options, setOptions] = useState(null);
    const [moreOptions, setMoreOptions] = useState(null);
    return (
        <>
            <div id={i} className={` ${i >= 1 && "mt-4"} flex w-full items-start space-x-4 pb-6 border-b border-lightGray`}>
                <img src={item.img} alt="profile pic" className="rounded-full flex-shrink-0 " />
                <div className="w-full">
                    <div className="flex items-center justify-between relative">
                        <div className="flex items-center space-x-2">
                            <p id="author" className="text-lg leading-18px f-f-cdb">
                                {item.name}
                            </p>
                            <div className="text-coolCharcol flex items-center space-x-2 f-f-ctg2 text-xs leading-3">
                                <p className="">{item.location}</p>
                                <div className="h-3 w-px  bg-lightGray" />
                                <p className="">{item.date}</p>
                            </div>
                        </div>
                        <button onClick={() => (options === i ? setOptions(null) : setOptions(i))} className="focus:outline-none">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#1F2937" stroke="#1F2937" strokeMiterlimit={10} />
                                <path d="M19.5 13.5C20.3284 13.5 21 12.8284 21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5Z" fill="#1F2937" stroke="#1F2937" strokeMiterlimit={10} />
                                <path d="M4.5 13.5C5.32843 13.5 6 12.8284 6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5Z" fill="#1F2937" stroke="#1F2937" strokeMiterlimit={10} />
                            </svg>
                        </button>
                        {options === i && (
                            <div className="bg-white w-175px z-20 absolute right-0 shadow rounded border border-coolCharcol top-6">
                                <div className="rounded pl-5 py-3 flex items-center space-x-3 text-red2 text-sm leading-5 w-full hover:bg-gray5 focus:bg-gray5  bg-transparent transition-all duration-150 ease-in-out cursor-pointer">
                                    <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.125 18.625V3.16172C3.12519 3.10705 3.13972 3.05339 3.16714 3.00609C3.19456 2.9588 3.23391 2.91952 3.28125 2.89219C3.58633 2.71328 4.41094 2.375 6.25 2.375C8.75 2.375 11.9141 4.25 13.75 4.25C14.7866 4.24731 15.8122 4.03789 16.7668 3.63398C16.7787 3.62903 16.7916 3.62708 16.8044 3.62833C16.8172 3.62957 16.8296 3.63397 16.8403 3.64112C16.851 3.64827 16.8598 3.65796 16.8658 3.66932C16.8719 3.68069 16.875 3.69337 16.875 3.70625V12.275C16.8749 12.3053 16.866 12.3348 16.8495 12.3601C16.8329 12.3854 16.8093 12.4054 16.7816 12.4176C16.4598 12.5586 15.3254 13 13.75 13C11.875 13 8.75 11.75 6.25 11.75C3.75 11.75 3.125 12.375 3.125 12.375"
                                            stroke="currentColor"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <p>Report</p>
                                </div>
                                <div className="rounded pl-5 py-3 flex items-center space-x-3 text-gray-600 text-sm leading-5 w-full hover:bg-gray5 focus:bg-gray5  bg-transparent transition-all duration-150 ease-in-out cursor-pointer">
                                    <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.375C6.03553 12.375 6.875 11.5355 6.875 10.5C6.875 9.46447 6.03553 8.625 5 8.625C3.96447 8.625 3.125 9.46447 3.125 10.5C3.125 11.5355 3.96447 12.375 5 12.375Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 6.75C16.0355 6.75 16.875 5.91053 16.875 4.875C16.875 3.83947 16.0355 3 15 3C13.9645 3 13.125 3.83947 13.125 4.875C13.125 5.91053 13.9645 6.75 15 6.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 18C16.0355 18 16.875 17.1605 16.875 16.125C16.875 15.0895 16.0355 14.25 15 14.25C13.9645 14.25 13.125 15.0895 13.125 16.125C13.125 17.1605 13.9645 18 15 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.63379 11.4197L13.3658 15.2064" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.3658 5.79468L6.63379 9.5814" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <p>Share</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="text-sm leading-18px text-gray2 mt-2">{item.reply}</p>
                    <div className="my-4 flex items-center space-x-4">
                        <button className="focus:outline-none text-sm leading-14px text-coolCharcol">Reply</button>
                        <div className="flex items-center space-x-1">
                            <div className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-sunGolden text-sm leading-14px transition-all duration-200 ease-in-out">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.83333 9.16658V15.8332C5.83333 16.0543 5.74554 16.2662 5.58926 16.4225C5.43298 16.5788 5.22101 16.6666 5 16.6666H3.33333C3.11232 16.6666 2.90036 16.5788 2.74408 16.4225C2.5878 16.2662 2.5 16.0543 2.5 15.8332V9.99992C2.5 9.7789 2.5878 9.56694 2.74408 9.41066C2.90036 9.25438 3.11232 9.16658 3.33333 9.16658H5.83333ZM5.83333 9.16658C6.71739 9.16658 7.56523 8.81539 8.19036 8.19027C8.81548 7.56515 9.16667 6.71731 9.16667 5.83325V4.99992C9.16667 4.55789 9.34226 4.13397 9.65482 3.82141C9.96738 3.50885 10.3913 3.33325 10.8333 3.33325C11.2754 3.33325 11.6993 3.50885 12.0118 3.82141C12.3244 4.13397 12.5 4.55789 12.5 4.99992V9.16658H15C15.442 9.16658 15.866 9.34218 16.1785 9.65474C16.4911 9.9673 16.6667 10.3912 16.6667 10.8333L15.8333 14.9999C15.7135 15.5111 15.4861 15.9501 15.1855 16.2507C14.8849 16.5513 14.5274 16.6973 14.1667 16.6666H8.33333C7.67029 16.6666 7.03441 16.4032 6.56557 15.9343C6.09673 15.4655 5.83333 14.8296 5.83333 14.1666"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="">{item.likes}</p>
                            </div>
                            <div className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-sunGolden text-sm leading-14px transition-all duration-200 ease-in-out">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.1667 10.8334L14.1667 4.16675C14.1667 3.94574 14.2545 3.73378 14.4107 3.57749C14.567 3.42121 14.779 3.33342 15 3.33342H16.6667C16.8877 3.33342 17.0996 3.42121 17.2559 3.57749C17.4122 3.73378 17.5 3.94574 17.5 4.16675V10.0001C17.5 10.2211 17.4122 10.4331 17.2559 10.5893C17.0996 10.7456 16.8877 10.8334 16.6667 10.8334H14.1667ZM14.1667 10.8334C13.2826 10.8334 12.4348 11.1846 11.8096 11.8097C11.1845 12.4348 10.8333 13.2827 10.8333 14.1667V15.0001C10.8333 15.4421 10.6577 15.866 10.3452 16.1786C10.0326 16.4912 9.60869 16.6667 9.16667 16.6667C8.72464 16.6667 8.30072 16.4912 7.98816 16.1786C7.6756 15.866 7.5 15.4421 7.5 15.0001V10.8334L5 10.8334C4.55797 10.8334 4.13405 10.6578 3.82149 10.3453C3.50893 10.0327 3.33333 9.60878 3.33333 9.16675L4.16667 5.00008C4.28651 4.48886 4.51386 4.04988 4.81446 3.74928C5.11506 3.44868 5.47264 3.30273 5.83333 3.33342L11.6667 3.33342C12.3297 3.33342 12.9656 3.59681 13.4344 4.06565C13.9033 4.53449 14.1667 5.17038 14.1667 5.83342"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <p className="">{item.dislikes}</p>
                            </div>
                        </div>
                    </div>
                    {item.comments.length - intialComments !== 0 && (
                        <>
                            {item.comments.length >= intialComments && (
                                <div onClick={() => setIntialComments(item.comments.length)} className="text-xs leading-3 flex items-center space-x-1 text-sunGolden cursor-pointer">
                                    <>
                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 0.75L7.5 3.75C3.8625 3.75 2.51906 2.695 1 0.749999C1 4.47594 2.23656 8.25 7.5 8.25L7.5 11.25L13 6L7.5 0.75Z" stroke="currentColor" strokeLinejoin="round" />
                                        </svg>

                                        <p>Show {item.comments.length - intialComments} more replies..</p>
                                    </>
                                </div>
                            )}
                        </>
                    )}
                    {item.comments.map((_item, j) => {
                        return (
                            j < intialComments && (
                                <div key={j} id={j} className="flex w-full items-start space-x-4 mt-6">
                                    <img src={_item.img} alt="profile pic" className="rounded-full flex-shrink-0 " />
                                    <div className="w-full">
                                        <div className="flex items-center justify-between relative">
                                            <div className="flex items-center space-x-2">
                                                <p id="auth" className="text-lg leading-18px f-f-cdb">
                                                    {_item.name}
                                                </p>
                                                <div className="text-coolCharcol flex items-center space-x-2 f-f-ctg2 text-xs leading-3">
                                                    <p className="">{_item.location}</p>
                                                    <div className="h-3 w-px  bg-lightGray" />
                                                    <p className="">{_item.date}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => (moreOptions === j ? setMoreOptions(null) : setMoreOptions(j))} className="focus:outline-none">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#1F2937" stroke="#1F2937" strokeMiterlimit={10} />
                                                    <path d="M19.5 13.5C20.3284 13.5 21 12.8284 21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5Z" fill="#1F2937" stroke="#1F2937" strokeMiterlimit={10} />
                                                    <path d="M4.5 13.5C5.32843 13.5 6 12.8284 6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5Z" fill="#1F2937" stroke="#1F2937" strokeMiterlimit={10} />
                                                </svg>
                                            </button>
                                            {moreOptions === j && (
                                                <div className=" bg-white w-175px z-20 absolute right-0 shadow rounded border border-coolCharcol top-6">
                                                    <div className="rounded pl-5 py-3 flex items-center space-x-3 text-red2 text-sm leading-5 w-full hover:bg-gray5 focus:bg-gray5  bg-transparent transition-all duration-150 ease-in-out cursor-pointer">
                                                        <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M3.125 18.625V3.16172C3.12519 3.10705 3.13972 3.05339 3.16714 3.00609C3.19456 2.9588 3.23391 2.91952 3.28125 2.89219C3.58633 2.71328 4.41094 2.375 6.25 2.375C8.75 2.375 11.9141 4.25 13.75 4.25C14.7866 4.24731 15.8122 4.03789 16.7668 3.63398C16.7787 3.62903 16.7916 3.62708 16.8044 3.62833C16.8172 3.62957 16.8296 3.63397 16.8403 3.64112C16.851 3.64827 16.8598 3.65796 16.8658 3.66932C16.8719 3.68069 16.875 3.69337 16.875 3.70625V12.275C16.8749 12.3053 16.866 12.3348 16.8495 12.3601C16.8329 12.3854 16.8093 12.4054 16.7816 12.4176C16.4598 12.5586 15.3254 13 13.75 13C11.875 13 8.75 11.75 6.25 11.75C3.75 11.75 3.125 12.375 3.125 12.375"
                                                                stroke="currentColor"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                        <p>Report</p>
                                                    </div>
                                                    <div className="rounded pl-5 py-3 flex items-center space-x-3 text-gray-600 text-sm leading-5 w-full hover:bg-gray5 focus:bg-gray5  bg-transparent transition-all duration-150 ease-in-out cursor-pointer">
                                                        <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 12.375C6.03553 12.375 6.875 11.5355 6.875 10.5C6.875 9.46447 6.03553 8.625 5 8.625C3.96447 8.625 3.125 9.46447 3.125 10.5C3.125 11.5355 3.96447 12.375 5 12.375Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M15 6.75C16.0355 6.75 16.875 5.91053 16.875 4.875C16.875 3.83947 16.0355 3 15 3C13.9645 3 13.125 3.83947 13.125 4.875C13.125 5.91053 13.9645 6.75 15 6.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M15 18C16.0355 18 16.875 17.1605 16.875 16.125C16.875 15.0895 16.0355 14.25 15 14.25C13.9645 14.25 13.125 15.0895 13.125 16.125C13.125 17.1605 13.9645 18 15 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.63379 11.4197L13.3658 15.2064" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M13.3658 5.79468L6.63379 9.5814" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>

                                                        <p>Share</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-sm leading-18px text-gray2 mt-2">{_item.reply}</p>
                                        <div className="my-4 flex items-center space-x-4">
                                            <button className="focus:outline-none text-sm leading-14px text-coolCharcol">Reply</button>
                                            <div className="flex items-center space-x-1">
                                                <div className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-sunGolden text-sm leading-14px transition-all duration-200 ease-in-out">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5.83333 9.16658V15.8332C5.83333 16.0543 5.74554 16.2662 5.58926 16.4225C5.43298 16.5788 5.22101 16.6666 5 16.6666H3.33333C3.11232 16.6666 2.90036 16.5788 2.74408 16.4225C2.5878 16.2662 2.5 16.0543 2.5 15.8332V9.99992C2.5 9.7789 2.5878 9.56694 2.74408 9.41066C2.90036 9.25438 3.11232 9.16658 3.33333 9.16658H5.83333ZM5.83333 9.16658C6.71739 9.16658 7.56523 8.81539 8.19036 8.19027C8.81548 7.56515 9.16667 6.71731 9.16667 5.83325V4.99992C9.16667 4.55789 9.34226 4.13397 9.65482 3.82141C9.96738 3.50885 10.3913 3.33325 10.8333 3.33325C11.2754 3.33325 11.6993 3.50885 12.0118 3.82141C12.3244 4.13397 12.5 4.55789 12.5 4.99992V9.16658H15C15.442 9.16658 15.866 9.34218 16.1785 9.65474C16.4911 9.9673 16.6667 10.3912 16.6667 10.8333L15.8333 14.9999C15.7135 15.5111 15.4861 15.9501 15.1855 16.2507C14.8849 16.5513 14.5274 16.6973 14.1667 16.6666H8.33333C7.67029 16.6666 7.03441 16.4032 6.56557 15.9343C6.09673 15.4655 5.83333 14.8296 5.83333 14.1666"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <p className="">{_item.likes}</p>
                                                </div>
                                                <div className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-sunGolden text-sm leading-14px transition-all duration-200 ease-in-out">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M14.1667 10.8334L14.1667 4.16675C14.1667 3.94574 14.2545 3.73378 14.4107 3.57749C14.567 3.42121 14.779 3.33342 15 3.33342H16.6667C16.8877 3.33342 17.0996 3.42121 17.2559 3.57749C17.4122 3.73378 17.5 3.94574 17.5 4.16675V10.0001C17.5 10.2211 17.4122 10.4331 17.2559 10.5893C17.0996 10.7456 16.8877 10.8334 16.6667 10.8334H14.1667ZM14.1667 10.8334C13.2826 10.8334 12.4348 11.1846 11.8096 11.8097C11.1845 12.4348 10.8333 13.2827 10.8333 14.1667V15.0001C10.8333 15.4421 10.6577 15.866 10.3452 16.1786C10.0326 16.4912 9.60869 16.6667 9.16667 16.6667C8.72464 16.6667 8.30072 16.4912 7.98816 16.1786C7.6756 15.866 7.5 15.4421 7.5 15.0001V10.8334L5 10.8334C4.55797 10.8334 4.13405 10.6578 3.82149 10.3453C3.50893 10.0327 3.33333 9.60878 3.33333 9.16675L4.16667 5.00008C4.28651 4.48886 4.51386 4.04988 4.81446 3.74928C5.11506 3.44868 5.47264 3.30273 5.83333 3.33342L11.6667 3.33342C12.3297 3.33342 12.9656 3.59681 13.4344 4.06565C13.9033 4.53449 14.1667 5.17038 14.1667 5.83342"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>

                                                    <p className="">{_item.dislikes}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default index;
