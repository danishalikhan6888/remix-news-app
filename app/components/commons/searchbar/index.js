import React ,{ useContext} from "react"; 
import {Context}  from "../../../store/store";
function Index( ) {
  const {  dispatch } = useContext(Context); 
    const data = [
        {
            img: "assets/images/homepage/n1.png",
            heading: "Tens of thousands die each year in the U.S., and no one claims their bodies",
        },
        {
            img: "assets/images/homepage/n2.png",
            heading: "Senate Set to Cut Provisions in House Democrats’ $2 Trillion Plan",
        },
        {
            img: "assets/images/homepage/n2.png",
            heading: "Fed Says U.S. Public Health Among Biggest Near-Term Risks to Financial System",
        },
        {
            img: "assets/images/homepage/n1.png",
            heading: "Jobless Claims Fall to Pandemic Low, Continuing Downward Trend",
        },
    ];
    const handleSearch = () =>{
      dispatch({type:"SWITCH_SEARCHBAR"})
    }
    return (
        <div className="w-full h-full inset-0 z-60 fixed bg-gray5 pt-72px">
            <div className="mx-auto container">
                <div className="px-20 flex items-start">
                    <div className="w-full pr-184px">
                        <div className="w-full flex items-center">
                            <div className={` rounded w-full bg-headerGray pl-4 py-4 flex items-center border border-gray4`}>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.125 16.7188L13.2781 11.8711C14.0592 10.7977 14.4794 9.50407 14.4781 8.17656C14.4781 4.70195 11.6512 1.875 8.17656 1.875C4.70195 1.875 1.875 4.70195 1.875 8.17656C1.875 11.6512 4.70195 14.4781 8.17656 14.4781C9.50407 14.4794 10.7977 14.0592 11.8711 13.2781L16.7188 18.125L18.125 16.7188ZM8.17656 12.4879C7.32375 12.488 6.49007 12.2351 5.78095 11.7614C5.07183 11.2877 4.51913 10.6143 4.19274 9.82638C3.86635 9.0385 3.78093 8.17152 3.94728 7.33509C4.11364 6.49866 4.5243 5.73035 5.12733 5.12733C5.73035 4.5243 6.49866 4.11364 7.33509 3.94728C8.17152 3.78093 9.0385 3.86635 9.82638 4.19274C10.6143 4.51913 11.2877 5.07183 11.7614 5.78095C12.2351 6.49007 12.488 7.32375 12.4879 8.17656C12.4865 9.31959 12.0319 10.4154 11.2236 11.2236C10.4154 12.0319 9.31959 12.4865 8.17656 12.4879Z"
                                        fill="#262633"
                                    />
                                </svg>

                                <input className="bg-transparent focus:outline-none ml-3  text-xl  leading-5 text-coolCharcol placeholder-coolCharcol w-full" placeholder="Search" aria-label="search" />
                            </div>
                            <button className="focus:outline-none bg-sunGolden  text-xl leading-5 text-white font-semibold py-4 px-8 rounded shadow-shadowBtn ml-4 -mt-1 hover:shadow-shadowBtn3 transition-all duration-150 ease-in-out">Search</button>
                        </div>
                        <div className="mt-72px">
                            <p className="text-red2 text-sm leading-14px  f-f-cds uppercase">BREAKING </p>
                            <div className="mt-4 grid grid-cols-4 gap-8 ">
                                {data.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <img alt={i} className="" src={item.img} />
                                            <p className="text-xl f-f-cds font-semibold leading-6 mt-4">{item.heading}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-72px">
                            <p className="text-red2 text-sm leading-14px  f-f-cds uppercase">POPULAR </p>
                            <div className="mt-4 grid grid-cols-4 gap-8 ">
                                {data.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <img alt={i} className="" src={item.img} />
                                            <p className="text-xl f-f-cds font-semibold leading-6 mt-4">{item.heading}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleSearch()} className="focus:outline-none">
                        <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5 13.6397L34.3603 10.5L24 20.8603L13.6397 10.5L10.5 13.6397L20.8603 24L10.5 34.3603L13.6397 37.5L24 27.1397L34.3603 37.5L37.5 34.3603L27.1397 24L37.5 13.6397Z" fill="#262633" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Index;
