"use client"
import Link from "next/link"
import HorizontalScroller from "./@components/HorizontalScroller"
import { aboutData } from "../data/aboutData"
import { useState } from "react"
import Image from "next/image"
import MenuButton from "../_components/MenuButton"

const About = () => {
    const [hoveredItem, setHoveredItem] = useState(null)
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

    const handleMouseEnter = (index, e) => {
        setHoveredItem(index)
        updateTooltipPosition(e)
    }

    const handleMouseLeave = () => {
        setHoveredItem(null)
    }

    const handleMouseMove = (e) => {
        updateTooltipPosition(e)
    }

    const updateTooltipPosition = (e) => {
        const tooltipWidth = 300 // 툴팁의 예상 너비
        const padding = 10 // 화면 경계와 툴팁 사이의 여유 공간
        const xPos = Math.min(window.innerWidth - tooltipWidth - padding, Math.max(padding, e.clientX + 10))
        const yPos = Math.min(window.innerHeight - padding, Math.max(padding, e.clientY + 10))

        setTooltipPosition({ x: xPos, y: yPos })
    }

    return (
        <section className="flex flex-col w-screen h-screen font-pretendard">
            {/* 상단에 고정된 HorizontalScroller */}
            <div className="fixed top-0 z-10 w-full">
                <HorizontalScroller />
            </div>

            {/* 섹션의 최소 높이 및 패딩 조절 */}
            <div className="flex items-center justify-center flex-grow mx-40">
                <article className="flex items-start justify-center w-full gap-12 mt-8 md:gap-16 lg:gap-4 md:mt-12 lg:mt-16">
                    <section className="flex-row w-1/3 text-left md:w-1/3 lg:w-1/3">
                        <div className="flex justify-between items-center text-center w-[225px]">
                            <div className="w-[225px] flex justify-between items-center">
                                <h1 className="text-3xl font-black">김정연</h1>
                                <h3 className="text-xl">Kim Jungyeon</h3>
                            </div>
                        </div>

                        <Image
                            src={"/images/about/profile_image.jpg"}
                            width={225}
                            height={300}
                            alt="profile image"
                            className="object-cover mt-4"
                        />
                        <ul className="mt-4 text-xl">
                            <li>+82 010-2982-1241</li>
                            <li>jy.keem2468@gmail.com</li>
                            <li>
                                <Link href="https://github.com/jungyeon-rgb" rel="noopener noreferrer" target="_blank">
                                    https://github.com/jungyeon-rgb
                                </Link>
                            </li>
                            <li>
                                <Link href="https://velog.io/@meek/posts" rel="noopener noreferrer" target="_blank">
                                    https://velog.io/@meek/posts
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className="flex-row items-center justify-center w-1/3 md:ml-20 md:w-2/3 lg:w-2/3">
                        <div>
                            <h1 className="text-3xl font-bold underline">CHARACTER</h1>
                            <p className="text-xl">긍정적인, 끈기있는, 도전적인, 유연한 단단함</p>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-3xl font-bold underline">INTERESTED IN</h1>
                            <div className="text-xl">Travel, Photography, Music, Fashion</div>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-3xl font-bold underline">COMMUNICATION SKILLS</h1>
                            <div className="text-xl">Notion, Figma, Swagger, Trello, Jira</div>
                        </div>
                        <div className="mt-8">
                            <h1 className="mb-2 text-3xl font-bold underline">QR Code</h1>
                            <div className="flex">
                                <div className="mt-4">
                                    <p className="text-xl">GitHub</p>
                                    <Image
                                        src={"/images/GitHub_qr.svg"}
                                        alt="GitHub_qr"
                                        width={100}
                                        height={100}
                                        className="mr-4"
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-xl">Velog</p>
                                    <Image src={"/images/velog_qr.svg"} alt="velog_qr" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-2/3 md:w-3/4 lg:w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto  p-4">
                        <div className="flex items-end justify-start mb-4">
                            <h1 className="text-3xl font-bold underline">SOFTWARES</h1>
                            <span className="flex items-center justify-center ml-4 text-lg">
                                (마우스를 올리시면 관련 설명이 표시됩니다.)
                            </span>
                        </div>
                        <div className="space-y-6">
                            {aboutData.map((software, index) => (
                                <div
                                    key={index}
                                    className="relative pb-4 border-b"
                                    onMouseEnter={(e) => handleMouseEnter(index, e)}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-semibold cursor-pointer">{software.title}</span>
                                        <div className="flex items-center">
                                            <span className="text-sm">{software.gauge}</span>
                                        </div>
                                    </div>
                                    {hoveredItem === index && (
                                        <div
                                            className="fixed z-50 p-4 text-black bg-white rounded shadow-lg"
                                            style={{
                                                left: tooltipPosition.x,
                                                top: tooltipPosition.y,
                                                width: "300px", // 예상 툴팁 너비에 맞춰 수정
                                                maxHeight: "500px", // 툴팁 최대 높이 설정
                                                overflowY: "auto", // 툴팁 내용이 길 경우 스크롤 사용
                                                overflowWrap: "break-word",
                                                whiteSpace: "pre-wrap", // 줄 바꿈을 지원하도록 설정
                                            }}
                                        >
                                            {software.content
                                                .trim()
                                                .split(".")
                                                .map((sentence, i) => (
                                                    <p key={i} className="mb-2 text-sm">
                                                        {sentence.trim()}.
                                                    </p>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
                <div>
                    <MenuButton />
                </div>
            </div>
        </section>
    )
}

export default About
