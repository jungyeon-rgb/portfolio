"use client";
import Link from "next/link";
import HorizontalScroller from "./@components/HorizontalScroller";
import { aboutData } from "../data/aboutData";
import { useState } from "react";
import Image from "next/image";
import NameLogo from "../_components/NameLogo";
import MenuButton from "../_components/MenuButton";

const About = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index, e) => {
    setHoveredItem(index);
    updateTooltipPosition(e);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleMouseMove = (e) => {
    updateTooltipPosition(e);
  };

  const updateTooltipPosition = (e) => {
    const tooltipWidth = 300; // 툴팁의 예상 너비
    const padding = 10; // 화면 경계와 툴팁 사이의 여유 공간
    const xPos = Math.min(
      window.innerWidth - tooltipWidth - padding,
      Math.max(padding, e.clientX + 10)
    );
    const yPos = Math.min(
      window.innerHeight - padding,
      Math.max(padding, e.clientY + 10)
    );

    setTooltipPosition({ x: xPos, y: yPos });
  };

  return (
    <section className="font-pretendard">
      <div className="pt-14">
        <HorizontalScroller />
      </div>
      <article className="flex flex-col md:flex-row lg:flex-row lg:px-40 md:px-20 px-4 mt-8 md:mt-12 lg:mt-16 gap-8 items-start">
        <section className="text-left flex flex-col w-full md:w-1/5 lg:w-1/5">
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
            className="mt-4 object-cover"
          />
          <ul className="mt-4">
            <li>+82 010-2982-1241</li>
            <li>jy.keem2468@gmail.com</li>
            <li>
              <Link href="https://github.com/jungyeon-rgb">
                https://github.com/jungyeon-rgb
              </Link>
            </li>
            <li>
              <Link href="https://velog.io/@meek/posts">
                https://velog.io/@meek/posts
              </Link>
            </li>
          </ul>
        </section>
        <section className="w-full md:w-2/5 lg:w-2/5 flex flex-col ml-12">
          <div>
            <h1 className="text-xl underline font-bold">CHARACTER</h1>
            <p>긍정적인, 끈기있는, 도전적인, 유연한 단단함</p>
          </div>
          <div className="mt-6">
            <h1 className="text-xl underline font-bold">INTERESTED IN</h1>
            <div>Travel, Photography, Music, Fashion</div>
          </div>
          <div className="mt-6">
            <h1 className="text-xl underline font-bold">
              COMMUNICATION SKILLS
            </h1>
            <div>Notion, Figma, Swagger, Trello, Jira</div>
          </div>
          <div className="mt-8">
            <h1 className="text-xl underline font-bold mb-2">QR Code</h1>
            <div className="flex">
              <div className="">
                <p className="">GitHub</p>
                <Image
                  src={"/images/GitHub_qr.svg"}
                  alt="GitHub_qr"
                  width={100}
                  height={100}
                  className="mr-4"
                />
              </div>
              <div>
                <p>Velog</p>
                <Image
                  src={"/images/velog_qr.svg"}
                  alt="velog_qr"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full md:w-2/5 lg:w-3/5 h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto">
          <div className="flex">
            <h1 className="text-xl underline font-bold mb-4">SOFTWARES</h1>
            <span className="ml-4">
              (마우스를 올리시면 관련 설명이 표시됩니다.)
            </span>
          </div>
          <div className="space-y-6">
            {aboutData.map((software, index) => (
              <div
                key={index}
                className="relative border-b pb-4"
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg cursor-pointer">
                    {software.title}
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm">{software.gauge}</span>
                  </div>
                </div>
                {hoveredItem === index && (
                  <div
                    className="fixed z-50 p-4 bg-white text-black rounded shadow-lg"
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
                        <p key={i} className="text-sm mb-2">
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
      <MenuButton />
    </section>
  );
};

export default About;
