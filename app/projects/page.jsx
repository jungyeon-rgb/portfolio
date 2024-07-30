"use client"
import { useState, useRef } from "react"
import SwiperCustom from "./components/SwiperCustom"
import MenuList from "../_components/MenuList"
import MenuButton from "../_components/MenuButton"

const Projects = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const swiperRef = useRef()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

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
        <main className="flex flex-col items-center justify-center w-screen h-full font-medium font-pretendard">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/video/background5.mp4"
                loop
                autoPlay
                muted
                aria-hidden="true"
            />
            <h1 className="pt-4 pb-6 text-white text-9xl font-stardom">Projects</h1>
            <MenuButton onClick={toggleMenu} />
            <section className="w-2/3 p-4 mx-auto border-2 border-white border-solid rounded-lg shadow-lg font-pretendard">
                <div className="flex-row m-4">
                    <div className="flex items-center justify-center">
                        <SwiperCustom ref={swiperRef} onNext={nextSlide} onPrevious={previousSlide} />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={previousSlide} className="mx-2 text-white ">
                            이전
                        </button>
                        <button onClick={nextSlide} className="mx-2 text-white ">
                            다음
                        </button>
                    </div>
                </div>
                <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </section>
        </main>
    )
}

export default Projects
