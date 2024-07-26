"use client" // 클라이언트 컴포넌트로 설정

import { useRef } from "react"
import SwiperCustom from "./components/SwiperCustom"

const Projects = () => {
    const swiperRef = useRef()

    const nextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.nextSlide()
        }
    }

    const previousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.previousSlide()
        }
    }

    return (
        <section className="flex flex-col items-center justify-center text-center bg-backgroundColor_pink">
            <p className="my-10 font-black bg-blue-200 rounded-full text-8xl text-slate-500 font-stardom">projects </p>
            <div className="m-10">
                <SwiperCustom ref={swiperRef} onNext={nextSlide} onPrevious={previousSlide} />
            </div>
            <div className="absolute flex flex-row space-y-2 bottom-5 right-5">
                <button onClick={previousSlide} className="mx-2 text-black bg-[#E4D0D9] rounded-full">
                    Previous
                </button>
                <button onClick={nextSlide} className="mx-2 text-black bg-[#E4D0D9] rounded-full">
                    Next
                </button>
            </div>
        </section>
    )
}

export default Projects
