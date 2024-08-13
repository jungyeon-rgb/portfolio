"use client"
import { useState, useRef } from "react"
import SwiperCustom from "../_components/Projects/SwiperCustom"
import MenuList from "../_components/MenuList"
import MenuButton from "../_components/MenuButton"
import projectList from "../data/projectList"

const Projects = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentTitle, setCurrentTitle] = useState(projectList[0].title)
    const [currentTitleId, setCurrentTitleid] = useState(projectList[0].id)
    const swiperRef = useRef()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleSlideChange = (index) => {
        setCurrentTitle(projectList[index].title)
        setCurrentTitleid(projectList[index].id)
    }

    return (
        <main className="flex flex-col justify-center w-screen h-full font-pretendard">
            <h1 className="mx-auto my-6 text-center text-white font-stardom">
                <div className="flex items-end">
                    <span className="my-auto mt-4 mr-4 text-4xl">(0{currentTitleId})</span>
                    <span className="block text-8xl">Projects</span>
                    <span className="ml-2 text-6xl"> : {currentTitle}</span>
                </div>
            </h1>

            <section className="w-full p-4 mx-auto h-1/2 font-pretendard">
                <div className="flex flex-col items-center justify-center">
                    <SwiperCustom ref={swiperRef} onSlideChange={handleSlideChange} />
                    <div className="flex justify-end w-full px-4 mt-4 text-white">
                        <button onClick={() => swiperRef.current.previousSlide()} className="mx-2 btn-primary">
                            이전
                        </button>
                        <button onClick={() => swiperRef.current.nextSlide()} className="mx-2 btn-primary">
                            다음
                        </button>
                    </div>
                </div>
                <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </section>
            <MenuButton onClick={toggleMenu} />
        </main>
    )
}

export default Projects
