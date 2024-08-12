"use client";
import { useState, useRef } from "react";
import SwiperCustom from "../_components/Projects/SwiperCustom";
import MenuList from "../_components/MenuList";
import MenuButton from "../_components/MenuButton";
import projectList from "../data/projectList";

const Projects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(projectList[0].title);
  const [currentTitleId, setCurrentTitleid] = useState(projectList[0].id);
  const swiperRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSlideChange = (index) => {
    setCurrentTitle(projectList[index].title); // 프로젝트 제목 업데이트
    setCurrentTitleid(projectList[index].id);
  };

  return (
    <main className=" flex flex-col justify-center w-screen h-full font-medium font-pretendard">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/video/background5.mp4"
        loop
        autoPlay
        muted
        aria-hidden="true"
      /> */}
      <h1 className="my-6 text-white mx-auto font-stardom text-center">
        <div className="flex">
          <span className="text-4xl mr-4 mt-4">(0{currentTitleId})</span>
          <span className="block text-8xl">Projects</span>
        </div>
        <span className="text-6xl mt-4">: {currentTitle}</span>
      </h1>
      <MenuButton onClick={toggleMenu} />
      {/* <section className="w-full p-4 mx-auto bg-white bg-opacity-70 font-pretendard"> */}
      <section className="w-full p-4 mx-auto font-pretendard">
        <div className="flex-row">
          <div className="flex items-center justify-center text-white">
            <SwiperCustom ref={swiperRef} onSlideChange={handleSlideChange} />
          </div>
          <div className="flex justify-end mx-4 text-white">
            <button
              onClick={() => swiperRef.current.previousSlide()}
              className="mx-2 btn-primary"
            >
              이전
            </button>
            <button
              onClick={() => swiperRef.current.nextSlide()}
              className="mx-2 btn-primary"
            >
              다음
            </button>
          </div>
        </div>
        <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </section>
    </main>
  );
};

export default Projects;
