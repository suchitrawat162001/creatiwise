"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { useRef } from "react"
import Image from "next/image"
import testimonalimg from "../public/what they say.png"


import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function TestimonialsSwiperSection() {
  const swiperRef = useRef<any>(null)

  const testimonials = [
    {
      id: 1,
      name: "Floyd Miles",
      company: "eBay",
      avatar: testimonalimg,
      text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Google",
      avatar: testimonalimg,
      text: "The design process was incredibly thorough and professional. Every detail was carefully considered, resulting in a product that exceeded our expectations and delighted our users.",
    },
    {
      id: 3,
      name: "Michael Chen",
      company: "Microsoft",
      avatar: testimonalimg,
      text: "Working with this designer was a game-changer for our product. The user experience improvements led to a 40% increase in user engagement and significantly better conversion rates.",
    },
  ]

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 flex-shrink-0"
          >
            <path
              d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z"
              fill="#CBCBCB"
            />
          </svg>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-2 sm:ml-3">What they say</h2>
        </div>


        <div className="relative">
          <Swiper
            ref={swiperRef}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            // pagination={{
            //   clickable: true,
            //   bulletClass: "swiper-pagination-bullet testimonial-bullet",
            //   bulletActiveClass: "swiper-pagination-bullet-active testimonial-bullet-active",
            //   renderBullet: (index, className) => `<span class="${className}"></span>`,
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
            breakpoints={{
              640: {
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[300px] sm:min-h-[250px]">

                  <div className="flex items-start  lg:flex-col lg:w-1/2 xl:w-1/2">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mr-4 lg:mr-0 lg:mb-4 flex-shrink-0">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="lg:text-center ">
                      <h3 className="text-base sm:text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-start text-sm sm:text-base">{testimonial.company}</p>
                    </div>
                  </div>


                  <div className="flex-1 relative lg:w-2/3 xl:w-3/4">

                    <svg
                      className="absolute -top-4 sm:-top-6 lg:-top-3 left-0 w-16 h-14 sm:w-20 sm:h-16 lg:w-28 lg:h-24 opacity-50"
                      viewBox="0 0 113 97"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M53.6465 90.8538L5.64648 90.8538L5.64648 49.7765C5.64648 31.4066 15.105 18.3095 34.0222 10.4852C37.7349 8.9544 41.978 7.50862 46.7515 6.14788L53.5139 19.9253C42.641 23.5823 36.0553 28.3024 33.757 34.0855C32.6962 36.6369 32.1658 39.6985 32.1658 43.2705L53.6465 43.2705L53.6465 90.8538Z"
                        fill="#CBCBCB"
                        fillOpacity="0.48"
                      />
                      <path
                        d="M107.293 90.8538L59.293 90.8538L59.293 49.7765C59.293 31.4066 68.7515 18.3095 87.6687 10.4852C91.3814 8.9544 95.6245 7.50862 100.398 6.14788L107.16 19.9253C96.2874 23.5823 89.7018 28.3024 87.4035 34.0855C86.3427 36.6369 85.8123 39.6985 85.8123 43.2705L107.293 43.2705L107.293 90.8538Z"
                        fill="#CBCBCB"
                        fillOpacity="0.48"
                      />
                    </svg>
                    <div className="flex-1/2">
                      <blockquote className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 pt-4 sm:pt-6 lg:pt-8">
                        {testimonial.text}
                      </blockquote>

                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8 lg:mt-10">
                        <button
                          onClick={handlePrevSlide}
                          className="bg-white hover:bg-gray-100 transition-colors rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center group"
                          aria-label="Previous testimonial"
                        >
                          <svg
                            width="12"
                            height="9"
                            viewBox="0 0 15 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:w-[15px] sm:h-[11px] group-hover:scale-110 transition-transform"
                          >
                            <path d="M14.5 5.5H2M2 5.5L6 9.5M2 5.5L6 1.5" stroke="#010208" strokeWidth="1.5" />
                          </svg>
                        </button>

                        <button
                          onClick={handleNextSlide}
                          className="bg-white hover:bg-gray-100 transition-colors rounded-full h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center group"
                          aria-label="Next testimonial"
                        >
                          <svg
                            width="12"
                            height="9"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:w-[14px] sm:h-[11px] group-hover:scale-110 transition-transform"
                          >
                            <path
                              d="M0.000488281 5.5L12.5005 5.5M12.5005 5.5L8.50049 1.5M12.5005 5.5L8.50049 9.5"
                              stroke="#010208"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 40px;
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
          left: 0;
          width: auto;
          text-align: left;
        }
        
        .testimonial-bullet {
          width: 6px !important;
          height: 6px !important;
          background: #6b7280 !important;
          opacity: 1 !important;
          margin: 0 3px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer;
        }
        
        .testimonial-bullet-active {
          background: #ffffff !important;
          transform: scale(1.3);
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
        
        .swiper {
          // overflow: visible;
          position: relative; 
        }
        
        @media (min-width: 640px) {
          .testimonials-swiper {
            padding-bottom: 50px;
          }
          
          .testimonial-bullet {
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px !important;
          }
          
          .testimonial-bullet-active {
            transform: scale(1.2);
          }
        }
        
        @media (min-width: 1024px) {
          .testimonials-swiper {
            padding-bottom: 60px;
          }
        }
      `}</style>
    </section>
  )
}
