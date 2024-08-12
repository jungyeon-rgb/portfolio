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
    <div className="relative w-full overflow-hidden mx-40 ">
      <div className="flex" ref={slideRef}>
        {projectList.map((project) => (
          <div
            key={project.id}
            className="flex justify-between items-start flex-shrink-0 w-full h-[550px] mb-12 "
          >
            <div className="relative flex w-3/5 h-full m-auto overflow-hidden items-center justify-center">
              <div className="w-full">
                <Image
                  src={project.imageSrc_1}
                  alt={project.title}
                  width={500}
                  height={300}
                  objectFit="contain"
                  className="rounded-xl mt-16 object-cover"
                />
              </div>
              <div className="w-full flex flex-col justify-between p-4">
                <Image
                  src={project.imageSrc_2}
                  alt={project.title}
                  width={500}
                  height={150}
                  objectFit="cover"
                  className="rounded-xl w-full h-1/2 object-cover mb-4"
                />
                <Image
                  src={project.imageSrc_3}
                  alt={project.title}
                  width={500}
                  height={150}
                  objectFit="cover"
                  className="rounded-xl w-full h-1/2 object-cover"
                />
              </div>
            </div>
            <div className="w-2/5 h-full overflow-y-auto ">
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
