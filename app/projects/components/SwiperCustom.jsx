"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

const projectList = [
    {
        id: 1,
        imageSrc: "/images/linkedout-main.svg",
        alt: "링크드아웃 프로젝트",
        description: "링크드아웃 프로젝트 입니데이데이",
    },
    {
        id: 2,
        imageSrc: "/images/portpolio-main.png",
        alt: "포트폴리오 프로젝트",
        description: "포트폴리오 프로젝트 입니데이데이",
    },
    {
        id: 3,
        imageSrc: "/images/komatzip-main.png",
        alt: "코맛집 프로젝트",
        description: "코맛집 프로젝트 입니데이데이",
    },
    {
        id: 4,
        imageSrc: "/images/basilfarm-main.gif",
        alt: "바질팜 프로젝트",
        description: "바질팜 프로젝트 입니데이데이",
    },
]

export default function GSAPSlider() {
    const slideRef = useRef(null)
    const currentIndex = useRef(0)

    const goToSlide = (index) => {
        const totalSlides = projectList.length
        currentIndex.current = (index + totalSlides) % totalSlides
        gsap.to(slideRef.current, {
            x: -currentIndex.current * 100 + "%",
            duration: 0.5,
            ease: "power2.out",
        })
    }

    const nextSlide = () => goToSlide(currentIndex.current + 1)
    const previousSlide = () => goToSlide(currentIndex.current - 1)

    useEffect(() => {
        gsap.set(slideRef.current, { x: 0 }) // 초기 위치 설정
    }, [])

    return (
        <section className="relative w-full overflow-hidden">
            <div className="flex" ref={slideRef}>
                {projectList.map((project) => (
                    <div key={project.id} className="flex items-center justify-between flex-shrink-0 w-full h-32">
                        <div className="relative w-1/2 h-full">
                            <Image
                                src={project.imageSrc}
                                alt={project.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded"
                            />
                        </div>
                        <div className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-yellow-800 border-2">
                            <p className="p-2 text-white">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={previousSlide}
                className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 top-1/2"
            >
                Previous
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 top-1/2"
            >
                Next
            </button>
        </section>
    )
}
