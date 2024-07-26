import Image from "next/image"
import Link from "next/link"

const MenuList = ({ isOpen, setIsMenuOpen }) => {
    const closeMenu = () => {
        console.log("Closing menu")
        setIsMenuOpen(false)
    }

    return (
        <section
            className={`font-stardom fixed bottom-0 left-0 w-full bg-backgroundColor_pink h-screen transition-transform duration-[1.5s] transform ${
                isOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <ul className="flex flex-col justify-center items-center h-full text-center text-6xl relative z-10">
                <Image src="/images/cloud.svg" width={100} height={100} alt="cloud" />
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/" onClick={closeMenu}>
                        HOME
                    </Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/about" onClick={closeMenu}>
                        ABOUT
                    </Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/projects" onClick={closeMenu}>
                        PROJECTS
                    </Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/study" onClick={closeMenu}>
                        STUDY
                    </Link>
                </li>
                <li className="py-4 px-4 hover:text-silver transition-transform">
                    <Link href="/guestbook" onClick={closeMenu}>
                        GUEST BOOK
                    </Link>
                </li>
                <button
                    className="font-pretendard z-100 text-2xl absolute flex justify-center items-center bg-white text-backgroundColor_pink w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer"
                    onClick={closeMenu}
                >
                    X
                </button>
            </ul>
        </section>
    )
}

export default MenuList
