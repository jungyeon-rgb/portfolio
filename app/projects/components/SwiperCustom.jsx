"use client"
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react"
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

const SwiperCustom = forwardRef((props, ref) => {
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

    const nextSlide = () => {
        goToSlide(currentIndex.current + 1)
    }

    const previousSlide = () => {
        goToSlide(currentIndex.current - 1)
    }

    useImperativeHandle(ref, () => ({
        nextSlide,
        previousSlide,
    }))

    useEffect(() => {
        gsap.set(slideRef.current, { x: 0 })
    }, [])

    return (
        <div className="relative w-screen overflow-hidden">
            <div className="flex" ref={slideRef}>
                {projectList.map((project) => (
                    <div key={project.id} className="flex items-center justify-center flex-shrink-0 w-full">
                        <div className="relative bg-blue-200 w-[500px] h-[600px]">
                            <Image src={project.imageSrc} alt={project.alt} fill="true" objectFit="cover" />
                        </div>
                        <div className="flex items-center justify-center w-[600px] h-full overflow-hidden border-2 text-slate-500 bg-white">
                            <p className="p-2 text-white">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})

SwiperCustom.displayName = "SwiperCustom"

export default SwiperCustom
