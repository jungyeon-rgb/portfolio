import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MenuList = ({ isOpen, setIsMenuOpen }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(closeButtonRef.current, {
        rotation: 360,
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(closeButtonRef.current, {
        rotation: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  const closeMenu = () => {
    gsap.to(closeButtonRef.current, {
      rotation: -360,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => setIsMenuOpen(false),
    });
  };

  return (
    <section
      className={`font-stardom fixed top-0 left-0 w-full h-screen bg-[#C0A8BF] z-50 transition-transform duration-[1.5s] transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ul className="relative z-10 flex flex-col items-center justify-center h-full text-6xl text-center">
        <Image src="/images/cloud.svg" width={100} height={100} alt="cloud" />
        {[
          { href: "/", label: "HOME" },
          { href: "/about", label: "ABOUT" },
          { href: "/projects", label: "PROJECTS" },
          { href: "/study", label: "STUDY" },
          { href: "/guestbook", label: "GUEST BOOK" },
        ].map((item, index) => (
          <li key={index} className="px-4 py-4 transition-all ">
            <Link href={item.href} onClick={closeMenu}>
              <p className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </p>
            </Link>
          </li>
        ))}
        <button
          ref={closeButtonRef}
          className="font-pretendard z-20 text-2xl absolute flex justify-center items-center bg-white text-[#C0A8BF] w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={closeMenu}
        >
          X
        </button>
      </ul>
    </section>
  );
};

export default MenuList;
