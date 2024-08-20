"use client";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import Image from "next/image";
import ProjectDetails from "./ProjectDetail";
import projectList from "@/app/data/projectList";

const SwiperCustom = forwardRef((props, ref) => {
  const slideRef = useRef(null);
  const currentIndex = useRef(0);

  const goToSlide = (index) => {
    const totalSlides = projectList.length;
    currentIndex.current = (index + totalSlides) % totalSlides;
    props.onSlideChange(currentIndex.current); // 슬라이드 변경 시 현재 인덱스 전달
    gsap.to(slideRef.current, {
      x: -currentIndex.current * 100 + "%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const nextSlide = () => {
    goToSlide(currentIndex.current + 1);
  };

  const previousSlide = () => {
    goToSlide(currentIndex.current - 1);
  };

  useImperativeHandle(ref, () => ({
    nextSlide,
    previousSlide,
  }));

  useEffect(() => {
    gsap.set(slideRef.current, { x: 0 });
  }, []);

  return (
    <div className="w-full max-w-screen-xl overflow-hidden h-[calc(100vh-300px)]">
      <div className="flex" ref={slideRef} style={{ height: "100%" }}>
        {projectList.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between flex-shrink-0 w-full h-full mb-12"
          >
            <div className="flex items-center justify-center w-3/5 h-full m-auto overflow-hidden">
              <div className="w-full">
                <Image
                  src={project.imageSrc_1}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-between w-full p-4">
                <div className="w-full mb-4">
                  <Image
                    src={project.imageSrc_2}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="object-cover w-full rounded-xl"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src={project.imageSrc_3}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="object-cover w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-2/5 h-full p-4 overflow-y-auto">
              <ProjectDetails project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

SwiperCustom.displayName = "SwiperCustom";

export default SwiperCustom;
