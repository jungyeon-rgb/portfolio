import Image from "next/image"
import Link from "next/link"

const MenuList = ({ isOpen, setIsMenuOpen }) => {
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <section
            className={`font-stardom fixed bottom-0 left-0 w-full h-screen bg-testColor text-white transition-transform duration-[1.5s] transform ${
                isOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <button
                className="font-pretendard text-2xl absolute flex justify-center items-center bg-white text-payne_gray w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={closeMenu}
            >
                X
            </button>
            <ul className="flex flex-col justify-center items-center h-full text-center text-5xl">
                <Image src="/images/cloud.svg" width={100} height={100} alt="cloud" />
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/about">About</Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/study">Study</Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/guestbook">Guest Book</Link>
                </li>
            </ul>
        </section>
    )
}

export default MenuList
