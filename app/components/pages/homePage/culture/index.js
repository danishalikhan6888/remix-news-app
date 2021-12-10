
import React from 'react'
import {Link} from "remix";
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { Autoplay, Navigation } from "swiper";
//  const Swiper = React.lazy(() => import('swiper/react'), { ssr: false });
//   const SwiperSlide = React.lazy(() => import('swiper/react'), { ssr: false });
//   const SwiperCore = React.lazy(() => import('swiper'), { ssr: false });
//   const Autoplay = React.lazy(() => import('swiper'), { ssr: false });
//   const Navigation = React.lazy(() => import('swiper'), { ssr: false });
// import Slider from "react-slick";
     SwiperCore.use([Autoplay, Navigation]);

function index() {
    const data = [
        {
            img: "assets/images/homepage/culture1.png",
            alt: "(John Rashford/The Sun)",
            heading: "As the world’s population grows older, here’s how to focus on healthy ageing",
            description: "Interestingly, healthy ageing does not necessarily mean being completely disease-free. Certain health conditions can be controlled in many older adults, which then hardly affects their overall well-being, says the health body. With a significant rise.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/culture2.png",
            alt: "(John Rashford/The Sun)",
            heading: "Reviewed: The Hole at the Center of Lin-Manuel Miranda’s Movie-Musical Adaptation",
            description: "The “Succession” star discusses her chemistry with Kieran Culkin, her life in the theatre, and why bantering with the Roy family really is a bit like doing Shakespeare.",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
        {
            img: "assets/images/homepage/culture3.png",
            alt: "(John Rashford/The Sun)",
            heading: "Tiny Love Stories: ‘With You, I Can Be a New Person’",
            description: "Modern Love in miniature, featuring reader-submitted stories of no more than 100 words.        ",
            name: "By Cole Richard",
            time: "2 hours ago",
        },
    ];
    const slider = [
        {
            img: "assets/images/homepage/s1.png",
            description: "Kendall Jenner has just hit another level on her ascension",
        },
        {
            img: "assets/images/homepage/s2.png",
            description: "The Eight Pieces of Pop Culture That Defined the Trump Era",
        },
        {
            img: "assets/images/homepage/s3.png",
            description: "‘Dune’ Review: A Hero in the Making, on Shifting Sands",
        },
        {
            img: "assets/images/homepage/s4.png",
            description: "Watch Daniel Craig in Action in ‘No Time to Die’ One Last Time",
        },
        {
            img: "assets/images/homepage/s5.png",
            description: "J. Smith-Cameron Knows What You’re Thinking About Gerri",
        },
        {
            img: "assets/images/homepage/s6.png",
            description: "A Middle Eastern Party at Shukette, in Chelsea",
        },
        {
            img: "assets/images/homepage/s3.png",
            description: "‘Dune’ Review: A Hero in the Making, on Shifting Sands",
        },
        {
            img: "assets/images/homepage/s4.png",
            description: "Watch Daniel Craig in Action in ‘No Time to Die’ One Last Time",
        },
        
    ];
    const settings = {  
        dots:false,
        slidesToShow:6,
        slidesToScroll:1,
        // autoplay:true,
        // autoplaySpeed:3000,
        infinite: true,
        centerMode:true,
        centerPadding:'50px',
        draggable:true,
       responsive: [
        {
            breakpoint: 1450,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3, 
             
            }
          }, 
        {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3, 
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="relative mt-4">
        <Link to="javascript:void(0)">
            <button className="flex items-center space-x-2 focus:outline-none uppercase text-sunRed f-f-s leading-4 text-lg font-semibold">
                <p>cULTURE</p>
                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.689471 10.5001L5.18947 6.00013L0.68947 1.50013L1.75013 0.439471L7.31079 6.00013L1.75013 11.5608L0.689471 10.5001Z" fill="currentColor" />
                </svg>
            </button>
        </Link>
        <div className="mt-4 w-full grid xl:grid-cols-3 gap-4">
            {data.map((item, i) => {
                return (
                    <Link to="javascript:void(0)">
                        <div id={i} className={`cursor-pointer   ${i === 1 && "border-r border-l px-4 border-lightGray"} `}>
                            <div className="w-full h-64 relative">
                                <img className="absolute inset-0 w-full h-full" alt={item.alt} src={item.img} />
                                <p className="absolute -bottom-4 left-0  text-xs leading-3 text-gray3">{item.alt}</p>
                            </div>
                            <div className="mt-7">
                                <p className="text-xl f-f-cdb leading-6">{item.heading}</p>
                                <p className="mt-3 f-f-ctg2 text-gray2 text-sm leading-18px pr-12">{item.description}</p>
                                <div className="mt-3 flex items-center text-coolCharcol text-xs leading-3 f-f-ctg2">
                                    <p>{item.name}</p>
                                    <div className="h-2.5 w-px bg-lightGray mx-2 " />
                                    <p>{item.time}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
        <div className="py-4 border-t border-b border-darkGray mt-4 w-full relative">
            <Swiper
                navigation={
                    (true,
                    {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    })
                }
                slidesPerView={6}
                spaceBetween={30}
                infinite={true}
                loop={true}
                className="mySwiper"
            >
                {slider.map((item, i) => {
                    return (
                        <SwiperSlide>
                            <div id={i} className="">
                                <img src={item.img} alt={i} />
                                <p className="mt-3 text-lg f-f-cdb leading-6">{item.description}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="mask-right h-145px absolute right-0  z-10 w-200px"> </div>
            <div className="mask-left h-145px absolute  z-10 w-200px"> </div>

            <button className="flex flex-col items-center justify-center swiper-button-next z-20 rounded-full border border-gray4" style={{ background: `#F9F9F5` }}>
                <img src="assets/images/homepage/next.svg" alt="next button" />
            </button>
            <button className="flex flex-col items-center justify-center swiper-button-prev z-20 rounded-full border border-gray4" style={{ background: `#F9F9F5` }}>
                <img src="assets/images/homepage/prev.svg" alt="prev button" />
            </button>
        </div>
    </div>
    );
}

export default index;




 {/* <Slider    {...settings}>
            {slider.map((item, i) => {
                        return ( 
                                <div key={i} id={i} className="">
                                    <img src={item.img} alt={i} />
                                    <p className="mt-3 text-lg f-f-cdb leading-6">{item.description}</p>
                                </div> 
                        );
                    })} 
        </Slider> */}