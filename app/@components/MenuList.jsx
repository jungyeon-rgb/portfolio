import Image from "next/image"
import Link from "next/link"

const MenuList = ({ isOpen, setIsMenuOpen }) => {
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <section
            className={`font-stardom fixed bottom-0 left-0 w-full bg-backgroundColor_pink bg-opacity-90 h-screen transition-transform duration-[1.5s] transform ${
                isOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <button
                className="font-pretendard z-10 text-2xl absolute flex justify-center items-center bg-white text-payne_gray w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={closeMenu}
            >
                X
            </button>
            <ul className="flex flex-col justify-center items-center h-full text-center text-5xl relative z-10">
                <Image src="/images/cloud.svg" width={100} height={100} alt="cloud" />
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/about">ABOUT</Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/study">STUDY</Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/guestbook">GUEST BOOK</Link>
                </li>
            </ul>
        </section>
    )
}

export default MenuList
