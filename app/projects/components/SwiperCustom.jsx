"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination } from "swiper/modules"
import Image from "next/image"

export default function SwiperCustom() {
    return (
        <div className="w-full h-[1500px] flex justify-center p-20">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={false}
                modules={[Pagination]}
                className="swiper font-stardom text-2xl"
            >
                <SwiperSlide className="swiper-slide flex-row">
                    <p className="text-6xl">푸로젝투 입니댱</p>
                    <Image
                        src="/images/komatzip-main.png"
                        fill={true}
                        alt="test_image
                    "
                    />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}
